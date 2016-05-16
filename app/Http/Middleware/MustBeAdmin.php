<?php

namespace App\Http\Middleware;

use Closure;
use Log;

class MustBeAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $user=$request->user();
        if($user){

            if($user->isAdmin()){
                return $next($request);
            }
            else if($user->isUser()){
                return redirect('/user');
            }
        }
        else{
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            } else {
                return redirect()->guest('login');
            }
            //return redirect()->guest('login');
        }
    }
}
