<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tagging extends Model
{
	protected $table = 'tagging';
	
    public function User(){
    	return $this->belongsTo('App\Models\User','provider_id');
    }
	
	public function Tag(){
		return $this->belongsTo('App\Models\Tag');
	}
}
