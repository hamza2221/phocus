<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    public $table="usertypes";

    public function Users()
    {
        return $this->hasMany('App\Models\User','UserTypeID','ID');
    }
}
