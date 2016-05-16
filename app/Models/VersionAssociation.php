<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VersionAssociation extends Model
{

    public function Version(){
    	return $this->belongsTo('App\Models\Version');
    }
}
