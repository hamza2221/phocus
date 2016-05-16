<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Carbon\Carbon;

use App\Models\Lead;
use App\Models\Contact_request;
use App\Models\User;
use App\Models\Tag;
use App\Models\Version;
use App\Models\VersionAssociation;

class DashboardController extends Controller {
	
    public function getAnalytics(){
		$data['analytics']['admins'] = User::where('role', 'Admin')->count();
		$data['analytics']['admins_lastUsed'] = $this->getAgoTime(User::where('role', 'Admin')->max('updated_at'));
		
		$data['analytics']['contact_requests'] = Contact_request::count();
		$data['analytics']['contact_requests_lastUsed'] = $this->getAgoTime(User::max('updated_at'));
		
		$data['analytics']['leads'] = Lead::count();
		$data['analytics']['leads_lastUsed'] = $this->getAgoTime(Lead::max('updated_at'));
		
		$data['analytics']['providers'] = User::where('role', 'Provider')->count();
		$data['analytics']['providers_lastUsed'] = $this->getAgoTime(User::where('role', 'Provider')->max('updated_at'));
		
		$data['analytics']['superadmins'] = User::where('role', 'Super Admin')->count();
		$data['analytics']['superadmins_lastUsed'] = $this->getAgoTime(User::where('role', 'Super Admin')->max('updated_at'));
		
		$data['analytics']['tag_gears'] = Tag::where('type','gear')->count();
		$data['analytics']['tag_gears_lastUsed'] = $this->getAgoTime(Tag::where('type', 'gear')->max('updated_at'));
		
		$data['analytics']['tag_images'] = Tag::where('type','image')->count();
		$data['analytics']['tag_images_lastUsed'] = $this->getAgoTime(Tag::where('type', 'image')->max('updated_at'));
		
		$data['analytics']['versions'] = Version::count();
		$data['analytics']['versions_lastUsed'] = $this->getAgoTime(Version::max('updated_at'));
		
		$data['analytics']['version_associations'] = VersionAssociation::count();
		$data['analytics']['version_associations_lastUsed'] = $this->getAgoTime(VersionAssociation::max('updated_at'));
		return $data;
	}
	
	private function getAgoTime($timestamp){
		return Carbon::createFromTimeStamp(strtotime($timestamp))->diffForHumans();
	}
}
