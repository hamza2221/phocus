<?php


namespace App\Repositories\Concrete;
use App\Repositories\Abstracts\IVersionsRepository;
use Illuminate\Http\Request;
use App\Models\Version;
use App\Models\VersionAssociation;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Collection;
use XMLWriter;
use Log;
use Illuminate\Pagination\Paginator;
use App\Constants\Roles;
use Illuminate\Support\Facades\Input;
use Carbon\Carbon;
use DB;

class VersionsRepository implements IVersionsRepository {
	/*	
		Export Data Functions start
		Writen By: 	Shoaib Rehan
	*/
	
	public function exportData(){
		switch($_POST['export_to']){
			case 'csv':
				return $this->exportCSV();
				break;
			
			case 'json':
				return $this->exportJSON();
				break;
			  
			case 'xml':
				return $this->exportXML();
				break;
		}
	}
	
	public function exportCSV(){

		$response = new StreamedResponse(function(){
			$rows = $this->getExportData();
			
            // Open output stream
            $handle = fopen('php://output', 'w');
			
            // Get all users
			foreach ($rows as $row) {
				
				if($_POST['encoding_to'] != 'UTF-8'){
				  
				  foreach($row as $key => $val):
					  $row[$key] = chr(255) . chr(254) /* BOM */ . mb_convert_encoding($val, $_POST['encoding_to']);
				  endforeach;
				  
				}
				
				fputcsv($handle, $row, $_POST['col_sep']);
			}

			// Close the output stream
            fclose($handle);
        }, 200, [
                'Content-Type' => 'text/csv',
                'Content-Disposition' => 'attachment; filename="paper_trail-version_'.date('Y-m-d-H-i-s').'.csv"',
            ]);

        return $response;
	}
	
	public function exportJSON(){
		//echo "<pre>"; print_r($this->getExportData()); echo "</pre>"; die();
		$data = json_encode($this->getExportData());
		header('Content-disposition: attachment; filename=paper_trail-version_'.date('Y-m-d-H-i-s').'.json');
		header('Content-type: application/json');
		return $data;
	}
	
	public function exportXML(){
		$data = $this->getExportData();
		
		$xml = new XMLWriter();
		$xml->openMemory();
		$xml->startDocument('1.0', $_POST['encoding_to']); //'UTF-8'
		$xml->startElement('paper-trail-versions');
		$xml->writeAttribute('type', 'array');
		
		foreach($data as $row){
			$xml->text("\n\t");	
			$xml->startElement('paper-trail-version');
			foreach($row as $key => $val){
				$xml->text("\n\t\t");
				$xml->startElement(str_replace('_', '-', $key));
				
				if(is_array($val)):
				
					foreach($val as $subkey => $subval):
						$xml->text("\n\t\t\t");
						$xml->startElement(str_replace('_', '-', $subkey));
						$xml->text($subval);
						$xml->endElement();
					endforeach;
					
					$xml->text("\n\t\t");
					
				else:
					
					$xml->text($val);
					
				endif;
				
				$xml->endElement();
				
			}
			$xml->text("\n\t");
			$xml->endElement();
		}
		
		$xml->text("\n");
		$xml->endElement();
		$xml->endDocument();
		$xmlDoc = $xml->outputMemory();

		header('Content-type: text/xml');
		header('Content-Disposition: attachment; filename="paper_trail-version_'.date('Y-m-d-H-i-s').'.xml"');
		return $xmlDoc;
	}
	
	public function getExportData(){
		$data = $headings = array();
		
		// Create CSV Header Start
		if($_POST['export_to'] == 'csv' && ! array_key_exists('skip_header', $_POST)){
			$csvhead = array();
			if(array_key_exists('versions', $_POST['schema'])){
				foreach($_POST['schema']['versions'] as $field){
					$csvhead[] = (string) ucfirst(str_replace('_', ' ', $field));
				}
			}
			
			if(array_key_exists('version_associations', $_POST['schema'])){
				foreach($_POST['schema']['version_associations'] as $field){
					$csvhead[] = (string) ucfirst(str_replace('_', ' ', $field) . ' [Version associations]');
				}
			}
			$headings[] = $csvhead;
			$data[] = call_user_func_array('array_merge', $headings);
		}
		// Create CSV Header End
		
		if($_POST['selectedRecords'][0]==''){
			$rows = Version::all();
		}else{
			$rows = Version::find($_POST['selectedRecords']);
		}
		
		foreach($rows as $row){
			$dataRow = array();
			
			if(array_key_exists('versions', $_POST['schema'])){
				
				foreach($_POST['schema']['versions'] as $field){
					
					$val = (empty($row->$field) || $row->$field=='0000-00-00 00:00:00')? '-' : (string)$row->$field;
					
					if($_POST['export_to'] == 'csv'):
						$dataRow[] = $val;
					else:
					  	$dataRow[$field] = $val;
					endif;
				}
				
			}
			
			
			if(array_key_exists('version_associations', $_POST['schema'])){
				foreach($_POST['schema']['version_associations'] as $field){
					
					if($_POST['export_to'] == 'csv'):
						$dataRow[] = ($row->versionAssociation == false || empty($row->versionAssociation->$field))? '-':(string)$row->versionAssociation->$field;
					else:
						$arraykey = ($field == 'id')? 'version_association_id':$field;
					  	$dataRow['version-associations'][$arraykey] = ($row->versionAssociation == false || empty($row->versionAssociation->$field))? '':(string)$row->versionAssociation->$field;
					endif;
				}
				
			}
			
			
			$data[] = $dataRow;
		}
		
		return $data;
	}
	
