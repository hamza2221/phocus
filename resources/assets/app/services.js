var phocusServices = angular.module('phocusServices', ['ngResource']);

phocusServices.factory('Admin', ['$resource','ApiUrl',
  function($resource,ApiUrl){
    return $resource(ApiUrl+'admin/:id', {}, {
      query: {method:'GET', params:{id:'admins'}, isArray:true},
      update: {method: 'PUT'},
      delete: {method: 'delete'}
    });
}]);
    
phocusServices.factory('ContactRequest', ['$resource','ApiUrl',
    function ($resource,ApiUrl) {
        return $resource(ApiUrl+'contact_request/:id', {}, {
            'update': {
                url: ApiUrl+'contact_request/:id',
                method: 'patch',
                params: {id: '@id'},
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        });
}]);

phocusServices.factory('SuperAdmin', ['$resource','ApiUrl',
  function($resource,ApiUrl){
    return $resource(ApiUrl+'superadmin/:id', {}, {
      query: {method:'GET', params:{id:'superadmins'}, isArray:true},
      update: {method: 'PUT'},
      delete: {method: 'delete'}
    });
}]);

phocusServices.factory('Provider', ['$resource','ApiUrl',
  function($resource,ApiUrl){
    return $resource(ApiUrl+'provider/:id', {}, {
      query: {method:'GET', params:{id:'providers'}, isArray:true},
      update: {method: 'PUT'},
      delete: {method: 'delete'}
    });
}]);

phocusServices.factory('Tag', ['$resource','ApiUrl',
	// function($resource){
 //  		return $resource('http://localhost:88/phocus/tag/:id/:type');
	// }
  function ($resource,ApiUrl) {
        return $resource(ApiUrl+'tag/:id/:type', {}, {
            'update': {
                url: ApiUrl+'tag/:id',
                method: 'patch',
                params: {id: '@id'},
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            },
			
			'update_positions': {
                url: ApiUrl+'tag/update_positions',
                method: 'post',
                params: {id: '@id'},
            }
        });
}]);
	
phocusServices.factory('Lead', ['$resource','ApiUrl',
    function ($resource,ApiUrl) {
        return $resource(ApiUrl+'lead/:id', {}, {
            'update': {
                url: ApiUrl+'lead/:id',
                method: 'patch',
                params: {id: '@id'},
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            },
        });
	}]);


phocusServices.factory('Version', ['$resource','ApiUrl',
    function ($resource,ApiUrl) {
        return $resource(ApiUrl+'version/:id', {}, {
            'update': {
                url: ApiUrl+'version/:id',
                method: 'patch',
                params: {id: '@id'},
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            },
        });
    }]);

phocusServices.factory('VersionAssociation', ['$resource','ApiUrl',
    function ($resource,ApiUrl) {
        return $resource(ApiUrl+'version_association/:id', {}, {
            'update': {
                url: ApiUrl+'version_association/:id',
                method: 'patch',
                params: {id: '@id'},
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            },
        });
    }]);
	
/**********************************************************
 *      Dashboard Service
 ********************************************************/

phocusServices.factory('Dashboard', ['$resource','ApiUrl',
    function ($resource,ApiUrl) {
        return $resource(ApiUrl+'admin/dashboard/:item', {}, {});
    }]);
phocusServices.factory("Flash", function($rootScope) {
  var queue = [], currentMessage = {};
  
  // $rootScope.$on('$routeChangeSuccess', function() {
  //   if (queue.length > 0) 
  //     currentMessage = queue.shift();
  //   else
  //     currentMessage = {};
  // });
  
  return {
    set: function(message) {
      var msg = message;
      queue.push(msg);

    },
    get: function(message) {
      return queue.shift();
    }
  };
});

phocusServices.factory('Setting', ['$resource','ApiUrl', function ($resource,ApiUrl) {
	return $resource(ApiUrl+'setting/:id', {}, {
		'update': {
			url: ApiUrl+'setting/:id',
			method: 'patch',
			params: {id: '@id'},
			//headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		},
	});
}]);

phocusServices.factory('Package', ['$resource','ApiUrl', function ($resource,ApiUrl) {
	return $resource(ApiUrl+'package/:id', {}, {
		'update': {
			url: ApiUrl+'package/:id',
			method: 'patch',
			params: {id: '@id'},
			//headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		},
	});
}]);
