
var phocusApp = angular.module('phocusApp', [
    'ngRoute',
    'phocusControllers',
    'phocusServices',
    'phocusDirectives',
    'phocusFilters'
]);

phocusApp.constant('ApiUrl', 'http://23.253.224.5/');
phocusApp.value('headerClass', 'hero-contact');


phocusApp.config(['$routeProvider', '$httpProvider', '$windowProvider', 'ApiUrl',
    function ($routeProvider, $httpProvider, $windowProvider, ApiUrl) {

        $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
            return {
                'responseError': function (rejection) {
                    var status = rejection.status;
                    var config = rejection.config;
                    var method = config.method;
                    var url = config.url;

                    if (status == 401) {
                        console.log('here');
                        var $window = $windowProvider.$get();
                        $window.location.href = ApiUrl + "login";
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
                when('/', {
                    templateUrl: './resources/views/frontend/index.html',
                    controller: 'IndexController'
                }).
                when('/contact', {
                    templateUrl: './resources/views/frontend/contact.html',
                    controller: 'ContactController'
                }).
                when('/about', {
                    templateUrl: './resources/views/frontend/about.html',
                    controller: 'AboutController'
                }).
                when('/how_it_works', {
                    templateUrl: './resources/views/frontend/how.html',
                    controller: 'HowController'
                }).
                when('/dashboard', {
                    templateUrl: './resources/views/frontend/dashboard.html',
                    controller: 'DashboardController'
                }).
                when('/terms', {
                    templateUrl: './resources/views/frontend/terms.html',
                    controller: 'TermsController'
                }).
                otherwise({
                    redirectTo: '/'
                });
    }]);