var phocusServices = angular.module('phocusServices', ['ngResource']);



phocusServices.factory('Dashboard', ['$resource','ApiUrl',
function ($resource,ApiUrl) {
	return $resource(ApiUrl+'user_details', {}, {
		'update': {
			url: ApiUrl,
			method: 'patch',
			params: {id: '@id'},
			//headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}
	});
}]);
phocusServices.factory('Logout', ['$resource',
function ($resource) {
	return $resource('http://localhost/phocus/logout', {}, {
		
	});
}]);

phocusServices.factory('ContactRequest', ['$resource','ApiUrl',
    function ($resource,ApiUrl) {
        return $resource(ApiUrl+'frontend_contact_request', {}, {
            
        });
}]);


	

