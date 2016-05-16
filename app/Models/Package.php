<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Package extends Model
{
	protected $dates = ['created_at', 'updated_at', 'deleted_at'];
	
	public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('F d, Y H:i');
    }
}
