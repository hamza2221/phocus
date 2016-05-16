<?php
    if(isset($_GET['token']) ){
		$token=$_GET['token'];
		$email=$_GET['email']; ?>
	
<div class="mask" id="password_reset_form">
    <div class="container height_100">
        <div class="table_dv height_100">
            <div class="table_cell height_100">
                <div class="provider_register" style="background: url(./resources/assets/frontend/images/provide_1.jpg); !important;     background-size: cover !important;background-position: 0px !important;">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 color_white right_to_center padding-top-40 height_100">
                            <div class="height_500_auto">
                                
                                
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
								@if (session('status'))
								<div class="alert alert-success">
									{{ session('status') }}
								</div>
							@endif
                            <div class="form_container relative">
                            
                                <a href="{{url('')}}" class="mask_close"><img src="./resources/assets/frontend/images/close_2.png" width="32"></a>
                                <h3>ENTER NEW PASSWORD</h3>
                                <p id="regErrors"></p>
                                
                                <form  id="forget_email_form" method="POST" action="{{ url('/password/reset') }}">
                                    {!! csrf_field() !!}
									<input type="hidden" name="token" value="{{ $token }}">
                                    <div class="margin-bottom-15">
                                        <input readonly="" type="email" class="form_control" id="email" value="{{ $email or old('email') }}">

										<span id="resetemailErr" class="text-danger">
													
										</span>
                                    </div>
									<div class="margin-bottom-15">
										<label>Password</label>
                                        <input type="password" id="new_password" class="form_control" name="password">

											<span id="resetpasswordErr" class="text-danger">
													
											</span>
                                    </div>
									<div class="margin-bottom-15">
									<label>Confirm Password</label>
                                        <input type="password" id="new_cpassword" class="form_control" name="password_confirmation">

											
												<span id="resetCpasswordErr" class="text-danger">
													
												</span>
											
                                    </div>

                                    <div class=" text-center">
                                        <input type="button" onClick="resetMyPassword()" class="primary_btn" id="go_to_step_2-t" value="CHANGE MY PASSWORD" />
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
<?php } ?>
<script language="javascript">

	
function resetMyPassword(){
	var email=$('#email').val();
	var password=$('#new_password').val();
	var cpassword=$('#new_cpassword').val();
	
		$.ajax({
				
			  url: './password/reset',
			  type: "post",
			  data: {'email':email,
			  '_token': $('input[name=_token]').val(),
			  'password': password,
			  'password_confirmation': cpassword,
			  'token': $('input[name=token]').val()
			  },
			  success: function(data){
				window.location="{{url('')}}";
			  },
			  error: function(XMLHttpRequest, textStatus, errorThrown) {
			     
			     console.log(XMLHttpRequest.responseJSON.password);
			     $("#resetpasswordErr").html('');
			     $("#resetpasswordErr").html(XMLHttpRequest.responseJSON.password);
			  }
		  
		});
	}
</script>
