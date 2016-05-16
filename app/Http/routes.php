<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/test', function () {
echo 'yes';
     \Storage::disk('s3')->makeDirectory('1');
    //$s3->put('myfile.txt', 'This is a dummy file with some content', 'public');
});
Route::get('/', function () {

    return view('welcome');
});

Route::post('/img_upload', 'Frontend\IndexController@profile_image_upload');
Route::post('/w9file_upload', 'Frontend\IndexController@w9file_upload');
//Route::get('/w9file_download/{id}/{filename}', 'Frontend\IndexController@w9file_download');


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});


Route::group(['middleware' => 'web'], function () {
	Route::auth();
	Route::get('/test', 'HomeController@test');
	Route::post('/auth/login', 'Frontend\AuthController@doLogin');
	Route::post('/auth/checkEmail', 'Frontend\AuthController@checkEmail');
	Route::post('/auth/registration', 'Frontend\AuthController@registration');

    Route::get('/home', 'HomeController@index');
    Route::get('/user', 'UserController@home');
    Route::post('/user/getallforddl', 'UserController@getallforddl');
    
    
    Route::resource('contact_request','ContactRequestController');
    Route::resource('admin','AdminController');
    Route::resource('superadmin','SuperAdminController');
    Route::resource('lead','LeadController');
	Route::resource('setting','SettingController');
	Route::resource('package','PackageController');
    Route::resource('tag','TagController');
    Route::resource('provider','ProviderController');
    Route::resource('version','VersionController');
    Route::resource('version_association','VersionAssociationController');

    Route::group(['prefix' => 'admin'], function(){
		Route::get('/', 'AdminController@home');
    	Route::post('filter', 'AdminController@filter');
    	Route::post('getbyids', 'AdminController@getbyids');
    	Route::post('deletebyids', 'AdminController@deletebyids');
		Route::post('exportdata', 'AdminController@exportAdminData');
		
		//	PAPERTRAIL
		Route::get('versions', 'VersionController@index');
		Route::post('versions/exportdata', 'VersionController@exportData');
		
		Route::get('version_associations', 'VersionAssociationController@index');
		Route::post('version_associations/exportdata', 'VersionAssociationController@exportData');
		
		//      Dashboard
		Route::get('dashboard/analytics', 'DashboardController@getAnalytics');
	});

	Route::group(['prefix' => 'superadmin'], function(){
		Route::post('filter', 'SuperAdminController@filter');
		Route::post('getbyids', 'SuperAdminController@getbyids');
    	Route::post('deletebyids', 'SuperAdminController@deletebyids');
		Route::post('exportdata', 'AdminController@superAdminExport');
	});

	Route::group(['prefix' => 'contact_request'], function(){
		Route::post('filter', 'ContactRequestController@filter');
		Route::post('getbyids', 'ContactRequestController@getbyids');
    	Route::post('deletebyids', 'ContactRequestController@deletebyids');
		Route::post('exportdata', 'ContactRequestController@exportData');
	});
	
	Route::group(['prefix' => 'lead'], function(){
		Route::post('filter', 'LeadController@filter');
		Route::post('getbyids', 'LeadController@getbyids');
    	Route::post('deletebyids', 'LeadController@deletebyids');
		Route::post('exportdata', 'LeadController@exportData');
	});
	
	Route::group(['prefix' => 'tag'], function(){
		Route::post('filter', 'TagController@filter');
		Route::post('getbyids', 'TagController@getbyids');
    	Route::post('deletebyids', 'TagController@deletebyids');
		Route::post('exportdata', 'TagController@exportData');
		Route::get('get/{type?}', 'TagController@index');
		Route::post('update_positions', 'TagController@updatePositions');
		Route::post('getassociatedvesions','TagController@getassociatedvesions');
		
	});

	Route::group(['prefix' => 'provider'], function(){
		Route::post('filter', 'ProviderController@filter');
		Route::post('getbyids', 'ProviderController@getbyids');
    	Route::post('deletebyids', 'ProviderController@deletebyids');
		Route::post('exportdata', 'ProviderController@exportData');
		Route::post('getallforddl', 'ProviderController@getallforddl');
	});

	Route::group(['prefix' => 'version'], function(){
		Route::post('filter', 'VersionController@filter');
		Route::post('getbyids', 'VersionController@getbyids');
    	Route::post('deletebyids', 'VersionController@deletebyids');
		Route::post('exportdata', 'VersionController@superAdminExport');
	});

	Route::group(['prefix' => 'version_association'], function(){
		Route::post('filter', 'VersionAssociationController@filter');
		Route::post('getbyids', 'VersionAssociationController@getbyids');
    	Route::post('deletebyids', 'VersionAssociationController@deletebyids');
		Route::post('exportdata', 'VersionAssociationController@superAdminExport');
		Route::post('search', 'VersionAssociationController@search');
	});
	
	/*	Setting	*/
	Route::group(['prefix' => 'setting'], function(){
		Route::post('filter', 'SettingController@filter');
		Route::post('getbyids', 'SettingController@getbyids');
    	Route::post('deletebyids', 'SettingController@deletebyids');
		Route::post('exportdata', 'SettingController@exportData');
	});
	
	/*	Packages	*/
	Route::group(['prefix' => 'package'], function(){
		Route::post('filter', 'PackageController@filter');
		Route::post('getbyids', 'PackageController@getbyids');
    	Route::post('deletebyids', 'PackageController@deletebyids');
		Route::post('exportdata', 'PackageController@exportData');
	});
	
	
	/**************************************
	*	FRONTEND ROUTES
	***************************************/
	
	Route::group(['namespace' => 'Frontend'], function(){
		Route::get('/', 'IndexController@home');
		Route::get('/resetpassword/{token}', 'IndexController@resetPassword');
	});
	
	Route::group(['namespace' => 'Frontend'], function(){
		Route::get('/user_details', 'IndexController@dashboard');
		Route::post('/store_profile_info/{id}', 'IndexController@store_profile_info');
		Route::post('/register_client', 'IndexController@register_client');
		Route::post('/frontend_contact_request', 'ContactRequestController@store');
		Route::get('/gearTag', 'TagController@gearTag');
        Route::get('/imageTag', 'TagController@imageTag');
	});
    
});
