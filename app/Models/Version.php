<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Version extends Model
{

    public function User(){
    	return $this->belongsTo('App\Models\User','item_id');
    }
	
	public function versionAssociation(){
		return $this->hasMany('App\Models\VersionAssociation','version_id');
	}
}
