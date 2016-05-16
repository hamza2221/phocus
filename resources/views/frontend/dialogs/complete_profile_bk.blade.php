
<?php
$countries = array("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
?>
<div class="mask" id="complete_profile">
    <div class="container height_100">
        <div class="table_dv height_100">
            <div class="table_cell height_100">

                <div class="provider_register" id="provider_step_2" >
                    <div class="row">
                        <div class="col-md-6 col-sm-6 color_white right_to_center padding-top-40 height_100">
                            <div class="height_500_auto">
                                <div class="font_27">
                                    Cras quis nulla <span class="bold">commodo</span>,
                                    aliquam lectus sed, blandit augue. Cras
                                    ullamcorper <span class="bold">bidendum bibendum.</span>
                                </div>
                                <span class="left_absolute"><img src="./resources/assets/frontend/images/point_2.png"></span>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form_container relative">

                                <h3>PROFILE INFORMATION </h3>
                                <form name="photo" id="imageUploadForm"  action="{{url('/img_upload')}}" method="POST">
                                    <div class="text-center relative">
                                     @if($user && $user->compeleted_profile==false)
                                        <div class="profile_img" id="profile_img"></div>
                                        <span class="percent_counter" id="percentComplete"></span>
                                        <input name="user_id" type="hidden" value="{{$user->id}}">
                                        @endif
                                        <div id="div_upload" class="text-center relative margin-bottom-10">
                                            <input  required="" id="ImageBrowse" required="" name="picture" type="file">
                                            
                                            <label>Upload Profile Picture</label>
                                        </div>
                                        
                                    </div>
                                </form>
                                
                                
                                @if($user && $user->compeleted_profile==false)
                                <form id="basic_info" name="basic_info" method="post" action="{{ url('/store_profile_info/'.$user->id) }}">
                                	<input type="hidden" name="picture_meta" id="picture_meta">
                                    @endif
                                    <input required="" id="picture"  name="picture" type="hidden"  />
                                    {!! csrf_field() !!}

                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 form-group">
                                            <label>Name</label>	
                                            <input name="name" required="" type="text" class="form_control" />
                                        </div>
                                        <div class="col-md-6 col-sm-6 form-group">
                                            <label>Country</label>	
                                            <select required name="country" class="form_control">
                                                @foreach($countries as $i)
                                                <option value="{{$i}}">{{$i}}</option>
                                                @endforeach
                                            </select>
                                        </div>

                                    </div>
                                    <div class="row">

                                        <div class="col-md-6 col-sm-6 form-group">
                                            <label>Work radius area:</label>	
                                            <input name="work_area_radio" required="" type="text" class="numOnly form_control"  />
                                        </div>
                                        <div class="col-md-6 col-sm-6 form-group">
                                            <label>Zip Code</label>	
                                            <input name="zip_code" required="" type="text" class="numOnly form_control" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 form-group">
                                            <label>Experience in years</label>	
                                            <input required="" name="years_experience" type="text" class="numOnly form_control" />
                                        </div>
                                        <div class="col-md-6 col-sm-6 form-group">
                                            <label>Phone number</label>	
                                            <input required=""  name="phone" type="text" class="numOnly form_control"  />
                                        </div>
                                    </div>

<span id="errmsg" style="color:red"></span>
                                    <div class=" text-center">

                                        <input type="button" name="countinu"  class="primary_btn" id="btn_next"  value="continue" />
                                    </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="provider_register" id="provider_step_3"  style="display:none;">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 color_white right_to_center padding-top-40 height_100">
                            <div class="height_500_auto">
                                <div class="font_27">
                                    Cras quis nulla <span class="bold">commodo</span>,
                                    aliquam lectus sed, blandit augue. Cras
                                    ullamcorper <span class="bold">bidendum bibendum.</span>
                                </div>
                                <span class="left_absolute"><img src="./resources/assets/frontend/images/point_3.png"></span>
                                <span class="right_absolute">
                                    <a href="javascript:void(0)" class="bold underline color_white" id="back_to_step_2">Back <i class="fa fa-long-arrow-left"></i></a>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="form_container relative">

                                <h3>SKILLS</h3>

                                <div class="margin-bottom-15">
                                    <label>What types of images do you make? (select all that apply)
                                    </label>
                                    <select required name="tags[]" id="tag_images" multiple="multiple">
                                        
                                    </select>
                                    <span hidden id="tag_image_err">This field is required </span>
                                </div>

                                <div class="margin-bottom-15">
                                    <label>What kind of gear do you use? (select all that apply)</label>
                                    <select required name="tags[]" id="tag_gears" multiple="multiple">
                                        
                                    </select>
                                    <span hidden id="tag_gear_err">This field is required </span>
                                </div>
                                <div class="margin-bottom-15">
                                    <label>Provide a link with samples of your work:</label>
                                    <input required="" id="work_url"  name="work_url" type="text" class="form_control" />
                                    <span hidden id="work_url_err">This field is required </span>

                                </div>

                                <div class="margin-bottom-15">
                                    <label class="block">&nbsp;</label>
                                    <label class=""><input id="policy" type="checkbox" value="1" /> I agree to all</label> <a 
                                    target="_blank" href="./#/terms" >Terms and Conditions</a> and 
                                    <a target="_blank" href="./#/terms">Privacy Policy</a>
                                    <span hidden id="policy_err">This field is required </span>
                                </div>
                                <div class=" text-center">
                                    <input type="submit" onclick="" class="primary_btn"  value="Finish" />
                                </div>
                                
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--<link rel="stylesheet" href="http://jqueryvalidation.org/files/demo/site-demos.css">-->
<script src="http://jqueryvalidation.org/files/dist/jquery.validate.min.js"></script>
<script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>
<script type="text/javascript" src="./resources/assets/bootstrap-multiselect-master/dist/js/bootstrap-multiselect.js"></script>
<link rel="stylesheet" href="./resources/assets/bootstrap-multiselect-master/dist/css/bootstrap-multiselect.css" type="text/css"/>
<script>

$("#btn_next").click(function () {
    //alert('asdf');
    // just for the demos, avoids form submit

    var form = $("#basic_info");
    var img_form = $("#imageUploadForm");

    //form.validate();
    if (form.valid() && img_form.valid()) {
    //if (form.valid()) {
        $("#provider_step_2").hide();
        $("#provider_step_3").show();
    }


})

     

$("#back_to_step_2").click(function () {
    $("#provider_step_3").hide();
    $("#provider_step_2").show();
})

$('#basic_info').on('submit', (function (e) {
    if($('#work_url').val()==""){
        e.preventDefault();
        $('#work_url_err').show()
    }
    else if($('#tag_images').val() == null ) {
        
            e.preventDefault();
            $('#tag_image_err').show()
        }
    else if($('#tag_gears').val() == null ) {
        
            e.preventDefault();
            $('#tag_gear_err').show()
        }
    else if (!$("#policy").is(':checked')) {
        
            e.preventDefault();
            $('#policy_err').show()
        }
    
    
     

}));


$('#imageUploadForm').on('submit', (function (e) {
    e.preventDefault();
    formData = new FormData(this);
    console.log(formData);
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: formData,
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        xhr: function() {
                var myXhr = $.ajaxSettings.xhr();
                if(myXhr.upload){
                    myXhr.upload.addEventListener('progress',progress, false);
                }
                return myXhr;
        },
        success: function (data) {
            $("#div_upload").hide();
            $("#wait_msg").hide();
            $('#profile_img').css("background-image", "url(" + data.path + ")");
            $("#percentComplete").hide();
			$("#picture").val(data.filename);
			$("#picture_meta").val(data.picture_meta);
            $("#btn_next").prop('disabled', false);
        },
        error: function (data) {
            alert("errors: try again");
            console.log(data);
        }

    });

}));

