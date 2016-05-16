<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use App\Http\Requests;
use App\Models\User;
use Illuminate\Support\Facades\Input;
use DB;
use Validator;

use App\Repositories\Abstracts\IUserRepository;
use App\Repositories\Abstracts\IVersionsRepository;

class SuperAdminController extends Controller
{
	private $versionObj;
	
    public function __construct(IUserRepository $userRepository, IVersionsRepository $versionObj)
    {
        $this->middleware('admin');
        $this->userRepository = $userRepository;
		$this->versionObj = $versionObj;
    }

    public function index(){
        Log::info("In super Admin index");
        $superadmins=User::where('role','Super Admin')->get();
        return $superadmins;
    }

    public function store(Request $request){
		$validator = Validator::make($request->all(), [
			'email' => 'required|email|unique:users',
			'password' => 'required|min:8|max:72|confirmed',
		]);
		
		
		if ($validator->fails()) {
			
			$messages = $validator->errors();
			$errors = array();
			
			if($messages->has('email'))
			{
				$errors['email'] = $messages->first('email');
			}
			
			if($messages->has('password'))
			{
				$errors['password'] = $messages->first('password');
			}
			
			return array('errors' => json_encode($errors));
		
		}
		else{
		
			if($request->id > 0)
			{
				$id = $request->id;
				$userObjectJson = $this->userRepository->getUserObjectJson($request->id);
				
				if($this->userRepository->AddOrUpdateSuperAdmin($request)){
					$objectChanges = $this->userRepository->getObjectChanges($userObjectJson);
					$this->versionObj->versionUpdateEvent($userObjectJson, $objectChanges);
				}
			}
			else
			{
				if($this->userRepository->AddOrUpdateSuperAdmin($request)):
					
					$objectChagesArray = array();
					$user = User::where('email', $request->email)->first();
					
					$objectChagesArray['id'] = $id = $user->id;
					$objectChagesArray['email'] = $user->email;
					$objectChagesArray['encrypted_password'] = $user->password;
					$objectChagesArray['type'] = camel_case($user->role);
					$objectChagesArray['role'] = str_slug($user->role, '_');
					$objectChagesArray['created_at'] = $user->created_at;
					$objectChagesArray['updated_at'] = $user->updated_at;
					
					$this->versionObj->versionCreateEvent( json_encode($objectChagesArray) );
				endif;
			}
		
		}
        return array('success' => true, 'id'=>$id);
    }

    public function update(Request $request,$id){
		$validator = Validator::make($request->all(), [
			'email' => 'unique:users,email,'.$request->id,
			'password' => 'min:8|max:72|confirmed',
		]);
	
		if ($validator->fails()) {
			$messages = $validator->errors();
			$errors = array();
			
			if($messages->has('email'))
			{
				$errors['email'] = $messages->first('email');
			}
			
			if($messages->has('password'))
			{
				$errors['password'] = $messages->first('password');
			}
			
			return array('errors' => json_encode($errors));
		} // Validation Ends
		else{
			$id = $request->id;
			$userObjectJson = $this->userRepository->getUserObjectJson($request->id);
				
			if($this->userRepository->AddOrUpdateSuperAdmin($request)){
				$objectChanges = $this->userRepository->getObjectChanges($userObjectJson);
				$this->versionObj->versionUpdateEvent($userObjectJson, $objectChanges);
			}
			
			return array('success' => true, 'id'=>$id);
			
		}
    }

    public function show($id){
        
        $user=$this->userRepository->getUserByID($id);
		$user->versions = User::find($id)->Version;
        return $user;
    }

    public function destroy($id){
        $user=$this->userRepository->DeleteUserByID($id);
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
        $admins= $this->userRepository->getFilteredUsers("Super Admin",$query,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);

        return $admins;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        $superadmins=$this->userRepository->getUsersByID($ids);
        return $superadmins;
    }

    public function deletebyids(){
        $ids=Input::get('ids');
		$userObjectJson = $this->userRepository->getUserObjectJson($ids);
		if($this->userRepository->DeleteUserByID($ids)){
			$this->versionObj->versionDestroyEvent($userObjectJson);
		}
        
        return array('success' => true);
    }
}
