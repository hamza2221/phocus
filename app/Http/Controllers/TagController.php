<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\Abstracts\ITagRepository;
use App\Models\Tag;
use Illuminate\Support\Facades\Input;
use DB;
use Log;
use Validator;

class TagController extends Controller
{
	public function __construct(ITagRepository $tagRepository)
    {
        $this->middleware('admin');
        $this->tagRepository = $tagRepository;
    }

    public function index($type='gear'){
        if($type=='any')
		{
			return Tag::all();
		}
		
		return Tag::where('type',$type)->orderBy('position', 'asc')->get();
    }
	
	/*	Export Leads Data	*/
	public function exportData(){
		$_POST['selectedRecords'] = explode(',', str_replace(array('[',']'), '', $_POST['selectedRecords'][0]));
		return $this->tagRepository->exportData();
	}

	public function store(Request $request){
		
		$validator = Validator::make($request->all(), [
			'name' => 'required|unique:tags',
		]);
		
		
		if ($validator->fails()) {
			$messages = $validator->errors();
			$errors = array();
			
			if($messages->has('name'))
			{
				$errors['name'] = $messages->first('name');
			}
			
			return array('errors' => json_encode($errors));
		} // Validation Ends
		else
		{
			$this->tagRepository->AddOrUpdateTag($request);
			return array('success' => true);
		}
    }

    public function update(Request $request,$id){
        $user=$this->tagRepository->AddOrUpdateTag($request);
        return array('success' => true);
    }
	
	public function updatePositions(Request $request){
		$this->tagRepository->updatePositions($request->all());
		return array('success' => true);
	}

    public function show($id){
        $user=$this->tagRepository->getTagByID($id);
        return $user;
    }

    public function destroy($id){
        $user=$this->tagRepository->DeleteTagByID($id);
        return array('success' => true);
    }


    public function filter(Request $request){
        $query= Input::get('query');
        Log::info('query: '.$query);
        $filters=Input::get('filters');
        Log::info('filters: '.print_r($filters, true));
        $pageNumber=Input::get("pageNumber");
        $orderBy=Input::get("orderBy");
        $sortOrder=Input::get("sortOrder");
        $tagType=Input::get("type");
		$pagination = Input::get("pagination");
		
        $tag= $this->tagRepository->getFilteredTags($tagType,$query,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);

        return $tag;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $tag=$this->tagRepository->getTagsByID($ids);
        Log::info('tag: '.print_r($tag, true));
        return $tag;
    }

    public function deletebyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $this->tagRepository->deleteTagsByID($ids);
        return array('success' => true);
    }
}
