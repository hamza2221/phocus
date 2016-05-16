

var phocusFilters = angular.module('phocusFilters', []);
phocusFilters.filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});
phocusFilters.filter('iif_empty', function () {
   return function(input, trueValue) {
         if(input==""){
        	return trueValue;
        }
        else{
        	return input;
        };
   };
});