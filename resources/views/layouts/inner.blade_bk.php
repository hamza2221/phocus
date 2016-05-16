
<!DOCTYPE html>
<html lang="en" ng-app="phocusApp">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>

    <!-- Bootstrap Core CSS -->
    <link href="./resources/assets/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="./resources/assets/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="./resources/assets/dist/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="./resources/assets/dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="./resources/assets/morrisjs/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="./resources/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="./resources/assets/custom/css/custom.css" rel="stylesheet" type="text/css">
    
    
    <!-- Soring Files	-->
    <link href="./resources/assets/dist/css/ng-sortable.min.css" rel="stylesheet">
    <link href="./resources/assets/dist/css/ng-sortable.style.min.css" rel="stylesheet">
    
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<script language="javascript">
    var csrf_token_js = '<?php echo csrf_token(); ?>';
    </script>
    <script src="./resources/assets/app/bower_component/angular/angular.min.js"></script>
    <script src="./resources/assets/app/bower_component/angular-route/angular-route.js"></script>
    <script src="./resources/assets/app/bower_component/angular-resource/angular-resource.js"></script>
    <script src="./resources/assets/app/bower_component/ngStorage.js"></script>
    <script src="./resources/assets/app/bower_component/ui-bootstrap-tpls-1.3.1.min.js"></script>
    <script src="./resources/assets/app/bower_component/ng-file-upload-shim.js"></script>
    <script src="./resources/assets/app/bower_component/ng-file-upload.js"></script>
    <script src="./resources/assets/app/controllers.js"></script>
    <script src="./resources/assets/app/app.js"></script>
    <script src="./resources/assets/app/services.js"></script>
    <script src="./resources/assets/app/directives.js"></script>
    <script src="./resources/assets/app/filters.js"></script>
    
    <!--	ngSorting	-->
    <script type="text/javascript" src="./resources/assets/dist/js/ng-sortable.min.js"></script>

    <!-- ngTable scripts and styles -->
     <link rel="stylesheet" href="./resources/assets/ng-table/master/dist/ng-table.min.css">
     <script src="./resources/assets/ng-table/master/dist/ng-table.min.js"></script>
     <!-- END ngTable scripts and styles -->
     
</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                Phocus 
                <small style="font-size: 12px;">{{$user->Role()}}</small>
                </a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a href="#/dashboard">Dashboard</a>
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a href="#">Home</a>
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a href="#">
                        
                        <span>{{$user->email}}</span>  
                    </a>
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a rel="nofollow" href="{{ action('Auth\AuthController@logout') }}">
                    <span class="label label-danger">Log out</span>
                    </a>
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="leftNav" id="side-menu">
                        @if($user->Role()===ConstantRoles::Admin)
                        <div ng-include="'./resources/views/Admin/menu.html'"></div>
                        @elseif($user->Role()===ConstantRoles::User)
                            @include("User.menu")
                        @endif
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <div id="page-wrapper" style="padding-top: 30px !important;;">
        
        <div ng-view></div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="./resources/assets/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="./resources/assets/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="./resources/assets/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <!--<script src="./resources/assets/raphael/raphael-min.js"></script>
    <script src="./resources/assets/morrisjs/morris.min.js"></script>
    <script src="./resources/assets/js/morris-data.js"></script>-->

    <script type="text/javascript" src="./resources/assets/bootstrap-multiselect-master/dist/js/bootstrap-multiselect.js"></script>
    <link rel="stylesheet" href="./resources/assets/bootstrap-multiselect-master/dist/css/bootstrap-multiselect.css" type="text/css"/>
    <!-- Custom Theme JavaScript -->
    <script src="./resources/assets/dist/js/sb-admin-2.js"></script>

    <script src="./resources/assets/bootstrap-duallistbox-master/dist/jquery.bootstrap-duallistbox.min.js"></script>
    <link rel="stylesheet" type="text/css" href="./resources/assets/bootstrap-duallistbox-master/src/bootstrap-duallistbox.css">


    
</body>

<script>

</script>

</html>
