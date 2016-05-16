<?php 

namespace App\Repositories\Concrete;
use App\Repositories\Abstracts\IContactRequestRepository;
use App\Models\Contact_request;

use Symfony\Component\HttpFoundation\StreamedResponse;
use XMLWriter;
use Log;
use Illuminate\Pagination\Paginator;
use App\Constants\Roles;

class ContactRequestRepository implements IContactRequestRepository{

	public function getAllContactRequests(){
		return Contact_request::all();
	}
	public function getAllContactRequestsPagination($per_page,$sort_order){
		return Contact_request::orderBy($sort_order['column'], $sort_order['order_by'])->paginate($per_page);
	}
	
	public  function createContactRequests($data){
        $contact_request=new Contact_request;
        $contact_request->full_name=$data['full_name'];
        $contact_request->phone=$data['phone'];
        $contact_request->zip_code=$data['zip_code'];
        $contact_request->subject=$data['subject'];
        $contact_request->email=$data['email'];
        $contact_request->is_provider=isset($data['is_provider']);
        $contact_request->message=$data['message'];
        $contact_request->location=$data['location'];
        $contact_request->save();
        /*$contact_request=new Contact_request;
        $contact_request->full_name=$request['name'];
        $contact_request->phone=$request->phone;
        $contact_request->zip_code=$request->zip_code;
        $contact_request->subject=$request->subject;
        $contact_request->email=$request->email;
        $contact_request->is_provider=$request->is_provider;
        $contact_request->message=$request->message;
        $contact_request->save();*/
        return $contact_request->id;
	}
	
	public function deleteContactRequests($id){
		Contact_request::find($id)->delete();
	}
	
	public function showContactRequests($id){
			return Contact_request::find($id);
	}
	
	public function updateContactRequests($id,$data){
			$contact_request=Contact_request::find($id);
			$contact_request->full_name=$data['full_name'];
			$contact_request->phone=$data['phone'];
			$contact_request->location=$data['location'];
			$contact_request->zip_code=$data['zip_code'];
			$contact_request->subject=$data['subject'];
			$contact_request->email=$data['email'];
			$contact_request->is_provider=$data['is_provider'];
			$contact_request->message=$data['message'];
	$contact_request->save();

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
                'Content-Disposition' => 'attachment; filename="Contact_request_'.date('Y-m-d-H-i-s').'.csv"',
            ]);

        return $response;
	}
	
	public function exportJSON(){
		$data = json_encode($this->getExportData());
		header('Content-disposition: attachment; filename=Contact_request_'.date('Y-m-d-H-i-s').'.json');
		header('Content-type: application/json');
		return $data;
	}
	
	public function exportXML(){
		$data = $this->getExportData();
		
		$xml = new XMLWriter();
		$xml->openMemory();
		$xml->startDocument('1.0', $_POST['encoding_to']); //'UTF-8'
		$xml->startElement('contact-requests');
		$xml->writeAttribute('type', 'array');
		$xml->text("\n\t");
		
		foreach($data as $row){
			
			$xml->startElement('contact-request');
			
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
		header('Content-Disposition: attachment; filename="Contact_request_'.date('Y-m-d-H-i-s').'.xml"');
		return $xmlDoc;
	}
	
	public function getExportData(){
		$data = $headings = array();

		if($_POST['export_to'] == 'csv' && ! array_key_exists('skip_header', $_POST)){
			$csvhead = array();
			if(array_key_exists('contact_requests', $_POST['schema'])){
				foreach($_POST['schema']['contact_requests'] as $field){
					$csvhead[] = (string) str_replace('_', ' ', $field);
				}
			}
			
			$data[] = $csvhead;
		}
		
		if($_POST['selectedCRs'][0]==''){
			$rows = Contact_request::all();
		}else{
			$rows = Contact_request::find($_POST['selectedCRs']);
		}
		
		foreach($rows as $row){
			$CRData = array();
			
			if(array_key_exists('contact_requests', $_POST['schema'])){
				
				foreach($_POST['schema']['contact_requests'] as $field){
					
					if($_POST['export_to'] == 'csv'):
						$CRData[] = (string)$row->$field;
					else:
					  	$CRData[$field] = (string)$row->$field;
					endif;
				}
				
			}
			$data[] = $CRData;
		}
		
		return $data;
	}
	
	/*	Export Data Functions End	*/


	public function getFilteredRequests($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination,$setNo){
		$query=Contact_request::query();
		
		$query->where(function($q) use ($search_term){
			$q->where("full_name","LIKE","%$search_term%");
			$q->orWhere("phone","LIKE","%$search_term%");
			$q->orWhere("location","LIKE","%$search_term%");
			$q->orWhere("zip_code","LIKE","%$search_term%");
			$q->orWhere("subject","LIKE","%$search_term%");
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
			$query->select('id','full_name','phone','location','zip_code','subject','is_provider');
		else
			$query->select('id','message','email');
		$query->orderBy($orderBy,$sortOrder);
		$currentPage=$pageNumber;
		Paginator::currentPageResolver(function () use ($currentPage) {
        	return $currentPage;
    	});
		
		//$contact_requests = $query->paginate(5);
		$contact_requests = ($pagination==1)? $query->paginate(5):$query->get();
		
		Log::info('$contact_requests: '.print_r($contact_requests, true));
		return $contact_requests;
	}
	public function getRequestsByID($ids){
		return Contact_request::whereIn('id', $ids)->get();
	}
	public function deleteRequestsByID($ids){
		Contact_request::whereIn('id',$ids)->delete();
	}
}