$("#ImageBrowse").on("change", function () {
    var ext = $('#ImageBrowse').val().split('.').pop().toLowerCase();
    if($.inArray(ext, ['jpg','jpeg','gif','png']) == -1) {
        $('#ImageBrowse').val('');
        alert('invalid extension! please upload only image file');
        
        return;
    }
    $("#wait_msg").show();  
    $("#btn_next").prop('disabled', true);
   
    
    $("#imageUploadForm").submit();
});

function progress(e){

    if(e.lengthComputable){
        var max = e.total;
        var current = e.loaded;

        var Percentage = (current * 100)/max;
        $("#percentComplete").html(
            parseInt(Percentage)+ "% ");
        console.log(parseInt(Percentage));


        if(Percentage >= 100)
        {
          console.log("complete");

        }
    }  
 }

</script>



<!-- Initialize the plugin: -->
<script type="text/javascript">
    imageTag=[];
    $.ajax({
        url: './imageTag',
        type: 'GET',
        dataType: 'json',
        
        success: function (data) {
           
            for(var i=0;i<data.length;i++){
                item = {}
                item ["label"] = data[i].name;
                item ["value"] = data[i].id;
                imageTag.push(item);
                }
                $("#tag_images").multiselect('dataprovider', imageTag);
            
        },
        error: function(data) {

        }
    });
    gearTag=[];
    $.ajax({
        url: './gearTag',
        type: 'GET',
        dataType: 'json',
        uploadProgress: function(event, position, total, percentComplete) {
             alert(percentComplete + '%');
            
        },
        success: function (data) {
           
            for(var i=0;i<data.length;i++){
                item = {}
                item ["label"] = data[i].name;
                item ["value"] = data[i].id;
                gearTag.push(item);
                }
                $("#tag_gears").multiselect('dataprovider', gearTag);
            
        },
        error: function(data) {

        }
    });

$(".numOnly").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });
    

    

</script>
