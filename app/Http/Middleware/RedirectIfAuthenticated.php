<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            $user=$request->user();
            if($user){

            if($user->isAdmin()) {
                //return redirect()->intended('/admin_path_here');
                return redirect("/admin");
            }
            else if($user->isUser()){
                return redirect("/user");
            }
        }
            return redirect('/');
        }

        return $next($request);
    }
}
