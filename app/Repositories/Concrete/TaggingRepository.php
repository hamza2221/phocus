<?php


namespace App\Repositories\Concrete;
use App\Repositories\Abstracts\ITaggingRepository;

use App\Models\Tagging;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Collection;
use XMLWriter;
use Log;
use Illuminate\Pagination\Paginator;

class TaggingRepository implements ITaggingRepository {
	function addTagging($provider_id,$tags){
		
		$taggingInfo = array();
		
		foreach($tags as $tagId){
			
			$tagging=new Tagging;
			$tagging->provider_id=$provider_id;
			$tagging->tag_id=$tagId;
			
			if($tagging->save()){
				$tagInfo = array();
				
				$tagInfo['provider_id'] = $provider_id;
				$tagInfo['tag_id'] = $tagId;
				$tagInfo['created_at'] = $tagging->created_at;
				$tagInfo['updated_at'] = $tagging->updated_at;
				$tagInfo['id'] = $tagging->id;
				
				$taggingInfo[] = $tagInfo;
			}
		}
		
		return json_encode($taggingInfo);
	}
	
}