<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function Version(){
        return $this->hasMany('App\Models\Version','item_id');
    }
	
    public function Tagging(){
        return $this->hasMany('App\Models\Tagging','provider_id');
    }
	
    public function isAdmin(){
        return ($this->role == "Admin")? true:false;
    }

    public function isUser(){
        return ($this->role == "User")? true:false;
    }

    public function Role(){
        return $this->role;
    }
}
