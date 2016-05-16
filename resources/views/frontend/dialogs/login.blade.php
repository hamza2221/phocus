<div class='white-popup mfp-hide' id='user-login-popup-menu'>
    <section class='white-popup__basic'> <img src="{{URL::to('/resources/assets/frontend/images/step1_bgimage-c59cdcf13a0aa729876f23c4e4b0a09d.jpg')}}" alt="Step1 bgimage" />
        <div class='white-popup__already-member-link'> Not a member? <a class='open-popup-link' href='#user-register-popup-menu'>Register</a> </div>
    </section>
    <section class='white-popup__form-container'>
        <div id="loginSection" class='form-fields-container white-popup__form-fields-container'>
            <h1 class='title-step'> Welcome Back! </h1>


            <!--<form id="loginFrm" class="sign-in-user validate-form"  accept-charset="UTF-8" method="post">-->
            <form id="loginFrm" class="sign-in-user validate-form"  accept-charset="UTF-8" method="post">

                {!! csrf_field() !!}
                <div class='form-field'>
                    <label for="user_email">Email</label>
                    <input autocomplete="off" id="loginEmail" required="" class="form-field__input-text" type="email" name="email" style="margin-top: 1%;" />
                    <div  id="loginErrors" class="alert alert-danger" style="font-size: small;color: #A70000;"></div>
                </div>
                <div class='form-field'>
                    <label for="user_password">Password</label>
                    <input autocomplete="off" id="loginPassword" required="required" class="email-password-fields form-field__input-text" type="password" name="password"  />
                    <div  id="loginpasswordErrors" class="alert alert-danger" style="font-size: small;color: #A70000;"></div>
                </div>
                <a style="" href="" onclick="showForgotSection()">Forgot password</a>
                <div class='clearfix'></div>
                <div class='actions'>
                    <input type="submit" name="commit" value="Log in" class="button-bordered" />
                </div>
            </form>
        </div>

        <div id="forgot_pass" class='form-fields-container white-popup__form-fields-container' style="display: none;">
            <form id="passresetform" class="sign-in-user validate-form"  accept-charset="UTF-8" method="post">
            <h1 class='title-step'>PASSWORD RESET! </h1>
            <div class='form-field'>
                <label for="user_email">Email</label>
                <input autocomplete="off" id="resetEmail" required="" class="form-field__input-text" type="email" name="email" style="margin-top: 1%;"/>
                <div  id="resetErrors" class="alert alert-danger" style="font-size: small;color: #A70000;"></div>
            </div>
            <div class='clearfix'></div>
            <div class='actions'>
                <input type="submit" name="commit" value="Reset My Password" class="button-bordered" />
            </div>
            </form>
        </div>

        <div id="resetMessage" style="display: none;" class='form-fields-container white-popup__form-fields-container'>
            <h1 class='title-step'>PASSWORD RESET! </h1>
            <div class='form-field'>
                <label for="user_email">You will receive an email with instructions on how to reset your password in a few minutes.</label>
                <div class='clearfix'></div>
                <div class='actions'>
                    <input type="submit" name="commit" value="Reset My Password" class="button-bordered" disabled="" />
                </div>
            </div>
        </div>
    </section>
</div>



<script language="javascript">
    $('#loginEmail').on('keyup', function () {
        var valid = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(this.value) && this.value.length;
        if (valid == false) {
            $("#loginErrors").html('email is not valid');
        } else {
            $("#loginErrors").html('');
        }
    });
        var appUrl="{{URL::to('/')}}";
        $("#loginFrm").submit(function () {

            $("#loginErrors").html('');
            var email=$("#loginEmail").val();
            var password=$("#loginPassword").val();
            var csrf_token= $('input[name=_token]').val();
            if(email.length==0 || password.length==0)return;
//            alert(email+"-"+password+"-"+csrf_token);
            remember = ($('input[name="remember"]:checked').length > 0) ? 1 : 0;
            $.ajax({
                url: appUrl+'/auth/login',
                type: "post",
                data: {'email': email, 'password': password, '_token':csrf_token},
                success: function (data) {
                    if (parseInt(data) == -1) {
                        $("#loginErrors").html('This account does not exists');
                    } else {
                       //location.reload();
                        location.href = data;
                    }
                }

            });
        });

        function showForgotSection(){
            $('#forgot_pass').show();
            $('#loginSection').hide();
        }


        $.magnificPopup.instance.close=function(){
            $('#forgot_pass').hide();
            $('#resetMessage').hide();
            $('#loginSection').show();
            $("#resetEmail").val('');
            $.magnificPopup.proto.close.call(this);
        }

        $("#passresetform").submit(function () {
            $("#resetErrors").html('');
            var email=$("#resetEmail").val();
            if(email.length==0)
                $("#resetErrors").html('This account does not exists in our database');
            var csrf_token= $('input[name=_token]').val();
            $.ajax({
                url: 'password/email',
                type: "post",
                data: {'email': email, '_token':csrf_token},
                success: function (data) {
                    console.log('here');
                    console.log(data);
                    if (data == 0) {
                        $("#resetErrors").html('This account does not exists in our database');
                    }
                    else{
                        $('#resetMessage').show();
                        $('#forgot_pass').hide();
                    }
                }

            });
        });

        
  
</script>
