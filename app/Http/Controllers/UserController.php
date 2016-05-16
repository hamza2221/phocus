<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\Abstracts\IUserRepository;
use App\Models\User;
use Log;
use Illuminate\Support\Facades\Input;
use DB;


class UserController extends Controller
{
    public function __construct(IUserRepository $userRepository)
    {
        //$this->middleware($this->guestMiddleware(), ['except' => 'logout']);
        $this->middleware('user');
        $this->userRepository = $userRepository;
    }

    public function home(Request $request){
    	$user = $request->user();
    	return view('user.home',compact('user'));

    	// return view('user.home',[
    	// 		'user'=>$user
    	// 	]);
    }

    public function getallforddl(){
        $type=Input::get('type');
        Log::Info('Type: '.$type);
        $users=$this->userRepository->GetIdNameOnly($type);
        return $users;
    }
}
