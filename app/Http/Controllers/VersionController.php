<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use App\Http\Requests;
use App\Repositories\Abstracts\IVersionsRepository;
use App\Repositories\Abstracts\IVersionAssociationRepository;
use App\Models\Version;
use Illuminate\Support\Facades\Input;
use DB;


class VersionController extends Controller
{
	public function __construct(IVersionsRepository $versionsRepository,IVersionAssociationRepository $versionAssociationRepository)
    {
        $this->middleware('admin');
        $this->versionsRepository = $versionsRepository;
        $this->versionAssociationRepository = $versionAssociationRepository;
    }

    public function index(){
        return Version::all();
    }
	
	/*	Export Leads Data	*/
	public function exportData(){
		$_POST['selectedRecords'] = explode(',', str_replace(array('[',']'), '', $_POST['selectedRecords'][0]));
		return $this->versionsRepository->exportData();
	}

	public function store(Request $request){
        $id=$this->versionsRepository->AddOrUpdateVersion($request);
        if($request->selectedAssociations || $request->allAssociation){
            $this->versionAssociationRepository->setVersion($id,$request->selectedAssociations,$request->allAssociation);
        }
        return array('success' => true,'id'=>$id);
    }

    public function update(Request $request,$id){
        $id=$this->versionsRepository->AddOrUpdateVersion($request);
        return array('success' => true,'id'=>$id);
    }

    public function show($id){
        $user=$this->versionsRepository->getVersionByID($id);
		$user->version_associations = Version::find($id)->versionAssociation;
        return $user;
    }

    public function destroy($id){
        $user=$this->versionsRepository->DeleteVersionByID($id);
        return array('success' => true);
    }

    public function filter(Request $request){
        $query= Input::get('query');
        $filters=Input::get('filters');
        $pageNumber=Input::get("pageNumber");
        $orderBy=Input::get("orderBy");
        $sortOrder=Input::get("sortOrder");
		$pagination = Input::get("pagination");
        $setNo=Input::get("setNo");
		
        $versions= $this->versionsRepository->getFilteredVersions($query,$filters,$pageNumber,$orderBy,$sortOrder, $pagination,$setNo);
		
		foreach($versions as $version){
			if(property_exists($version, 'object_changes') && $version->item_type=='tagging')
			{
				$taggingData = json_decode($version->object_changes);
				$version->item_id = 'Tagging #'.$taggingData->id;
			}
			
			else if(strtolower($version->item_type)=='provider' && property_exists($version, 'item_id'))
			{
				$name = Version::find($version->id)->User->name;
				$version->item_id = '<a href="#/provider/show/'.$version->item_id.'">'.$name.'</a>';
			}
			
			else if(strtolower($version->item_type)=='admin' && property_exists($version, 'item_id'))
			{
				$name = Version::find($version->id)->User->name;
				$version->item_id = '<a href="#/admin/show/'.$version->item_id.'">/admin/admin/'.$version->item_id.'</a>';
			}
			
			else if(strtolower($version->item_type)=='super admin' || strtolower($version->item_type)=='superadmin')
			{
				$name = Version::find($version->id)->User->name;
				$version->item_id = '<a href="#/superadmin/show/'.$version->item_id.'">/admin/super_admin/'.$version->item_id.'</a>';
			}
			
			else{
				$version->item_id = '<span>'.$version->item_type.'</span>';
			}
			
			if(property_exists($version, 'created_at')){
				$version->created_at = date('F d, Y H:i', strtotime($version->created_at));
			}
		}
		
        return $versions;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $versions=$this->versionsRepository->getVersionsByID($ids);
        Log::info('versions: '.print_r($versions, true));
        return $versions;
    }

    public function deletebyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $this->versionsRepository->deleteVersionsByID($ids);
        return array('success' => true);
    }
}
