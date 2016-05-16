<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
	public function Tag(){
		return $this->hasMany('App\Models\Tagging','tag_id');
	}
}
