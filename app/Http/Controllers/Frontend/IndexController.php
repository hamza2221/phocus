<?php

namespace App\Http\Controllers\Frontend;
use Storage;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Emailer\Emailer;
use App\Repositories\Abstracts\IUserRepository;
use App\Repositories\Abstracts\ILeadsRepository;
use App\Repositories\Abstracts\ITaggingRepository;
use App\Repositories\Abstracts\ITagRepository;
use App\Repositories\Abstracts\IVersionsRepository;
use App\Repositories\Abstracts\IVersionAssociationRepository;

use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

use App\Models\User;
use App\Models\Setting;

use Carbon\Carbon;
use DB;
use Image;

class IndexController extends Controller {

    Public $usersRepository;
    Public $leadsRequestRepository;
    Public $tagsRequestRepository;
    public $taggingRepository;
	private $objVersion;
	private $objVAssociation;

    public function __construct(IUserRepository $usersRepository, ILeadsRepository $leadsRepository,ITagRepository $tagsRepository,ITaggingRepository $taggingRepository, IVersionsRepository $objVersion, IVersionAssociationRepository $objVAssociation) {
        //$this->middleware($this->guestMiddleware(), ['except' => 'logout']);

        $this->usersRepository = $usersRepository;
        $this->leadsRequestRepository = $leadsRepository;
        $this->tagsRequestRepository = $tagsRepository;
        $this->taggingRepository=$taggingRepository;
		$this->objVersion = $objVersion;
		$this->objVAssociation = $objVAssociation;
    }

    public function home(Request $request) {
    	
		$data['user'] = $request->user();
        return view("layouts.frontendLayout")->withData($data);
    }

    public function dashboard(Request $request) {
        $user = $request->user();
        return $user;
    }

    public function store_profile_info(Request $request, $id) {
		
		$user = $request->user();
		
		// Getting user current object json
		$userObjectJsone = $this->usersRepository->getUserObjectJson($user->id);
		
		if($this->usersRepository->update($id, $request)){
			
			//	Update Log in version table
			$this->objVersion->versionUpdateEvent($userObjectJsone, $request->input('picture_meta'));
			//sending new provider email
			$provider=$this->usersRepository->getUserByID($id);
			$emailer= new Emailer;
			$emailer->newProviderEmail( $provider);
			$this->tagging($id,$request->tags);
		}
		
        return redirect(url('/#/dashboard'));
    }

    function register_client(Request $request) {
        $this->leadsRequestRepository->createLeads($request);
        return redirect(url('/'));
    }

    function profile_image_upload() {
		
        $id=input::get('user_id');
        $path=url('/storage/profiles')."/".$id.'/';
        Storage::disk('profiles')->makeDirectory($id,777, true);
        $image=input::file('picture');
        $filename  = time() . '.' . $image->getClientOriginalExtension();
        $full_path=$path.$filename;
        
		// Remove all existing images from directory
		File::cleanDirectory(storage_path() . '/profiles/' . $id);
		
        $move=Storage::disk('profiles')->put($id."/".$filename, file_get_contents($image));
        if ($move) {
			$path = storage_path() . '/profiles/' . $id . "/" . $filename;
			
			/*	Get Image Setting Start	*/
			$objSetting = new Setting();
			$settings = $objSetting->where('slug','thumbnail_image')
									->orWhere('slug','medium_image')
									->orWhere('slug','large_image')->get();
			/*	Get Image Setting End	*/
			
			/*	Creating Images of different sizes	*/
			foreach($settings as $setting){
				$size = explode('x',$setting->value);
				if($setting->slug=='thumbnail_image'){
					$newpath = storage_path() . '/profiles/' . $id . "/thumbnail_" . $filename;
				}
				elseif($setting->slug=='medium_image'){
					$newpath = storage_path() . '/profiles/' . $id . "/medium_" . $filename;
				}
				elseif($setting->slug=='large_image'){
					$newpath = storage_path() . '/profiles/' . $id . "/large_" . $filename;
				}
				
				$thumb=Image::make($path)->resize(intval($size[0]), intval($size[1]), function ($constraint) {
					$constraint->aspectRatio();
				})->save($newpath,60);
			}
			
			$path = storage_path() . '/profiles/' . $id . "/" . $filename;
			
			$file = File::get($path);
			$type = File::mimeType($path);
			$size = File::size($path);
			
			$pictureMeta = array();
			$pictureMeta['picture_file_name'] = $filename;
			$pictureMeta['picture_content_type'] = $type;
			$pictureMeta['picture_file_size'] = $size;
			$pictureMeta['picture_updated_at'] = Carbon::now();
			
			return Response::json(['path'=>$full_path, 'filename'=>$filename, 'picture_meta'=>json_encode($pictureMeta)]);
		}
        else{
            return Response::json(['success'=>false]);
        }
    }
	
	
    function tagging($provider_id,$tags){
	  $taggingInfo = json_decode($this->taggingRepository->addTagging($provider_id,$tags));
	  
	  foreach($taggingInfo as $info){
		  $response = $this->objVersion->versionCreateEvent_Tagging(json_encode($info));
		  if($response > 0){
		  	$this->objVAssociation->saveVersionInfo($response, 'provider_id', $provider_id);
		  }
	  }
	  
    }	//	End tagging function

    function w9file_upload() {
        $id=input::get('user_id');
        $path=url('/storage/w9_forms')."/".$id.'/';
        Storage::disk('w9_forms')->makeDirectory($id,777, true);
        $image=input::file('w9form');
        $filename  =  $image->getClientOriginalName();
        $full_path=$path.$filename;

        $move=Storage::disk('w9_forms')->put($id."/".$filename, file_get_contents($image));
        
		if ($move) {
			
			$path = storage_path() . '/w9_forms/' . $id . "/" . $filename;
			
			$fileMeta = array();
			$fileMeta['w9_form_file_name'] = $filename;
			$fileMeta['w9_form_content_type'] = File::mimeType($path);
			$fileMeta['w9_form_file_size'] = File::size($path);
			$fileMeta['w9_form_updated_at'] = Carbon::now();
			
			// Getting user current object json
			$userObjectJsone = $this->usersRepository->getUserObjectJson($id);
			
			if($this->usersRepository->w9file_upload($id,$filename)){
				//	Update Log version table
				$this->objVersion->versionUpdateEvent($userObjectJsone, json_encode($fileMeta));
			}
			
			
			return Response::json(['path'=>$full_path, 'filename'=>$filename, 'picture_meta'=>json_encode($fileMeta)]);
        }
        else{
            return Response::json(['success'=>false]);
        }
    }


    public function resetPassword(Request $request,$token){
    	//echo $token;
        $query=DB::table('password_resets');
        $query->where('token',$token);
        $query->select('email');
        $email=$query->first();
        //echo $email->email;
        $data['user'] = $request->user();
        if($email){
	        $data=array(
	        	'user'=>$request->user(),
	        	'email' => $email->email,
	        	'token'=>$token
	        );
    	}
        return view("frontend.resetpassword")->with($data);
        //return view("layouts.frontendlayout");
    }

    

}
