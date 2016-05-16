<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;
use App\Repositories\Abstracts\IPackageRepository;
use App\Models\Package;
use Log;
use DB;
//use Carbon\Carbon;
use DateTime;

class PackageController extends Controller
{
	private $objPackage;
	public function __construct(IPackageRepository $objPackage)
    {
        //$this->middleware($this->guestMiddleware(), ['except' => 'logout']);
        $this->middleware('admin');
        $this->objPackage = $objPackage;
    }

    public function index(){
        return Package::all();
    }

    public function store(Request $request){
		$package= json_decode(Input::get('model'));
		$data = Input::all();
		$id = $this->objPackage->manageAddUpdate($data);
        return array('success' => true, 'id'=>$id);
    }

    public function update(Request $request,$id){
        $id = $this->objPackage->manageAddUpdate($request);
        return array('success' => true, 'id'=>$id);
    }

    public function show($id){
        $user=$this->objPackage->getById($id);
        return $user;
    }

    public function destroy($id){
        $user=$this->objPackage->deleteById($id);
        return array('success' => true);
    }
	
	/*	Export Packages Data	*/
	public function exportData(){
		$_POST['selectedRows'] = explode(',', str_replace(array('[',']'), '', $_POST['selectedRows'][0]));
		return $this->objPackage->exportData();
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
		
        $leads= $this->objPackage->getFilteredData($query,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
		
		return $leads;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $rows = $this->objPackage->getById($ids);
        Log::info('packages: '.print_r($rows, true));
        return $rows;
    }

    public function deletebyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $this->objPackage->delete($ids);
        return array('success' => true);
    }
}
