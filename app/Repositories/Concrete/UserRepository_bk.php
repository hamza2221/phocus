<?php


namespace App\Repositories\Concrete;
use App\Repositories\Abstracts\IUserRepository;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use XMLWriter;
use Log;
use Illuminate\Pagination\Paginator;
use App\Constants\Roles;
use Illuminate\Support\Facades\Input;
use Storage;
use Carbon\Carbon;

class UserRepository implements IUserRepository {

	 public function getUserByID($id){
	   $user=  User::find($id);
	   return $user;
	 }

	 public function AddOrUpdateAdmin(Request $request){
		
	 	$user=new User();
	 	if($request->id>0){
	 		$user=User::find($request->id);
	 	}
	 	$user->name=$request->name;
	 	$user->email=$request->email;
	 	if($request->password){
	 		$user->password=bcrypt($request->password);
	 	}
	 	//$user->role=Roles::Admin;
	 	$user->role=(isset($request->role)?$request->role:Roles::Admin);
	 	return $user->save();
		
	 }

	 public function DeleteUserByID($ID){
		 $user = User::find($ID);
		 $user->status = '0';
		 
	 	if($user->save()){
			return true;
		}
		return false;
		
		//User::where('id',$ID)->delete();
		//\Storage::disk('profiles')->deleteDirectory($ID);
	 }
	 
	 
	 public function getAdminData(){
		$data = $headings = array();

		if($_POST['export_to'] == 'csv' && ! array_key_exists('skip_header', $_POST)){
			if(array_key_exists('users', $_POST['schema'])){
				$csvhead = array();
				foreach($_POST['schema']['users'] as $field){
					$csvhead[] = ucfirst((string) str_replace('_', ' ', $field));
				}
				$headings[] = $csvhead;
			}
			
			if(array_key_exists('versions', $_POST['schema'])){
				$csvhead = array();
				foreach($_POST['schema']['versions'] as $field){
					$csvhead[] = ucfirst((string) str_replace('_', ' ', $field) . ' [Versions]');
				}
			}
			$headings[] = $csvhead;
			$data[] = call_user_func_array('array_merge', $headings);
		}
		
		if($_POST['selectedAdmins'][0]==''){
			$users = User::where('role',$_POST['role'])->get();
		}else{
			$users = User::find($_POST['selectedAdmins']);
		}
		
		foreach($users as $user){
			$userdata = array();
			
			if(array_key_exists('users', $_POST['schema'])){
				
				foreach($_POST['schema']['users'] as $field){
					
					if($_POST['export_to'] == 'csv'):
						$userdata[] = (empty($user->$field) || $user->$field=='0000-00-00 00:00:00')? '-' : (string)$user->$field;
					else:
					  	$userdata[$field] = (empty($user->$field) || $user->$field=='0000-00-00 00:00:00')? '-' : (string)$user->$field;
					endif;
				}
				
			}
			
			if(array_key_exists('versions', $_POST['schema'])){
				foreach($_POST['schema']['versions'] as $field){
					if($_POST['export_to'] == 'csv'):
						$userdata[] = ($user->Version == false || empty($user->Version->$field) || $user->Version->$field=='0000-00-00 00:00:00')? '-':(string)$user->Version->$field;
					else:	
						$userdata['versions'][$field] = ($user->Version == false || empty($user->Version->$field) || $user->Version->$field=='0000-00-00 00:00:00')? '':(string)$user->Version->$field;
					endif;
				}
			}
			
			$data[] = $userdata;
		}
		
		return $data;
	}
	
	public function exportAdminData($role){
	  if(array_key_exists('schema', $_POST)){	
		  
		  $_POST['role'] = $role;
		  
		  switch($_POST['export_to']){
			  case 'csv':
				  return $this->exportCSV();
				  break;
			  
			  case 'json':
				  return $this->exportJSON();
				  break;
			  	
			  case 'xml':
				  return $this->exportXML();
				  break;
			    
		  }
		  
	  }
	}
	
