<?php
namespace App\Listeners;

use App\Events\PodcastWasPurchased;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use Carbon\Carbon;
use Auth;
use Request;
use DB;

class UserEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  PodcastWasPurchased  $event
     * @return void
     */
    
	public function handle($event)
    {
		$user = DB::table('users')->where('id', Auth::user()->id)->first();
		
		$data = array();
		$data['current_sign_in_at'] = Carbon::now();
		$data['current_sign_in_ip'] = Request::ip();
		$data['sign_in_count'] = 1;
		$data['last_sign_in_at'] = Carbon::now();
		$data['last_sign_in_ip'] = Request::ip();
		
		$data['sign_in_count'] = $user->sign_in_count + 1;
		$data['last_sign_in_at'] = $user->current_sign_in_at;
		$data['last_sign_in_ip'] = $user->current_sign_in_ip;
		
		if(Request::has('remember')){
			$data['remember_created_at'] = Carbon::now();
		}
		
		DB::table('users')->where('id', $user->id)->update($data);
	}
}