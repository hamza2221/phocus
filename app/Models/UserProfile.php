<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    public $table="UserProfile";

    protected $fillable = [
        'FirstName', 'LastName', 'UserID',
    ];

    public function User(){
    	return $this->belongsTo('App\Models\User','UserID');
    }
}
