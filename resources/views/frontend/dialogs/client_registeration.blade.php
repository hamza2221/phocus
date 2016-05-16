
<style type="text/css">
    .error{
        color:red;
    }
    input.ng-invalid{
        border: 1px solid red;
    }
</style>



<div class='white-popup-single mfp-hide' id='client-registration-popup'>
    <section class='client-registration-popup__container'>
        <div class='form-fields-container client-registration-popup__form-fields-container'>
            <h1 class='title'> Register </h1>
            <h5 class='sub-title'> This section will soon be available! Leave your email so you and be one of the first to experience Phocus.io </h5>
            <form id="client_registeration" method="post" action='{{url('/register_client')}}'>
                {!! csrf_field() !!}
                <div class='form-field'>
                    <div class='label-section'>
                        <label class='floated-left label-element' for='email'> Email </label>
                    </div>
                    <input class='user-registration__input form-field__input-text' id="client_email" required name="email" type="email" required="">
                    <span class='error-message error-message-validation' ng-show="hasError('email', 'required', 'addLeadForm')"> This field is required </span> <span class='error-message error-message-validation' ng-show="hasError('email', 'email', 'addLeadForm')"> Invalid email format </span> </div>
                <div class='form-field textarea-message'>
                    <div class='label-section'>
                        <label class='floated-left label-element' for='interested_in'> What type of photography work are you looking for? </label>
                    </div>
                    <textarea class='user-registration__input form-field__input-text' cols='30' id="client_interest" required="" name="interested_in" rows='4'></textarea>
                    <span class='error-message error-message-validation' ng-show="hasError('interested_in', 'required', 'addLeadForm')"> This field is required </span> </div>
                <div class='clearfix'></div>
                <div class='actions'>
                    <div class='log-in-action'> Already a provider? <a class='link-underline open-popup-link' href='#user-login-popup-menu'> Log in </a> </div>
                    <div class='submit-action'>
                        <button class='button-bordered' id="client_reg_submit" type="button" onclick="cleint_register()" original-button-text='let me know!'> let me know! <span hidden="" id="processingSpan" class="animated_bulets"></span></button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <div class='successfull-request-modal white-popup mfp-hide' id='create-lead-request'>
        <div class='success-icon'></div>
        <p>Thank you for your interest</p>
        <div class='actions'>
            <button class='button-bordered' close-magnific-popup=''> Stay in this page </button>
            <button class='button-bordered' visit-to='/'> Go to homepage </button>
        </div>
    </div>
</div>



<script src="./resources/assets/frontend/jquery-validation/dist/jquery.validate.min.js"></script>
<script src="./resources/assets/frontend/jquery-validation/dist/additional-methods.min.js"></script>
<script type="text/javascript">
    var appUrl="{{URL::to('/')}}";
     $("#processingSpan").hide();
                                    function cleint_register() {
                                        
                                        var email=$('#client_email').val();
                                        var interest=$('#client_interest').val();
                                        if(email.length==0){
                                            
                                            $('#client_email').css('border','1px solid red');
                                        }
                                        else
                                        {
                                            $('#client_email').css('border','1px solid #A5AAC0');
                                        }
                                        if(interest.length==0){
                                            $('#client_interest').css('border','1px solid red');
                                        }
                                        else{
                                            $('#client_interest').css('border','1px solid #A5AAC0');
                                        }
                                        var form = $("#client_registeration");
                                        if (form.valid() == true) {
                                            
                                            $("#client_reg_submit").html('Addning To List');
                                            $("#processingSpan").show();
                                            
                                            var client_email = $("#client_email").val();
                                            var client_interest = $("#client_interest").val();
                                            $.ajax({
                                                url: appUrl+'/register_client',
                                                type: "post",
                                                data: {'email': client_email, 'interested_in': client_interest, '_token': $('input[name=_token]').val()},
                                                success: function (data) {
                                                    if (parseInt(data) == -1) {
                                                        $("#loginErrors").html('<div class="alert alert-danger">Some errors in registering client</div>');
                                                    } else {
                                                        $("#client_email").val('');
                                                        $("#client_interest").val('');
                                                        $("#client_reg_submit").html('let me know!');
                                                        $("#processingSpan").hide();
                                                        $('#thanks_leads').fadeIn();
                                                    }
                                                }
                                            });
                                        } else {

                                        }
                                    }



</script>

