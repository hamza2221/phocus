<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;
use App\Repositories\Abstracts\ISettingRepository;
use App\Models\Setting;
use Log;
use DB;
//use Carbon\Carbon;
use DateTime;

class SettingController extends Controller
{
	private $objSetting;
	public function __construct(ISettingRepository $objSetting)
    {
        //$this->middleware($this->guestMiddleware(), ['except' => 'logout']);
        $this->middleware('admin');
        $this->objSetting = $objSetting;
    }

    public function index(){
        return Setting::all();
    }

    public function store(Request $request){
        $id = $this->objSetting->manageAddUpdate($request);
        return array('success' => true, 'id'=>$id);
    }

    public function update(Request $request,$id){
        $id = $this->objSetting->manageAddUpdate($request);
        return array('success' => true, 'id'=>$id);
    }

    public function show($id){
        $user=$this->objSetting->getById($id);
        return $user;
    }

    public function destroy($id){
        $user=$this->objSetting->deleteById($id);
        return array('success' => true);
    }
	
	/*	Export Settings Data	*/
	public function exportData(){
		$_POST['selectedRows'] = explode(',', str_replace(array('[',']'), '', $_POST['selectedRows'][0]));
		return $this->objSetting->exportData();
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
		
        $leads= $this->objSetting->getFilteredData($query,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
		
		return $leads;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $settings = $this->objSetting->getById($ids);
        Log::info('settings: '.print_r($settings, true));
        return $settings;
    }

    public function deletebyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $this->objSetting->delete($ids);
        return array('success' => true);
    }
}
