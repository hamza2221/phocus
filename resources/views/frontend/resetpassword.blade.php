<!DOCTYPE html>
<html>

<head>
    <title>Phocus.io</title>
    <meta charset='utf-8'>
    <meta content='IE=edge' http-equiv='X-UA-Compatible'>
    <meta content='chrome=1' http-equiv='X-UA-Compatible'>
    <meta content='initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta content='index, follow' name='robots'>
    <meta content='Phocus.io is the best source for quality images for your web site – photo shoots at your location, anywhere in the country' name='description'>
    <meta content='Phocus.io, quality images, experienced photographers, photographers, experienced photographer, photographer, top photographers, the highest quality, photo shoots at your location, images for online business, predefined photoshoot packages, experienced professional photographers, professional photographers, image packages' name='keywords'>
    <meta content='© 2015 Phocus, LLC. All rights reserved' name='copyright'>

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
    <meta content='../resources/assets/frontend/images/favicon/ms-icon-144x144.png' name='msapplication-TileImage'>
    <meta content='#ffffff' name='theme-color'>
    <script type="text/javascript" src="../resources/assets/frontend/js/jquery_2.1.1.js"></script>
    <script type="text/javascript" src="../resources/assets/frontend/js/bootstrap.js"></script>
    <script src="../resources/assets/frontend/app/bower_component/angular/angular.min.js"></script>
    <script src="../resources/assets/frontend/app/bower_component/angular-route/angular-route.js"></script>
    <script src="../resources/assets/frontend/app/bower_component/angular-resource/angular-resource.js"></script>
    <script src="../resources/assets/frontend/app/controllers.js"></script>
    <script src="../resources/assets/frontend/app/app.js"></script>
    <script src="../resources/assets/frontend/app/services.js"></script>
    <script src="../resources/assets/frontend/app/directives.js"></script>
    <script src="../resources/assets/frontend/app/filters.js"></script>

    <link rel="stylesheet" media="screen" href="../resources/assets/frontend/css/application-f7924d0bb1cfd39d7d3e3aa2616bc1ad.css" />
    <script src="../resources/assets/frontend/js/application-e6ccb5765ebc80d5ff4cddb92d53627b.js"></script>
    <style>
    .error-message{color:red;}
    
    </style>

</head>

<body ng-app="phocusApp">
    <nav class="hidden mm-menu mm-effect-menu-slide mm-offcanvas" id="mobile-menu">
        <div class="mm-panels">
            <div class="mm-panel mm-opened mm-current" id="mm-1">
                <ul class="mm-listview">
                    <li class="logo-jquery-mmenu">
                        <a class="close-menu" href="{{URL::to('/')}}">close menu</a>
                        <a class="logo-icon" href="{{URL::to('/')}}">root path</a>
                    </li>
                    <li>
                        <a href="#/">home</a>
                    </li>
                    <li>
                        <a href="#/about">about us</a>
                    </li>
                    <li>
                        <a href="#/contact">Contact</a>
                    </li>
                    <li>
                        <a class="open-popup-link link-options" href="">phocus.io pro register</a>
                    </li>
                    <li>
                        <a class="open-popup-link link-options" href="">Client register</a>
                    </li>
                    <li>
                        <a class="open-popup-link link-options" href="">Log in</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="hero-passwords" data-stellar-background-ratio="0.5" id="header" style="background-position: 50% 50%;">
        <div id="header__container" class="">
            <a class="header__burger-menu" href="">mobile menu trigger</a>
            <!-- / jquerymmenu library -->

            <div class="navbar-container">
                <div class="navbar-logo">
                    <a href="{{URL::to('/')}}"><img alt="logo" class="logo-nav" src="../resources/assets/frontend/images/phocus_logo-a0277a15b8da3a35998bab8acb91c770.svg">
                    </a>
                </div>
                <nav class="navbar-menu">
                    <ul>
                        <li>
                            <a href="../#/about">about us</a>
                        </li>
                        <li>
                            <a href="../#/contact">Contact</a>
                        </li>
                        <li>
                            <a class='open-popup-link' id="openRegisterdialog" href='#user-register-popup-menu'>phocus.io pro register</a>
                        </li>
                        <li>
                            <a id="openClientdialog" class='open-popup-link link-options' href='#client-registration-popup'>Client register</a>
                        </li>
                        <li>
                            <a id="openLogindialog" class='open-popup-link' href='#user-login-popup-menu'>Log in</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="hero-passwords__text-container">
            Update your password
        </div>
        <div class="hero-passwords__second-text-container">
            Change password
        </div>
    </header>
    <script>
        $(document).ready(function()
        {
            $mobileMenu = $("#mobile-menu");
            $mobileMenu.mmenu(
            {
                navbar: false,
                extensions: ["effect-menu-slide"],
            });

            var API = $mobileMenu.data("mmenu");

            $(".close-menu").click(function()
            {
                API.close();
            });
        })
    </script>

    <main class="main">
        <div class="container">
            <div id="user-reset-password">
                <div class="white-popup">
                    <section class="white-popup__basic">
                        <img src="../resources/assets/frontend/images/step1_bgimage-c59cdcf13a0aa729876f23c4e4b0a09d.jpg" alt="Step1 bgimage">
                        <div class="white-popup__already-member-link">
                            Not a member?
                            <a class="open-popup-link" href="">Register</a>
                        </div>
                    </section>
                    <section class="white-popup__form-container">
                        <div class="form-fields-container white-popup__form-fields-container">
                            <h1 class="title-step">
