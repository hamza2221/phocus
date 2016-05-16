<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\Abstracts\IUserRepository;
use App\Repositories\Abstracts\IVersionsRepository;
use App\Repositories\Abstracts\IVersionAssociationRepository;
use App\Repositories\Abstracts\ITaggingRepository;

use App\Models\User;
use App\Models\Tagging;
use App\Models\Version;
use App\Emailer\Emailer;

use Log;
use Illuminate\Support\Facades\Input;

use DB;
use Validator;

class ProviderController extends Controller
{
	public $taggingRepository;
	private $objVersion;
	private $objVAssociation;
	
	public function __construct(IUserRepository $userRepository, IVersionsRepository $objVersion, IVersionAssociationRepository $objVAssociation,ITaggingRepository $taggingRepository)
    {
        
        //$this->middleware($this->guestMiddleware(), ['except' => 'logout']);
        $this->middleware('admin');
        $this->userRepository = $userRepository;
    	$this->objVersion = $objVersion;
		$this->objVAssociation = $objVAssociation;
		$this->taggingRepository = $taggingRepository;
	}

    public function index(){
        $providers=User::where('role','Provider')->get();
		return $providers;
    }
	
	/*	Export Admin Data	*/
	public function exportData(){
		$_POST['selectedAdmins'] = explode(',', str_replace(array('[',']'), '', $_POST['selectedAdmins'][0]));
		return $this->userRepository->exportAdminData('Provider');
	}

