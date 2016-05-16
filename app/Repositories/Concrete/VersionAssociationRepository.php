<?php


namespace App\Repositories\Concrete;
use App\Repositories\Abstracts\IVersionAssociationRepository;
use Illuminate\Http\Request;
use App\Models\VersionAssociation;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Collection;
use XMLWriter;
use Log;
use Illuminate\Pagination\Paginator;
use App\Constants\Roles;
use Illuminate\Support\Facades\Input;

class VersionAssociationRepository implements IVersionAssociationRepository {
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
                'Content-Disposition' => 'attachment; filename="paper_trail-version_association_'.date('Y-m-d-H-i-s').'.csv"',
            ]);

        return $response;
	}
	
	public function exportJSON(){
		//echo "<pre>"; print_r($this->getExportData()); echo "</pre>"; die();
		$data = json_encode($this->getExportData());
		header('Content-disposition: attachment; filename=paper_trail-version_association_'.date('Y-m-d-H-i-s').'.json');
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
		header('Content-Disposition: attachment; filename="paper_trail-version_association_'.date('Y-m-d-H-i-s').'.xml"');
		return $xmlDoc;
	}
	
	public function getExportData(){
		$data = $headings = array();
		
		// Create CSV Header Start
		if($_POST['export_to'] == 'csv' && ! array_key_exists('skip_header', $_POST)){
			$csvhead = array();
			if(array_key_exists('version_associations', $_POST['schema'])){
				foreach($_POST['schema']['version_associations'] as $field){
					$csvhead[] = (string) str_replace('_', ' ', $field);
				}
			}
			
			if(array_key_exists('versions', $_POST['schema'])){
				foreach($_POST['schema']['versions'] as $field){
					$csvhead[] = (string) str_replace('_', ' ', $field) . ' [Version]';
				}
				
			}
			$headings[] = $csvhead;
			$data[] = call_user_func_array('array_merge', $headings);
		}
		// Create CSV Header End
		
		if($_POST['selectedRecords'][0]==''){
			$rows = VersionAssociation::all();
		}else{
			$rows = VersionAssociation::find($_POST['selectedRecords']);
		}
		
		foreach($rows as $row){
			$dataRow = array();
			
			if(array_key_exists('version_associations', $_POST['schema'])){
				foreach($_POST['schema']['version_associations'] as $field){
					
					if($_POST['export_to'] == 'csv'):
						$dataRow[] = (string)$row->$field;
					else:
						$dataRow['version-associations'][$field] = (string)$row->$field;
					endif;
				}
				
			}
			
			if(array_key_exists('versions', $_POST['schema'])){
				
				foreach($_POST['schema']['versions'] as $field){
					
					if($_POST['export_to'] == 'csv'):
						$dataRow[] = (string)$row->Version->$field;
					else:
						$arraykey = ($field == 'id')? 'version_id':$field;
					  	$dataRow[$arraykey] = (string)$row->Version->$field;
					endif;
				}
			}
			$data[] = $dataRow;
		}
		
		return $data;
	}
	
	/*	Export Data Functions End	*/

	public function AddOrUpdateVerAssociation(Request $request){
		$version=new VersionAssociation();
	 	if($request->id>0){
	 		$version=VersionAssociation::find($request->id);
	 	}
	 	$version->version_id=$request->version_id;
	 	$version->foreign_key_name=$request->foreign_key_name;
	 	$version->foreign_key_id=$request->foreign_key_id;
	 	$version->save();
	 	return $version->id;
	}

	public function getVerAssociationByID($ID){
		$version=  VersionAssociation::find($ID);
	   	return $version;
	}

	public function DeleteVerAssociationByID($ID){
		VersionAssociation::where('id',$ID)->delete();
	}

	public function getFilteredVerAssociations($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination){
		$query=VersionAssociation::query();
		$query->where(function($q) use ($search_term){
			$q->where("id","LIKE","%$search_term%");
			$q->orWhere("version_id","LIKE","%$search_term%");
			$q->orWhere("foreign_key_name","LIKE","%$search_term%");
			$q->orWhere("foreign_key_id","LIKE","%$search_term%");
			
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
		$query->orderBy($orderBy,$sortOrder);
		$currentPage=$pageNumber;
		Paginator::currentPageResolver(function () use ($currentPage) {
        	return $currentPage;
    	});
		
		$versions= ($pagination==1)? $query->paginate(20):$query->get();
		Log::info('$versions: '.print_r($versions, true));
		return $versions;
	}

   public function getVerAssociationsByID($ids){
   		return VersionAssociation::whereIn('id', $ids)->get();
   }

   public function deleteVerAssociationsByID($ids){
   	VersionAssociation::whereIn('id',$ids)->delete();
   }
   
   	public function saveVersionInfo($versionId, $foreignKeyName, $foreignKeyId){
		
		$versionAssociation = new VersionAssociation();
		$versionAssociation->version_id = $versionId;
		$versionAssociation->foreign_key_name = $foreignKeyName;
		$versionAssociation->foreign_key_id = $foreignKeyId;
		$versionAssociation->save();
		
	}

	public function search($searchTerm){
		$query=VersionAssociation::query();
		$query->where(function($q) use ($searchTerm){
			$q->where("id","LIKE","%$searchTerm%");
		});
		$query->select('id');
		$associations=$query->get();
		return $associations;
	}
	public function setVersion($versionID,$associations,$all="false"){
		$query=VersionAssociation::query();
		if($all){
			$query->update(['version_id'=>$versionID]);
		}
		else if($associations){
			$query->whereIn('id',$associations);
			$query->update(['version_id'=>$versionID]);
		}
	}
	
}