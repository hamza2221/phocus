<?php
namespace App\Repositories\Concrete;

use App\Repositories\Abstracts\IPackageRepository;
use Symfony\Component\HttpFoundation\StreamedResponse;

use App\Models\Package;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;

use XMLWriter;
use Log;
use Storage;
use Carbon\Carbon;

class PackageRepository implements IPackageRepository {

    public function deleteById($id) {
        Setting::find($id)->delete();
    }

    public function getById($id) {
        return Setting::find($id);
    }
	
	
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
                'Content-Disposition' => 'attachment; filename="Packages_'.date('Y-m-d-H-i-s').'.csv"',
            ]);

        return $response;
	}
	
	public function exportJSON(){
		$data = json_encode($this->getExportData());
		header('Content-disposition: attachment; filename=Packages_'.date('Y-m-d-H-i-s').'.json');
		header('Content-type: application/json');
		return $data;
	}
	
	public function exportXML(){
		$data = $this->getExportData();
		
		$xml = new XMLWriter();
		$xml->openMemory();
		$xml->startDocument('1.0', $_POST['encoding_to']); //'UTF-8'
		$xml->startElement('Settings');
		$xml->writeAttribute('type', 'array');
		$xml->text("\n\t");
		
		foreach($data as $row){
			
			$xml->startElement('setting');
			
			foreach($row as $key => $val){
				$xml->text("\n\t\t");
				$xml->startElement(str_replace('_', '-', $key));
				$xml->text($val);
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
		header('Content-Disposition: attachment; filename="Packages_'.date('Y-m-d-H-i-s').'.xml"');
		return $xmlDoc;
	}
	
	public function getExportData(){
		$data = $headings = array();

		if($_POST['export_to'] == 'csv' && ! array_key_exists('skip_header', $_POST)){
			$csvhead = array();
			if(array_key_exists('package', $_POST['schema'])){
				foreach($_POST['schema']['package'] as $field){
					$csvhead[] = (string) ucfirst(str_replace('_', ' ', $field));
				}
			}
			
			$data[] = $csvhead;
		}
		
		if($_POST['selectedRows'][0]==''){
			$rows = Setting::all();
		}else{
			$rows = Setting::find($_POST['selectedRows']);
		}
		
		foreach($rows as $row){
			$tblData = array();
			
			if(array_key_exists('package', $_POST['schema'])){
				
				foreach($_POST['schema']['package'] as $field){
					
					$val = (empty($row->$field) || $row->$field=='0000-00-00 00:00:00')? '-' : (string)$row->$field;
					
					if($_POST['export_to'] == 'csv'):
						$tblData[] = $val;
					else:
					  	$tblData[$field] = $val;
					endif;
				}
				
			}
			$data[] = $tblData;
		}
		
		return $data;
	}
	
	/*	Export Data Functions End	*/

	public function manageAddUpdate($request){
		$photo = Input::file('photo');
		$package=json_decode(Input::get('model'));
		
		Log::Info("Package photo:".print_r(Input::file('photo'),true));
		
		$obj = new Package();
		
		$isUpdate=false;
		if($package->id > 0){
	 		$obj = Package::find($package->id);
			$isUpdate=true;
	 	}
		
        $obj->name = $package->name;
		$obj->description = $package->description;
		$obj->stills = $package->stills;
		$obj->subjects = $package->subjects;
		$obj->time_on_site = $package->time_on_site;
		$obj->price = $package->price;
		
        $obj->save();
		if(isset($photo)){
			
			if(!$isUpdate){
				\Storage::disk('profiles')->makeDirectory($obj->id,777, true);
			}else{
				$directoryPath = storage_path() . '/packages/' . $obj->id . "/";
				File::cleanDirectory($directoryPath);
			}
			
			$move=Storage::disk('packages')->put($obj->id."/".$photo->getClientOriginalName(), file_get_contents($photo));
			
			if($move){
				$obj->photo=$photo->getClientOriginalName();
				$obj->save();
			}
		}
	 	
		
		return $obj->id;
	}

	public function getFilteredData($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination){
		$query=Package::query();
		$query->where(function($q) use ($search_term){
			$q->where("label","LIKE","%$search_term%");
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
		
		$setting = ($pagination==1)? $query->paginate(20):$query->get();
		
		Log::info('$package: '.print_r($setting, true));
		return $setting;
	}

	public function delete($ids){
		Package::whereIn('id',$ids)->delete();
	}
	
}