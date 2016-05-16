//var phocusControllers = angular.module('phocusControllers', []);
var phocusControllers = angular.module('phocusControllers', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
}); 
/***************************************
 *Controller leads
 ***************************************/

phocusControllers.controller('IndexController', ['$scope', '$rootScope', '$location', '$routeParams', '$timeout', 'Logout', 'headerClass', function ($scope, $rootScope, $location, $routeParams, $timeout, Logout, headerClass) {
        $rootScope.makeLogin = function () {
        }
        $rootScope.className = 'hero-home';
        $rootScope.headerID = 'header';
    }]);

phocusControllers.controller('loginController', ['$scope', '$http', 'headerClass', function ($scope, $http, headerClass) {


        $scope.doLogin = function () { 

            $http({
                url: 'auth/login',
                method: "POST",
                data: {
                    '_token': $('input[name="_token"]').val(),
                    'email': $('input[name="email"]').val(),
                    'password': $('input[name="password"]').val()
                }
            })
                    .then(function (response) {
                        console.log(response);
                    },
                            function (response) { // optional
                                console.log('Error login request');
                            });

        }

    }]);

phocusControllers.controller('ContactController', ['$scope', '$rootScope', '$location', '$routeParams', '$timeout', 'ContactRequest', 'headerClass', function ($scope, $rootScope, $location, $routeParams, $timeout, ContactRequest, headerClass) {
         $rootScope.headerID = 'header';
        $scope.contact_submit_text="Make Contact";
        $rootScope.className = 'hero-contact';

        $scope.submitData = {
            full_name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
            location: "",
            zip_code: "",
            is_provider: false
        };
        $scope.saveContactRequest = function () {
            $scope.processing="1";
            $scope.contact_submit_text="Sending Request";
            var data = [];
            data.full_name = $scope.submitData.full_name;
            data.subject = $scope.submitData.subject;
            data.email = $scope.submitData.email;
            data.message = $scope.submitData.message;
            data.is_provider = $scope.submitData.is_provider;
            data.location = $scope.submitData.location;
            data.zip_code = $scope.submitData.zip_code;
            ContactRequest.save($scope.submitData, function (response) {
                //$rootScope.success_message = response.message;
                $scope.submitData = {
                    full_name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                    location: "",
                    zip_code: "",
                    is_provider: false
                };
                $scope.contact_submit_text="Make Contact";
                $scope.processing="0";
                $scope.success_contact = "1";
                $location.path('/contact');

            });

        }
    }

]);
phocusControllers.controller('HeaderController', ['$scope', '$rootScope', '$location', '$routeParams', '$timeout', 'ContactRequest', 'headerClass', function ($scope, $rootScope, $location, $routeParams, $timeout, ContactRequest, headerClass) {


    }

]);

phocusControllers.controller('AboutController', ['$scope', '$rootScope', '$location', '$routeParams', '$timeout', function ($scope, $rootScope, $location, $routeParams, $timeout) {
        $rootScope.headerID = 'header';
        $rootScope.className = 'hero-about-us';
    }]);
phocusControllers.controller('HowController', ['$scope', '$rootScope', '$location', '$routeParams', '$timeout', function ($scope, $rootScope, $location, $routeParams, $timeout) {
        $rootScope.className = 'hero-how-it-works';
    }]);
phocusControllers.controller('DashboardController', ['$scope', '$rootScope', '$location', '$routeParams', '$timeout', 'Dashboard', function ($scope, $rootScope, $location, $routeParams, $timeout, Dashboard) {
         $rootScope.headerID = 'dashboard-header';
        Dashboard.get({}, function (data) {
            $scope.user_details = data;
            $rootScope.className = '';
        });
    }]);
phocusControllers.controller('TermsController', ['$scope', '$rootScope', '$location', '$routeParams', '$timeout', function ($scope, $rootScope, $location, $routeParams, $timeout) {
        $rootScope.headerID = 'header';
        $rootScope.className = 'hero-independent-contractor';
    }]);
//end by hamza