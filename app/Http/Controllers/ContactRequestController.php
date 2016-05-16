<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use App\Repositories\Abstracts\IContactRequestRepository;
use Session;
use Illuminate\Support\Facades\Input;
use DB;
use Log;

class ContactRequestController extends Controller {

    private $contactRequestRepository;

    public function __construct(IContactRequestRepository $contactRequestRepository) {
        //$this->middleware($this->guestMiddleware(), ['except' => 'logout']);
        $this->middleware('admin');
        $this->contactRequestRepository = $contactRequestRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        /**************************************
         * Pagination Setting Default value 5
         *************************************/
        $per_page = 5;
        if (isset($_GET['per_page'])) {
            $per_page = $_GET['per_page'];
        }
        
        /**************************************
         * Sorting Setting Default Order by ID Assending
         *************************************/
        $sort_order['column'] = 'id';
        $sort_order['order_by'] = 'asc';
        if (isset($_GET['sort_by'])) {
            $sort_by = $_GET['sort_by'];
            $sort_by = json_decode($sort_by);
            foreach ($sort_by as $k => $v) {
                $sort_order['column'] = $k;
                $sort_order['order_by'] = $v;
            }
        }
        $contactRequests = $this->contactRequestRepository->getAllContactRequestsPagination($per_page, $sort_order);
        return $contactRequests;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        echo 'ereh';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store() {


        $data = Input::all();
        //print_r($data);

        $this->contactRequestRepository->createContactRequests($data);
        $response['message'] = 'Contact Request Added';
        return $response;

        //$request->session()->flash('success', "Contact Request added");
        //return redirect(url('contact_request'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        return $this->contactRequestRepository->showContactRequests($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id) {
        $data = Input::all();
        //print_r($data
        $this->contactRequestRepository->updateContactRequests($id, $data);
        $response['message'] = 'Contact Request Updated';
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $this->contactRequestRepository->deleteContactRequests($id);
        $response['message'] = 'Contact Request was deleted';
        return $response;
    }
	
	/*	Export Contact Request Data	*/
	public function exportData(){
		$_POST['selectedCRs'] = explode(',', str_replace(array('[',']'), '', $_POST['selectedCRs'][0]));
		//echo "<pre>"; print_r($_POST); echo "</pre>"; die();
		return $this->contactRequestRepository->exportData();
	}

    public function filter(Request $request){
        $query= Input::get('query');
        $filters=Input::get('filters');
        $pageNumber=Input::get("pageNumber");
        $orderBy=Input::get("orderBy");
        $sortOrder=Input::get("sortOrder");
		$pagination = Input::get("pagination");
        $setNo=Input::get("setNo");
		
        $contact_requests= $this->contactRequestRepository->getFilteredRequests($query,$filters,$pageNumber,$orderBy,$sortOrder,$pagination,$setNo);

        return $contact_requests;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $contact_requests=$this->contactRequestRepository->getRequestsByID($ids);
        Log::info('contact_requests: '.print_r($contact_requests, true));
        return $contact_requests;
    }

    public function deletebyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $this->contactRequestRepository->deleteRequestsByID($ids);
        return array('success' => true);
    }

}
