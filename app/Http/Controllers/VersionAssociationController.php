<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\Abstracts\IVersionsRepository;
use App\Repositories\Abstracts\IVersionAssociationRepository;
use App\Models\VersionAssociation;
use Illuminate\Support\Facades\Input;
use DB;
use Log;


class VersionAssociationController extends Controller
{
	public function __construct(IVersionAssociationRepository $versionAssociationRepository,IVersionsRepository $versionRepository)
    {
        $this->middleware('admin');
        $this->versionRepository=$versionRepository;
        $this->versionAssociationRepository = $versionAssociationRepository;
    }

    public function index(){
        // $versions=$this->versionRepository->GetAllVesionIDs();
        // Log::info('versions: '.$versions);
        // $response=[];
        // $response["versions"]=$versions;
        // $response["association"]=VersionAssociation::all();
        return VersionAssociation::all();
    }
	
	/*	Export Leads Data	*/
	public function exportData(){
		$_POST['selectedRecords'] = explode(',', str_replace(array('[',']'), '', $_POST['selectedRecords'][0]));
		return $this->versionAssociationRepository->exportData();
	}

	public function store(Request $request){
        //Log::info('input'.print_r($request,true));
        $id=$this->versionAssociationRepository->AddOrUpdateVerAssociation($request);
        return array('success' => true,'id'=>$id);
    }

    public function update(Request $request,$id){
        $verAssociation=$this->versionAssociationRepository->AddOrUpdateVerAssociation($request);
        return array('success' => true,'id'=>$id);
    }

    public function show($id){
        $versions=$this->versionRepository->GetAllVesionIDs();
        Log::info('versions: '.$versions);
        $verAssociation=$this->versionAssociationRepository->getVerAssociationByID($id);
        $response["versions"]=$versions;
        $response["association"]=$verAssociation;
        return $response;
    }

    public function destroy($id){
        $verAssociation=$this->versionAssociationRepository->DeleteVerAssociationByID($id);
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
		$pagination = Input::get("pagination");
		
        $verAssociation= $this->versionAssociationRepository->getFilteredVerAssociations($query,$filters,$pageNumber,$orderBy,$sortOrder, $pagination);

        return $verAssociation;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $verAssociation=$this->versionAssociationRepository->getVerAssociationsByID($ids);
        Log::info('verAssociation: '.print_r($verAssociation, true));
        return $verAssociation;
    }

    public function deletebyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $this->versionAssociationRepository->deleteVerAssociationsByID($ids);
        return array('success' => true);
    }

    public function search(){
        $searchTerm=Input::get('searchTerm');
        return $this->versionAssociationRepository->search($searchTerm);
    }
}
