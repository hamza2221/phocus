<?php


namespace App\Repositories\Concrete;
use App\Repositories\Abstracts\ITagRepository;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Collection;
use XMLWriter;
use Log;
use Illuminate\Pagination\Paginator;

class TagRepository implements ITagRepository {
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
                'Content-Disposition' => 'attachment; filename="Tag_gears_'.date('Y-m-d-H-i-s').'.csv"',
            ]);

        return $response;
	}
	
	public function exportJSON(){
		$data = json_encode($this->getExportData());
		header('Content-disposition: attachment; filename=Tag_gears_'.date('Y-m-d-H-i-s').'.json');
		header('Content-type: application/json');
		return $data;
	}
	
	public function exportXML(){
		$data = $this->getExportData();
		
		$xml = new XMLWriter();
		$xml->openMemory();
		$xml->startDocument('1.0', $_POST['encoding_to']); //'UTF-8'
		$xml->startElement('Tags');
		$xml->writeAttribute('type', 'array');
		$xml->text("\n\t");
		
		foreach($data as $row){
			
			$xml->startElement('tag');
			
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
		header('Content-Disposition: attachment; filename="Tag_gears_'.date('Y-m-d-H-i-s').'.xml"');
		return $xmlDoc;
	}
	
	public function getExportData(){
		$data = $headings = array();

		if($_POST['export_to'] == 'csv' && ! array_key_exists('skip_header', $_POST)){
			$csvhead = array();
			if(array_key_exists('tags', $_POST['schema'])){
				foreach($_POST['schema']['tags'] as $field){
					$csvhead[] = (string) str_replace('_', ' ', $field);
				}
			}
			
			$data[] = $csvhead;
		}
		
		if($_POST['selectedRecords'][0]==''){
			$rows = Tag::where('type',$_POST['type'])->get();
		}else{
			$rows = Tag::find($_POST['selectedRecords']);
		}
		
		foreach($rows as $row){
			$LeadsData = array();
			
			if(array_key_exists('tags', $_POST['schema'])){
				
				foreach($_POST['schema']['tags'] as $field){
					
					if($_POST['export_to'] == 'csv'):
						$LeadsData[] = (string)$row->$field;
					else:
					  	$LeadsData[$field] = (string)$row->$field;
					endif;
				}
				
			}
			$data[] = $LeadsData;
		}
		
		return $data;
	}
	
	/*	Export Data Functions End	*/

	public function AddOrUpdateTag($request){
		$tag=new Tag();
	 	if($request->id>0)
	 		$tag=Tag::find($request->id);
	 	else
	 		$tag->type=$request->type;
	 	$tag->name=$request->name;
	 	$pos=Tag::all()->max('position');
	 	Log::Info("Position : ".$pos);
	 	$pos++;
	 	$tag->position=$pos	;
	 	$tag->save();
	}
	
	public function updatePositions($requests){
		
		foreach($requests as $request):
			$tag=Tag::find($request['id']);
			$tag->position = $request['position'];
			$tag->save();
			unset($tag);
		endforeach;
		
	}

	public function getTagByID($id){
		return Tag::find($id);
	}

	public function DeleteTagByID($id){
		Tag::where('id',$id)->delete();
	}

	public function getFilteredTags($tagType,$search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination){
		$query=Tag::query();
		$query->where("type","=",$tagType);
		$query->where(function($q) use ($search_term){
			$q->where("name","LIKE","%$search_term%");
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
		
		$tags = ($pagination==1)? $query->paginate(5):$query->get();
		
		Log::info('$tags: '.print_r($tags, true));
		return $tags;
	}


	public function getTagsByID($ids){
		return Tag::whereIn('id', $ids)->get();
	}

	public function deleteTagsByID($ids){
		User::whereIn('id',$ids)->delete();
	}
	
}