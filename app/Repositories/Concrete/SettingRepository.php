<?php
namespace App\Repositories\Concrete;
use App\Repositories\Abstracts\ISettingRepository;

use App\Models\Setting;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Collection;
use XMLWriter;
use Log;
use Illuminate\Pagination\Paginator;

class SettingRepository implements ISettingRepository {

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
                'Content-Disposition' => 'attachment; filename="Setting_'.date('Y-m-d-H-i-s').'.csv"',
            ]);

        return $response;
	}
	
	public function exportJSON(){
		$data = json_encode($this->getExportData());
		header('Content-disposition: attachment; filename=Setting_'.date('Y-m-d-H-i-s').'.json');
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
		header('Content-Disposition: attachment; filename="Setting_'.date('Y-m-d-H-i-s').'.xml"');
		return $xmlDoc;
	}
	
	public function getExportData(){
		$data = $headings = array();

		if($_POST['export_to'] == 'csv' && ! array_key_exists('skip_header', $_POST)){
			$csvhead = array();
			if(array_key_exists('setting', $_POST['schema'])){
				foreach($_POST['schema']['setting'] as $field){
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
			$settingData = array();
			
			if(array_key_exists('setting', $_POST['schema'])){
				
				foreach($_POST['schema']['setting'] as $field){
					
					$val = (empty($row->$field) || $row->$field=='0000-00-00 00:00:00')? '-' : (string)$row->$field;
					
					if($_POST['export_to'] == 'csv'):
						$settingData[] = $val;
					else:
					  	$settingData[$field] = $val;
					endif;
				}
				
			}
			$data[] = $settingData;
		}
		
		return $data;
	}
	
	/*	Export Data Functions End	*/

	public function manageAddUpdate($request){
		$objSetting = new Setting();
		if($request->id > 0){
	 		$objSetting = Setting::find($request->id);
	 	}
		
        $objSetting->label = $request->label;
		$objSetting->slug = str_slug(strtolower($request->label), '_');
        $objSetting->value = $request->value;
        $objSetting->save();
		return $objSetting->id;
	}

	public function getFilteredData($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination){
		$query=Setting::query();
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
		
		Log::info('$setting: '.print_r($setting, true));
		return $setting;
	}

	public function delete($ids){
		Setting::whereIn('id',$ids)->delete();
	}
	
}