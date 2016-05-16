<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Emailer\Emailer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Auth;

use App\Models\User;
use Carbon\Carbon;

use App\Repositories\Abstracts\IVersionsRepository;

class AuthController extends Controller {
	
	private $versionObj;

    public function __construct(IVersionsRepository $versionObj) {
        $this->versionObj = $versionObj;
    }
	
    public function doLogin(Request $request) {
    			
	  if($request->input('remember')==1)
	  {
	  		if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')], $request->input('remember'))) {
			   $user = Auth::user();
			}else{
				echo -1; exit;
			}
	  }
	  else
	  {
		  if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
			 $user = Auth::user();
		  }else{
			  echo -1; exit;
		  }
	  
	  }
	  if (Auth::viaRemember()) {
	    	echo 'user was remmembered';
	    	die();
		}
	  //echo $user->name."-".$user->role;
	  if($user->role == 'Admin'){	
	  		return  url('/admin');
	  		
	  	}

	  elseif($user->role == 'User'){
	  	echo 'user';
	  	exit;
	  }
	  elseif($user->role == 'Provider'){
	  	return url('#/dashboard');
	  	
	  }
	  
		
    }
	
	public function registration(Request $request){
		$user=new User();
		$user = $user->where('email', $request->input('email'))->first();
		if($user == false){
			$user=new User();
			$user->email = $request->input('email');
			$user->password = bcrypt($request->input('password'));
			$user->role = 'Provider';
			
			$user->updated_at = $user->created_at = Carbon::now();
			
			if($user->save()){
				if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
					
					$user = auth()->user();
					$objectChagesArray = array();
					
					$objectChagesArray['id'] = $user->id;
					$objectChagesArray['email'] = $user->email;
					$objectChagesArray['encrypted_password'] = $user->password;
					$objectChagesArray['type'] = $user->role;
					$objectChagesArray['created_at'] = $user->created_at;
					$objectChagesArray['updated_at'] = $user->updated_at;
					
					$this->versionObj->versionCreateEvent( json_encode($objectChagesArray) );
					
				  	return 1;
				}
			}else{
				return -1;
			}
		}else return -2;
	}
	public function checkEmail(Request $request)
	{
		$user=new User();
		$user = $user->where('email', $request->input('email'))->first();
		if($user==false){
			//email is not valid
			return 0;
		}else{
			//email is valid
			return 1;
		}
	}

}
