//var phocusControllers = angular.module('phocusControllers', []);
var phocusControllers = angular.module('phocusControllers', ['ngTable']);

phocusControllers.controller('AdminController', ['$scope', 'Admin', '$location', '$rootScope','$routeParams','$http','$localStorage','Flash','ApiUrl',
 'Flash',function ($scope, Admin, $location, $rootScope,$routeParams,$http,$localStorage,Flash,ApiUrl) {
	 
	$rootScope.active_item = "administrators";
	$scope.filters=[];
	$scope.reverseSort = true;
	$scope.orderBy = 'id';
	
	$scope.searchAdmin = false;
	$scope.exportFoundData = false;
	$scope.password_required = true;
	$scope.showBCShowLink = false;
	
	$rootScope.seletedAdmins = [];

	$scope.CancelSave=function(){
		$scope.admin=undefined;
		Flash.set({Msg:'No actions were taken',Type:'Info'});
		$location.path('/admin');
	}

	$scope.setupPage=function(){
		if(!$routeParams.adminID){
			$scope.mainHeadAddEdit='New Admin';
			$scope.breadHeadAddEdit='New';
			$scope.tabHeadAddEdit='Add new';
			$scope.manageIcon = 'fa-plus';
			$scope.showTab = false;
			$scope.listTab = true;
		}
		else{
			$scope.mainHeadAddEdit="Edit Admin ''";
			$scope.breadHeadAddEdit='Edit';
			$scope.tabHeadAddEdit='Edit';
			$scope.password_required = false;
			$scope.manageIcon = 'fa-pencil';
			$scope.showTab = true;
			$scope.listTab = false;
			$scope.showBCShowLink = true;
		}
    };

    function SetMessage(message){
    	if(message){
    		switch (message.Type){
    			case 'Success':
    				$scope.success_message=message.Msg;
    			break;
    			case 'Info':
    				$scope.info_message=message.Msg;
    			break;
    			default:
    			break;
    		}
    	}
    }
	
	/*	Export Found Admins	*/
	$scope.exportFound=function(){
		
		$scope.exportFoundData = true;
		if($scope.searchAdmin ){
			$scope.SearchAdmin();
		}
		else{
			$location.path('/admin/export');
		}
		
	}
	
    $scope.SearchAdmin=function(pageNumber,orderBy,sortOrder){
		
		
		if(pageNumber == -1){
			$scope.searchAdmin = true;
		}
		
    	var message=Flash.get();
    	SetMessage(message);
    	if($scope.limit){
    		if(pageNumber>$scope.limit)return;
    	}
    	if (pageNumber === undefined) {
			pageNumber = '1';
		}
		if (orderBy === undefined) {
			
			if($scope.orderBy != 'id'){
				orderBy=$scope.orderBy;
			}
			else
				orderBy = 'id';
		}
		else{
			$scope.orderBy=orderBy;
		}
		if($scope.reverseSort)
			sortOrder='DESC';
		else
			sortOrder='ASC';
			
		pagination = ($scope.exportFoundData)? -1:1;
		
		 $http({
	        url: ApiUrl+'admin/filter',
	        method: "POST",
	        data: {'query' : $scope.query , 'filters':$scope.filters,'pageNumber':pageNumber,'orderBy':orderBy,'sortOrder':sortOrder, 'pagination':pagination }
	    })
	    .then(function(response) {
            // success
            console.log(response.data);
			
			if($scope.exportFoundData){
				
				angular.forEach(response.data, function (row) {
					$scope.seletedAdmins.push(row.id);
				});
				
				$location.path('/admin/export');
			}
			else{
				
				$scope.admins=response.data.data;
				$scope.currentPage=response.data.current_page;
				$scope.total=response.data.total;
				$scope.limit=response.data.last_page;
				$scope.range=[];
				for(var i=0;i<response.data.last_page;i++){
					$scope.range.push(i);
				}
				
			}
            //console.log($scope.currentPage);
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.GetAdminByIDs=function(){
    	$scope.seletedAdmins=$localStorage.seletedAdmins;
    	//console.log($scope.seletedAdmins);
    	$http({
	        url: ApiUrl+'admin/getbyids',
	        method: "POST",
	        data: { 'ids' : $scope.seletedAdmins }
	    })
	    .then(function(response) {
            // success
            $scope.admins=response.data;
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.AddFilter=function(name){
    	//console.log(name);
    	$scope.filters.push({
    		filter:name,
    		operator:'like',
    		query:''
    	});
    	
    };
    

	$scope.getAdmins=function(){
    	$scope.admins=Admin.query();
    };
    
    $scope.deleteAdmin=function($adminID){
    	$http({
	        url: ApiUrl+'admin/deletebyids',
	        method: "POST",
	        data: { 'ids' : $adminID }
	    })
	    .then(function(response) {
			Flash.set({Msg:'Admin Deleted Successfully!',Type:'Success'});
			$location.path('/admin');
	    });
    };

    $scope.DeleteAdminByIds=function(){
    	$scope.seletedAdmins=$localStorage.seletedAdmins;
    	$http({
	        url: ApiUrl+'admin/deletebyids',
	        method: "POST",
	        data: { 'ids' : $scope.seletedAdmins }
	    })
	    .then(function(response) {
            // success
            $localStorage.clear();
            $location.path('/admin');
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.GetSelectedToDelete=function(){
    	angular.forEach($scope.admins, function (admin) {
			if(admin.Selected){
				$scope.seletedAdmins.push(admin.id);
			}
		});
		$localStorage.seletedAdmins=$scope.seletedAdmins;
    	$location.path('/admin/delete_bulk');
    
    };

    $scope.TakeAction=function(action){
    	switch(action){
    		case 'save':
    			$location.path('/admin');
    		break;
    		case 'add':
				if($location.path().indexOf('edit') > -1){
					$location.path('/admin/new');
				}
				else{
					$scope.admin=undefined;
					var message=Flash.get();
					SetMessage(message);
				}
    		break;
    		case 'edit':
    			if($location.path().indexOf('new') > -1){
					$location.path('/admin/edit/'+$rootScope.adminId);
				}else{
					var message=Flash.get();
					SetMessage(message);
				}
    		break;
    		default:
    			$location.path('/admin');
    		break;
    	}
    }
	
	if($location.path().indexOf('new') > -1){
		if($rootScope.addFromEdit != undefined){
			$rootScope.addFromEdit = undefined;
			$scope.TakeAction('add');
		}
	}
	
    $scope.AddNew=function(action){
		$scope.email_error = '';
		$scope.password_error = '';
		
		if($scope.admin.id > 0){
    		Admin.update({id:$scope.admin.id},$scope.admin,function(response){
				
				if(response.errors)
				{
					errors = $.parseJSON(response.errors);
					if(errors.email != undefined){
						$scope.email_error = errors.email;
					}
					if(errors.password != undefined){
						$scope.password_error = errors.password;
					}
					
				}
				else
				{
					if(action=='add'){
						$rootScope.addFromEdit = 1;
					}
					
					if(action=='edit'){
						$rootScope.adminId = response.id;
					}
					
					Flash.set({Msg:'Admin successfully updated',Type:'Success'});
					$scope.TakeAction(action);
				}
				
			});
    	}
    	else{
			Admin.save($scope.admin,function(response){
				
				if(response.errors)
				{
					errors = $.parseJSON(response.errors);
					if(errors.email != undefined){
						$scope.email_error = errors.email;
					}
					if(errors.password != undefined){
						$scope.password_error = errors.password;
					}
					
				}
				else
				{
					
					if(action=='edit'){
						$rootScope.adminId = response.id;
					}
					
					if($location.path().indexOf('new') > -1){
						$rootScope.addFromEdit=1;
					}
					Flash.set({Msg:'Admin successfully created',Type:'Success'});
					$scope.TakeAction(action);
				}
				
	    	});
    	}
    };

    $scope.GetAdmin=function(){
    	//console.log('GetAdmin');
    	$scope.admin=Admin.get({id:$routeParams.adminID},function(response){
			
			if($rootScope.adminId != undefined){
				$rootScope.adminId=undefined;
				Flash.set({Msg:'Admin successfully created',Type:'Success'});
				$scope.TakeAction('edit');
			}
			
		});
    };

    $scope.RemoveFilters=function(id){

    	if(angular.isUndefined(id)){
	    	$scope.query="";
	    	$scope.filters=[];
	    	$scope.SearchAdmin();
    	}
    	else{
    		//console.log(id);
    		$scope.filters.splice(id,1);
    	}
    };
    
	$scope.selectAllAdmins = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.admins, function (admin) {
            admin.Selected = $scope.selectedAll;
        });
    };
	
	$scope.exportSelected = function(){
		angular.forEach($scope.admins, function (admin) {
			if(admin.Selected){
				$scope.seletedAdmins.push(admin.id);
			}
		});
		
	
	$location.path('/admin/export');
	};
	/********************************
	*	By: Hamza Aslam
	*********************************/

	$scope.roles=[
		{value:'Admin',label:'Admin'},
		{value:'Super Admin' ,label:'Super Admin'},
		{value:'Provider',label:'Provider'}
	];
}]);

phocusControllers.controller('AdminExportController', ['$scope', 'Admin', function ($scope, Admin) {
	// CSRF Token
	$scope.CSRF_TOKEN = csrf_token_js;
	$scope.inputSelectedAdmin = $scope.seletedAdmins;
	
	//	Admin Export Checkboxes
	$scope.AdminFields = [{ Name: "schema[users][]", Value: 'id', title: 'Id'},
						  { Name: "schema[users][]", Value: 'email', title: 'Email'},
						  { Name: "schema[users][]", Value: 'reset_password_sent_at', title: 'Reset password sent at'},
						  { Name: "schema[users][]", Value: 'remember_created_at', title: 'Remember created at'},
						  { Name: "schema[users][]", Value: 'sign_in_count', title: 'Sign in count'},
						  { Name: "schema[users][]", Value: 'current_sign_in_at', title: 'Current sign in at'},
						  { Name: "schema[users][]", Value: 'current_sign_in_at', title: 'Last sign in at'},
						  { Name: "schema[users][]", Value: 'current_sign_in_ip', title: 'Current sign in ip'},
						  { Name: "schema[users][]", Value: 'last_sign_in_ip', title: 'Last sign in ip'},
						  { Name: "schema[users][]", Value: 'created_at', title: 'Created at'},
						  { Name: "schema[users][]", Value: 'updated_at', title: 'Updated at'},
						  { Name: "schema[users][]", Value: 'role', title: 'Role'},
						  //{ Name: "schema[users][]", Value: 'type', title: 'type'},
						  { Name: "schema[users][]", Value: 'name', title: 'Name'},
						  { Name: "schema[users][]", Value: 'years_experience', title: 'Years experience'},
						  { Name: "schema[users][]", Value: 'picture', title: 'Picture'},
						  //{ Name: "schema[userprofile][]", Value: 'completed_profile', title: 'completed profile'},
						  { Name: "schema[users][]", Value: 'work_area_radio', title: 'Work area radio'},
						  { Name: "schema[users][]", Value: 'country', title: 'Country'},
						  { Name: "schema[users][]", Value: 'zipcode', title: 'Zipcode'},
						  { Name: "schema[users][]", Value: 'phone_number', title: 'Phone Number'},
						  { Name: "schema[users][]", Value: 'alternate_number', title: 'Alternate Number'},
						  { Name: "schema[users][]", Value: 'portfolio', title: 'Portfolio'},
						  { Name: "schema[users][]", Value: 'w9_form', title: 'W9 form'}];
					
	$scope.associatedVersions = [{Name: "schema[versions][]", Value: 'id', title: 'Id'},
								 {Name: "schema[versions][]", Value: 'event', title: 'Event'},
								 {Name: "schema[versions][]", Value: 'whodunnit', title: 'Whodunnit'},
								 {Name: "schema[versions][]", Value: 'object', title: 'Object'},
								 {Name: "schema[versions][]", Value: 'created_at', title: 'Created at'},
								 {Name: "schema[versions][]", Value: 'object_changes', title: 'Object Changes'},
								 {Name: "schema[versions][]", Value: 'transaction', title: 'Transaction'}];
	
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.AdminFields, function (field) {
            field.Selected = $scope.selectedAll;
        });
		
		angular.forEach($scope.associatedVersions, function (field) {
            field.Selected = $scope.selectedAll;
        });
	};
	
	$scope.selectedAll = true;
	$scope.checkAll();
	
	/*	Export Functions End	*/
}]);

phocusControllers.controller('SuperAdminController', ['$scope', 'SuperAdmin', '$location', '$rootScope','$routeParams','Flash','$http','$localStorage','ApiUrl',
 function ($scope, SuperAdmin, $location, $rootScope,$routeParams,Flash,$http,$localStorage,ApiUrl) {
	/********************************
	*	By: Hamza Aslam
	*********************************/

	$scope.roles=[
		{value:'Admin',label:'Admin'},
		{value:'Super Admin' ,label:'Super Admin'},
		{value:'Provider',label:'Provider'}
	];
	$rootScope.active_item = "super_admins"; //it highlight sidebar current link

	$scope.filters=[];
	$scope.reverseSort = true;
	$scope.orderBy = 'id';
	
	$scope.searchPerformed = false;
	$scope.exportFoundData = false;
	$scope.password_required = true;
	$scope.showBCShowLink = false;
	
	$rootScope.seletedSuperAdmins = [];

    $scope.setupPage=function(){
    	if(!$routeParams.superadminID){
    		$scope.mainHeadAddEdit='New Super Admin';
    		$scope.breadHeadAddEdit='New';
    		$scope.tabHeadAddEdit='Add new';
			$scope.showTab = false;
			$scope.listTab = true;
    	}
    	else{
    		$scope.mainHeadAddEdit="Edit Super admin ''";
    		$scope.breadHeadAddEdit='Edit';
    		$scope.tabHeadAddEdit='Edit';
			$scope.password_required = false;
			$scope.showTab = true;
			$scope.listTab = false;
			$scope.showBCShowLink = true;
    	}
    };

    $scope.CancelSave=function(){
		Flash.set({Msg:'No actions were taken',Type:'Info'});
		$location.path('/superadmin');
	}

    function SetMessage(message){
    	if(message){
    		switch (message.Type){
    			case 'Success':
    				$scope.success_message=message.Msg;
    			break;
    			case 'Info':
    				$scope.info_message=message.Msg;
    			break;
    			default:
    			break;
    		}
    	}
    }
	
	/*	Export Found Admins	*/
	$scope.exportFound=function(){
		
		$scope.exportFoundData = true;
		if($scope.searchPerformed ){
			$scope.SearchSuperAdmin();
		}
		else{
			$location.path('/superadmin/export');
		}
		
	}
	
    $scope.SearchSuperAdmin=function(pageNumber,orderBy,sortOrder){
    	
		if(pageNumber == -1){
			$scope.searchPerformed = true;
		}
		
    	var message=Flash.get();
    	SetMessage(message);
    	if($scope.limit){
    		if(pageNumber>$scope.limit)return;
    	}
    	if (pageNumber === undefined) {
			pageNumber = '1';
		}
		if (orderBy === undefined) {
			
			if($scope.orderBy != 'id'){
				orderBy=$scope.orderBy;
			}
			else
				orderBy = 'id';
		}
		else{
			$scope.orderBy=orderBy;
		}
		if($scope.reverseSort)
			sortOrder='DESC';
		else
			sortOrder='ASC';
		
		pagination = ($scope.exportFoundData)? -1:1;
		 $http({
	        url: ApiUrl+'superadmin/filter',
	        method: "POST",
	        data: {'query' : $scope.query , 'filters':$scope.filters,'pageNumber':pageNumber,'orderBy':orderBy,'sortOrder':sortOrder, 'pagination':pagination }
	    })
	    .then(function(response) {
            // success
            //console.log(response);
			if($scope.exportFoundData){
				
				angular.forEach(response.data, function (row) {
					$scope.seletedSuperAdmins.push(row.id);
				});
				
				$location.path('/superadmin/export');
			}
			else{
				$scope.superadmins=response.data.data;
				$scope.currentPage=response.data.current_page;
				$scope.total=response.data.total;
				$scope.limit=response.data.last_page;
				$scope.range=[];
				for(var i=0;i<response.data.last_page;i++){
					$scope.range.push(i);
				}
				//console.log($scope.currentPage);
			}
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.GetSuperAdminByIDs=function(){
    	$scope.seletedSuperAdmins=$localStorage.seletedSuperAdmins;
    	$http({
	        url: ApiUrl+'superadmin/getbyids',
	        method: "POST",
	        data: { 'ids' : $scope.seletedSuperAdmins }
	    })
	    .then(function(response) {
            // success
            $scope.superadmins=response.data;
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.AddFilter=function(name){
    	//console.log(name);
    	$scope.filters.push({
    		filter:name,
    		operator:'like',
    		query:''
    	});
    	
    };
    

	$scope.getSuperAdmins=function(){
    	$scope.superadmins=SuperAdmin.query();
    };
    
    $scope.deleteSuperAdmin=function($superadminID){
		$http({
	        url: ApiUrl+'superadmin/deletebyids',
	        method: "POST",
	        data: { 'ids' : $superadminID }
	    })
	    .then(function(response) {
			Flash.set({Msg:'Super admin successfully deleted',Type:'Success'});
			$location.path('/superadmin');
	    });
		
    	//$scope.superadmin=SuperAdmin.delete({id:$superadminID},function(data){
    		//console.log(data);
			//Flash.set({Msg:'Super Admin Deleted Successfully!',Type:'Success'});
    		//$location.path('/superadmin');
		//});
    };

    $scope.DeleteSuperAdminByIds=function(){
    	$scope.seletedSuperAdmins=$localStorage.seletedSuperAdmins;
    	$http({
	        url: ApiUrl+'superadmin/deletebyids',
	        method: "POST",
	        data: { 'ids' : $scope.seletedSuperAdmins }
	    })
	    .then(function(response) {
            // success
            $localStorage.$reset();
            $location.path('/superadmin');
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.GetSelectedToDelete=function(){
    	//console.log('scope supers: '+$scope.superadmins);
    	angular.forEach($scope.superadmins, function (superadmin) {
			if(superadmin.Selected){
				$scope.seletedSuperAdmins.push(superadmin.id);
			}
		});
		//console.log('selected supers: '+$scope.seletedSuperAdmins);
		$localStorage.seletedSuperAdmins=$scope.seletedSuperAdmins;
    	$location.path('/superadmin/delete_bulk');
    
    };

    $scope.TakeAction=function(action){
    	switch(action){
    		case 'save':
    			$location.path('/superadmin');
    		break;
    		case 'add':
    			
				if($location.path().indexOf('edit') > -1){
					$location.path('/superadmin/new');
				}
				else{
					$scope.superadmin=undefined;
					var message=Flash.get();
					SetMessage(message);
				}
			break;
			
    		case 'edit':
    			var message=Flash.get();
    			SetMessage(message);
				
				if($location.path().indexOf('new') > -1){
					$location.path('/superadmin/edit/'+$rootScope.superadminId);
				}else{
					var message=Flash.get();
					SetMessage(message);
				}
				
			break;
			
    		default:
    			$location.path('/superadmin');
    		break;
    	}
    }
	
	if($location.path().indexOf('new') > -1){
		if($rootScope.addFromEdit != undefined){
			$rootScope.addFromEdit = undefined;
			$scope.TakeAction('add');
		}
	}
	
    $scope.AddNew=function(action){
		$scope.email_error = '';
		$scope.password_error = '';
		
    	if($scope.superadmin.id>0){
    		SuperAdmin.update({id:$scope.superadmin.id},$scope.superadmin,function(response){
    			
				if(response.errors)
				{
					errors = $.parseJSON(response.errors);
					if(errors.email != undefined){
						$scope.email_error = errors.email;
					}
					if(errors.password != undefined){
						$scope.password_error = errors.password;
					}
					
				}
				else
				{
					if(action=='add'){
						$rootScope.addFromEdit = 1;
					}
					
					if(action=='edit'){
						$rootScope.superadminId = response.id;
					}
					
					Flash.set({Msg:'Super admin successfully updated!',Type:'Success'});
					$scope.TakeAction(action);
				}
				
			});
    	}
    	else{
	    	SuperAdmin.save($scope.superadmin,function(response){
				
				if(response.errors)
				{
					errors = $.parseJSON(response.errors);
					if(errors.email != undefined){
						$scope.email_error = errors.email;
					}
					if(errors.password != undefined){
						$scope.password_error = errors.password;
					}
					
				}
				else
				{
					if(action=='edit'){
						$rootScope.superadminId = response.id;
					}
					
					if($location.path().indexOf('new') > -1){
						$rootScope.addFromEdit=1;
					}
					
					Flash.set({Msg:'Super admin successfully created',Type:'Success'});
					$scope.TakeAction(action);
				}
				
	    	});
    	}
    };

    $scope.GetSuperAdmin=function(){
    	//console.log('here');
    	$scope.superadmin=SuperAdmin.get({id:$routeParams.superadminID},function(response){
			
			if($rootScope.superadminId != undefined){
				$rootScope.superadminId=undefined;
				Flash.set({Msg:'Super admin successfully created',Type:'Success'});
				$scope.TakeAction('edit');
			}
			
		});
    };

    $scope.RemoveFilters=function(id){

    	if(angular.isUndefined(id)){
	    	$scope.query="";
	    	$scope.filters=[];
	    	$scope.SearchSuperAdmin();
    	}
    	else{
    		//console.log(id);
    		$scope.filters.splice(id,1);
    	}
    };    

	$scope.selectAllSuperAdmins = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.superadmins, function (superadmin) {
            superadmin.Selected = $scope.selectedAll;
        });
    };
	
	$scope.exportSelected = function(){
		angular.forEach($scope.superadmins, function (superadmin) {
			if(superadmin.Selected){
				$scope.seletedSuperAdmins.push(superadmin.id);
			}
		});
		
		$location.path('/superadmin/export');
	};
	/********************************
	*	By: Hamza Aslam
	*********************************/
	
	$scope.roles=[
		{value:'Super Admin' ,label:'Super Admin'},
		
		{value:'Admin',label:'Admin'},
		
		{value:'Provider',label:'Provider'}
	];
}]);

phocusControllers.controller('SuperAdminExportController', ['$scope', 'Admin', function ($scope, Admin) {
	$scope.CSRF_TOKEN = csrf_token_js;
	$scope.inputSelectedAdmin = $scope.seletedSuperAdmins;
	
	/*	Admin Expert Checkboxes	*/
	$scope.AdminFields = [{ Name: "schema[users][]", Value: 'id', title: 'Id'},
						  { Name: "schema[users][]", Value: 'email', title: 'Email'},
						  { Name: "schema[users][]", Value: 'reset_password_sent_at', title: 'Reset password sent at'},
						  { Name: "schema[users][]", Value: 'remember_created_at', title: 'Remember created at'},
						  { Name: "schema[users][]", Value: 'sign_in_count', title: 'Sign in count'},
						  { Name: "schema[users][]", Value: 'current_sign_in_at', title: 'Current sign in at'},
						  { Name: "schema[users][]", Value: 'current_sign_in_at', title: 'Last sign in at'},
						  { Name: "schema[users][]", Value: 'current_sign_in_ip', title: 'Current sign in ip'},
						  { Name: "schema[users][]", Value: 'last_sign_in_ip', title: 'Last sign in ip'},
						  { Name: "schema[users][]", Value: 'created_at', title: 'Created at'},
						  { Name: "schema[users][]", Value: 'updated_at', title: 'Updated at'},
						  { Name: "schema[users][]", Value: 'role', title: 'Role'},
						  //{ Name: "schema[users][]", Value: 'type', title: 'type'},
						  { Name: "schema[users][]", Value: 'name', title: 'Name'},
						  { Name: "schema[users][]", Value: 'years_experience', title: 'Years experience'},
						  { Name: "schema[users][]", Value: 'picture', title: 'Picture'},
						  //{ Name: "schema[userprofile][]", Value: 'completed_profile', title: 'completed profile'},
						  { Name: "schema[users][]", Value: 'work_area_radio', title: 'Work area radio'},
						  { Name: "schema[users][]", Value: 'country', title: 'Country'},
						  { Name: "schema[users][]", Value: 'zipcode', title: 'Zipcode'},
						  { Name: "schema[users][]", Value: 'phone_number', title: 'Phone Number'},
						  { Name: "schema[users][]", Value: 'alternate_number', title: 'Alternate Number'},
						  { Name: "schema[users][]", Value: 'portfolio', title: 'Portfolio'},
						  { Name: "schema[users][]", Value: 'w9_form', title: 'W9 form'}];
					
	$scope.associatedVersions = [{Name: "schema[versions][]", Value: 'id', title: 'Id'},
								 {Name: "schema[versions][]", Value: 'event', title: 'Event'},
								 {Name: "schema[versions][]", Value: 'whodunnit', title: 'Whodunnit'},
								 {Name: "schema[versions][]", Value: 'object', title: 'Object'},
								 {Name: "schema[versions][]", Value: 'created_at', title: 'Created at'},
								 {Name: "schema[versions][]", Value: 'object_changes', title: 'Object Changes'},
								 {Name: "schema[versions][]", Value: 'transaction', title: 'Transaction'}];
	
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.AdminFields, function (field) {
            field.Selected = $scope.selectedAll;
        });
		
		angular.forEach($scope.associatedVersions, function (field) {
            field.Selected = $scope.selectedAll;
        });
    };
	
	$scope.selectedAll = true;
	$scope.checkAll();
	
}]);

/*	Providers	*/
phocusControllers.controller('ProviderController', ['$scope', 'Provider', '$location', '$rootScope','$routeParams','$http','$localStorage','Flash','Upload','$timeout','ApiUrl','$filter','$sce','$route',
 function ($scope, Provider, $location, $rootScope,$routeParams,$http,$localStorage,Flash,Upload,$timeout,ApiUrl,$filter,$sce,$route) {
	$rootScope.active_item = "providers"; //it highlight sidebar current link
	$scope.filters=[];
    $scope.reverseSort = true;
    $scope.orderBy = 'id';
	
	$scope.searchPerformed = false;
	$scope.exportFoundData = false;
	$rootScope.seletedProviders = [];
	$scope.selectedObjects=[];
	
	// Create an object for our model data (it's always wise have a "." in your model)
    $scope.seletedCountry = 'United States';

    $scope.selectEntity = function (state) {
        $scope.seletedCountry = state.name;
		$scope.serchFilter='';
    }
	
    $scope.allStates = [
		{ "name": "Afghanistan"}, 
		{ "name": "Albania"}, 
		{ "name": "Algeria"}, 
		{ "name": "American Samoa"}, 
		{ "name": "Andorra"}, 
		{ "name": "Angola"}, 
		{ "name": "Anguilla"}, 
		{ "name": "Antarctica"}, 
		{ "name": "Antigua and Barbuda"}, 
		{ "name": "Argentina"}, 
		{ "name": "Armenia"}, 
		{ "name": "Aruba"}, 
		{ "name": "Australia"}, 
		{ "name": "Austria"}, 
		{ "name": "Azerbaijan"}, 
		{ "name": "Bahamas"}, 
		{ "name": "Bahrain"}, 
		{ "name": "Bangladesh"}, 
		{ "name": "Barbados"}, 
		{ "name": "Belarus"}, 
		{ "name": "Belgium"}, 
		{ "name": "Belize"}, 
		{ "name": "Benin"}, 
		{ "name": "Bermuda"}, 
		{ "name": "Bhutan"}, 
		{ "name": "Bolivia"}, 
		{ "name": "Bosnia and Herzegowina"}, 
		{ "name": "Botswana"}, 
		{ "name": "Bouvet Island"}, 
		{ "name": "Brazil"}, 
		{ "name": "British Indian Ocean Territory"}, 
		{ "name": "Brunei Darussalam"}, 
		{ "name": "Bulgaria"}, 
		{ "name": "Burkina Faso"}, 
		{ "name": "Burundi"}, 
		{ "name": "Cambodia"}, 
		{ "name": "Cameroon"}, 
		{ "name": "Canada"}, 
		{ "name": "Cape Verde"}, 
		{ "name": "Cayman Islands"}, 
		{ "name": "Central African Republic"}, 
		{ "name": "Chad"}, 
		{ "name": "Chile"}, 
		{ "name": "China"}, 
		{ "name": "Christmas Island"}, 
		{ "name": "Cocos (Keeling) Islands"}, 
		{ "name": "Colombia"}, 
		{ "name": "Comoros"}, 
		{ "name": "Congo"}, 
		{ "name": "the Democratic Republic of the"}, 
		{ "name": "Cook Islands"}, 
		{ "name": "Costa Rica"}, 
		{ "name": "Cote d'Ivoire"}, 
		{ "name": "Croatia (Hrvatska)"}, 
		{ "name": "Cuba"}, 
		{ "name": "Cyprus"}, 
		{ "name": "Czech Republic"}, 
		{ "name": "Denmark"}, 
		{ "name": "Djibouti"}, 
		{ "name": "Dominica"}, 
		{ "name": "Dominican Republic"}, 
		{ "name": "East Timor"}, 
		{ "name": "Ecuador"}, 
		{ "name": "Egypt"}, 
		{ "name": "El Salvador"}, 
		{ "name": "Equatorial Guinea"}, 
		{ "name": "Eritrea"}, 
		{ "name": "Estonia"}, 
		{ "name": "Ethiopia"}, 
		{ "name": "Falkland Islands (Malvinas)"}, 
		{ "name": "Faroe Islands"}, 
		{ "name": "Fiji"}, 
		{ "name": "Finland"}, 
		{ "name": "France"}, 
		{ "name": "France Metropolitan"}, 
		{ "name": "French Guiana"}, 
		{ "name": "French Polynesia"}, 
		{ "name": "French Southern Territories"}, 
		{ "name": "Gabon"}, 
		{ "name": "Gambia"}, 
		{ "name": "Georgia"}, 
		{ "name": "Germany"}, 
		{ "name": "Ghana"}, 
		{ "name": "Gibraltar"}, 
		{ "name": "Greece"}, 
		{ "name": "Greenland"}, 
		{ "name": "Grenada"}, 
		{ "name": "Guadeloupe"}, 
		{ "name": "Guam"}, 
		{ "name": "Guatemala"}, 
		{ "name": "Guinea"}, 
		{ "name": "Guinea-Bissau"}, 
		{ "name": "Guyana"}, 
		{ "name": "Haiti"}, 
		{ "name": "Heard and Mc Donald Islands"}, 
		{ "name": "Holy See (Vatican City State)"}, 
		{ "name": "Honduras"}, 
		{ "name": "Hong Kong"}, 
		{ "name": "Hungary"}, 
		{ "name": "Iceland"}, 
		{ "name": "India"}, 
		{ "name": "Indonesia"}, 
		{ "name": "Iran (Islamic Republic of)"}, 
		{ "name": "Iraq"}, 
		{ "name": "Ireland"}, 
		{ "name": "Israel"}, 
		{ "name": "Italy"}, 
		{ "name": "Jamaica"}, 
		{ "name": "Japan"}, 
		{ "name": "Jordan"}, 
		{ "name": "Kazakhstan"}, 
		{ "name": "Kenya"}, 
		{ "name": "Kiribati"}, 
		{ "name": "Korea"}, 
		{ "name": "Democratic People's Republic of"}, 
		{ "name": "Korea"}, 
		{ "name": "Republic of"}, 
		{ "name": "Kuwait"}, 
		{ "name": "Kyrgyzstan"}, 
		{ "name": "Lao"}, 
		{ "name": "People's Democratic Republic"}, 
		{ "name": "Latvia"}, 
		{ "name": "Lebanon"}, 
		{ "name": "Lesotho"}, 
		{ "name": "Liberia"}, 
		{ "name": "Libyan Arab Jamahiriya"}, 
		{ "name": "Liechtenstein"}, 
		{ "name": "Lithuania"}, 
		{ "name": "Luxembourg"}, 
		{ "name": "Macau"}, 
		{ "name": "Macedonia"}, 
		{ "name": "The Former Yugoslav Republic of"}, 
		{ "name": "Madagascar"}, 
		{ "name": "Malawi"}, 
		{ "name": "Malaysia"}, 
		{ "name": "Maldives"}, 
		{ "name": "Mali"}, 
		{ "name": "Malta"}, 
		{ "name": "Marshall Islands"}, 
		{ "name": "Martinique"}, 
		{ "name": "Mauritania"}, 
		{ "name": "Mauritius"}, 
		{ "name": "Mayotte"}, 
		{ "name": "Mexico"}, 
		{ "name": "Micronesia"}, 
		{ "name": "Federated States of"}, 
		{ "name": "Moldova"}, 
		{ "name": "Republic of"}, 
		{ "name": "Monaco"}, 
		{ "name": "Mongolia"}, 
		{ "name": "Montserrat"}, 
		{ "name": "Morocco"}, 
		{ "name": "Mozambique"}, 
		{ "name": "Myanmar"}, 
		{ "name": "Namibia"}, 
		{ "name": "Nauru"}, 
		{ "name": "Nepal"}, 
		{ "name": "Netherlands"}, 
		{ "name": "Netherlands Antilles"}, 
		{ "name": "New Caledonia"}, 
		{ "name": "New Zealand"}, 
		{ "name": "Nicaragua"}, 
		{ "name": "Niger"}, 
		{ "name": "Nigeria"}, 
		{ "name": "Niue"}, 
		{ "name": "Norfolk Island"}, 
		{ "name": "Northern Mariana Islands"}, 
		{ "name": "Norway"}, 
		{ "name": "Oman"}, 
		{ "name": "Pakistan"}, 
		{ "name": "Palau"}, 
		{ "name": "Panama"}, 
		{ "name": "Papua New Guinea"}, 
		{ "name": "Paraguay"}, 
		{ "name": "Peru"}, 
		{ "name": "Philippines"}, 
		{ "name": "Pitcairn"}, 
		{ "name": "Poland"}, 
		{ "name": "Portugal"}, 
		{ "name": "Puerto Rico"}, 
		{ "name": "Qatar"}, 
		{ "name": "Reunion"}, 
		{ "name": "Romania"}, 
		{ "name": "Russian Federation"}, 
		{ "name": "Rwanda"}, 
		{ "name": "Saint Kitts and Nevis"}, 
		{ "name": "Saint Lucia"}, 
		{ "name": "Saint Vincent and the Grenadines"}, 
		{ "name": "Samoa"}, 
		{ "name": "San Marino"}, 
		{ "name": "Sao Tome and Principe"}, 
		{ "name": "Saudi Arabia"}, 
		{ "name": "Senegal"}, 
		{ "name": "Seychelles"}, 
		{ "name": "Sierra Leone"}, 
		{ "name": "Singapore"}, 
		{ "name": "Slovakia (Slovak Republic)"}, 
		{ "name": "Slovenia"}, 
		{ "name": "Solomon Islands"}, 
		{ "name": "Somalia"}, 
		{ "name": "South Africa"}, 
		{ "name": "South Georgia and the South Sandwich Islands"}, 
		{ "name": "Spain"}, 
		{ "name": "Sri Lanka"}, 
		{ "name": "St. Helena"}, 
		{ "name": "St. Pierre and Miquelon"}, 
		{ "name": "Sudan"}, 
		{ "name": "Suriname"}, 
		{ "name": "Svalbard and Jan Mayen Islands"}, 
		{ "name": "Swaziland"}, 
		{ "name": "Sweden"}, 
		{ "name": "Switzerland"}, 
		{ "name": "Syrian Arab Republic"}, 
		{ "name": "Taiwan"}, 
		{ "name": "Province of China"}, 
		{ "name": "Tajikistan"}, 
		{ "name": "Tanzania"}, 
		{ "name": "United Republic of"}, 
		{ "name": "Thailand"}, 
		{ "name": "Togo"}, 
		{ "name": "Tokelau"}, 
		{ "name": "Tonga"}, 
		{ "name": "Trinidad and Tobago"}, 
		{ "name": "Tunisia"}, 
		{ "name": "Turkey"}, 
		{ "name": "Turkmenistan"}, 
		{ "name": "Turks and Caicos Islands"}, 
		{ "name": "Tuvalu"}, 
		{ "name": "Uganda"}, 
		{ "name": "Ukraine"}, 
		{ "name": "United Arab Emirates"}, 
		{ "name": "United Kingdom"}, 
		{ "name": "United States"}, 
		{ "name": "United States Minor Outlying Islands"}, 
		{ "name": "Uruguay"}, 
		{ "name": "Uzbekistan"}, 
		{ "name": "Vanuatu"}, 
		{ "name": "Venezuela"}, 
		{ "name": "Vietnam"}, 
		{ "name": "Virgin Islands (British)"}, 
		{ "name": "Virgin Islands (U.S.)"}, 
		{ "name": "Wallis and Futuna Islands"}, 
		{ "name": "Western Sahara"}, 
		{ "name": "Yemen"}, 
		{ "name": "Yugoslavia"}, 
		{ "name": "Zambia"}, 
		{ "name": "Zimbabwe"}
    ];
	
	if($location.path().indexOf('new') > -1 || $location.path().indexOf('edit') > -1){
		console.log(ApiUrl);
		
		$http.get(ApiUrl + 'tag/get/any').then(function(response) {
			$scope.tags = response.data;
		}); // End http get
		
		$scope.addTag = function(){
			angular.forEach($scope.availableTags, function(tag){
				$scope.selectedObjects.push($filter('filter')($scope.tags, {id: tag })[0]);
				var index = $scope.tags.indexOf($filter('filter')($scope.tags, {id: tag })[0]);
				$scope.tags.splice(index, 1);
			});
		};
		
		$scope.chooseAll = function(){
			angular.forEach($scope.tags, function(tag){
				$scope.selectedObjects.push(tag);
			});
			$scope.tags=[];
		};
		
		$scope.removeTag = function(){
			angular.forEach($scope.selectedTags, function(tag){
				$scope.tags.push($filter('filter')($scope.selectedObjects, {id: tag })[0]);
				var index = $scope.selectedObjects.indexOf($filter('filter')($scope.tags, {id: tag })[0]);
				$scope.selectedObjects.splice(index, 1);
			});
		};
		
		$scope.clearAll = function(){
			angular.forEach($scope.selectedObjects, function(tag){
				$scope.tags.push(tag);
			});
			$scope.selectedObjects=[];
		};
		
	}

    $scope.setupPage=function(){
        if(!$routeParams.providerID){
            $scope.mainHeadAddEdit='New Provider';
            $scope.breadHeadAddEdit='New';
            $scope.tabHeadAddEdit='Add new';
        }
        else{
            $scope.mainHeadAddEdit='Edit Provider';
            $scope.breadHeadAddEdit='Edit';
            $scope.tabHeadAddEdit='Edit';

        }
    };
	
	$scope.CancelSave=function(){
		Flash.set({Msg:'No actions were taken',Type:'Info'});
		$location.path('/providers');
	}
	
    function SetMessage(message){
        if(message){
			switch (message.Type){
				case 'Success':
				    $scope.success_message=message.Msg;
                break;
                case 'Info':
					$scope.info_message=message.Msg;
    			break;
                default:
					console.log("default");
                break;
            }
        }
    }
	
	/*	Export Found Admins	*/
	$scope.exportFound=function(){
		
		$scope.exportFoundData = true;
		if($scope.searchPerformed ){
			$scope.SearchProvider();
		}
		else{
			$location.path('/provider/export');
		}
		
	}
	
    $scope.SearchProvider=function(pageNumber,orderBy,sortOrder){
		
		if(pageNumber == -1){
			$scope.searchPerformed = true;
		}
		
        var message=Flash.get();
        SetMessage(message);
        if($scope.limit){
            if(pageNumber>$scope.limit)return;
        }
        if (pageNumber === undefined) {
            pageNumber = '1';
        }
        if (orderBy === undefined) {
            
            if($scope.orderBy != 'id'){
                orderBy=$scope.orderBy;
            }
            else
                orderBy = 'id';
        }
        else{
            $scope.orderBy=orderBy;
        }
        if($scope.reverseSort)
            sortOrder='DESC';
        else
            sortOrder='ASC';
        
	pagination = ($scope.exportFoundData)? -1:1;
         $http({
            url: ApiUrl+'provider/filter',
            method: "POST",
            data: {'query' : $scope.query , 'filters':$scope.filters,'pageNumber':pageNumber,'orderBy':orderBy,'sortOrder':sortOrder, 'pagination':pagination }
        })
        .then(function(response) {
            // success
            //console.log(response);
			if($scope.exportFoundData)
			{
				
				angular.forEach(response.data, function (row) {
					$scope.seletedProviders.push(row.id);
				});
				
				$location.path('/provider/export');
			}
			else
			{
				$scope.providers=response.data.data;
				$scope.currentPage=response.data.current_page;
				$scope.total=response.data.total;
				$scope.limit=response.data.last_page;
				$scope.range=[];
				for(var i=0;i<response.data.last_page;i++){
					$scope.range.push(i);
				}
				//console.log($scope.currentPage);
			}
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.GetProviderByIDs=function(){
        $scope.seletedProviders=$localStorage.seletedProviders;
        //console.log($scope.seletedProviders);
        $http({
            url: ApiUrl+'provider/getbyids',
            method: "POST",
            data: { 'ids' : $scope.seletedProviders }
        })
        .then(function(response) {
            // success
            $scope.providers=response.data;
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.AddFilter=function(name){
        //console.log(name);
        $scope.filters.push({
            filter:name,
            operator:'like',
            query:''
        });
        
    };

    $scope.getProviders=function(){
        $scope.providers=Provider.query();
    };

    $scope.deleteProvider=function($providerID){
		$http({
	        url: ApiUrl+'provider/deletebyids',
	        method: "POST",
	        data: { 'ids' : $providerID }
	    })
	    .then(function(response) {
			Flash.set({Msg:'Provider successfully deleted',Type:'Success'});
			$location.path('/providers');
	    });
    };
	
	$scope.picExists = function(pic){
		return (pic==null || pic=='')? false:true;
	}

    $scope.DeleteProviderByIds=function(){
        $scope.seletedProviders=$localStorage.seletedProviders;
        $http({
            url: ApiUrl+'provider/deletebyids',
            method: "POST",
            data: { 'ids' : $scope.seletedProviders }
        })
        .then(function(response) {
            // success
            $localStorage.$reset();
            $location.path('/providers');
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.GetSelectedToDelete=function(){
        angular.forEach($scope.providers, function (provider) {
            if(provider.Selected){
                $scope.seletedProviders.push(provider.id);
            }
        });
        $localStorage.seletedProviders=$scope.seletedProviders;
        $location.path('/provider/delete_bulk');
    
    };

    $scope.TakeAction=function(action){
    	switch(action){
    		case 'save':
				$location.path('/providers');
				/*if($location.path().indexOf('new') > -1){
					$scope.provider=undefined;
				}
				
				$scope.showSelectedImage = false;
    			var message=Flash.get();
    			SetMessage(message);*/
				
    		break;
			
    		case 'add':
				
				if($location.path().indexOf('edit') > -1){
					$location.path('/provider/new');
				}
				else{
					$scope.provider=undefined;
					$scope.showSelectedImage = false;
					var message=Flash.get();
					SetMessage(message);
				}
				
    		break;
			
    		case 'edit':
				var message=Flash.get();
				SetMessage(message);
				
    		break;
			
    		default:
    			$location.path('/providers');
    		break;
    	}
    }
	
	if($location.path().indexOf('new') > -1){
		console.log($rootScope.addFromEdit);
		if($rootScope.addFromEdit != undefined){
			$rootScope.addFromEdit = undefined;
			$scope.TakeAction('add');
		}
	}
	
    $scope.AddNew=function(action){
		$scope.email_error = '';
		$scope.password_error = '';
		$scope.portfolio_error = '';
						
        if($scope.provider.id>0){
			
			var profile_pic=picture.files.item(0);
			$scope.provider.country = $scope.seletedCountry;
			
			var jsonData=$scope.provider;
			
			$http({
				url: ApiUrl+'provider',
				params: {id: $scope.provider.id}, 
				method: "POST",
				headers: {'Content-Type': undefined },
				transformRequest: function (data) {
					data._method = 'PUT';
					var formData = new FormData();
					formData.append("model", angular.toJson($scope.provider));
					formData.append("profile_pic", picture.files.item(0));
					formData.append("w9_form", w9form.files.item(0));
					
					if($scope.selectedObjects)
					{
						formData.append("tags", angular.toJson($scope.selectedObjects));
					}
					
					return formData;
				},
				data: {'provider' : jsonData,'profile_pic':profile_pic,'w9_form':w9_form },
				
			})
			.then(function(response) {
				console.log(response);
				// success
				if(response.data.errors)
				{
					errors = $.parseJSON(response.data.errors);
					if(errors.email != undefined){
						$scope.email_error = errors.email;
					}
					if(errors.password != undefined){
						$scope.password_error = errors.password;
					}
					
					if(errors.portfolio != undefined){
						$scope.portfolio_error = errors.portfolio;
					}
				}
				else
				{
					if(action=='add'){
						$rootScope.addFromEdit = 1;
					}
					Flash.set({Msg:'Provider successfully updated',Type:'Success'});
					$scope.TakeAction(action);
				}
				
			});
		    
		}
        
        else{
            var profile_pic=picture.files.item(0);
            var w9_form=w9form.files.item(0);
            var jsonData=$scope.provider;
	    	$scope.provider.country = $scope.seletedCountry;
			
		    $http({
				url: ApiUrl+'provider',
				method: "POST",
				headers: {'Content-Type': undefined },
				transformRequest: function (data) {
					var formData = new FormData();
					formData.append("model", angular.toJson($scope.provider));
					formData.append("profile_pic", picture.files.item(0));
					formData.append("w9_form", w9form.files.item(0));
					
					if($scope.selectedObjects)
					{
						formData.append("tags", angular.toJson($scope.selectedObjects));
					}
					
					return formData;
				},
				data: {'provider' : jsonData,'profile_pic':profile_pic,'w9_form':w9_form },
            })
			.then(function(response) {
				console.log(response);
				if(response.data.errors)
				{
					errors = $.parseJSON(response.data.errors);
					if(errors.email != undefined){
						$scope.email_error = errors.email;
					}
					if(errors.password != undefined){
						$scope.password_error = errors.password;
					}
					if(errors.portfolio != undefined){
						$scope.portfolio_error = errors.portfolio;
					}
					
				}
				else
				{
					if(response.data.id != undefined){
						$rootScope.providerId = response.data.id;
					}
					
					Flash.set({Msg:'Provider successfully created',Type:'Success'});
					
					if($location.path().indexOf('new') > -1){
						$rootScope.addFromEdit=1;
					}
					
					if(action=='edit'){
						$location.path('/provider/edit/'+$scope.providerId);
					}
					else{
						$scope.TakeAction(action);
					}
				}
			});
		    
		}
	};

    $scope.GetProvider=function(){
		$scope.provider=Provider.get({id:$routeParams.providerID},function(response){
			
			if($location.path().indexOf('show') > -1){
				$scope.workarearadio = (response.work_area_radio==null)? false:true;
				$scope.providertags = (parseInt(response.tags.length)==0)? false:true;
				$scope.pictureshow = (response.picture==null)? false:true;
				$scope.portfolioshow = (response.portfolio==null)? false:true;
				$scope.yearexpshow = (parseInt(response.years_experience)==0)? false:true;
				$scope.zipshow = (response.zipcode==null)? false:true;
				$scope.phoneshow = (response.phone_number==null)? false:true;
			}
			
			if($rootScope.providerId != undefined){
				$rootScope.providerId=undefined;
				Flash.set({Msg:'Provider successfully created',Type:'Success'});
				$scope.TakeAction('edit');
			}
			
			$scope.mainHeadAddEdit="Edit Provider '"+response.name+"'";
			$scope.provider.years_experience = parseInt(response.years_experience);
			if(response.picture != undefined){
				$scope.image_source = "./storage/profiles/"+response.id+"/"+response.picture;
				$scope.showSelectedImage = true;
			}
			
			if(response.w9_form != undefined){
				$scope.w9formDownloadLink = '<a href="'+ApiUrl+'storage/w9_forms/'+response.id+'/'+response.w9_form+'" target="_blank">'+ApiUrl+'storage/w9_forms/'+response.id+'/'+response.w9_form+'</a>';
				
				$scope.w9formDownloadLink = $sce.trustAsHtml($scope.w9formDownloadLink);
				
				$scope.showSelectedImage = true;
			}
			
			if(response.tags != undefined){
				$scope.selectedObjects = response.tags
				angular.forEach(response.tags, function(tag){
					var index = $scope.tags.indexOf($filter('filter')($scope.tags, {id: tag.id })[0]);
					$scope.tags.splice(index, 1);
				});
			}
			
			if(response.country != undefined){
				$scope.seletedCountry = response.country;
			}
			
		});
		
	};

    $scope.RemoveFilters=function(id){

        if(angular.isUndefined(id)){
            $scope.query="";
            $scope.filters=[];
            $scope.SearchProvider();
        }
        else{
            //console.log(id);
            $scope.filters.splice(id,1);
        }
    };

	$scope.selectAllProviders = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.providers, function (provider) {
            provider.Selected = $scope.selectedAll;
        });
    };
	
	$scope.exportSelected = function(){
		angular.forEach($scope.providers, function (provider) {
			if(provider.Selected){
				$scope.seletedProviders.push(provider.id);
			}
		});
		
		$location.path('/provider/export');
	};
	
	$scope.setFile = function(element) {
		$scope.currentFile = element.files[0];
		var reader = new FileReader();
		
		reader.onload = function(event) {
			$scope.image_source = event.target.result
			$scope.$apply();
		}
		// when the file is read it triggers the onload event above.
		reader.readAsDataURL(element.files[0]);
		$scope.showSelectedImage = true;
	}
	
}]);

phocusControllers.controller('ProviderExportController', ['$scope', function ($scope) {
	$scope.CSRF_TOKEN = csrf_token_js;
	$scope.inputSelectedAdmin = $scope.seletedProviders;
	
	/*	Admin Expert Checkboxes	*/
	$scope.AdminFields = [{ Name: "schema[users][]", Value: 'id', title: 'Id'},
						  { Name: "schema[users][]", Value: 'email', title: 'Email'},
						  { Name: "schema[users][]", Value: 'reset_password_sent_at', title: 'Reset password sent at'},
						  { Name: "schema[users][]", Value: 'remember_created_at', title: 'Remember created at'},
						  { Name: "schema[users][]", Value: 'sign_in_count', title: 'Sign in count'},
						  { Name: "schema[users][]", Value: 'current_sign_in_at', title: 'Current sign in at'},
						  { Name: "schema[users][]", Value: 'current_sign_in_at', title: 'Last sign in at'},
						  { Name: "schema[users][]", Value: 'current_sign_in_ip', title: 'Current sign in ip'},
						  { Name: "schema[users][]", Value: 'last_sign_in_ip', title: 'Last sign in ip'},
						  { Name: "schema[users][]", Value: 'created_at', title: 'Created at'},
						  { Name: "schema[users][]", Value: 'updated_at', title: 'Updated at'},
						  { Name: "schema[users][]", Value: 'role', title: 'Role'},
						  //{ Name: "schema[users][]", Value: 'type', title: 'type'},
						  { Name: "schema[users][]", Value: 'name', title: 'Name'},
						  { Name: "schema[users][]", Value: 'years_experience', title: 'Years experience'},
						  { Name: "schema[users][]", Value: 'picture', title: 'Picture'},
						  { Name: "schema[users][]", Value: 'completed_profile', title: 'completed profile'},
						  { Name: "schema[users][]", Value: 'work_area_radio', title: 'Work area radio'},
						  { Name: "schema[users][]", Value: 'country', title: 'Country'},
						  { Name: "schema[users][]", Value: 'zipcode', title: 'Zipcode'},
						  { Name: "schema[users][]", Value: 'phone_number', title: 'Phone Number'},
						  { Name: "schema[users][]", Value: 'alternate_number', title: 'Alternate Number'},
						  { Name: "schema[users][]", Value: 'portfolio', title: 'Portfolio'}];
					
	$scope.associatedVersions = [{Name: "schema[versions][]", Value: 'id', title: 'Id'},
								 {Name: "schema[versions][]", Value: 'event', title: 'Event'},
								 {Name: "schema[versions][]", Value: 'whodunnit', title: 'Whodunnit'},
								 {Name: "schema[versions][]", Value: 'object', title: 'Object'},
								 {Name: "schema[versions][]", Value: 'created_at', title: 'Created at'},
								 {Name: "schema[versions][]", Value: 'object_changes', title: 'Object Changes'},
								 {Name: "schema[versions][]", Value: 'transaction', title: 'Transaction'}];
	
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.AdminFields, function (field) {
            field.Selected = $scope.selectedAll;
        });
		
		angular.forEach($scope.associatedVersions, function (field) {
            field.Selected = $scope.selectedAll;
        });
    };
	
	$scope.selectedAll = true;
	$scope.checkAll();
	
}]);


/***************************************
 *Controller leads
 ***************************************/

phocusControllers.controller('LeadsController', ['$scope', '$rootScope', 'NgTableParams', 'Lead', '$location', '$routeParams', '$timeout','$http','$localStorage','Flash','ApiUrl','$route',
 function ($scope, $rootScope, NgTableParams, Lead, $location, $routeParams, $timeout,$http,$localStorage,Flash,ApiUrl,$route) {
	
    $rootScope.seletedLeads = [];
	$rootScope.active_item = "leads"; //it highlight sidebar current link
    $scope.filters=[];
    $scope.reverseSort = false;
    $scope.orderBy = 'id';
	
	$scope.searchPerformed = false;
	$scope.exportFoundData = false;


    $scope.setupPage=function(){
        if(!$routeParams.adminID){
            $scope.mainHeadAddEdit='New Lead';
            $scope.breadHeadAddEdit='New';
            $scope.tabHeadAddEdit='New';
        }
        else{
            $scope.mainHeadAddEdit='Edit Lead';
            $scope.breadHeadAddEdit='Edit';
            $scope.tabHeadAddEdit='Edit';

        }
    };

    $scope.CancelSave=function(){
		Flash.set({Msg:'No actions were taken',Type:'Info'});
		$location.path('/leads');
	}

    function SetMessage(message){
        if(message){
            switch (message.Type){
                case 'Success':
                    $scope.success_message=message.Msg;
                break;
				
                case 'Info':
    				$scope.info_message=message.Msg;
    			break;
				
                default:
                break;
            }
        }
    }
	
	/*	Export Found Admins	*/
	$scope.exportFound=function(){
		
		$scope.exportFoundData = true;
		if($scope.searchPerformed ){
			$scope.SearchLead();
		}
		else{
			$location.path('/lead/export');
		}
		
	}
	
    $scope.SearchLead=function(pageNumber,orderBy,sortOrder){
		
		if(pageNumber == -1){
			$scope.searchPerformed = true;
		}
		
        //console.log('pageNumber'+pageNumber);
        var message=Flash.get();
        SetMessage(message);
        if($scope.limit){
            if(pageNumber>$scope.limit)return;
        }
        if (pageNumber === undefined) {
            pageNumber = '1';
        }
        if (orderBy === undefined) {
            
            if($scope.orderBy != 'id'){
                orderBy=$scope.orderBy;
            }
            else
                orderBy = 'id';
        }
        else{
            $scope.orderBy=orderBy;
        }
        if($scope.reverseSort)
            sortOrder='ASC';
        else
            sortOrder='DESC';
			
		pagination = ($scope.exportFoundData)? -1:1;
        
         $http({
            url: ApiUrl+'lead/filter',
            method: "POST",
            data: {'query' : $scope.query , 'filters':$scope.filters,'pageNumber':pageNumber,'orderBy':orderBy,'sortOrder':sortOrder, 'pagination':pagination }
        })
        .then(function(response) {
            // success
            console.log(response);
			if($scope.exportFoundData)
			{
				
				angular.forEach(response.data, function (row) {
					$scope.seletedLeads.push(row.id);
				});
				
				$location.path('/lead/export');
			}
			else
			{
				$scope.leads=response.data.data;
				$scope.currentPage=response.data.current_page;
				$scope.total=response.data.total;
				$scope.limit=response.data.last_page;
				$scope.range=[];
				for(var i=0;i<response.data.last_page;i++){
					$scope.range.push(i);
				}
				//console.log($scope.currentPage);
			}
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.GetLeadByIDs=function(){
        $scope.seletedLeads=$localStorage.seletedLeads;
        //console.log($scope.seletedLeads);
        $http({
            url: ApiUrl+'lead/getbyids',
            method: "POST",
            data: { 'ids' : $scope.seletedLeads }
        })
        .then(function(response) {
            // success
            $scope.leads=response.data;
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.AddFilter=function(name){
        //console.log(name);
        $scope.filters.push({
            filter:name,
            operator:'like',
            query:''
        });
        
    };

    $scope.getLeads=function(){
        $scope.leads=Lead.query();
    };

    $scope.deleteLead=function($leadID){
        $scope.lead=Lead.delete({id:$leadID},function(data){
            Flash.set({Msg:'Lead Deleted Successfully!',Type:'Success'});
            //console.log(Flash.queue);
            $location.path('/leads');
    });
    };

    $scope.DeleteLeadByIds=function(){
        $scope.seletedLeads=$localStorage.seletedLeads;
        $http({
            url: ApiUrl+'lead/deletebyids',
            method: "POST",
            data: { 'ids' : $scope.seletedLeads }
        })
        .then(function(response) {
            // success
            $localStorage.$reset();
            $location.path('/leads');
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.GetSelectedToDelete=function(){
        angular.forEach($scope.leads, function (lead) {
            if(lead.Selected){
                $scope.seletedLeads.push(lead.id);
            }
        });
        $localStorage.seletedLeads=$scope.seletedLeads;
        $location.path('/lead/delete_bulk');
    
    };
	
    $scope.TakeAction=function(action){
    	switch(action){
    		case 'save':
    			$location.path('/leads');
    		break;
			
    		case 'add':
				if($location.path().indexOf('edit') > -1){
					$location.path('/lead/new');
				}
				else{
					$scope.lead=undefined;
					var message=Flash.get();
					SetMessage(message);
				}
				
    		break;
			
    		case 'edit':
				if($location.path().indexOf('new') > -1){
					$location.path('/lead/edit/'+$rootScope.leadId);
				}else{
					var message=Flash.get();
					SetMessage(message);
				}
				
    		break;
			
    		default:
    			$location.path('/leads');
    		break;
    	}
    }

	if($location.path().indexOf('new') > -1){
		if($rootScope.addFromEdit != undefined){
			$rootScope.addFromEdit = undefined;
			$scope.TakeAction('add');
		}
	}
	
    $scope.AddNew=function(action){
        if($scope.lead.id > 0){
            Lead.update({id:$scope.lead.id},$scope.lead,function(response){
				$scope.leadId = response.id;
				
				if(action=='add'){
					$rootScope.addFromEdit = 1;
				}
				
            	Flash.set({Msg:'Lead successfully updated',Type:'Success'});
                $scope.TakeAction(action);
        });
        }
        else{
            Lead.save($scope.lead,function(response){
				$rootScope.leadId = response.id;
                Flash.set({Msg:'Lead successfully created',Type:'Success'});
                $scope.TakeAction(action);
            });
        }
    };

    $scope.GetLead=function(){
        $scope.lead=Lead.get({id:$routeParams.leadID},function(response){
			console.log(response);
			
			if($rootScope.leadId != undefined){
				$rootScope.leadId=undefined;
				Flash.set({Msg:'Lead successfully created',Type:'Success'});
				$scope.TakeAction('edit');
			}
			
		});
    };

    $scope.RemoveFilters=function(id){

        if(angular.isUndefined(id)){
            $scope.query="";
            $scope.filters=[];
            $scope.SearchLead();
        }
        else{
            //console.log(id);
            $scope.filters.splice(id,1);
        }
    };


    $scope.selectAllLeads = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.leads, function (lead) {
            lead.Selected = $scope.selectedAll;
        });
    };

	$scope.exportSelected = function(){
		angular.forEach($scope.leads, function (lead) {
			if(lead.Selected){
				$scope.seletedLeads.push(lead.id);
			}
		});
		
		$location.path('/lead/export');
	};
}]);



phocusControllers.controller('LeadsExportController', ['$scope', 'Admin', function ($scope, Admin) {
	$scope.CSRF_TOKEN = csrf_token_js;
	$scope.inputSelectedLeads = $scope.seletedLeads;
	
	/*	Admin Expert Checkboxes	*/
	$scope.LeadsFields = [{ Name: "schema[leads][]", Value: 'id', title: 'Id'},
						  { Name: "schema[leads][]", Value: 'email', title: 'Email'},
						  { Name: "schema[leads][]", Value: 'interested_in', title: 'Interested In'},
						  { Name: "schema[leads][]", Value: 'created_at', title: 'Created at'},
						  { Name: "schema[leads][]", Value: 'updated_at', title: 'Updated at'}];
						  
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.LeadsFields, function (field) {
            field.Selected = $scope.selectedAll;
        });
    };
	
	$scope.selectedAll = true;
	$scope.checkAll();
	
}]);


/*	Tag Gears	*/
phocusControllers.controller('TagController', ['$scope', 'Tag', '$location', '$rootScope','$http','$localStorage','Flash','$routeParams','ApiUrl',
    function ($scope, Tag, $location, $rootScope,$http,$localStorage,Flash,$routeParams,ApiUrl) {
	
    $scope.isGear=false;
    $scope.tag_type='image';
    $scope.showAll=false;
	
	if($location.path().indexOf('tag_gear')>-1){
		//$scope.rows=Tags.query({id:'tags',type:'TagGear'});
		$rootScope.active_item = "tag_gear";
        $scope.isGear=true;
        $scope.tag_type='gear';
	}
	
	if($location.path().indexOf('tag_image')>-1){
		//$scope.rows=Tags.query({id:'tags',type:'TagImage'});
        //console.log('tag_image');
		$rootScope.active_item = "tag_images";
		$scope.tag_type='image';
	}
	
	if($location.path().indexOf('nestable') >- 1){
		if($rootScope.itemsList){
			$scope.itemsList = $rootScope.itemsList;
		}
		else
		{
			$http.get(ApiUrl+'tag/get/'+$scope.tag_type).then(function(response) {
				$scope.itemsList = response.data;
			}); // End http get
		}
		$scope.sortableOptions = {
			containment: '#table-container',
			containerPositioning: 'relative'
		};
	}
	
	$scope.savePositions = function(){
		//console.log($scope.itemsList);
		var i=1;
		angular.forEach($scope.itemsList, function(item){
			item.position = i;
			i++;
		});
		
		
		if($scope.liveUpdate){
			
			Tag.update_positions($scope.itemsList,function(data){
				console.log(data);
				$rootScope.itemsList = $scope.itemsList;
            });
			
		}else{
			$rootScope.itemsList = $scope.itemsList;
		}
		
		$scope.successTextAlert = "Success!";
		$scope.showSuccessAlert = true;
		
		window.setTimeout(function() { $(".alert-success").alert('close'); }, 3000);
	};
	
	$rootScope.seletedTags = [];
    $scope.filters=[];
    $scope.reverseSort = true;
    $scope.orderBy = 'position';
	
	$scope.searchPerformed = false;
	$scope.exportFoundData = false;

	$scope.CancelSave=function(){
		Flash.set({Msg:'No actions were taken',Type:'Info'});
		var path=($scope.isGear)?'/tag_gear':'/tag_image';
		$location.path(path);
	}


    $scope.setupPage=function(){
        if(!$routeParams.tagID){
            if($scope.isGear)
                $scope.mainHeadAddEdit='New Tag gear';
            else
                $scope.mainHeadAddEdit='New Tag image';
            $scope.breadHeadAddEdit='New';
            $scope.tabHeadAddEdit='New';
        }
        else{
            if($scope.isGear)
                $scope.mainHeadAddEdit='Edit Tag gear';
            else
                $scope.mainHeadAddEdit='Edit Tag image';
            $scope.breadHeadAddEdit='Edit';
            $scope.tabHeadAddEdit='Edit';

        }
    };

    function SetMessage(message){
        if(message){
            switch (message.Type){
                case 'Success':
                    $scope.success_message=message.Msg;
                break;
                case 'Info':
    				$scope.info_message=message.Msg;
    			break;
                default:
                break;
            }
        }
    }
	
	$scope.switchBool = function(value) {
	   $scope[value] = !$scope[value];
	};
	
	/*	Export Found Admins	*/
	$scope.exportFound=function(){
		
		$scope.exportFoundData = true;
		if($scope.searchPerformed ){
			$scope.SearchTag();
		}
		else{
			$location.path($location.path() + '/export');
		}
		
	}
	
    $scope.SearchTag=function(pageNumber,orderBy,sortOrder){
		
		$scope.makeAjaxCall = false;
		
		if((pageNumber==undefined && orderBy==undefined && sortOrder==undefined) && $rootScope.itemsList)
		{
			$scope.makeAjaxCall = false;
		}
		else
		{
			$scope.makeAjaxCall = true;
		}
		
		if(pageNumber == -1){
			$scope.searchPerformed = true;
		}
		if(pageNumber == -2){
			$scope.showAll = true;
			pageNumber = '1';
		}
		
        var message=Flash.get();
        SetMessage(message);
        if($scope.limit){
            if(pageNumber>$scope.limit)return;
        }
        if (pageNumber === undefined) {
            pageNumber = '1';
        }
        if (orderBy === undefined) {
            
            if($scope.orderBy != 'position'){
                orderBy=$scope.orderBy;
            }
            else
                orderBy = 'position';
        }
        else{
            $scope.orderBy=orderBy;
        }
        sortOrder = ($scope.reverseSort)? 'ASC':'DESC';
		pagination = ($scope.exportFoundData)? -1:1;
		
		if($scope.showAll){
			pagination=-1;
		}
	
        $http({
            url: ApiUrl+'tag/filter',
            method: "POST",
            data: {'query' : $scope.query , 'filters':$scope.filters,'pageNumber':pageNumber,'orderBy':orderBy,'sortOrder':sortOrder,'type':$scope.tag_type, 'pagination':pagination }
        })
        .then(function(response) {
			if($scope.exportFoundData)
			{
				
				angular.forEach(response.data, function (row) {
					$scope.seletedTags.push(row.id);
				});
				
				$location.path($location.path() + '/export');
				
			}
			else
			{
				//$scope.tags = ($scope.makeAjaxCall || $scope.showAll)? response.data.data:$rootScope.itemsList;
				if($scope.showAll){
					$scope.tags=response.data;
				}
				else
				$scope.tags =  response.data.data;
				$scope.currentPage=response.data.current_page;
				$scope.total=response.data.total;
				$scope.limit=response.data.last_page;
				$scope.range=[];
				for(var i=0;i<response.data.last_page;i++){
					$scope.range.push(i);
				}
			}
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.GetTagByIDs=function(){
        $scope.seletedTags=$localStorage.seletedTags;
        //console.log($scope.seletedTags);
        $http({
            url: ApiUrl+'tag/getbyids',
            method: "POST",
            data: { 'ids' : $scope.seletedTags }
        })
        .then(function(response) {
            // success
            $scope.tags=response.data;
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.AddFilter=function(name){
        $scope.filters.push({
            filter:name,
            operator:'like',
            query:''
        });
    };

    $scope.getTags=function(){
        $scope.tags=Tag.query();
    };


    $scope.deleteTag=function($tagID){
        $scope.tag=Tag.delete({id:$tagID},function(data){
            Flash.set({Msg:'Tag Deleted Successfully!',Type:'Success'});
            //console.log(Flash.queue);
            if($scope.isGear)
                $location.path('/tag_gear');
            else
                $location.path('/tag_image');
    });
    };


    $scope.DeleteTagByIds=function(){
        $scope.seletedTags=$localStorage.seletedTags;
        $http({
            url: ApiUrl+'tag/deletebyids',
            method: "POST",
            data: { 'ids' : $scope.seletedTags }
        })
        .then(function(response) {
            // success
            $localStorage.reset();
            if($scope.isGear)
                $location.path('/tag_gear');
            else
                $location.path('/tag_image');
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.GetSelectedToDelete=function(){
        angular.forEach($scope.tags, function (tag) {
            if(tag.Selected){
                $scope.seletedTags.push(tag.id);
            }
        });
        $localStorage.seletedTags=$scope.seletedTags;

        if($scope.isGear)
            $location.path('/tag_gear/delete_bulk');
        else
            $location.path('/tag_image/delete_bulk');
    
    };

    $scope.TakeAction=function(action){
    	var path=($scope.isGear)?'/tag_gear':'/tag_image';
		//$location.path(path);
    	switch(action){
    		case 'save':
    			$location.path(path);
    		break;
    		case 'add':
    			$scope.tag=undefined;
    			var message=Flash.get();
    			SetMessage(message);
    		break;
    		case 'edit':
    			var message=Flash.get();
    			SetMessage(message);
    		break;
    		default:
    			$location.path(path);
    		break;
    	}
    }

    $scope.AddNew=function(action){
        if($scope.tag.id>0){
            Tag.update({id:$scope.tag.id},$scope.tag,function(data){
                // if($scope.isGear)
                //     $location.path('/tag_gear');
                // else
                //     $location.path('/tag_image');
                Flash.set({Msg:'Tag '+$scope.tag.type+' successfully updated!',Type:'Success'});
                $scope.TakeAction(action);
        });
        }
        else{
            if($scope.isGear)
                $scope.tag.type='gear';
            else
                $scope.tag.type='image';
				
            Tag.save($scope.tag,function(response){
				if(response.errors)
				{
					errors = $.parseJSON(response.errors);
					if(errors.name != undefined){
						$scope.name_error = errors.name;
					}
				}
				else
				{
					Flash.set({Msg:'Tag '+$scope.tag.type+' successfully created!',Type:'Success'});
                	$scope.TakeAction(action);
					//$location.path((($scope.isGear)? '/tag_gear':'/tag_image'));
				}
            });
        }
    };

    $scope.GetTag=function(){
        $scope.tag=Tag.get({id:$routeParams.tagID},function(){});
        if($location.path().indexOf('delete')>-1){
        	$http({
            url: ApiUrl+'tag/getassociatedvesions',
            method: "POST",
            data: { 'tagID' : $routeParams.tagID }
        })
        .then(function(response) {
            // success
            $scope.associatedVerIDs=response.data;
        }, 
        function(response) { // optional
            // failed
        });
        }
    };

    $scope.RemoveFilters=function(id){

        if(angular.isUndefined(id)){
            $scope.query="";
            $scope.filters=[];
            $scope.SearchTag();
        }
        else{
            //console.log(id);
            $scope.filters.splice(id,1);
        }
    };
	
	$scope.selectAllTags = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.tags, function (tag) {
            tag.Selected = $scope.selectedAll;
        });
    };
	
	$scope.exportSelected = function(){
		angular.forEach($scope.tags, function (tag) {
			if(tag.Selected){
				$scope.seletedTags.push(tag.id);
			}
		});
		
		$location.path($location.path() + '/export');
	};
}]);

phocusControllers.controller('TagsExportController', ['$scope', '$location', function ($scope, $location) {
	if($location.path() == '/tag_gear/export'){
		$scope.inputTagType = 'gear';
	}
	
	else if($location.path()=='/tag_image/export'){
		$scope.inputTagType = 'image';
	}
	
	$scope.CSRF_TOKEN = csrf_token_js;
	$scope.inputSelectedRows = $scope.seletedTags;
	
	/*	Admin Expert Checkboxes	*/
	$scope.fields = [{ Name: "schema[tags][]", Value: 'id', title: 'Id'},
						  { Name: "schema[tags][]", Value: 'type', title: 'Type'},
						  { Name: "schema[tags][]", Value: 'name', title: 'Name'},
						  { Name: "schema[tags][]", Value: 'created_at', title: 'Created at'},
						  { Name: "schema[tags][]", Value: 'updated_at', title: 'Updated at'},
						  { Name: "schema[tags][]", Value: 'position', title: 'Position'}];
						  
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.fields, function (field) {
            field.Selected = $scope.selectedAll;
        });
    };
	
	$scope.selectedAll = true;
	$scope.checkAll();
	
}]);

/***************************************
 *Controller Contact Requests
 ***************************************/
phocusControllers.controller('ContactRequestController', ['$scope', '$rootScope', 'NgTableParams', 'ContactRequest', '$location', '$routeParams','Flash','$http','$localStorage','ApiUrl',
 function ($scope, $rootScope, NgTableParams, ContactRequest, $location, $routeParams,Flash,$http,$localStorage,ApiUrl) {
	
	$rootScope.active_item = "contact_request"; //it highlight sidebar current link
	$rootScope.seletedRequests = [];
    $scope.filters=[];
    $scope.sorting = {'reverseSort':true};
    $scope.orderBy = 'id';
	$scope.showAll=false;
	$scope.shouldShowAll=false;
	$scope.searchPerformed = false;
	$scope.exportFoundData = false;
	$scope.setNo=0;
	

	$scope.CancelSave=function(){
		Flash.set({Msg:'No actions were taken',Type:'Info'});
		$location.path('/contact_request');
	}

    $scope.setupPage=function(){
        //console.log('In setup page');
        if(!$routeParams.requestID){
            $scope.mainHeadAddEdit='New Contact Request';
            $scope.breadHeadAddEdit='New';
            $scope.tabHeadAddEdit='Add New';
        }
        else{
            //console.log('id is greater');
            $scope.mainHeadAddEdit='Edit Contact Request';
            $scope.breadHeadAddEdit='Edit';
            $scope.tabHeadAddEdit='Edit';

        }
    };

    function SetMessage(message){
        if(message){
            switch (message.Type){
                case 'Success':
                    $scope.success_message=message.Msg;
                break;
                case 'Info':
    				$scope.info_message=message.Msg;
    			break;
                default:
                break;
            }
        }
    }
	
	/*	Export Found Admins	*/
	$scope.exportFound=function(){
		
		$scope.exportFoundData = true;
		if($scope.searchPerformed ){
			$scope.SearchRequest();
		}
		else{
			$location.path('/contact_request/export');
		}
		
	}
	
    $scope.SearchRequest=function(pageNumber,orderBy,sortOrder,setNo){
    	
    	console.log(pageNumber+' '+orderBy+' '+sortOrder+' '+setNo);
    	
    	$scope.pageNumber=pageNumber;
    	$scope.tableHeaders=[
    		{'name':'Full Name','colName':'full_name','width':'20%'},
    		{'name':'Phone Number','colName':'phone','width':'20%'},
    		{'name':'Location','colName':'location','width':'20%'},
    		{'name':'Zipcode','colName':'zip_code','width':'10%'},
    		{'name':'Subject','colName':'subject','width':'20%'},
    		{'name':'Is provider','colName':'is_provider','width':'10%'},
    		{'name':'...','colName':'...','width':'5%'}
    	];
		if(setNo===undefined){
    		setNo=$scope.setNo;
    	}
		else if(setNo==1){
			$scope.tableHeaders=[
    		{'name':'...','colName':'...','width':'5%'},
    		{'name':'Message','colName':'message','width':'40%'},
    		{'name':'Email','colName':'email','width':'40%'}
    		];
    		$scope.setNo=setNo;
		}
		else{
			$scope.setNo=setNo;
		}
		

		if(pageNumber == -1){
			$scope.searchPerformed = true;
		}
		
        var message=Flash.get();
        SetMessage(message);
        if($scope.limit){
            if(pageNumber>$scope.limit)return;
        }
        if (pageNumber === undefined) {
            pageNumber = '1';
            $scope.pageNumber=1;
        }
	if(pageNumber == -2){
			$scope.showAll = true;
			pageNumber = '1';
		}
        if (orderBy === undefined) {
            
            if($scope.orderBy != 'id'){
                orderBy=$scope.orderBy;
            }
            else
                orderBy = 'id';
        }
        else{
            $scope.orderBy=orderBy;
        }
        
        if($scope.sorting.reverseSort){
            sortOrder='ASC';
            $scope.sortOrder='ASC';
        }
        else{
            sortOrder='DESC';
            $scope.sortOrder='DESC';
        }
	    
	    
        
	pagination = ($scope.exportFoundData)? -1:1;
	if($scope.showAll){
			pagination=-1;
	}
         $http({
            url: ApiUrl+'contact_request/filter',
            method: "POST",
            data: {'query' : $scope.query , 'filters':$scope.filters,'pageNumber':pageNumber,'orderBy':orderBy,'sortOrder':sortOrder, 'pagination':pagination,'setNo':$scope.setNo }
        })
        .then(function(response) {
            // success
            //console.log(response);
			if($scope.exportFoundData)
			{
				
				angular.forEach(response.data, function (row) {
					$scope.seletedRequests.push(row.id);
				});
				
				$location.path('/contact_request/export');
			}
			else
			{
				console.log(response);
				if($scope.showAll){
					$scope.requests=response.data;
					if((response.data.length/20)>2 || (response.data.length/20)==1){
						$scope.shouldShowAll=false;
					}
					else{
						$scope.shouldShowAll=true;
					}
				}
				else{
				$scope.requests=response.data.data;
				$scope.currentPage=response.data.current_page;
				$scope.total=response.data.total;
				$scope.limit=response.data.last_page;
				$scope.range=[];
				if((response.data.total/20)>2 || (response.data.total/20)==1){
						$scope.shouldShowAll=false;
					}
					else{
						$scope.shouldShowAll=true;
					}
				for(var i=0;i<response.data.last_page;i++){
					$scope.range.push(i);
				}
				}
			}
        }, 
        function(response) { // optional
            // failed
        });
    };


    $scope.GetRequestByIDs=function(){
        $scope.seletedRequests=$localStorage.seletedRequests;
        $http({
            url: ApiUrl+'contact_request/getbyids',
            method: "POST",
            data: { 'ids' : $scope.seletedRequests }
        })
        .then(function(response) {
            // success
            $scope.requests=response.data;
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.AddFilter=function(name){
        $scope.filters.push({
            filter:name,
            operator:'like',
            query:''
        });
    };

    $scope.getRequests=function(){
        $scope.requests=ContactRequest.query();
    };

    $scope.deleteRequest=function($requestID){
        $scope.request=ContactRequest.delete({id:$requestID},function(data){
            Flash.set({Msg:'Contact Request Deleted Successfully!',Type:'Success'});
            //console.log(Flash.queue);
            $location.path('/contact_request');
    });
    };

    $scope.DeleteRequestByIds=function(){
        $scope.seletedRequests=$localStorage.seletedRequests;
        $http({
            url: ApiUrl+'contact_request/deletebyids',
            method: "POST",
            data: { 'ids' : $scope.seletedRequests }
        })
        .then(function(response) {
            // success
            $localStorage.$reset();
            $location.path('/contact_request');
        }, 
        function(response) { // optional
            // failed
        });
    };

    $scope.GetSelectedToDelete=function(){
        angular.forEach($scope.requests, function (request) {
            if(request.Selected){
                $scope.seletedRequests.push(request.id);
            }
        });
        $localStorage.seletedRequests=$scope.seletedRequests;
        $location.path('/contact_request/delete_bulk');
    
    };

    $scope.TakeAction=function(action){
    	switch(action){
    		case 'save':
    			$location.path('/contact_request');
    		break;
    		case 'add':
    			$scope.request=undefined;
    			var message=Flash.get();
    			SetMessage(message);
    		break;
    		case 'edit':
    			var message=Flash.get();
    			SetMessage(message);
    		break;
    		default:
    			$location.path('/contact_request');
    		break;
    	}
    }


    $scope.AddNew=function(action){
        if($scope.request.id>0){
            ContactRequest.update({id:$scope.request.id},$scope.request,function(data){
                Flash.set({Msg:'Contact request successfully updated!',Type:'Success'});
                $scope.TakeAction(action);
        });
        }
        else{
            ContactRequest.save($scope.request,function(data){
                //$location.path('/contact_request');
                Flash.set({Msg:'Contact request successfully created!',Type:'Success'});
                $scope.TakeAction(action);
            });
        }
    };

    $scope.GetRequest=function(){
        $scope.request=ContactRequest.get({id:$routeParams.requestID},function(){});
    };

    $scope.RemoveFilters=function(id){

        if(angular.isUndefined(id)){
            $scope.query="";
            $scope.filters=[];
            $scope.SearchRequest();
        }
        else{
            //console.log(id);
            $scope.filters.splice(id,1);
        }
    };

    $scope.selectAllRequests = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.requests, function (request) {
            request.Selected = $scope.selectedAll;
        });
    };
	

	
	$scope.exportSelected = function(){
		angular.forEach($scope.requests, function (request) {
			if(request.Selected){
				$scope.seletedRequests.push(request.id);
			}
		});
		
		$location.path('/contact_request/export');
	};
	
	
}]);

phocusControllers.controller('ContactRequestExportController', ['$scope', function ($scope) {
	$scope.CSRF_TOKEN = csrf_token_js;
	$scope.inputSelectedCRs = $scope.seletedRequests;
	
	/*	Admin Export Checkboxes	*/
	$scope.AdminFields = [{ Name: "schema[contact_requests][]", Value: 'id', title: 'Id'},
						  { Name: "schema[contact_requests][]", Value: 'full_name', title: 'Full name'},
						  { Name: "schema[contact_requests][]", Value: 'phone', title: 'Phone number'},
						  { Name: "schema[contact_requests][]", Value: 'email', title: 'Email'},
						  { Name: "schema[contact_requests][]", Value: 'location', title: 'Location'},
						  { Name: "schema[contact_requests][]", Value: 'zip_code', title: 'Zipcode'},
						  { Name: "schema[contact_requests][]", Value: 'subject', title: 'Subject'},
						  { Name: "schema[contact_requests][]", Value: 'is_provider', title: 'Is provider'},
						  { Name: "schema[contact_requests][]", Value: 'message', title: 'Message'},
						  { Name: "schema[contact_requests][]", Value: 'created_at', title: 'Created at'},
						  { Name: "schema[contact_requests][]", Value: 'updated_at', title: 'Updated at'}];
	
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.AdminFields, function (field) {
            field.Selected = $scope.selectedAll;
        });
    };
	
	$scope.selectedAll = true;
	$scope.checkAll();
	
}]);


/*	
	*PAPERTRAIL
	*Versions
*/
phocusControllers.controller('VersionController', ['$scope', 'Version', '$location', '$rootScope','$routeParams','$http','$localStorage','Flash','ApiUrl','$uibModal','$filter','$sce',
	function ($scope, Version, $location, $rootScope,$routeParams,$http,$localStorage,Flash,ApiUrl,$uibModal,$sce) {
	$scope.version={};
	$scope.selectedAssociations=[];
	$scope.associations=[];
	$scope.availableAssociations=[];
	$scope.AssociationSselected=[];
	$scope.allAssociation=false;
	$scope.versionTbl = true;
	$scope.versionObjChanges = false;
	$scope.selectedVersion = 'Search';

	$scope.SearchAssociation=function(filter){
		var searchTerm=filter;
		if(searchTerm){
			$scope.GetSearchedAssociations(searchTerm);
		}
		else{
			$scope.associations=[];
		}
	}

	$scope.toggleTable = function(tblNumber){
		if(tblNumber==2){
			$scope.SearchVersion(undefined,undefined,undefined,1);
			$scope.versionTbl = false;
			$scope.versionObjChanges = true;
		}
		
		if(tblNumber==1){
			$scope.SearchVersion(undefined,undefined,undefined,0);
			$scope.versionTbl = true;
			$scope.versionObjChanges = false;
		}
		
	}

	$scope.addAssociation=function(associationItem){
		angular.forEach(associationItem, function (node) {

        for (var idx = 0; idx < $scope.associations.length; idx++) {    
        	if ($scope.associations[idx].id == node) {
            	var association={};
            	association.id=node;
            	$scope.selectedAssociations.push(association);
                $scope.associations.splice(idx, 1);
                
            }
        }
    });
	}

	$scope.clearAll=function(){
		angular.forEach($scope.selectedAssociations, function (node) {
		var association={};
        association.id=node.id;
        $scope.associations.push(association);
    });
	$scope.selectedAssociations=[];
	$scope.allAssociation=false;
	}

	$scope.chooseAll=function(){
		if($scope.associations.length>0){
			$scope.allAssociation=false;
			angular.forEach($scope.associations, function (node) {
				var association={};
            	association.id=node.id;
            	$scope.selectedAssociations.push(association);
			});
			$scope.associations=[];
		}
		else{
			$scope.allAssociation=true;
		}
	}

	$scope.removeAssociation=function(associationItem){
		angular.forEach(associationItem, function (node) {

        for (var idx = 0; idx < $scope.selectedAssociations.length; idx++) {    
        	if ($scope.selectedAssociations[idx].id == node.id) {
            	var association={};
            	association.id=node.id;
            	$scope.associations.push(association);
                $scope.selectedAssociations.splice(idx, 1);
                
            }
        }
    });
	}

	if($localStorage.changeActive===undefined || $localStorage.changeActive){
		$rootScope.active_item = "versions"; //it highlight sidebar current link
	}
	
	$scope.filters=[];
	$scope.sorting = {'reverseSort':true};
	$scope.orderBy = 'versions.id';
	
	$scope.searchVersion = false;
	$scope.exportFoundData = false;
	$rootScope.seletedVersions = [];
	$scope.setNo=0;

	$scope.CancelSave=function(){
		Flash.set({Msg:'No actions were taken',Type:'Info'});
		$location.path('/paper_trail~version');
	}

	
	if($localStorage.showAddAssociation===undefined || $localStorage.showAddAssociation){
		$scope.showAddAssociation=true;
	}
	else{
		
		$scope.showAddAssociation=false;
	}
	delete $localStorage.showAddAssociation;
	delete $localStorage.changeActive;
	
	
	$scope.openAssociation = function () {
		$localStorage.showAddVersion=false;
		$localStorage.changeActive=false;
		$localStorage.redirect=false;
	    $scope.modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'modalNewAssociation',
	      controller: 'VersionAssociationController',
	      size: 'lg',
	      
	    });
	}

	$scope.cancel=function(){
		$rootScope.$broadcast("closeModal",'cancel');
	}

	$scope.GetSearchedAssociations=function(searchTerm){
		$http({
				url: ApiUrl+'version_association/search',
				method: "POST",
				data:{'searchTerm':searchTerm}
			})
			.then(function(response) {
				console.log(response);
				$scope.associations=response.data;
			},
			function(response) { // optional
	        // failed
	    	});
	}

	$scope.GetItems=function(){
		if($scope.version != undefined){
			$http({
				url: ApiUrl+'user/getallforddl',
				method: "POST",
				data:{'type':$scope.version.item_type}
			})
			.then(function(response) {
				//console.log(response);
				$scope.users=response.data;
			});
		}
	}

	$scope.setupPage=function(){
		if(!$routeParams.versionID){
			$scope.mainHeadAddEdit='New Version';
			$scope.breadHeadAddEdit='New';
			$scope.tabHeadAddEdit='Add new';
			$scope.listLink = true;
			$scope.showLink = false;
			$scope.showVersionLink_BC = false;
		}
		else{
			$scope.mainHeadAddEdit='Edit Version';
			$scope.breadHeadAddEdit='Edit';
			$scope.tabHeadAddEdit='Edit';
			$scope.listLink = false;
			$scope.showLink = true;
			$scope.showVersionLink_BC = true;
		}
    };

    function SetMessage(message){
    	if(message){
    		switch (message.Type){
    			case 'Success':
    				$scope.success_message=message.Msg;
    			break;
    			case 'Info':
    				$scope.info_message=message.Msg;
    			break;
    			default:
    			break;
    		}
    	}
    }


    $scope.SearchVersion=function(pageNumber,orderBy,sortOrder,setNo){
		$scope.pageNumber=pageNumber;
		if(pageNumber == -1){
			$scope.SearchVersion = true;
		}


		$scope.tableHeaders=[
    		{'name':'Id','colName':'id','width':'5%'},
    		{'name':'Item','colName':'item_type','width':'10%'},
    		{'name':'Event','colName':'event','width':'10%'},
    		{'name':'Whodunnit','colName':'whodunnit','width':'10%'},
    		{'name':'Object','colName':'object','width':'20%'},
    		{'name':'Created at','colName':'versions.created_at','width':'15%'},
    		{'name':'...','colName':'...','width':'5%'}
    	];

    	if(setNo===undefined){
    		setNo=$scope.setNo;
    	}
		else if(setNo==1){
			$scope.tableHeaders=[
    		{'name':'...','colName':'...'},
    		{'name':'Object changes','colName':'object_changes'},
    		{'name':'Transaction','colName':'transaction_id'},
    		{'name':'Version associations','colName':'version_association.id'}
    		];
    		$scope.setNo=setNo;
		}
		else{
			$scope.setNo=setNo;
		}
		
    	var message=Flash.get();
    	SetMessage(message);
    	if($scope.limit){
    		if(pageNumber>$scope.limit)return;
    	}
    	if (pageNumber === undefined) {
			pageNumber = '1';
			$scope.pageNumber=pageNumber;
		}
		if (orderBy === undefined) {
			
			if($scope.orderBy != 'versions.id'){
				orderBy=$scope.orderBy;
			}
			else
				orderBy = 'versions.id';
		}
		else{
			$scope.orderBy=orderBy;
		}
		if($scope.sorting.reverseSort){
            sortOrder='DESC';
            $scope.sortOrder='DESC';
        }
        else{
            sortOrder='ASC';
            $scope.sortOrder='ASC';
        }
			
		pagination = ($scope.exportFoundData)? -1:1;
		
		 $http({
	        url: ApiUrl+'version/filter',
	        method: "POST",
	        data: {'query' : $scope.query , 'filters':$scope.filters,'pageNumber':pageNumber,'orderBy':orderBy,'sortOrder':sortOrder, 'pagination':pagination,'setNo':$scope.setNo }
	    })
	    .then(function(response) {
            // success
            console.log(response.data);
			
			if($scope.exportFoundData){
				
				angular.forEach(response.data, function (row) {
					$scope.seletedrows.push(row.id);
				});
				
				$location.path('/paper_trail~version/export');
			}
			else{
				$scope.versions=response.data.data;
				$scope.currentPage=response.data.current_page;
				$scope.total=response.data.total;
				$scope.limit=response.data.last_page;
				$scope.range=[];
				for(var i=0;i<response.data.last_page;i++){
					$scope.range.push(i);
				}
				
			}
            //console.log($scope.currentPage);
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };



    $scope.GetVersionByIDs=function(){
    	$scope.seletedVersions=$localStorage.seletedVersions;
    	//console.log($scope.seletedAdmins);
    	$http({
	        url: ApiUrl+'version/getbyids',
	        method: "POST",
	        data: { 'ids' : $scope.seletedVersions }
	    })
	    .then(function(response) {
			
            // success
            $scope.versions=response.data;
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.AddFilter=function(name){
    	//console.log(name);
    	$scope.filters.push({
    		filter:name,
    		operator:'like',
    		query:''
    	});
    	
    };

    $scope.getVersions=function(){
    	$scope.versions=Version.query();
		
    };

    $scope.deleteVersion=function($versionID){
    	$scope.version=Version.delete({id:$versionID},function(data){
    		Flash.set({Msg:'Version Deleted Successfully!',Type:'Success'});
    		//console.log(Flash.queue);
    		$location.path('/paper_trail~version');
    });
    };

    $scope.DeleteVersionByIds=function(){
    	$scope.seletedVersions=$localStorage.seletedVersions;
    	$http({
	        url: ApiUrl+'version/deletebyids',
	        method: "POST",
	        data: { 'ids' : $scope.seletedVersions }
	    })
	    .then(function(response) {
            // success
            $localStorage.$reset();
            $location.path('/paper_trail~version');
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.GetSelectedToDelete=function(){
    	angular.forEach($scope.versions, function (version) {
			if(version.Selected){
				$scope.seletedVersions.push(version.id);
			}
		});
		$localStorage.seletedVersions=$scope.seletedVersions;
    	$location.path('/paper_trail~version/delete_bulk');
    
    };

    $scope.TakeAction=function(action){
    	switch(action){
    		case 'save':
				if($location.path().indexOf('new') > -1){
				  $scope.version=undefined;
				}
				var message=Flash.get();
				SetMessage(message);
				
				//$location.path('/paper_trail~version');
    		break;
			
    		case 'add':
				if($location.path().indexOf('edit') > -1){
					$location.path('/paper_trail~version/new');
				}
				else{
					$scope.lead=undefined;
					var message=Flash.get();
					SetMessage(message);
				}
				
    			$scope.version=undefined;
    			var message=Flash.get();
    			SetMessage(message);
    		break;
			
    		case 'edit':
    			if($location.path().indexOf('new') > -1){
					$location.path('/paper_trail~version/edit/'+$rootScope.versionId);
				}else{
					var message=Flash.get();
					SetMessage(message);
				}
				
    		break;
    		default:
    			$location.path('/paper_trail~version');
    		break;
    	}
    }
	
	if($location.path().indexOf('new') > -1){
		if($rootScope.addFromEdit != undefined){
			$rootScope.addFromEdit = undefined;
			$scope.TakeAction('add');
		}
	}
	
    $scope.AddNewVersion=function(action){
    	
		$scope.version.selectedAssociations=$scope.selectedAssociations;
    	$scope.version.allAssociation=$scope.allAssociation;
		
    	if($scope.version.id>0){
    		Version.update({id:$scope.version.id},$scope.version,function(data){
				
    			if($localStorage.redirect===undefined || $localStorage.redirect){
					
					if(action=='add'){
						$rootScope.addFromEdit = 1;
					}
					
    				Flash.set({Msg:'Version successfully updated',Type:'Success'});
    				$scope.TakeAction(action);
    				//$location.path('/paper_trail~version');
    			}
	    		else{
	    			$rootScope.$broadcast("versionUpdated", data.id);
	    			delete $localStorage.redirect;
	    		}
    	});
    	}
    	else{
	    	Version.save($scope.version,function(data){
				if($localStorage.redirect===undefined || $localStorage.redirect){
					console.log(data.id);
					if(action=='edit'){
				    	$rootScope.versionId = data.id;
					}
					
	    			Flash.set({Msg:'Version successfully created',Type:'Success'});
    				$scope.TakeAction(action);
	    			//$location.path('/paper_trail~version');
	    		}
	    		else{
	    			$rootScope.$broadcast("versionUpdated", data.id);
	    			delete $localStorage.redirect;
	    		}
	    	});
    	}
    };

    $scope.GetVersion=function(){
    	var idToSend=$routeParams.versionID;
		
    	if(!angular.isUndefined($localStorage.versionEditID)){
    		idToSend=$localStorage.versionEditID;
    		delete $localStorage.versionEditID;
    	}
    	$scope.GetItems();
    	Version.get({id:idToSend},function(data){
    		
			if($rootScope.versionId != undefined){
				$rootScope.versionId=undefined;
				Flash.set({Msg:'Version successfully created',Type:'Success'});
				$scope.TakeAction('edit');
			}
			
			$scope.version=data;
			console.log($scope.version);
			
			$scope.showItem = ($scope.version.item_type==null)? false:true;
			$scope.showEvent = ($scope.version.event==null)? false:true;
			$scope.showWhodunnit = ($scope.version.whodunnit==null)? false:true;
			$scope.showObject = ($scope.version.object==null)? false:true;
			$scope.showObjectChng = ($scope.version.object_changes == '[]' || $scope.version.object_changes == '')? false:true;
			$scope.showTransaction = ($scope.version.transaction_id == 0)? false:true;
			
			
    		$scope.GetItems();
    	});
    };

    $scope.RemoveFilters=function(id){

    	if(angular.isUndefined(id)){
	    	$scope.query="";
	    	$scope.filters=[];
	    	$scope.SearchVersion();
    	}
    	else{
    		//console.log(id);
    		$scope.filters.splice(id,1);
    	}
    };

	$scope.selectAllVersions = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.versions, function (version) {
            version.Selected = $scope.selectedAll;
        });
    };
	
	$scope.exportSelected = function(){
		angular.forEach($scope.versions, function (version) {
			if(version.Selected){
				$scope.seletedrows.push(version.id);
			}
		});
		
		$location.path($location.path() + '/export');
	};

	$rootScope.$on("associationUpdated", function(event, versionId){
		console.log('listing: '+versionId);
		if(versionId>0){
			var association={};
            association.id=versionId;
            $scope.selectedAssociations.push(association);
	    	$scope.modalInstance.dismiss('cancel');
		}
	});

	$rootScope.$on("closeModal", function(event,cancel){
		$scope.modalInstance.dismiss('cancel');
		$scope.modalInstance=undefined;
	});
	
	$scope.selectEntity = function (versionId) {
        $scope.selectedVersion = 'PaperTrail::Version #'+versionId;
		$scope.serchFilter='';
		$scope.association.version_id=versionId;
    }

}]);

phocusControllers.controller('VersionExportController', ['$scope', '$location', function ($scope, $location) {
	$scope.CSRF_TOKEN = csrf_token_js;
	$scope.inputSelectedRows = $scope.seletedrows;
	
	/*	Versions Checkboxes	*/
	$scope.fields = [{ Name: "schema[versions][]", Value: 'id', title: 'Id'},
					  { Name: "schema[versions][]", Value: 'event', title: 'Event'},
					  { Name: "schema[versions][]", Value: 'whodunnit', title: 'Whodunnit'},
					  { Name: "schema[versions][]", Value: 'object', title: 'Object'},
					  { Name: "schema[versions][]", Value: 'created_at', title: 'Created at'},
					  { Name: "schema[versions][]", Value: 'object_changes', title: 'Object changes'},
					  { Name: "schema[versions][]", Value: 'transaction_id', title: 'Transaction'},
					  { Name: "schema[versions][]", Value: 'item_id', title: 'Item [id]'},
					  { Name: "schema[versions][]", Value: 'item_type', title: 'Item [type]'}];
	
	/*	Versions Association Checkboxes	*/
	$scope.Assocfields = [{ Name: "schema[version_associations][]", Value: 'id', title: 'Id'},
					 { Name: "schema[version_associations][]", Value: 'foreign_key_name', title: 'Foreign key name'},
					 { Name: "schema[version_associations][]", Value: 'foreign_key_id', title: 'Foreign key'}];
						  
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        
		angular.forEach($scope.fields, function (field) {
            field.Selected = $scope.selectedAll;
        });
		
		angular.forEach($scope.Assocfields, function (field) {
            field.Selected = $scope.selectedAll;
        });
    };
	
	$scope.selectedAll = true;
	$scope.checkAll();
	
}]);

/*	
	*	PAPERTRAIL
	*	Version Association
*/
phocusControllers.controller('VersionAssociationController', ['$scope', 'VersionAssociation', '$location', '$rootScope','$routeParams','$http','$localStorage','Flash','ApiUrl','$uibModal',
 function ($scope, VersionAssociation, $location, $rootScope,$routeParams,$http,$localStorage,Flash,ApiUrl,$uibModal) {
	$scope.association={};
	$scope.showAddAssociation = true;
	if($localStorage.changeActive===undefined || $localStorage.changeActive){
		$rootScope.active_item = "version_associations"; //it highlight sidebar current link
	}
	
	$scope.filters=[];
	$scope.reverseSort = true;
	$scope.orderBy = 'id';
	
	$rootScope.seletedrows = [];
	$scope.searchPerformed = false;
	$scope.exportFoundData = false;
	$scope.selectedVersion = 'Search';
	$scope.newHeading = false;
	$scope.editHeading = false;
	$scope.showLink_BC = false;
	
	$scope.selectEntity = function (versionId) {
        $scope.selectedVersion = 'PaperTrail::Version #'+versionId;
		$scope.serchFilter='';
		$scope.association.version_id=versionId;
    }

	$scope.CancelSave=function(){
		Flash.set({Msg:'No actions were taken',Type:'Info'});
		$location.path('/paper_trail~version_association');
	}

	$rootScope.$on("versionUpdated", function(event, versionId){
		if(versionId>0){
			$scope.GetVersions(versionId);
			$scope.association.version_id=versionId;
	    	$scope.modalInstance.dismiss('cancel');
		}
	});

	$rootScope.$on("closeModal", function(event,cancel){
		$scope.modalInstance.dismiss('cancel');
		$scope.modalInstance=undefined;
	});
		
	if($localStorage.showAddVersion===undefined || $localStorage.showAddVersion){
		$scope.showAddVersion=true;
	}
	else{
		$scope.showAddVersion=false;
	}
	delete $localStorage.showAddVersion;
	delete $localStorage.changeActive;
	
	$rootScope.seletedAssociation = [];

	$scope.openVersion = function (size) {
		if(!angular.isUndefined($scope.association.version_id)){
			$localStorage.versionEditID=$scope.association.version_id;
		}
		$localStorage.showAddAssociation=false;
		$localStorage.changeActive=false;
		$localStorage.redirect=false;
	    $scope.modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'modalNewVersion',
	      controller: 'VersionController',
	      size: size,
	      
	    }); 


	}

	$scope.cancel=function(){
		$rootScope.$broadcast("closeModal",'cancel');
	}

	$scope.setupPage=function(){
		if(!$routeParams.associationID){
			$scope.mainHeadAddEdit='New Version Association';
			$scope.breadHeadAddEdit='New';
			$scope.tabHeadAddEdit='Add new';
			$scope.newHeading = true;
			$scope.addEditSign = 'fa-plus';
			$scope.listTab = true;
		}
		else{
			$scope.mainHeadAddEdit='Edit Version Association';
			$scope.breadHeadAddEdit='Edit';
			$scope.tabHeadAddEdit='Edit';
			$scope.editHeading = true;
			$scope.showLink_BC = true;
			$scope.addEditSign = 'fa-pencil';
			$scope.showTab = true;
		}
    };

    function SetMessage(message){
    	if(message){
    		switch (message.Type){
    			case 'Success':
    				$scope.success_message=message.Msg;
    			break;
    			case 'Info':
    				$scope.info_message=message.Msg;
    			break;
    			default:
    			break;
    		}
    	}
    }

	/*	Export Found Admins	*/
	$scope.exportFound=function(){
		$scope.exportFoundData = true;
		if($scope.searchPerformed ){
			$scope.SearchAssociation();
		}
		else{
			$location.path('/paper_trail~version_association/export');
		}
		
	}
	
    $scope.SearchAssociation=function(pageNumber,orderBy,sortOrder){
		if(pageNumber == -1){
			$scope.searchPerformed = true;
		}
		
    	var message=Flash.get();
    	SetMessage(message);
    	if($scope.limit){
    		if(pageNumber>$scope.limit)return;
    	}
    	if (pageNumber === undefined) {
			pageNumber = '1';
		}
		if (orderBy === undefined) {
			orderBy = 'id';
			$scope.orderBy=undefined;
		}
		else{
			$scope.orderBy=orderBy;
		}
		if($scope.reverseSort)
			sortOrder='DESC';
		else
			sortOrder='ASC';
			
		pagination = ($scope.exportFoundData)? -1:1;
		
		 $http({
	        url: ApiUrl+'version_association/filter',
	        method: "POST",
	        data: {'query' : $scope.query , 'filters':$scope.filters,'pageNumber':pageNumber,'orderBy':orderBy,'sortOrder':sortOrder, 'pagination':pagination }
	    })
	    .then(function(response) {
            // success
			if($scope.exportFoundData){
				
				angular.forEach(response.data, function (row) {
					$scope.seletedrows.push(row.id);
				});
				
				$location.path('/paper_trail~version_association/export');
			}
			else{
				
				$scope.associations=response.data.data;
				$scope.currentPage=response.data.current_page;
				$scope.total=response.data.total;
				$scope.limit=response.data.last_page;
				$scope.range=[];
				for(var i=0;i<response.data.last_page;i++){
					$scope.range.push(i);
				}
				
			}
            //console.log($scope.currentPage);
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.GetAssociationByIDs=function(){
    	$scope.seletedAssociation=$localStorage.seletedAssociation;
    	//console.log($scope.seletedAdmins);
    	$http({
	        url: ApiUrl+'version_association/getbyids',
	        method: "POST",
	        data: { 'ids' : $scope.seletedAssociation }
	    })
	    .then(function(response) {
            // success
            $scope.associations=response.data;
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.AddFilter=function(name){
    	$scope.filters.push({
    		filter:name,
    		operator:'like',
    		query:''
    	});
    	
    };

    $scope.getAssociations=function(){
    	$scope.associations=VersionAssociation.query();
    };

    $scope.deleteAssociation=function($verAssoID){
    	$scope.association=VersionAssociation.delete({id:$verAssoID},function(data){
    		Flash.set({Msg:'Version Association Deleted Successfully!',Type:'Success'});
    		$location.path('/paper_trail~version_association');
    });
    };

    $scope.DeleteAssociationByIds=function(){
    	$scope.seletedAssociation=$localStorage.seletedAssociation;
    	$http({
	        url: ApiUrl+'version_association/deletebyids',
	        method: "POST",
	        data: { 'ids' : $scope.seletedAssociation }
	    })
	    .then(function(response) {
            // success
            delete $localStorage.seletedAssociation;
            $location.path('/paper_trail~version_association');
	    }, 
	    function(response) { // optional
	        // failed
	    });
    };

    $scope.GetSelectedToDelete=function(){
    	angular.forEach($scope.associations, function (association) {
			if(association.Selected){
				$scope.seletedAssociation.push(association.id);
			}
		});
		$localStorage.seletedAssociation=$scope.seletedAssociation;
    	$location.path('/paper_trail~version_association/delete_bulk');
    
    };


    $scope.TakeAction=function(action){
    	switch(action){
    		case 'save':
    			$location.path('/paper_trail~version_association');
    		break;
    		case 'add':
    			$scope.association={};
    			var message=Flash.get();
    			SetMessage(message);
    		break;
    		case 'edit':
    			var message=Flash.get();
    			SetMessage(message);
    		break;
    		default:
    			$location.path('/paper_trail~version_association');
    		break;
    	}
    }

    $scope.AddNewAssociation=function(action){
    	if($scope.association.id>0){
    		VersionAssociation.update({id:$scope.association.id},$scope.association,function(data){
    			Flash.set({Msg:'Association updated!',Type:'Success'});
    			$scope.TakeAction(action);
    			//$location.path('/paper_trail~version_association');
    	});
    	}
    	else{
	    	VersionAssociation.save($scope.association,function(data){
	    		if($localStorage.redirect===undefined || $localStorage.redirect){
	    			Flash.set({Msg:'Association added!',Type:'Success'});
    				$scope.TakeAction(action);
	    		}
	    		else{
	    			$rootScope.$broadcast("associationUpdated", data.id);
	    			delete $localStorage.redirect;
	    		}
	    	});
    	}
    };

    $scope.GetAssociation=function(){
    	$scope.GetVersions();
    	//$scope.association.version_id=1;
    	if($routeParams.associationID){
	    	VersionAssociation.get(
	    		{id:$routeParams.associationID},
	    		function(response){
	    			$scope.association=response.association;
	    			$scope.versions=response.versions;
                	$scope.selectedVersion = 'PaperTrail::Version #'+$scope.association.version_id;
        
	    		});
		}
		else{
			$http({
				url: ApiUrl+'version',
	        	method: "GET",
			})
			.then(function(response) {
				
			});
		}
    };

    $scope.GetVersions=function(selectedID){
    	console.log('selectedid: '+selectedID);
    	$http({
				url: ApiUrl+'version',
	        	method: "GET",
			})
			.then(function(response) {
				$scope.versions=response.data;
				if(selectedID>0){
					$scope.association.version_id=selectedID;
				}

	    });

    //end
	}

    $scope.RemoveFilters=function(id){

    	if(angular.isUndefined(id)){
	    	$scope.query="";
	    	$scope.filters=[];
	    	$scope.SearchVerAsso();
    	}
    	else{
    		//console.log(id);
    		$scope.filters.splice(id,1);
    	}
    };


	
	$scope.selectAllVerAssos = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.rows, function (row) {
            row.Selected = $scope.selectedAll;
        });
    };
	
	$scope.exportSelected = function(){
		angular.forEach($scope.rows, function (row) {
			if(row.Selected){
				$scope.seletedrows.push(row.id);
			}
		});
		
		$location.path($location.path() + '/export');
	};
}]);

phocusControllers.controller('VersionAssociationExportController', ['$scope', '$location', function ($scope, $location) {
	$scope.CSRF_TOKEN = csrf_token_js;
	$scope.inputSelectedRows = $scope.seletedrows;
	
	/*	Versions Association Checkboxes	*/
	$scope.Assocfields = [{ Name: "schema[version_associations][]", Value: 'id', title: 'Id'},
						  { Name: "schema[version_associations][]", Value: 'foreign_key_name', title: 'Foreign key name'},
						  { Name: "schema[version_associations][]", Value: 'foreign_key_id', title: 'Foreign key'}];
					 
	/*	Versions Checkboxes	*/
	$scope.fields = [{ Name: "schema[versions][]", Value: 'id', title: 'Id'},
					  { Name: "schema[versions][]", Value: 'event', title: 'Event'},
					  { Name: "schema[versions][]", Value: 'whodunnit', title: 'Whodunnit'},
					  { Name: "schema[versions][]", Value: 'object', title: 'Object'},
					  { Name: "schema[versions][]", Value: 'created_at', title: 'Created at'},
					  { Name: "schema[versions][]", Value: 'object_changes', title: 'Object changes'},
					  { Name: "schema[versions][]", Value: 'transaction_id', title: 'Transaction'}];
	
	
						  
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        
		angular.forEach($scope.fields, function (field) {
            field.Selected = $scope.selectedAll;
        });
		
		angular.forEach($scope.Assocfields, function (field) {
            field.Selected = $scope.selectedAll;
        });
    };
	
	$scope.selectedAll = true;
	$scope.checkAll();
	
}]);


//	Dashboard Controller
phocusControllers.controller('DashboardController', ['$scope', '$location', '$rootScope', 'Dashboard', function ($scope, $location, $rootScope, Dashboard) {
        $rootScope.active_item = "dashboard"; //it highlight sidebar current link
        
		Dashboard.get({item: 'analytics'}, function (data) {
            $scope.admins_lastUsed = data.analytics.admins_lastUsed;
			$scope.count_admins = data.analytics.admins;
			$scope.admins_percent = calculate_percent(data.analytics.admins);
			
			//	Contact Requests
			$scope.contact_requests_lastUsed = data.analytics.contact_requests_lastUsed;
			$scope.count_contact_requests = data.analytics.contact_requests;
            $scope.contact_requests_percent = calculate_percent(data.analytics.contact_requests);
			
			//	Leads
			$scope.leads_lastUsed = data.analytics.leads_lastUsed;
			$scope.count_leads = data.analytics.leads;
            $scope.leads_percent = calculate_percent(data.analytics.leads);
			
			//	Providers
			$scope.providers_lastUsed = data.analytics.providers_lastUsed;
			$scope.count_providers = data.analytics.providers;
            $scope.providers_percent = calculate_percent(data.analytics.providers);
			
			//	Super Admins
			$scope.superadmins_lastUsed = data.analytics.superadmins_lastUsed;
			$scope.count_super_admins = data.analytics.superadmins;
            $scope.super_admins_percent = calculate_percent(data.analytics.superadmins);
			
			//	Tag Grears
			$scope.tag_gears_lastUsed = data.analytics.tag_gears_lastUsed;
			$scope.count_tag_gears = data.analytics.tag_gears;
            $scope.tag_gears_percent = calculate_percent(data.analytics.tag_gears);
			
			//	Tag Images
			$scope.tag_images_lastUsed = data.analytics.tag_images_lastUsed;
			$scope.count_tag_images = data.analytics.tag_images;
            $scope.tag_images_percent = calculate_percent(data.analytics.tag_images);
			
			//	Versions
			$scope.versions_lastUsed = data.analytics.versions_lastUsed;
			$scope.count_versions = data.analytics.versions;
            $scope.versions_percent = calculate_percent(data.analytics.versions);
			
			//	Version Associations
			$scope.version_associations_lastUsed = data.analytics.version_associations_lastUsed;
			$scope.count_version_associations = data.analytics.version_associations;
            $scope.version_associations_percent = calculate_percent(data.analytics.version_associations);
			
        });
		
        function calculate_percent(count) {
            var percent = 2;
            
            if (count > 2 && count <= 20) {
                percent = count;
            }

            if (count > 20 && count <= 100) {
                percent = 25;
            }
            
            if (count > 100 && count <= 500) {
                percent = 50;
            }
			
            if (count > 500 && count <= 1000) {
                percent = 60;
            }
			
            if (count > 1000 && count <= 2000) {
                percent = 75;
            }
			
            if (count > 2000 && count <= 3000) {
                percent = 90;
            }
			
            if (count > 3000) {
                percent = 100;
            }
            return percent;
        }
    }]);