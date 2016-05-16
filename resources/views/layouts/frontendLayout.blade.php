<!DOCTYPE html>
<html ng-app="phocusApp">
    <head>
        <title>Phocus.io</title>
        <meta charset='utf-8'>
        <meta content='IE=edge' http-equiv='X-UA-Compatible'>
        <meta content='chrome=1' http-equiv='X-UA-Compatible'>
        <meta content='initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <meta content='index, follow' name='robots'>
        <meta content='Phocus.io is the best source for quality images for your web site � photo shoots at your location, anywhere in the country' name='description'>
        <meta content='Phocus.io, quality images, experienced photographers, photographers, experienced photographer, photographer, top photographers, the highest quality, photo shoots at your location, images for online business, predefined photoshoot packages, experienced professional photographers, professional photographers, image packages' name='keywords'>
        <meta content='� 2015 Phocus, LLC. All rights reserved' name='copyright'>

        <!-- / Favicons -->
        <link rel="icon" type="image/png" href="./resources/assets/frontend/images/android-icon-36x36.png">
        <link href='./resources/assets/frontend/images/favicon/apple-icon-60x60.png' rel='apple-touch-icon' sizes='60x60'>
        <link href='./resources/assets/frontend/images/favicon/apple-icon-72x72.png' rel='apple-touch-icon' sizes='72x72'>
        <link href='./resources/assets/frontend/images/favicon/apple-icon-76x76.png' rel='apple-touch-icon' sizes='76x76'>
        <link href='./resources/assets/frontend/images/favicon/apple-icon-114x114.png' rel='apple-touch-icon' sizes='114x114'>
        <link href='./resources/assets/frontend/images/favicon/apple-icon-120x120.png' rel='apple-touch-icon' sizes='120x120'>
        <link href='./resources/assets/frontend/images/favicon/apple-icon-144x144.png' rel='apple-touch-icon' sizes='144x144'>
        <link href='./resources/assets/frontend/images/favicon/apple-icon-152x152.png' rel='apple-touch-icon' sizes='152x152'>
        <link href='./resources/assets/frontend/images/favicon/apple-icon-180x180.png' rel='apple-touch-icon' sizes='180x180'>
        <link href='./resources/assets/frontend/images/favicon/android-icon-192x192.png' rel='icon' sizes='192x192' type='image/png'>
        <link href='./resources/assets/frontend/images/favicon/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png'>
        <link href='./resources/assets/frontend/images/favicon/favicon-96x96.png' rel='icon' sizes='96x96' type='image/png'>
        <link href='./resources/assets/frontend/images/favicon/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png'>
        <link href='./resources/assets/frontend/images/favicon/manifest.json' rel='manifest'>
        <link href='./resources/assets/frontend/images/favicon/favicon.ico' rel='shortcut icon' type='image/x-icon'>
        <link href='./resources/assets/frontend/images/favicon/favicon.ico' rel='icon' type='image/x-icon'>
        <meta content='#ffffff' name='msapplication-TileColor'>
        <meta content='./resources/assets/frontend/images/favicon/ms-icon-144x144.png' name='msapplication-TileImage'>
        <meta content='#ffffff' name='theme-color'>
        <!-- / added by hamza -->


        <link type="text/css" rel="stylesheet" href="./resources/assets/intlTelInput/css/intlTelInput.css">
        <link type="text/css" rel="stylesheet" href="./resources/assets/chosen/chosen.min.css">
        <script type="text/javascript" src="./resources/assets/frontend/js/jquery_2.1.1.js"></script>

        <script type="text/javascript" src="./resources/assets/frontend/js/bootstrap.js"></script>
        <script src="./resources/assets/frontend/app/bower_component/angular/angular.min.js"></script>
        <script src="./resources/assets/frontend/app/bower_component/angular-route/angular-route.js"></script>
        <script src="./resources/assets/frontend/app/bower_component/angular-resource/angular-resource.js"></script>
        <script src="./resources/assets/frontend/app/controllers.js"></script>
        <script src="./resources/assets/frontend/app/app.js"></script>
        <script src="./resources/assets/frontend/app/services.js"></script>
        <script src="./resources/assets/frontend/app/directives.js"></script>
        <script src="./resources/assets/frontend/app/filters.js"></script>

        <script src="./resources/assets/intlTelInput/js/intlTelInput.min.js"></script>
        <script src="./resources/assets/intlTelInput/js/utils.js"></script>

        <script type="text/javascript" src="./resources/assets/frontend/js/scripts.js"></script>
        <!-- / END added by hamza -->

        <link rel="stylesheet" media="screen" href="./resources/assets/frontend/css/application-f7924d0bb1cfd39d7d3e3aa2616bc1ad.css" />
        <link rel="stylesheet" media="screen" href="./resources/assets/frontend/css/font-awesome.min.css" />
        <script src="./resources/assets/frontend/js/application-e6ccb5765ebc80d5ff4cddb92d53627b.js"></script>

        <script type="text/javascript" src="./resources/assets/chosen/chosen.jquery.js"></script>
    </head>
    <?php
    $user = $data['user'];
    ?>
    <body>


        <header ng-show="headerID == 'header'"  ng-class="className" class="" data-stellar-background-ratio='0.5' id='header' style="background-position: 50% 50%">

            <div id='header__container'> 
                <a class="header__burger-menu" href="#mobile-menu">mobile menu trigger</a> 
                <!-- / jquerymmenu library -->
                <nav class='hidden' id='mobile-menu'>
                    <ul>
                        <li class="logo-jquery-mmenu">
                            <a class="close-menu" href="#test">close menu</a>
                            <a class="logo-icon" href="#/" onclick="goToHomePage()">root path</a>
                        </li>
                        <li> <a href="#/" onclick="goToAbout()">about us</a> </li>
                        <li> <a href="#/" onclick="goToContact()">Contact</a> </li>
                        @if($user)
                        <li> <a class='link-options' href='#/dashboard'>Dashboard</a> </li>
                        <li> <a class=' link-options' href='./logout'>Log out</a> </li>
                        @else
                        <li> <a  class='open-popup-link' href='#user-register-popup-menu'>phocus.io pro register</a> </li>
                        <li> <a class='open-popup-link link-options' href='#client-registration-popup'>Client register</a> </li>
                        <li> <a class='open-popup-link' href='#user-login-popup-menu'>Log in</a> </li>
                        @endif
                    </ul>
                </nav>
                <div class='navbar-container'>
                    <div class='navbar-logo'> 
                        <a href="#/"><img alt="logo" class="logo-nav" src="./resources/assets/frontend/images/phocus_logo-a0277a15b8da3a35998bab8acb91c770.svg" /> </a></div>
                    <nav class='navbar-menu'>
                        <ul>
                            <li> <a href="#/about">about us</a> </li>
                            <li> <a href="#/contact">Contact</a> </li>
                            @if($user)
                            <li> <a class='link-options' href='#/dashboard'>Dashboard</a> </li>
                            <li> <a class=' link-options' href='./logout'>Log out</a> </li>
                            @else
                            <li> <a  class='open-popup-link'id="openRegisterdialog" href='#user-register-popup-menu'>phocus.io pro register</a> </li>
                            <li> <a id="openClientdialog" class='open-popup-link link-options' href='#client-registration-popup'>Client register</a> </li>
                            <li> <a id="openLogindialog" class='open-popup-link' href='#user-login-popup-menu'>Log in</a> </li>
                            @endif
                        </ul>
                    </nav>
                </div>
            </div>
            <div ng-include src="'resources/views/frontend/_navTexts.html'"></div>


        </header>
        <script>
                    $(document).ready(function () {
                        $mobileMenu = $("#mobile-menu");
                        $mobileMenu.mmenu({
                            navbar: false,
                            extensions: ["effect-menu-slide"],
                        });

                        var API = $mobileMenu.data("mmenu");

                        $(".close-menu").click(function () {
                            API.close();
                        });
                    })
        </script>

        <!--============================================== header end===-->


        <div  ng-view>


        </div>
        <div ng-include src="'resources/views/frontend/footer.html'"></div>

        <!--============================================== PopUp===-->




        @include("frontend.dialogs.provider_registeration")

        @include("frontend.dialogs.client_registeration")

        @include("frontend.dialogs.complete_profile")

        @include("frontend.dialogs.login")

        @include("frontend.dialogs.thanks_msg_leads")

        @include("frontend.dialogs.thanks_msg_contact")







    </body>
</html>


@if($user && $user->completed_profile==false && $user->role=='Provider')

@if(isset($_GET['independent_contact']))
<script>
   location.href = ".?independent_contact#/terms"  
</script>
@else
<script>
             location.href = ".#/dashboard"
            $('#complete_profile').fadeIn();
            $('body').css('overflow', 'hidden');

</script>
@endif

@endif

<?php if (isset($_GET['token']) && isset($_GET['email'])) { ?>
    <script>
               
                $('#password_reset_form').fadeIn();</script>
<?php }
?>

<script>
            function goToContact() {
                location.href = "./#/contact"
            }
            function goToAbout() {
                location.href = "./#/about"
            }
            function goToHomePage() {
                location.href = "./#/"
            }
</script>