	public function exportCSV(){

		$response = new StreamedResponse(function(){
			$rows = $this->getAdminData();
			
            // Open output stream
            $handle = fopen('php://output', 'w');
			
            // Get all users
			foreach ($rows as $row) {
				
				if($_POST['encoding_to'] != 'UTF-8'){
				  foreach($row as $key => $val):
					  $row[$key] = chr(255) . chr(254) /* BOM */ . mb_convert_encoding($val, $_POST['encoding_to']);
				  endforeach;
				}
				
				fputcsv($handle, $row, $_POST['col_sep']);
			}

			// Close the output stream
            fclose($handle);
        }, 200, [
                'Content-Type' => 'text/csv',
                'Content-Disposition' => 'attachment; filename="'.str_slug($_POST['role'], '_').'_'.date('Y-m-d-H-i-s').'.csv"',
            ]);

        return $response;
	}
	
	public function exportJSON(){
		$data = json_encode($this->getAdminData());
		header('Content-disposition: attachment; filename=file.json');
		header('Content-type: application/json');
		return $data;
	}
	
	public function exportXML(){
		$data = $this->getAdminData();
		
		$xml = new XMLWriter();
		$xml->openMemory();
		$xml->startDocument('1.0', $_POST['encoding_to']); //'UTF-8'
		$xml->startElement('Admins');
		$xml->text("\n\t");
		foreach($data as $row){
			foreach($row as $key => $val){
				
				if(is_array($val)){
					$xml->text("\n\t");
					$xml->startElement($key);
					
					foreach($val as $versionKey => $versionVal){
						$xml->text("\n\t\t");
						$xml->startElement($versionKey);
						$xml->text($versionVal);
						$xml->endElement();
					}
					
					$xml->text("\n\t");
					$xml->endElement();
					
				}
				else{
					$xml->startElement($key);
					$xml->text($val);
					$xml->endElement();
					$xml->text("\n\t");
				}
			}
		}
		
		$xml->text("\n");
		$xml->endElement();
		$xml->endDocument();
		$xmlDoc = $xml->outputMemory();

		header('Content-type: text/xml');
		header('Content-Disposition: attachment; filename="downloaded.xml"');
		return $xmlDoc;
	}

	public function getFilteredUsers($role,$search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination){
		$query=User::query();
		$query->where("role","=",$role);
		$query->where("status", '1');
		$query->where(function($q) use ($search_term){
			$q->where("name","LIKE","%$search_term%");
			$q->orWhere("email","LIKE","%$search_term%");
		});
		
		if( !empty( $filters ) )
		{
			$query->where(function($q) use ($search_term,$filters){
		    foreach ($filters as  $filter) {
		    	$search_term=$filter['query'];
		    	switch ($filter["operator"]) {
		    		case 'like':
		    			$q->where($filter["filter"],"LIKE","%$search_term%");
		    			break;
		    		case 'is':
		    			$q->where($filter["filter"],"=","$search_term");
		    			break;
		    		case 'starts_with':
		    			$q->where($filter["filter"],"LIKE","$search_term%");
		    			break;
		    		case 'ends_with':
		    			$q->where($filter["filter"],"LIKE","%$search_term");
		    			break;
		    		case '_not_null':
		    			$q->whereNotNull($filter["filter"]);
		    			break;
		    		case '_null':
		    			$q->whereNull($filter["filter"]);
		    			break;
		    		default:
		    			
		    			break;
		    	}
		    }
		});
		}
		$query->orderBy($orderBy,$sortOrder);
		$currentPage=$pageNumber;
		Paginator::currentPageResolver(function () use ($currentPage) {
        	return $currentPage;
    	});
		
		$admins= ($pagination==1)? $query->paginate(5):$query->get();
		Log::info('$admins: '.print_r($admins, true));
		return $admins;
	}

	public function getUsersByID($ids){
		return User::whereIn('id', $ids)->get();
	}