	/*	Export Data Functions End	*/
	public function versionCreateEvent_Tagging($object_changes_json){
		$version = new Version();
		
		$objChange = json_decode($object_changes_json);
		
		$version->item_type = 'tagging';
		$version->item_id = $objChange->provider_id;
		$version->event = 'create';
		$version->object_changes = $object_changes_json;
		
		if($version->save()){
			return $version->id;
		}else return -1;
	}
	
	public function AddOrUpdateVersion(Request $request){
		Log::info('request: '.$request);
		$version=new Version();
	 	if($request->id>0){
	 		$version=Version::find($request->id);
	 	}
	 	$version->item_type=$request->item_type;
	 	$version->item_id=$request->item_id;
	 	$version->event=$request->event;
	 	$version->whodunnit=$request->whodunnit;
	 	$version->object=$request->object;
	 	$version->object_changes=$request->object_changes;
		$version->transaction_id=$request->transaction_id;
	 	if($version->save()){
			return $version->id;
		}else return -1;
	}
	
	public function getVersionByID($ID){
		$version= Version::find($ID);
	   	return $version;
	}

	public function DeleteVersionByID($ID){
		Version::where('id',$ID)->delete();
	}

	public function getFilteredVersions($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination,$setNo){
		$query=DB::table('versions');
		$query->where(function($q) use ($search_term){
			$q->where("versions.id","LIKE","%$search_term%");
			$q->orWhere("event","LIKE","%$search_term%");
			$q->orWhere("whodunnit","LIKE","%$search_term%");
			$q->orWhere("object","LIKE","%$search_term%");
			$q->orWhere("versions.created_at","LIKE","%$search_term%");
			$q->orWhere("object_changes","LIKE","%$search_term%");
			$q->orWhere("transaction_id","LIKE","%$search_term%");
		});
		
		if( !empty( $filters ) )
		{
			$query->where(function($q) use ($search_term,$filters){
		    foreach ($filters as  $filter) {
		    	$search_term=$filter['query'];
		    	switch ($filter["operator"]) {
		    		case 'like':
		    			$q->where($filter["filter"],"LIKE","%$search_term%");
		    			break;
		    		case 'is':
		    			$q->where($filter["filter"],"=","$search_term");
		    			break;
		    		case 'starts_with':
		    			$q->where($filter["filter"],"LIKE","$search_term%");
		    			break;
		    		case 'ends_with':
		    			$q->where($filter["filter"],"LIKE","%$search_term");
		    			break;
		    		case '_not_null':
		    			$q->whereNotNull($filter["filter"]);
		    			break;
		    		case '_null':
		    			$q->whereNull($filter["filter"]);
		    			break;
		    		default:
		    			
		    			break;
		    	}
		    }
		});
		}
		if($setNo==0)
			$query->select('versions.id','item_type','item_id','event','whodunnit','object','object_changes','created_at');
		else{
			$query->leftJoin('version_associations','versions.id','=','version_associations.version_id')
			->where([
						['versions.object_changes','<>',''],
						['versions.object_changes','<>','[]'],
					]);
			$query->select('versions.id as id','object_changes','transaction_id','item_type','item_id','version_associations.id as vid');
		}

		$query->orderBy($orderBy,$sortOrder);
		$currentPage=$pageNumber;
		Paginator::currentPageResolver(function () use ($currentPage) {
        	return $currentPage;
    	});
		
		$versions= ($pagination==1)? $query->paginate(20):$query->get();
		Log::info('$versions: '.print_r($versions, true));
		return $versions;
	}

   public function getVersionsByID($ids){
   		return Version::whereIn('id', $ids)->get();
   }

   public function deleteVersionsByID($ids){
   	Version::whereIn('id',$ids)->delete();
   }
   
   public function versionCreateEvent($object_changes_json){
		$version = new Version();
		
		$objChange = json_decode($object_changes_json);
		
		$version->item_type = $objChange->type;
		$version->item_id = $objChange->id;
		$version->event = 'create';
		$version->object_changes = $object_changes_json;
		$version->save();
		$version->transaction_id = $version->id;
		$version->save();
		//provider
	}
	
   public function versionUpdateEvent($object_json, $object_chages_json){
		
		$version = new Version();
		
		$objChange = json_decode($object_json);
		
		$version->item_type = $objChange->type;
		$version->item_id = $objChange->id;
		$version->event = 'update';
		$version->object = $object_json;
		$version->object_changes = $object_chages_json;
		$version->save();
		
		$version->transaction_id = $version->id;
		return $version->save();
	}
	
	 public function versionDestroyEvent($object_json){
		
		$version = new Version();
		
		$objChange = json_decode($object_json);
		
		$version->item_type = $objChange->type;
		$version->item_id = $objChange->id;
		$version->event = 'destroy';
		$version->object = $object_json;
		$version->save();
		
		$version->transaction_id = $version->id;
		return $version->save();
	}
	
	public function GetAllVesionIDs(){
		return Version::all(['id']);
	}

	public function getVersionByTagID($tagID){
		$query=DB::table('versions');
		$query->where('item_type','tagging');
		$query->where('item_id',$tagID);
		$query->select('id');
		$verIDs=$query->get();
		return $verIDs;
	}

	public function deleteByTagID($tagID){

		$query=DB::table('versions');
		$query->where('item_type','tagging');
		$query->where('item_id',$tagID);
		$query->select('id');
		$verIDs=$query->get();
		foreach ($verIDs as $value){
			Log::info('value: '.$value->id);
		VersionAssociation::where('version_id',$value->id)->delete();
		Version::where('id',$value->id)->delete();
		}
		
	}
		

}