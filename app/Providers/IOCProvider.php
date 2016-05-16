<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class IOCProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('App\Repositories\Abstracts\IUserRepository', 'App\Repositories\Concrete\UserRepository');
		$this->app->bind('App\Repositories\Abstracts\IContactRequestRepository', 'App\Repositories\Concrete\ContactRequestRepository');
		$this->app->bind('App\Repositories\Abstracts\ILeadsRepository', 'App\Repositories\Concrete\LeadsRepository');
		$this->app->bind('App\Repositories\Abstracts\ITagRepository', 'App\Repositories\Concrete\TagRepository');
		$this->app->bind('App\Repositories\Abstracts\IVersionsRepository', 'App\Repositories\Concrete\VersionsRepository');
		$this->app->bind('App\Repositories\Abstracts\IVersionAssociationRepository', 'App\Repositories\Concrete\VersionAssociationRepository');
		$this->app->bind('App\Repositories\Abstracts\ITaggingRepository', 'App\Repositories\Concrete\TaggingRepository');
		$this->app->bind('App\Repositories\Abstracts\ISettingRepository', 'App\Repositories\Concrete\SettingRepository');
		$this->app->bind('App\Repositories\Abstracts\IPackageRepository', 'App\Repositories\Concrete\PackageRepository');
    }
}
