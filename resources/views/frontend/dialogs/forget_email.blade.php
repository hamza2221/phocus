<div class="mask" id="password_reset_email">
    <div class="container height_100">
        <div class="table_dv height_100">
            <div class="table_cell height_100">
                <div class="provider_register" style="background: url(./resources/assets/frontend/images/provide_1.jpg); !important;     background-size: cover !important;background-position: 0px !important;">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 color_white right_to_center padding-top-40 height_100">
                            <div class="height_500_auto">
                                
                               
                                <span class="right_absolute">
                                    Not a member?<a href="javascript:void(0)" class="bold underline color_white go_to_register_mask"> Register</a>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                                @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif
                            <div class="form_container relative" style="padding:90px 70px 20px 70px !important; height: 459px !important;">
                            
                                <span id="closeBTNreset" class="mask_close"><img src="./resources/assets/frontend/images/close_2.png" width="32"></span>
                                <h3 style="text-transform: uppercase; margin-bottom: 43px !important; font-size: 2em !important;">PASSWORD RESET!</h3>
                                <p  id="emailSentMsg">
                                <div hidden="" class="alert alert-success">An email with password reset link has been sent to you</div>
                                </p>
                                
                                <form method="post" id="forget_email_form" action="{{ url('/password/email') }}">
                                    {!! csrf_field() !!}
                                    <div class="margin-bottom-25">
                                        <label>Email</label>    
                                        <input id="resetEmail" type="email" class="form_control" name="email" value="{{ old('email') }}">

                                        
                                            <span id="checkEmailErrors" class="help-block">
                                                <strong></strong>
                                            </span>
                                        
                                    </div>

                                    <div class=" text-center">
                                        <input type="button" onClick="checkEmail()" class="primary_btn" value="RESET MY PASSWORD" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<script language="javascript">


function checkEmail(){
        $.ajax({
            
              url: './auth/checkEmail',
              type: "post",
              data: {'email':$("#resetEmail").val(), '_token': $('input[name=_token]').val()},
              success: function(data){
                  
                  
                if(parseInt(data) == 0){
                    $("#checkEmailErrors").html('<div class="text-danger">This email does not exists</div>');
                    
                }else{
                    //$('#emailSentMsg').show();
                     //$('#emailSentMsg').show();

                    $("#forget_email_form").submit();
                    
                    //$("#resetEmail").val("");

                }
              }
          
        });
    }
</script>
