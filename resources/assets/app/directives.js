var phocusDirectives = angular.module('phocusDirectives', []);

phocusDirectives.directive('postsPagination', function(){  
   return{
      restrict: 'E',
      template: '<ul class="pagination">'+
        '<li ng-show="currentPage != 1"><a href="javascript:void(0)" ng-click="getContactRequests(1)">&laquo;</a></li>'+
        '<li ng-show="currentPage != 1"><a href="javascript:void(0)" ng-click="getContactRequests(currentPage-1)">&lsaquo; Prev</a></li>'+
        '<li ng-repeat="i in range" ng-class="{active : currentPage == i}">'+
            '<a href="javascript:void(0)" ng-click="getContactRequests(i)">{{i}}</a>'+
        '</li>'+
        '<li ng-show="currentPage != totalPages"><a href="javascript:void(0)" ng-click="getContactRequests(currentPage+1)">Next &rsaquo;</a></li>'+
        '<li ng-show="currentPage != totalPages"><a href="javascript:void(0)" ng-click="getContactRequests(totalPages)">&raquo;</a></li>'+
      '</ul>'+
      '<div class="col-md-12">showing {{currentPage}} of {{totalPages}}</div>'
   };
})

.directive('messages', function(){  
   return{
      restrict: 'E',
      template: '<div class="alert alert-success" ng-show="success_message">'+
                '<a href="" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
                ' {{success_message}}'+
                '</div>'+
                '<div class="alert alert-info" ng-show="info_message">'+
                ' {{info_message}}'+
                '</div>'
   };
})

.directive('accordian1Directive', function() {
    return {
	  restrict : "C",
      link: function(scope, elem, attr) {
        elem.find('a').bind('click', function() {
          elem.find('a').toggleClass('activeTab');
		  //elem.find('div').slideToggle();
		  $('.accordian1-directive > .toggle_data').slideToggle()
        });
      }
    };
})

.directive('accordian2Directive', function() {
    return {
	  restrict : "C",
      link: function(scope, elem, attr) {
        elem.find('a').bind('click', function() {
          elem.find('a').toggleClass('activeTab');
		  $('.accordian2-directive > .toggle_data').slideToggle()
        });
      }
    };
})
.directive('multidrop', ['$parse', function($parse) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
          parsed = $parse(attrs.multidrop);
        $('#example').multiselect('dataprovider', scope.roles);
        var selectconfig = {
        enableFiltering: true,
        includeSelectAllOption: true,
        enableCaseInsensitiveFiltering: true,
        buttonWidth: '400px',
        onChange: function(option, checked, select) {
                 $("#role").val( $(option).val());
                 scope.admin.role=$(option).val();
                 scope.$apply(function(){
                        parsed.assign(scope, $(option).val());
                    });
        }

      };
      $('#example').multiselect('setOptions', selectconfig);
      $('#example').multiselect('rebuild');
      }
    }
}])

.directive('multidrop_versions', ['$parse', function($parse) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
          parsed = $parse(attrs.multidrop);
        $('#versions').multiselect('dataprovider', scope.version_ids);
        var selectconfig = {
        enableFiltering: true,
        includeSelectAllOption: true,
        enableCaseInsensitiveFiltering: true,
        buttonWidth: '400px',
        onChange: function(option, checked, select) {
                 //$("#role").val( $(option).val());
                 scope.admin.role=$(option).val();
                 scope.$apply(function(){
                        parsed.assign(scope, $(option).val());
                    });
        }

      };
      $('#versions').multiselect('setOptions', selectconfig);
      $('#versions').multiselect('rebuild');
      }
    }
}])

.directive('sortHeading', ['$parse', function($parse) {
    return {
        restrict: "C",
        link: function(scope, element, attrs) {
			element.bind('click', function() {
			  $(".sort-heading").each(function(index, element) {
                $(this).removeClass('acive-sort');
				$(this).addClass('header');
			  });
			  
			  element.removeClass('header');
			  element.addClass('acive-sort');
			});
		}
    }
}]);

