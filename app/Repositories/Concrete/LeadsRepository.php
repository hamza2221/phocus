<?php


namespace App\Repositories\Concrete;
use App\Repositories\Abstracts\ILeadsRepository;

use App\Models\Lead;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Collection;
use XMLWriter;
use Log;
use Illuminate\Pagination\Paginator;

class LeadsRepository implements ILeadsRepository {
	public function getAllLeads() {
        return Lead::all();
    }

    public function getAllLeadsPagination($per_page) {
        return Lead::paginate($per_page);
    }

    public function createLeads($data) {
        $lead = new Lead;
        $lead->interested_in = $data['interested_in'];
        $lead->email = $data['email'];
        $lead->save();
        return $lead->id;
    }

    public function DeleteLeadByID($id) {
        Lead::find($id)->delete();
    }

    public function updateLeads($id, $data) {
        $lead = Lead::find($id);
        $lead->interested_in = $data['interested_in'];
        $lead->email = $data['email'];
        $lead->save();
    }

    public function getLeadByID($id) {
        return Lead::find($id);
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
                'Content-Disposition' => 'attachment; filename="Leads_'.date('Y-m-d-H-i-s').'.csv"',
            ]);

        return $response;
	}
	
	public function exportJSON(){
		$data = json_encode($this->getExportData());
		header('Content-disposition: attachment; filename=Leads_'.date('Y-m-d-H-i-s').'.json');
		header('Content-type: application/json');
		return $data;
	}
	
	public function exportXML(){
		$data = $this->getExportData();
		
		$xml = new XMLWriter();
		$xml->openMemory();
		$xml->startDocument('1.0', $_POST['encoding_to']); //'UTF-8'
		$xml->startElement('Leads');
		$xml->writeAttribute('type', 'array');
		$xml->text("\n\t");
		
		foreach($data as $row){
			
			$xml->startElement('lead');
			
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
		header('Content-Disposition: attachment; filename="Leads_'.date('Y-m-d-H-i-s').'.xml"');
		return $xmlDoc;
	}
	
	public function getExportData(){
		$data = $headings = array();

		if($_POST['export_to'] == 'csv' && ! array_key_exists('skip_header', $_POST)){
			$csvhead = array();
			if(array_key_exists('leads', $_POST['schema'])){
				foreach($_POST['schema']['leads'] as $field){
					$csvhead[] = (string) ucfirst(str_replace('_', ' ', $field));
				}
			}
			
			$data[] = $csvhead;
		}
		
		if($_POST['selectedLeads'][0]==''){
			$rows = Lead::all();
		}else{
			$rows = Lead::find($_POST['selectedLeads']);
		}
		
		foreach($rows as $row){
			$LeadsData = array();
			
			if(array_key_exists('leads', $_POST['schema'])){
				
				foreach($_POST['schema']['leads'] as $field){
					
					$val = (empty($row->$field) || $row->$field=='0000-00-00 00:00:00')? '-' : (string)$row->$field;
					
					if($_POST['export_to'] == 'csv'):
						$LeadsData[] = $val;
					else:
					  	$LeadsData[$field] = $val;
					endif;
				}
				
			}
			$data[] = $LeadsData;
		}
		
		return $data;
	}
	
	/*	Export Data Functions End	*/

	public function AddOrUpdateLead($request){
		$lead = new Lead();
		if($request->id>0){
	 		$lead=Lead::find($request->id);
	 	}
        $lead->interested_in = $request->interested_in;
        $lead->email = $request->email;
        $lead->save();
		return $lead->id;
	}

	public function getFilteredLeads($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination){
		$query=Lead::query();
		$query->where(function($q) use ($search_term){
			$q->where("interested_in","LIKE","%$search_term%");
			$q->orWhere("email","LIKE","%$search_term%");
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
		
		$leads = ($pagination==1)? $query->paginate(20):$query->get();
		
		Log::info('$leads: '.print_r($leads, true));
		return $leads;
	}

	public function getLeadsByID($ids){
		return Lead::whereIn('id', $ids)->get();
	}
	public function deleteLeadsByID($ids){
		Lead::whereIn('id',$ids)->delete();
	}
	
}