Change your password
</h1>
                            <form id="resetPasswordForm" action="{{ url('/password/reset') }}" method="post">
                                {!! csrf_field() !!} @if(isset($email))
                                <input type="hidden" class="form-control" id="reset_email" name="email" value="{{$email}}">
                                <input type="hidden" class="form-control" name="token" id="reset_token" value="{{$token}}">  @else
                                <h2 style="color:red;">This link has been expired!</h3>
@endif
<div class="form-field">
<label class="floated-left label-element" for="password">
Password
</label>
<input class="user-registration__input form-field__input-text " id="reset_password" name="password"  required="" type="password" >
<span class="error-message" id="passerrors">
</span>
</div>
<div class="form-field">
<label class="floated-left label-element" for="password_confirmation">
Password Confirmation
</label>
<input class="user-registration__input form-field__input-text " id="confPass" name="password_confirmation"  required="" type="password">
<span class="error-message" id="confpasserrors" >
</span>
</div>
<div class="clearfix"></div>
<div class="actions">
@if(isset($email))
<button type="button" onclick="SubmitForm()" class="button-bordered" click-once="Updating password" ng-form-name="resetPasswordForm" original-button-text="Change my password">
Change my password
</button>

@else
<button type="button"  class="button-bordered" click-once="Updating password" ng-form-name="resetPasswordForm" original-button-text="Change my password" disabled="">
Change my password
</button>
@endif
</div>
</form>
</div>
</section>
</div>
</div>

</div>
</main>
@include("frontend.dialogs.provider_registeration")
@include("frontend.dialogs.client_registeration")
@include("frontend.dialogs.complete_profile")
@include("frontend.dialogs.login")
<footer id="footer">
<div class="footer__container">
<div class="footer__about-phocus footer__elements">
<img alt="logo" class="logo-nav" src="../resources/assets/frontend/images/phocus_logo-a0277a15b8da3a35998bab8acb91c770.svg">
<p class="footer__text-content">
The source for predefined professional photo and video packages, to easily provide you with innovative and quality images
</p>
<p>
Copyright ©
2016
Phocus, LLC. All rights reserved
<span class="footer__terms-privacy">
<a href="../#/terms">Terms of user</a>
|
<a href="../#/">Privacy Policy</a>
</span>
</p>
</div>
<div class="footer__menu footer__elements" id="large-footer">
<div class="footer__options">
<ul>
<li>
<a href="../#/">Privacy policy</a>
</li>
<li>
<a href="../#/terms">Terms and conditions</a>
</li>
</ul>
</div>
<div class="footer__options">
<ul>
<li>
<a href="../#/about">about us</a>
</li>
<li>
<a href="../#/how_it_works">How it works</a>
</li>
</ul>
</div>
<div class="footer__options">
<ul>
<li>
<a href="../#/contact##frequently-asked-questions">faq</a>
</li>
<li>
<a href="../#/contact">Contact us</a>
</li>
</ul>
</div>
</div>
<div class="footer__menu" id="small-footer">
<div class="footer__options">
<ul>
<li>
<a href="../#/contact##frequently-asked-questions">faq</a>
</li>
<li>
<a href="../#/contact">Contact us</a>
</li>
<li>
<a href="../#/about">about us</a>
</li>
</ul>
</div>
<div class="footer__options">
<ul>
<li>
<a href="../#/how_it_works">How it works</a>
</li>
<li>
<a href="">Privacy policy</a>
</li>
<li>
<a href="../#/terms">Terms and conditions</a>
</li>
</ul>
</div>
</div>
<div class="footer__social-icons footer__elements">
<ul>
<li>
<a target="_blank" href="https://twitter.com/Phocus_io"><i class="twitter-icon"></i>
</a></li>
<li>
<a target="_blank" href="https://www.linkedin.com/company/phocus-io?trk=top_nav_home"><i class="linked-in-icon"></i>
</a></li>
<li>
<a target="_blank" href="https://www.facebook.com/phocus.io/timeline"><i class="facebook-icon"></i>
</a></li>
</ul>
</div>
</div>
</footer>


</body>
<script type="text/javascript">
    function SubmitForm(){
        
        var email=$('#reset_email').val();
        var pass=$('#reset_password').val();
        var conf_pass=$('#confPass').val();
        var token=$('#reset_token').val();
        var csrf=$('[name="_token"]').val();
        $('#reset_password').css('border','1px solid #A5AAC0');
        $('#confPass').css('border','1px solid #A5AAC0');

        if(pass.length==0){
            $('#passerrors').html('This field is required!');
            $('#reset_password').css('border','1px solid red');
            return;
        }
        else if(pass.length<8){
            $('#passerrors').html('The value should be minimum 8 characters');
            $('#reset_password').css('border','1px solid red');
            return;
        }

        if(conf_pass.length==0){
            $('#confpasserrors').html('This field is required!');
            $('#confPass').css('border','1px solid red');
            return;
        }
        if(conf_pass!=pass){
            $('#confpasserrors').html('The password and password confirmation do not match');
            $('#confPass').css('border','1px solid red');
            return;
        }

        $.ajax({
            
                url: '../password/reset',
                type: "post",
                data: {'email': email, '_token':csrf,'token':token,'password':pass,'password_confirmation':pass},
                success: function (data) {
                    console.log('here');
                    console.log(data);
                    if(data==1){
                        window.location.replace("../");
                    }
                    // if (data == 0) {
                    //     $("#resetErrors").html('This account does not exists in our database');
                    // }
                    // else{
                    //     $('#resetMessage').show();
                    //     $('#forgot_pass').hide();
                    // }
                }
    }
    );
    }
</script>
</html>