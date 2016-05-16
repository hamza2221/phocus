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
                '<li class="fa fa-check-circle"></li><strong>Success:</strong> {{success_message}}'+
                '</div>'+
                '<div class="alert alert-info" ng-show="info_message">'+
                '<li class="fa fa-info-circle"></li><strong> Information:</strong> {{info_message}}'+
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
.directive('providerdialog', function() {
    return {
	  restrict : "C",
      link: function(scope, elem, attr) {
          elem.bind('click', function() {
              $('#photographer_mask').fadeIn();
          });
        }
      };
     //$('#photographer_mask').fadeIn();
})
.directive('clientdialog', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
          elem.bind('click', function() {
              $('#client_register_mask').fadeIn();
          });
        }
      };
    
})
.directive('clientdialog', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
          elem.bind('click', function() {
              $('#client_register_mask').fadeIn();
          });
        }
      };
    
})
.directive('faqlist', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
          elem.find('.faq_list li a').bind('click', function() {
              $(this).toggleClass('active_faq');
              $(this).siblings('.faq_data').slideToggle();
          });
        }
      };
    
})
.directive('forgetpassworddialog', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
          elem.bind('click', function() {
              $('#password_reset_email').fadeIn();
          });
        }
      };
    
})
.directive('checkboxclick', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
          elem.bind('mousedown', function() {
             $(this).toggleClass('checked_label');
          });
        }
      };
    
})
.directive('openLogindialog', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
           elem.bind('click',function  (){
               $("#openLogindialog").click();
           });
        }
      };
})
.directive('openRegisterdialog', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
           elem.bind('click',function  (){
               $("#openRegisterdialog").click();
           });
        }
      };
})
.directive('openClientdialog', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
           elem.bind('click',function  (){
               $("#openClientdialog").click();
           });
        }
      };
})
.directive('thanksleads', function() {
    return {
    restrict : "C",
      link: function(scope, elem, attr) {
            $('#thanks_contact').fadeIn();
        }
      };
});
