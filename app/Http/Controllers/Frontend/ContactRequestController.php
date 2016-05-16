<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
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
        //$this->middleware('admin');
        $this->contactRequestRepository = $contactRequestRepository;
    }

    
    public function store() {


        $data = Input::all();
        //print_r($data);

        $this->contactRequestRepository->createContactRequests($data);
        $response['message'] = 'Contact Request Added From Frontend';
        return $response;

        //$request->session()->flash('success', "Contact Request added");
        //return redirect(url('contact_request'));
    }

    

}