	public function deleteUsersByID($ids){
		User::whereIn('id',$ids)->delete();
		foreach ($ids as $id) {
			\Storage::disk('profiles')->deleteDirectory($id);
		}
	}

	public function AddOrUpdateSuperAdmin(Request $request){
		$user=new User();
	 	if($request->id>0){
	 		$user=User::find($request->id);
	 	}
	 	$user->name=$request->name;
	 	$user->email=$request->email;
	 	if($request->password){
	 		$user->password=bcrypt($request->password);
	 	}
	 	//$user->role=Roles::SuperAdmin;
	 	$user->role=(isset($request->role)?$request->role:Roles::SuperAdmin);
	 	return $user->save();
	}

	public function AddOrUpdateProvider($request){
		$dataProviderObject = array();
		
		$user=new User();
		$profile_pic = Input::file('profile_pic');
		$w9_form= Input::file('w9_form');
		
		Log::Info("profile_pic:".print_r(Input::file('profile_pic'),true));
		Log::Info("w9_form:".print_r(Input::file('w9_form'),true));
		
		$oldPicName="";
		$oldw9_form="";
		
		$provider=json_decode(Input::get('model'));
		Log::Info("provider:".print_r($provider,true));
		
		$isUpdate=false;
	 	if(isset($provider->id)){
	 		Log::Info("Is Update");
	 		$user=User::find($provider->id);
	 		$isUpdate=true;
	 		$oldPicName=$user->picture;
	 		$oldw9_form=$user->w9_form;
	 	}
		
	 	$user->name=$provider->name;
	 	$user->email=$provider->email;
	 	if($provider->password){
	 		$user->password=bcrypt($provider->password);
	 	}
	 	//$user->role=Roles::Provider;
	 	$user->role=(isset($request->role)?$request->role:Roles::Provider);
	 	$user->years_experience=$provider->years_experience;
	 	$user->zipcode=$provider->zipcode;
	 	$user->phone_number=$provider->phone_number;
	 	
		if(property_exists($provider, 'portfolio')){
			$user->portfolio=$provider->portfolio;
		}
		
		if(property_exists($provider, 'alternate_number')){
	 		$user->alternate_number=$provider->alternate_number;
		}
		
		if(property_exists($provider, 'country')){
	 		$user->country=$provider->country;
		}
		
		if(property_exists($provider, 'work_area_radio')){
	 		$user->work_area_radio=$provider->work_area_radio;
		}
		
	 	$user->save();
	 	if(!$isUpdate){
	 		
	 		
			
			if(isset($profile_pic)){
				
				\Storage::disk('profiles')->makeDirectory($user->id,777, true);
				$move=Storage::disk('profiles')->put($user->id."/".$profile_pic->getClientOriginalName(), file_get_contents($profile_pic));
				
				if($move){
					$user->picture=$profile_pic->getClientOriginalName();
					$path = storage_path() . '/profiles/' . $user->id . "/" . $profile_pic->getClientOriginalName();
					$dataProviderObject['profile_picture_meta'] = $this->getFileMetaInfo($path,$profile_pic->getClientOriginalName(),'picture');
				}
				
			}
			
			if(isset($w9_form)){
	 			
				\Storage::disk('w9_forms')->makeDirectory($user->id,777, true);
				$move = Storage::disk('w9_forms')->put($user->id."/".$w9_form->getClientOriginalName(), file_get_contents($w9_form));
				
				if($move){
					$user->w9_form=$w9_form->getClientOriginalName();
					$path = storage_path() . '/w9_forms/' . $user->id . "/" . $w9_form->getClientOriginalName();
					$dataProviderObject['w9form_meta'] = $this->getFileMetaInfo($path, $w9_form->getClientOriginalName(), 'w9_form');
				}
			
			}
	 		
			$user->save();
	 	}
	 	else{
	 		if(isset($profile_pic)){
				//$dataProviderObject['profile_picture_meta'] = $this->getFileMetaInfo($path, 'picture');
				
				/*	Profile Picture	start	*/
				$oldData=array();
				$path = storage_path() . '/profiles/' . $user->id . "/" . $oldPicName;
				
				if (File::exists($path))
				{
					$oldData = $this->getFileMetaInfo($path, $oldPicName, 'picture');
					\Storage::disk('profiles')->delete($user->id."/".$oldPicName);
				}
				
	 			$move = Storage::disk('profiles')->put($user->id."/".$profile_pic->getClientOriginalName(), file_get_contents($profile_pic));
				if($move){
					$user->picture=$profile_pic->getClientOriginalName();
					
					$path = storage_path() . '/profiles/' . $user->id . "/" . $profile_pic->getClientOriginalName();
					$dataProviderObject['profile_picture_meta'] = $this->getFileMetaInfo($path, $profile_pic->getClientOriginalName(), 'picture',$oldData);
				}
				/*	Profile Picture	End	*/
			}
			
			if(isset($w9_form)){
				/*	W9Form start	*/
				$oldData=array();
				$path = storage_path() . '/w9_forms/' . $user->id . "/" . $oldw9_form;
				if (File::exists($path))
				{
					$oldData = $this->getFileMetaInfo($path, $oldw9_form, 'w9_form');
					\Storage::disk('w9_forms')->delete($user->id."/".$oldw9_form);
				}
				
	 			
				$move = Storage::disk('w9_forms')->put($user->id."/".$w9_form->getClientOriginalName(), file_get_contents($w9_form));
				if($move){
					$user->w9_form=$w9_form->getClientOriginalName();
					
					$path = storage_path() . '/w9_forms/' . $user->id . "/" . $w9_form->getClientOriginalName();
					$dataProviderObject['w9form_meta'] = $this->getFileMetaInfo($path, $w9_form->getClientOriginalName(), 'w9_form', $oldData);
				}
				/*	W9Form start	*/
	 		}
			$user->save();
	 	}
		
		return json_encode($dataProviderObject);
	}
	
