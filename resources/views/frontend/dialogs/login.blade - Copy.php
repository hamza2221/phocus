<div class="mask" id="login_mask">
    <div class="container height_100">
        <div class="table_dv height_100">
            <div class="table_cell height_100">
                <div class="provider_register" style="background: url(./resources/assets/frontend/images/provide_1.jpg); !important;     background-size: cover !important;background-position: 0px !important;" >
                    <div class="row">
                        <div class="col-md-6 col-sm-6 color_white right_to_center padding-top-40 height_100">
                            <div class="height_500_auto" style="min-height:350px !important">
                                
                                <span class="right_absolute">
                                    Not a member?<a href="javascript:void(0)" class="bold underline color_white go_to_register_mask"> Register</a>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form_container relative">
                                <span class="mask_close"><img src="./resources/assets/frontend/images/close_2.png" width="32"></span>
                                
                                <h3>WELCOME BACK! </h3>
                                <p id="loginErrors"></p>
                                
                                <form method="POST" id="loginFrm">
                                    {!! csrf_field() !!}
                                    <div class="margin-bottom-15">
                                        <label>Email</label>
                                        <input type="email" class="form_control" name="email" id="loginEmail" value="{{ old('email') }}" required=""/>
                                        @if ($errors->has('email'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                        @endif
                                    </div>

                                    <div class="margin-bottom-15">
                                        <label>Password</label>
                                        <input type="password" class="form_control" name="password" id="loginPassword" required="" />
                                        @if ($errors->has('password'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                        @endif
                                    </div>



                                    <div class="margin-bottom-15" hidden>
                                        <label>
                                            <input type="checkbox" name="remember" id="remember"> Remember Me
                                        </label>
                                    </div>
									<div class="margin-bottom-15">
                                        <a class="btn btn-link forgetpassworddialog" id="forget_email" href="javascript:void(0)">Forgot Password?</a>
                                    </div>

                                    <div class=" text-center">
                                        <input type="submit" class="primary_btn" value="Login" />
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

$(document).ready(function(e) {
    $("#loginFrm").submit(function(){
		remember = ($('input[name="remember"]:checked').length > 0)? 1:0;
		
		$.ajax({
			
			  url: './auth/login',
			  type: "post",
			  data: {'email':$("#loginEmail").val(), 'password':$("#loginPassword").val(), 'remember':remember, '_token': $('input[name=_token]').val()},
			  success: function(data){

				if(parseInt(data) == -1){
					$("#loginErrors").html('<div class="alert alert-danger">This account does not exists</div>');
				}else{
					//window.location = data;
                    alert(data);
				}
			  }
		  
		});
	});
});
</script>
