<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Repositories\Abstracts\ITagRepository;
use App\Models\Tag;
use Illuminate\Support\Facades\Input;
use DB;
use Log;

class TagController extends Controller
{
    public function __construct(ITagRepository $tagRepository)
    {
        //$this->middleware('admin');
        $this->tagRepository = $tagRepository;
    }

    public function gearTag(){
        $type='gear';
        return Tag::select('id','name')->where('type',$type)->get();
    }
    
     public function imageTag(){
        $type='image';
        return Tag::select('id','name')->where('type',$type)->get();
    }
    
}
