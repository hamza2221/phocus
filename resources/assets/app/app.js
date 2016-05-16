var phocusApp = angular.module('phocusApp', [
  'ngRoute',
  'phocusControllers',
  'phocusServices',
  'phocusDirectives',
  'phocusFilters',
  'ngStorage',
  'ui.bootstrap',
  'ngFileUpload',
  'as.sortable'
]);


phocusApp.constant('ApiUrl', 'http://localhost/phocus/');


phocusApp.config(['$routeProvider','$httpProvider','$windowProvider','ApiUrl',
	function ($routeProvider,$httpProvider,$windowProvider,ApiUrl) {

	 $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
            return {
                'responseError': function(rejection) {
                    var status = rejection.status;
                    var config = rejection.config;
                    var method = config.method;
                    var url = config.url;

                    if (status == 401) {
                    	console.log('here');
                    	var $window = $windowProvider.$get();
                        $window.location.href=ApiUrl+"login";
                    } else {
                        $rootScope.error = method + " on " + url + " failed with status " + status;
                    }

                    return $q.reject(rejection);
                }
            };
        });


      $routeProvider.
	    /********************
         * Routes of Dashboard
         *******************/
        when('/dashboard', {
            templateUrl: './resources/views/Admin/dashboard.html',
            controller: 'DashboardController'
        })
		
        .when('/admin', {
            templateUrl: './resources/views/Admin/admin.html',
            controller: 'AdminController'
        }).
        when('/admin/new', {
            templateUrl: './resources/views/Admin/admin_details.html',
            controller: 'AdminController'
        }).
        when('/admin/edit/:adminID', {
            templateUrl: './resources/views/Admin/admin_details.html',
            controller: 'AdminController'
        }).
        when('/admin/delete/:adminID', {
            templateUrl: './resources/views/Admin/admin_delete.html',
            controller: 'AdminController'
        }).
        when('/admin/show/:adminID', {
            templateUrl: './resources/views/Admin/admin_show.html',
            controller: 'AdminController'
        }).
        when('/admin/delete_bulk', {
            templateUrl: './resources/views/Admin/admin_bulk_delete.html',
            controller: 'AdminController'
        }).
	   when('/admin/export', {
            templateUrl: './resources/views/Admin/admin_export.html',
            controller: 'AdminExportController'
        }).
		
		//	Super Admin
		when('/superadmin', {
            templateUrl: './resources/views/SuperAdmin/superAdmin.html',
            controller: 'SuperAdminController'
        }).
        when('/superadmin/new', {
            templateUrl: './resources/views/SuperAdmin/details.html',
            controller: 'SuperAdminController'
        }).
        when('/superadmin/edit/:superadminID', {
            templateUrl: './resources/views/SuperAdmin/details.html',
            controller: 'SuperAdminController'
        }).
        when('/superadmin/delete/:superadminID', {
            templateUrl: './resources/views/SuperAdmin/delete.html',
            controller: 'SuperAdminController'
        }).
        when('/superadmin/show/:superadminID', {
            templateUrl: './resources/views/SuperAdmin/show.html',
            controller: 'SuperAdminController'
        }).
        when('/superadmin/delete_bulk', {
            templateUrl: './resources/views/SuperAdmin/delete_bulk.html',
            controller: 'SuperAdminController'
        }).
		
		when('/superadmin/export', {
            templateUrl: './resources/views/SuperAdmin/superadmin_export.html',
            controller: 'SuperAdminExportController'
        })
		
		
		
		
		
		/********************
         * Routes of Leads
         *******************/
        .when('/leads', {
            templateUrl: './resources/views/Lead/leads.html',
            controller: 'LeadsController'
        }).
        when('/lead/new', {
            templateUrl: './resources/views/Lead/details.html',
            controller: 'LeadsController'
        }).
        when('/lead/edit/:leadID', {
            templateUrl: './resources/views/Lead/edit.html',
            controller: 'LeadsController'
        }).
        when('/lead/delete/:leadID', {
            templateUrl: './resources/views/Lead/delete.html',
            controller: 'LeadsController'
        }).
        when('/lead/show/:leadID', {
            templateUrl: './resources/views/Lead/show.html',
            controller: 'LeadsController'
        })
        .
        when('/lead/delete_bulk', {
            templateUrl: './resources/views/Lead/delete_bulk.html',
            controller: 'LeadsController'
        })
		.when('/lead/export', {
            templateUrl: './resources/views/Lead/leads_export.html',
            controller: 'LeadsExportController'
        })
		
		/********************
         * Routes of Providers
         *******************/
        .when('/providers', {
            templateUrl: './resources/views/Provider/providers.html',
            controller: 'ProviderController'
        }).
        when('/provider/new', {
            templateUrl: './resources/views/Provider/details.html',
            controller: 'ProviderController'
        }).
        when('/provider/edit/:providerID', {
            templateUrl: './resources/views/Provider/edit.html',
            controller: 'ProviderController'
        }).
        when('/provider/delete/:providerID', {
            templateUrl: './resources/views/Provider/delete.html',
            controller: 'ProviderController'
        }).
        when('/provider/show/:providerID', {
            templateUrl: './resources/views/Provider/show.html',
            controller: 'ProviderController'
        })
        .
        when('/provider/delete_bulk', {
            templateUrl: './resources/views/Provider/delete_bulk.html',
            controller: 'ProviderController'
        })
        .when('/provider/export', {
            templateUrl: './resources/views/Provider/export.html',
            controller: 'ProviderExportController'
        })
		
		
		//	Tag Gears
		.when('/tag_gear', {
            templateUrl: './resources/views/Tag/tag.html',
            controller: 'TagController'
        })
		
		.when('/tag_gear/new', {
            templateUrl: './resources/views/Tag/details.html',
            controller: 'TagController'
        })
		
		.when('/tag_gear/export', {
            templateUrl: './resources/views/Tag/gear_export.html',
            controller: 'TagsExportController'
        }).
        when('/tag_gear/edit/:tagID', {
            templateUrl: './resources/views/Tag/details.html',
            controller: 'TagController'
        }).
        when('/tag_gear/delete/:tagID', {
            templateUrl: './resources/views/Tag/delete.html',
            controller: 'TagController'
        }).
        when('/tag_gear/show/:tagID', {
            templateUrl: './resources/views/Tag/show.html',
            controller: 'TagController'
        }).
        when('/tag_gear/delete_bulk', {
            templateUrl: './resources/views/Tag/delete_bulk.html',
            controller: 'TagController'
        })
		
		.when('/tag_gear/nestable', {
            templateUrl: './resources/views/Tag/sort.html',
            controller: 'TagController'
        })
		
		//	Tag Images
		.when('/tag_image', {
            templateUrl: './resources/views/Tag/tag.html',
            controller: 'TagController'
        })
		
		.when('/tag_image/new', {
            templateUrl: './resources/views/Tag/details.html',
            controller: 'TagController'
        }).
        when('/tag_image/edit/:tagID', {
            templateUrl: './resources/views/Tag/details.html',
            controller: 'TagController'
        }).
        when('/tag_image/delete/:tagID', {
            templateUrl: './resources/views/Tag/delete.html',
            controller: 'TagController'
        }).
        when('/tag_image/show/:tagID', {
            templateUrl: './resources/views/Tag/show.html',
            controller: 'TagController'
        }).
        when('/tag_image/delete_bulk', {
            templateUrl: './resources/views/Tag/delete_bulk.html',
            controller: 'TagController'
        })
		
		.when('/tag_image/export', {
            templateUrl: './resources/views/Tag/image_export.html',
            controller: 'TagsExportController'
        })
		.when('/tag_image/nestable', {
            templateUrl: './resources/views/Tag/sort.html',
            controller: 'TagController'
        })
		
		/********************
         * Routes of Contact Requests
         *******************/
        .when('/contact_request/new', {
            templateUrl: './resources/views/ContactRequest/details.html',
            controller: 'ContactRequestController'
        })
		.when('/contact_request/export', {
            templateUrl: './resources/views/ContactRequest/contact_request_export.html',
            controller: 'ContactRequestExportController'
        })
		.when('/contact_request/detail/:requestID', {
            templateUrl: './resources/views/ContactRequest/contact_request_detail.html',
            controller: 'ContactRequestController'
        }).
        when('/contact_request/edit/:requestID', {
            templateUrl: './resources/views/ContactRequest/details.html',
            controller: 'ContactRequestController'
        }).
        when('/contact_request/delete/:requestID', {
            templateUrl: './resources/views/ContactRequest/contact_request_delete.html',
            controller: 'ContactRequestController'
        }).
        when('/contact_request/show/:requestID', {
            templateUrl: './resources/views/ContactRequest/contact_request_show.html',
            controller: 'ContactRequestController'
        }).
        when('/contact_request/delete_bulk', {
            templateUrl: './resources/views/ContactRequest/delete_bulk.html',
            controller: 'ContactRequestController'
        }).
        when('/contact_request', {
            templateUrl: './resources/views/ContactRequest/contact_request.html',
            controller: 'ContactRequestController'
        })
		
		//	PAPERTRAIL
		.when('/paper_trail~version', {
            templateUrl: './resources/views/Version/version.html',
            controller: 'VersionController'
        }).
        when('/paper_trail~version/new', {
            templateUrl: './resources/views/Version/details.html',
            controller: 'VersionController'
        }).
        when('/paper_trail~version/edit/:versionID', {
            templateUrl: './resources/views/Version/details.html',
            controller: 'VersionController'
        }).
        when('/paper_trail~version/delete/:versionID', {
            templateUrl: './resources/views/Version/delete.html',
            controller: 'VersionController'
        }).
        when('/paper_trail~version/show/:versionID', {
            templateUrl: './resources/views/Version/show.html',
            controller: 'VersionController'
        }).
        when('/paper_trail~version/delete_bulk', {
            templateUrl: './resources/views/Version/delete_bulk.html',
            controller: 'VersionController'
        }).
        
        when('/paper_trail~version/export', {
            templateUrl: './resources/views/Version/version_export.html',
            controller: 'VersionExportController'
        })
        .
        
        when('/paper_trail~version/partial', {
            templateUrl: './resources/views/Version/_details.html',
            controller: 'VersionController'
        })
		
		//	Version Associations
		
        .when('/paper_trail~version_association', {
            templateUrl: './resources/views/VersionAssociation/version_association.html',
            controller: 'VersionAssociationController'
        }).
        when('/paper_trail~version_association/new', {
            templateUrl: './resources/views/VersionAssociation/details.html',
            controller: 'VersionAssociationController'
        }).
        when('/paper_trail~version_association/edit/:associationID', {
            templateUrl: './resources/views/VersionAssociation/details.html',
            controller: 'VersionAssociationController'
        }).
        when('/paper_trail~version_association/delete/:associationID', {
            templateUrl: './resources/views/VersionAssociation/delete.html',
            controller: 'VersionAssociationController'
        }).
        when('/paper_trail~version_association/show/:associationID', {
            templateUrl: './resources/views/VersionAssociation/show.html',
            controller: 'VersionAssociationController'
        }).
        when('/paper_trail~version_association/delete_bulk', {
            templateUrl: './resources/views/VersionAssociation/delete_bulk.html',
            controller: 'VersionAssociationController'
        }).
        
        when('/paper_trail~version_association/export', {
            templateUrl: './resources/views/VersionAssociation/version_associations_export.html',
            controller: 'VersionAssociationExportController'
        })
        
		/********************
         * Routes of Setting
         *******************/
        .when('/setting', {
            templateUrl: './resources/views/Setting/settings.html',
            controller: 'SettingController'
        })
		.when('/setting/new', {
            templateUrl: './resources/views/Setting/details.html',
            controller: 'SettingController'
        })
		.when('/setting/edit/:settingID', {
            templateUrl: './resources/views/Setting/edit.html',
            controller: 'SettingController'
        })
        .when('/setting/delete/:settingID', {
            templateUrl: './resources/views/Setting/delete.html',
            controller: 'SettingController'
        })
		.when('/setting/show/:settingID', {
            templateUrl: './resources/views/Setting/show.html',
            controller: 'SettingController'
        })
        
        .when('/setting/delete_bulk', {
            templateUrl: './resources/views/Setting/delete_bulk.html',
            controller: 'SettingController'
        })
		.when('/setting/export', {
            templateUrl: './resources/views/Setting/export.html',
            controller: 'SettingExportController'
        })
        
		/********************
         * Routes of Packages
         *******************/
        .when('/package', {
            templateUrl: './resources/views/Package/packages.html',
            controller: 'PackageController'
        })
		.when('/package/new', {
            templateUrl: './resources/views/Package/details.html',
            controller: 'PackageController'
        })
		/*.when('/package/edit/:settingID', {
            templateUrl: './resources/views/Package/edit.html',
            controller: 'PackageController'
        })
        .when('/package/delete/:settingID', {
            templateUrl: './resources/views/Package/delete.html',
            controller: 'PackageController'
        })
		.when('/package/show/:settingID', {
            templateUrl: './resources/views/Package/show.html',
            controller: 'PackageController'
        })
        
        .when('/package/delete_bulk', {
            templateUrl: './resources/views/Package/delete_bulk.html',
            controller: 'PackageController'
        })
		.when('/package/export', {
            templateUrl: './resources/views/Package/export.html',
            controller: 'PackageExportController'
        })*/
        
		.when('/login', {
            templateUrl: './resources/views/auth/login.blade.php'
            
        }).
        otherwise({
            redirectTo: '/dashboard'
        });
  }]);