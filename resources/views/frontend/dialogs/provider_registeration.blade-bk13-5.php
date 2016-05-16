<div class='white-popup mfp-hide' id='user-register-popup-menu'>
    <section class='white-popup__basic'> <img src="{{URL::to('/resources/assets/frontend/images/step1_bgimage-c59cdcf13a0aa729876f23c4e4b0a09d.jpg')}}" alt="Step1 bgimage" />
        <div class='white-popup__step-description'>
            <h4> Become a Phocus.io Pro Provider to <br>
                take part on the best photography <br>
                projects around your area. </h4>
        </div>
        <div class='image-bullets'>
            <label class='label-selected'></label>
            <label></label> 
            <label></label> 
        </div>
        <div class='white-popup__already-member-link'> Already a member? <a class='open-popup-link' href='#user-login-popup-menu'>Log in</a> </div>
    </section>

    <section  class='white-popup__form-container' >
        <div class='form-fields-container white-popup__form-fields-container'>
            <h1 class='title-step'> Provider Register </h1>

            <form  id="registrationFrm" class=""  accept-charset="UTF-8" method="post">
                <input name="utf8" type="hidden" value="&#x2713;" />
                {!! csrf_field() !!}
                <div class='form-field' id='email'>

                    <label>Email</label>
                    <input  class="email-password-fields form-field__input-text" autocomplete="off" type="email"  id="emailReg" />

                    <div id="regErrors" class="alert alert-danger" style="font-size: small;color: #A70000;"></div>
                </div>
                <div class='form-field' id='password'>
                    <label>Password</label>
                    <input autocomplete="off"  class="regPwdError email-password-fields form-field__input-text" type="password" id="passwordReg" />
                    <span class='regPwdError alert alert-danger' style="font-size: small;color: #A70000;"></span>
                </div>
                <div class='form-field' id='password_confirmation'>
                    <label>Password Confirmation</label>
                    <input autocomplete="off"  class=" form-field__input-text" type="password" name="user[password_confirmation]" id="cpasswordReg" />
                    <span class='regCPwdError alert alert-danger' style="font-size: small;color: #A70000;"></span> </div>
                <div class='clearfix'></div>
                <div class='actions'>
                    <input type="submit" name="commit" value="Sign up" class="button-bordered" />
                </div>
            </form>
        </div>
    </section>
</div>
<script src="http://jqueryvalidation.org/files/dist/jquery.validate.min.js"></script>
<script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>
<script language="javascript">
    var form = $("#registrationFrm");
    var appUrl="{{URL::to('/')}}";

    //form.validate();
    $(document).ready(function () {
        $("#registrationFrm").submit(function () {
            $("#regCPwdError").html("");
            $('.regPwdError').html("");
            $("#regErrors").html("");
            var p_register_errors=0;
            if ($("#emailReg").val() == "") {
                $("#regErrors").html('Email is required');
                $("#emailReg").focus()
                p_register_errors=1;
            }else{
                $("#regErrors").html('');
            }
            if ($("#passwordReg").val() == "") {
                $('.regPwdError').html("Password is required");
                $("#passwordReg").focus();
                p_register_errors=1;
            }else{
                 $('.regPwdError').html("");
            }
            if ($("#cpasswordReg").val() == "") {
                $('.regCPwdError').html("Password Confirmation  is required");
                $("#cpasswordReg").focus();
                p_register_errors=1;
            }else{
                $('.regCPwdError').html("");
            }
            if(p_register_errors==1){
                return false;
            }
            if ($("#passwordReg").val().length < 8) {
                $('.regPwdError').html("is too short (minimum is 8 characters)");
                $("#passwordReg").focus();
                return false;
            }

            if ($("#passwordReg").val() != $("#cpasswordReg").val()) {
                $('.regCPwdError').html("doesn't match Password.");
                $("#regCPwdError").focus();
                return false;
            }

            $.ajax({
                url: appUrl+'/auth/registration',
                type: "post",
                data: {
                    'email': $("#emailReg").val(),
                    'password': $("#passwordReg").val(),
                    'password_confirmation': $("#cpasswordReg").val(),
                    '_token': $('input[name=_token]').val()
                },
                success: function (data) {
                    if (parseInt(data) == -1) {
                        $("#regErrors").html('There is some problem, Please try again later.');
                    } else if (parseInt(data) == -2) {
                        $("#regErrors").html('has already been taken');
                    } else { 
                        window.location.replace(appUrl);
                    }
                }

            });
        });
    });
</script>