	public function getFileMetaInfo($path, $filename,$keyprefix, $oldData=''){
		$fileMeta = array();
		$oldData = (!empty($oldData))? (array) json_decode($oldData):array();
		
		$fileMeta[$keyprefix . '_file_name'] = $filename . ((!empty($oldData))? '~'.$oldData[$keyprefix . '_file_name']:'');
		$fileMeta[$keyprefix . '_content_type'] = File::mimeType($path).((!empty($oldData))? '~'.$oldData[$keyprefix . '_content_type']:'');
		$fileMeta[$keyprefix . '_file_size'] = File::size($path).((!empty($oldData))? '~'.$oldData[$keyprefix . '_file_size']:'');
		$fileMeta[$keyprefix . '_updated_at'] = Carbon::now().((!empty($oldData))? '~'.$oldData[$keyprefix . '_updated_at']:'');
		
		return json_encode($fileMeta);
	}
	
	function update($id, $request) {
        $user = User::find($id);
        $user->name = $request->name;
        $user->phone_number = $request->phone;
        $user->work_area_radio = $request->work_area_radio;
        $user->country = $request->country;
        $user->picture = $request->picture;
        $user->years_experience = $request->years_experience;
        $user->zipcode = $request->zip_code;
        $user->portfolio = $request->work_url;
        $user->completed_profile = 1;
		return $user->save();
    }

    function w9file_upload($id,$file_name){
    	$user = User::find($id);
        $user->w9_form = $file_name;
		return $user->save();
    }