	public function store(Request $request){
        
        $provider= (array) json_decode(Input::get('model'));
		
		$validator = Validator::make($provider, [
			'email' => (array_key_exists('id',$provider) && $provider['id'] > 0)? 'unique:users,email,'.$provider['id']:'required|email|unique:users',
			
			'portfolio' => 'url',
			
			'password' => ((array_key_exists('id',$provider) && $provider['id'] > 0)? 'min:8|max:72|confirmed':'required|min:8|max:72|confirmed'),
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
			
			if($messages->has('portfolio'))
			{
				$errors['portfolio'] = $messages->first('portfolio');
			}
			
			return array('errors' => json_encode($errors));
		} // Validation Ends
		else
		{
			$provider= json_decode(Input::get('model'));
			$data = Input::all();
			
			if(isset($provider->id)){
				$id = $provider->id;
				
				//	Getting provider current object before update
				$userObjectJson = $this->userRepository->getUserObjectJson($provider->id);
				
				// update data
				$jsonFilesData = json_decode($this->userRepository->AddOrUpdateProvider($data));
				
				// Get object changes
				$objectChanges = (array) json_decode($this->userRepository->getObjectChanges($userObjectJson));
				
				$profile_pic = Input::file('profile_pic');
				if(array_key_exists('picture', $objectChanges) && property_exists($jsonFilesData, 'profile_picture_meta')){
	
						$objectChanges['picture'] = $jsonFilesData->profile_picture_meta;
				}
				
				$w9_form = Input::file('w9_form');
				if(array_key_exists('w9_form', $objectChanges) && property_exists($jsonFilesData, 'w9form_meta')){
	
						$objectChanges['w9_form'] = $jsonFilesData->w9form_meta;
				}
				
				//	Update Log in version table
				$this->objVersion->versionUpdateEvent($userObjectJson, json_encode($objectChanges));
				
				if(Tagging::where('provider_id', $provider->id)->delete()){
					Version::where('item_type','tagging')->where('item_id', $provider->id)->delete();
				}
				
				// Save Provider Tags
				if($request->tags){
					
					$tagsArr = array();
					$userTags = json_decode($request->tags);
					
					foreach($userTags as $tag):
						$tagsArr[] = $tag->id;
					endforeach;
					
					$taggingInfo = json_decode($this->taggingRepository->addTagging($provider->id,$tagsArr));
	  
					foreach($taggingInfo as $info){
						$response = $this->objVersion->versionCreateEvent_Tagging(json_encode($info));
						if($response > 0){
						  $this->objVAssociation->saveVersionInfo($response, 'provider_id', $provider->id);
						}
					}
				}
				
			}
			else{
				
				$jsonFilesData = json_decode($this->userRepository->AddOrUpdateProvider($data));
				//sending new provider email
				$emailer= new Emailer;
				$emailer->newProviderEmail($provider);
				$objectChagesArray = array();
				$user = User::where('email', $provider->email)->first();
				
				$id = $user->id;
				
				$objectChagesArray['id'] = $user->id;
				$objectChagesArray['email'] = $user->email;
				$objectChagesArray['name'] = $user->name;
				
				if(!empty($jsonFilesData) && property_exists($jsonFilesData, 'profile_picture_meta')){
					$objectChagesArray['picture'] = $jsonFilesData->profile_picture_meta;
				}
				
				$objectChagesArray['years_experience'] = $user->years_experience;
				$objectChagesArray['zipcode'] = $user->zipcode;
				$objectChagesArray['phone_number'] = $user->phone_number;
				$objectChagesArray['portfolio'] = $user->portfolio;
				$objectChagesArray['alternate_number'] = $user->alternate_number;
				$objectChagesArray['country'] = $user->country;
				$objectChagesArray['work_area_radio'] = $user->work_area_radio;
				
				
				if(!empty($jsonFilesData) && property_exists($jsonFilesData, 'w9form_meta')){
					$objectChagesArray['w9form'] = $jsonFilesData->w9form_meta;
				}
				
				
				$objectChagesArray['encrypted_password'] = $user->password;
				$objectChagesArray['type'] = camel_case($user->role);
				$objectChagesArray['role'] = str_slug($user->role, '_');
				
				
				$objectChagesArray['created_at'] = $user->created_at;
				$objectChagesArray['updated_at'] = $user->updated_at;
				
				$this->objVersion->versionCreateEvent( json_encode($objectChagesArray) );
				
				// Save Provider Tags
				if($request->tags){
					
					$tagsArr = array();
					$userTags = json_decode($request->tags);
					
					foreach($userTags as $tag):
						$tagsArr[] = $tag->id;
					endforeach;
					
					$taggingInfo = json_decode($this->taggingRepository->addTagging($user->id,$tagsArr));
	  
					foreach($taggingInfo as $info){
						$response = $this->objVersion->versionCreateEvent_Tagging(json_encode($info));
						if($response > 0){
						  $this->objVAssociation->saveVersionInfo($response, 'provider_id', $user->id);
						}
					}
				}
				
			}

			return array('success' => true, 'id'=>$id);
		
		}
    }

    public function update(Request $request){
		
        $provider= (array) json_decode(Input::get('model'));
		
		$validator = Validator::make($provider, [
			'email' => 'unique:users,email,'.$provider->id,
			'password' => 'min:8|max:72|confirmed',
			'portfolio' => 'url',
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
			
			if($messages->has('portfolio'))
			{
				$errors['portfolio'] = $messages->first('portfolio');
			}
			return array('errors' => json_encode($errors));
		}	// Validation Ends
		else{
			
			Log::info('here');
			$request=Input::all();
			//Log::info('request: '.print_r($request,true));
			$this->userRepository->AddOrUpdateProvider($request);
			return array('success' => true);
		}
    }

    public function show($id){
        $user = $this->userRepository->getUserByID($id);
		$user->versions = User::find($id)->Version;
		$user->tagging = User::find($id)->Tagging;
		
		if($user->role=='Provider'){
			$tags = Tagging::where('provider_id',$id)->get();
			$tagsArr = array();
			foreach($tags as $tag){
				$tagsArr[] = Tagging::find($tag->id)->Tag;
			}
			$user->tags = $tagsArr;
		}
		
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
        $providers= $this->userRepository->getFilteredUsers("Provider",$query,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
		
		foreach($providers as $provider){
			if (filter_var($provider->portfolio, FILTER_VALIDATE_URL) === FALSE) {
				$provider->portfolio='';
			}
		}
		
		return $providers;
    }

    public function getbyids(){
        $ids=Input::get('ids');
        Log::info('ids: '.print_r($ids, true));
        $providers=$this->userRepository->getUsersByID($ids);
        Log::info('providers: '.print_r($providers, true));
        return $providers;
    }

	public function deletebyids(){
		$ids=Input::get('ids');
		$userObjectJson = $this->userRepository->getUserObjectJson($ids);
		if($this->userRepository->DeleteUserByID($ids)){
			$this->objVersion->versionDestroyEvent($userObjectJson);
		}
        
        return array('success' => true);
    }
    
}
