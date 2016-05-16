<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;
use App\Repositories\Abstracts\ILeadsRepository;
use App\Models\Lead;
use Log;
use DB;
use App\Emailer\Emailer;
//use Carbon\Carbon;
use DateTime;

class LeadController extends Controller
{
	public function __construct(ILeadsRepository $leadRepository)
    {
        //$this->middleware($this->guestMiddleware(), ['except' => 'logout']);
        $this->middleware('admin');
        $this->leadRepository = $leadRepository;
    }

    public function index(){
        return Lead::all();
    }

    public function store(Request $request){
        $id = $this->leadRepository->AddOrUpdateLead($request);
        $emailer= new Emailer;
        $emailer->newClientEmail($request);
        return array('success' => true, 'id'=>$id);
    }

    public function update(Request $request,$id){
        $id = $this->leadRepository->AddOrUpdateLead($request);
        return array('success' => true, 'id'=>$id);
    }

    public function show($id){
        $user=$this->leadRepository->getLeadByID($id);
        return $user;
    }

    public function destroy($id){
        $user=$this->leadRepository->DeleteLeadByID($id);
        return array('success' => true);
    }
	
	/*	Export Leads Data	*/
	public function exportData(){
		$_POST['selectedLeads'] = explode(',', str_replace(array('[',']'), '', $_POST['selectedLeads'][0]));
		return $this->leadRepository->exportData();
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
		
        $leads= $this->leadRepository->getFilteredLeads($query,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
		
		return $leads;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $leads=$this->leadRepository->getLeadsByID($ids);
        Log::info('leads: '.print_r($leads, true));
        return $leads;
    }

    public function deletebyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $this->leadRepository->deleteLeadsByID($ids);
        return array('success' => true);
    }
}