	public function getUserObjectJson($id){
		
		$user = User::find($id);
		
		$objectChagesArray = array();		
		$objectChagesArray['id'] = $user->id;
		$objectChagesArray['email'] = $user->email;
		$objectChagesArray['encrypted_password'] = $user->password;
		$objectChagesArray['reset_password_token'] = $user->reset_password_token;
		$objectChagesArray['reset_password_sent_at'] = $user->reset_password_sent_at;
		$objectChagesArray['remember_created_at'] = $user->remember_created_at;
		$objectChagesArray['sign_in_count'] = $user->sign_in_count;
		$objectChagesArray['current_sign_in_at'] = $user->current_sign_in_at;
		$objectChagesArray['last_sign_in_at'] = $user->last_sign_in_at;
		$objectChagesArray['current_sign_in_ip'] = $user->current_sign_in_ip;
		$objectChagesArray['last_sign_in_ip'] = $user->last_sign_in_ip;
		$objectChagesArray['created_at'] = $user->created_at;
		$objectChagesArray['updated_at'] = $user->updated_at;
		$objectChagesArray['role'] = $user->role;
		$objectChagesArray['type'] = $user->role;
		$objectChagesArray['name'] = $user->name;
		$objectChagesArray['years_experience'] = $user->years_experience;
		
		if($user->picture != ''){
		  
		  $path = storage_path() . '/profiles/' . $user->id . "/" . $user->picture;
		  $pictureMeta = array();
		  $pictureMeta['picture_file_name'] = $user->picture;
		  $pictureMeta['picture_content_type'] = File::mimeType($path);
		  $pictureMeta['picture_file_size'] = File::size($path);
		  $pictureMeta['picture_updated_at'] = File::lastModified($path);
		  
		  $objectChagesArray['picture'] = $pictureMeta;
		  
		}else{
			$pictureMeta = array();
			$pictureMeta['picture_file_name'] = $user->picture;
			$pictureMeta['picture_content_type'] = '';
			$pictureMeta['picture_file_size'] = '';
			$pictureMeta['picture_updated_at'] = '';
			
			$objectChagesArray['picture'] = $pictureMeta;
		}
		
		$objectChagesArray['completed_profile'] = $user->completed_profile;
		$objectChagesArray['work_area_radio'] = $user->work_area_radio;
		$objectChagesArray['country'] = $user->country;
		$objectChagesArray['zipcode'] = $user->zipcode;
		$objectChagesArray['phone_number'] = $user->phone_number;
		$objectChagesArray['alternate_number'] = $user->alternate_number;
		$objectChagesArray['portfolio'] = $user->portfolio;
		
		
		if($user->w9_form != ''){
		  
		  $path = storage_path() . '/w9_forms/' . $user->id . "/" . $user->w9_form;
		  $formMeta = array();
		  $formMeta['w9_form_file_name'] = $user->w9_form;
		  $formMeta['w9_form_content_type'] = File::mimeType($path);
		  $formMeta['w9_form_file_size'] = File::size($path);
		  $formMeta['w9_form_updated_at'] = File::lastModified($path);
			  
		  $objectChagesArray['w9_form'] = $formMeta;
		  
		}else{
			
			$formMeta = array();
			$formMeta['w9_form_file_name'] = $user->w9_form;
			$formMeta['w9_form_content_type'] = '';
			$formMeta['w9_form_file_size'] = '';
			$formMeta['w9_form_updated_at'] = '';
			
			$objectChagesArray['w9_form'] = $formMeta;
		}
		
		return json_encode($objectChagesArray);
		
	}	// End function getUserObjectJson
	
	/*	to get object changes pass user object json before update	*/
	public function getObjectChanges($object_json){
		$oldUser = json_decode($object_json);

		$userId = $oldUser->id;
		
		$user = json_decode($this->getUserObjectJson($userId));
		
		$userObjectChanges = array();
		
		foreach($user as $key => $val){
			
			if($oldUser->$key != $val):
			
				if(is_object($val)){
					
					foreach($val as $subKey => $subVal):
						$userObjectChanges[$key][$subKey] = $oldUser->$key->$subKey .'~'. $subVal;
					endforeach;
				
				}
				else
				{
					$userObjectChanges[$key] = (string)$oldUser->$key .'~'. (string)$val;
				}
				
			endif;
		}
		
		return json_encode($userObjectChanges);
	}

	public function GetIdNameOnly($type){
		$users = User::where('role',$type)
				->select('id','name')
				->get();
		return $users;
	}
	 
}