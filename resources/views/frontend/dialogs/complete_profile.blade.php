
<?php
$countries = array("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
?>
<div class="mask" id="complete_profile">
    <div style="display:table; width:100%; height:100%;">
        <div style="display: table-cell; vertical-align: middle; height: 100%; width: 100%;">
            <div class="container1 " style="height: 547px1;">
                <div class="table_dv1" style="height: 547px1;">
                    <div style="height: 547px1;">

                        <div class="provider_register" id="provider_step_2" style="background-position: -372px -32px !important;overflow: hidden;">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 color_white right_to_center padding-top-40 height_100">
                                    <div class="height_500_auto">
                                        <div style="padding-top: 306px; font-size:23px; line-height:31px;">
                                            Tell us a bit more about yourself <br>
                                            so we can assign the best jobs for <br>
                                            you based on your location and <br>
                                            experience. 

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form_container relative">

                                        <h3>PROFILE INFORMATION </h3>
                                        <form name="photo" id="imageUploadForm"  action="{{url('/img_upload')}}" method="POST">
                                            <div class="text-center relative">
                                                @if($user && $user->compeleted_profile==false)
                                                <div class="profile_img" id="profile_img" ></div>
                                                <span class="percent_counter" id="percentComplete"></span>
                                                <input name="user_id" type="hidden" value="{{$user->id}}">
                                                @endif
                                                <div id="div_upload" class="text-center relative" style="margin-bottom:15px ">
                                                    <input  required="" id="ImageBrowse" required="" name="picture" type="file" accept="image/*">

                                                    <label class="upArrow"> Upload Profile Picture</label><br>
                                                    <span hidden="" class="error" id="img_type_err" >Image type is not valid. Please upload jpg,png or gif</span>
                                                    <span hidden="" class="error" id="img_size_err" >Max. image size must be 1mb
                                                    </span>
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
                                                    <input id="full_name_contact" name="name" required="" type="text" class="form_control" />
                                                    <span class="error" id="errName"></span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 form-group">
                                                    <label>Country</label>	
                                                    <select id="country" required name="country" class="form_control">
                                                        @foreach($countries as $i)
                                                        <option @if($i=='United States') {{"selected"}} @endif value="{{$i}}">{{$i}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                                <div class="clear"></div>
                                            </div>
                                            <div class="row">

                                                <div class="col-md-6 col-sm-6 form-group">
                                                    <label >Work radius area:
                                                        <span class="toolTip">How many miles are you able to travel for a job?
                                                            <span><i class="fa fa-caret-down"></i></span>
                                                        </span>
                                                        <a class="more_radio" href="#" 
                                                           >
                                                        </a>
                                                    </label>
                                                    <span class="radio" data-toggle="tooltip" data-placement="top" title="How many miles you are able to travel for job"></span>	
                                                    <select id="workarearadio" name="work_area_radio" class="form_control" required>
                                                        <option value="">Select work radius area</option>
                                                        <option value="5">5</option>
                                                        <option value="10">10</option>
                                                        <option value="15">15</option>
                                                        <option value="20">20</option>
                                                        <option value="25">25</option>
                                                        <option value="30">30</option>
                                                        <option value="60">60</option>
                                                        <option value="120">120</option>
                                                        <option value="240">240</option>
                                                    </select>
                                                    <span class="error" id="errWorkarearadio"></span>



                                                </div>
                                                <div class="col-md-6 col-sm-6 form-group">
                                                    <label>Zip Code</label>	
                                                    <input id="zipcode" name="zip_code" required="" type="text" class="numOnly form_control" />
                                                    <span class="error" id="errZipcode"></span>
                                                </div>
                                                <div class="clear"></div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 col-sm-6 form-group">
                                                    <label>Experience in years</label>	
                                                    <input required="" id="experience" name="years_experience" type="text" class="numOnly form_control" />
                                                    <span class="error" id="errExperience"></span>
                                                </div>
                                                <div class="col-md-6 col-sm-6 form-group">
                                                    <label>Phone number</label>	
                                                    <input required="" id="phone"  name="phone" type="text" class=" form_control numOnly"  />
                                                    <span id="intlTelInputDD"></span>
                                                    <span class="error" id="errPhone"></span>
                                                </div>
                                                <div class="clear"></div>
                                            </div>

                                            <span id="errmsg" style="color:red"></span>
                                            <div class=" text-center">

                                                <input type="button" name="countinu"  class="primary_btn" id="btn_next"  value="continue" />
                                            </div>

                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="provider_register" id="provider_step_3"  style="display:none; height:612px; background: url(./resources/assets/frontend/images/cup.jpg) !important;     background-size: cover !important;    min-height: 112%;     background-position: -284px 0px !important;">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 color_white right_to_center padding-top-40" style="height: 547px;">
                                    <div class="height_500_auto1">
                                        <div style="    padding-top: 232px;    font-size: 23px;    line-height: 31px;">
                                            Last step! <br>
                                            Your skills and gear are very important <br>
                                            for us to assign the best jobs for you!<br>
                                        </div>
                                        <span class="left_absolute" style="left: 61px;
                                              bottom: -30px;"><img width="100px" src="./resources/assets/frontend/images/point_3.png"></span>
                                        <span class="left_absolute" style="right: 8px;bottom: -30px;">
                                            <a href="javascript:void(0)" class="underline color_white" id="back_to_step_2" style="font-size: 17px;">Back <span class="span_arrow"></span></a>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 white-popup" style="margin-top: 0%;">
                                    <div class="form_container" style="height: 542px;">

                                        <h3>SKILLS</h3>

                                        <div class="form-field" style="height: auto;margin-bottom: 20px;">
                                            <label>What types of images do you make? (select all that apply)
                                            </label>
                                            <select data-placeholder=" "  name="tags[]" id="tag_images"  multiple="multiple">

                                            </select>
                                            <span hidden class="error" id="tag_image_err">This field is required </span>
                                        </div>

                                        <div class="form-field" style="height: auto;margin-bottom: 20px;">
                                            <label>What kind of gear do you use? (select all that apply)</label>
                                            <select data-placeholder=" "  name="tags[]" id="tag_gears" multiple="multiple">

                                            </select>
                                            <span hidden class="error" id="tag_gear_err">This field is required </span>
                                        </div>
                                        <div class="form-field" style="height: auto;margin-bottom: 45px;">
                                            <label>Provide a link with samples of your work:</label>
                                            <input style="margin-top: 6px;"  id="work_url"  name="work_url" type="text" class="form_control" />
                                            <span hidden class="error" id="work_url_err">This field is required </span>

                                        </div>

                                        <div class="margin-bottom-15">
                                            <label class="block">&nbsp;</label>
                                            <label class="checkBox_label" style="font-size:14px; padding-bottom: 11px;">
                                                <input id="policy"  value="1" type="checkbox"> 
                                                I accept the </label>
                                            <a target="_blank" href="{{url('')}}?independent_contact" 
                                               style="text-decoration: underline; color: blue; font-size: 14px;" >Independent Contractor Agreement</a>
                                            <br><br>
                                            <span hidden class="error" id="policy_err">This field is required </span>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="actions">
                                            <input type="submit" onclick="" class="primary_btn"  value="Finish Registeration" />
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
    </div>
</div>
<style type="text/css">


    .chosen-container
    {
        width: 100% !important;
        margin-top: 6px;
    }
    .chosen-container-multi .chosen-choices{
        background: #f8f8f8;
    }
    .chosen-container-multi .chosen-choices li.search-field{padding: 11px;}
    .error {
        color: #D0021B ;
        font-size: 12px;
    }
</style>

<!--<link rel="stylesheet" href="http://jqueryvalidation.org/files/demo/site-demos.css">-->
<script src="./resources/assets/frontend/jquery-validation/dist/jquery.validate.min.js"></script>
<script src="./resources/assets/frontend/jquery-validation/dist/additional-methods.min.js"></script>
<script type="text/javascript" src="./resources/assets/bootstrap-multiselect-master/dist/js/bootstrap-multiselect.js"></script>
<link rel="stylesheet" href="./resources/assets/bootstrap-multiselect-master/dist/css/bootstrap-multiselect.css" type="text/css"/>
<script src="./resources/assets/intlTelInput/js/intlTelInput.min.js"></script>
<script src="./resources/assets/intlTelInput/js/utils.js"></script>
<link type="text/css" rel="stylesheet" href="./resources/assets/intlTelInput/css/intlTelInput.css">
<script>
$("#phone").intlTelInput({
    allowDropdown: true,
    autoHideDialCode: true,
    autoPlaceholder: true,
    // dropdownContainer: "#intlTelInputDD",
    // excludeCountries: ["us"],
    // geoIpLookup: function(callback) {
    //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //     var countryCode = (resp && resp.country) ? resp.country : "";
    //     callback(countryCode);
    //   });
    // },
    // initialCountry: "auto",
    // nationalMode: false,
    // numberType: "MOBILE",
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // preferredCountries: ['cn', 'jp'],
    separateDialCode: false,
    utilsScript: "./resources/assets/frontend/intl-tel-input-master/build/js/utils.js"
});

</script>

<script>
//    $("#percentComplete").html(" TEST complete ");

//    $("#experience").keydown(function () {
//        $("#experience").val();
//    });

    function stepOneValidate() {
        var errors = 0;
        if ($("#full_name_contact").val() == "") {
            $("#errName").html('This field is required');
            errors = 1;
        } else {
            $("#errName").html('');
        }
        if ($("#picture").val() == "") {
            $('#profile_img').removeClass('profile_img');
            $('#profile_img').addClass('profile_img_error');
            errors = 1;
        } else {
            $('#profile_img').addClass('profile_img');
            $('#profile_img').removeClass('profile_img_error');
        }
        if ($("#workarearadio").val() == "") {
            $("#errWorkarearadio").html('This field is required');
            errors = 1;
        } else {
            $("#errWorkarearadio").html('');
        }
        if ($("#experience").val() == "") {
            $("#errExperience").html('This field is required');
            errors = 1;
        } else {
            $("#errExperience").html('');
        }
        if ($("#zipcode").val() == "") {
            $("#errZipcode").html('This field is required');
            errors = 1;
        } else {
            $("#errZipcode").html('');
        }
        if ($("#phone").val() == "") {
            $("#errPhone").html('This field is required');
            errors = 1;
        } else {
            $("#errPhone").html('');
        }
        if (errors == 1) {
            return false;
        } else {


            return true;
        }
    }


    $("#btn_next").click(function () {
//        var form = $("#basic_info");
//        var img_form = $("#imageUploadForm");

        //form.validate();
//        if (form.valid() && img_form.valid()) {
//            //if (form.valid()) {
//            $("#provider_step_2").hide();
//            $("#provider_step_3").show();
//        }
        if (stepOneValidate() == true) {
            //if (form.valid()) {
            $("#provider_step_2").hide();
            $("#provider_step_3").show();
        }


    });



    $("#back_to_step_2").click(function () {
        $("#provider_step_3").hide();
        $("#provider_step_2").show();
    })

    $('#basic_info').on('submit', (function (e) {
        if ($("#tag_images option:selected").text() == "") {

            e.preventDefault();
            $('#tag_image_err').show()
        } else {
            $('#tag_image_err').hide()
        }
        if ($("#tag_gears option:selected").text() == "") {

            e.preventDefault();
            $('#tag_gear_err').show()
        } else {
            $('#tag_gear_err').hide()
        }
        if ($('#work_url').val() == "") {
            e.preventDefault();
            $('#work_url_err').show()
        } else {
            $('#work_url_err').hide()
        }
        if (!$("#policy").is(':checked')) {

            e.preventDefault();
            $('#policy_err').show()
        } else {
            $('#policy_err').hide()
        }




    }));
    $("#ImageBrowse").on("change", function () {
        $('#img_size_err').hide();
         $('#img_type_err').hide();
        var ext = $('#ImageBrowse').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['jpg', 'jpeg', 'gif', 'png']) == -1) {
            $('#ImageBrowse').val('');
            $('#img_type_err').show();
            $('#profile_img').removeClass('profile_img');
            $('#profile_img').addClass('profile_img_error');
            return;
        }
         else {
            $('#img_type_err').hide();
            $('#profile_img').addClass('profile_img');
            $('#profile_img').removeClass('profile_img_error');
        }
        var imgSize=this.files[0].size / 1000; //in KB's 
        if(imgSize>500){
            $('#ImageBrowse').val('');
            $('#img_size_err').show();
            $('#profile_img').removeClass('profile_img');
            $('#profile_img').addClass('profile_img_error');
            return;
        }else {
            $('#img_size_err').hide();
            $('#profile_img').addClass('profile_img');
            $('#profile_img').removeClass('profile_img_error');
        }   
        
        $("#wait_msg").show();
        $("#btn_next").prop('disabled', true);


        $("#imageUploadForm").submit();
    });
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
            xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', progress, false);
                }
                return myXhr;
            },
            success: function (data) {
                //$("#div_upload").hide();
                $("#wait_msg").hide();
                $('#profile_img').removeClass("profile_img_error");    
                $('#profile_img').addClass("profile_img");    
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
    function progress(e) {

        if (e.lengthComputable) {
            var max = e.total;
            var current = e.loaded;

            var Percentage = (current * 100) / max;
            $("#percentComplete").html(
                    parseInt(Percentage) + "% ");
            console.log(parseInt(Percentage));


            if (Percentage >= 100)
            {
                console.log("complete");

            }
        }
    }

</script>



<!-- Initialize the plugin: -->
<script type="text/javascript">
    imageTag = [];
    $.ajax({
        url: './imageTag',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            for (var i = 0; i < data.length; i++) {
                $("#tag_images")
                        .append($("<option></option>")
                                .attr("value", data[i].id)
                                .text(data[i].name));

            }
            $("#tag_images").chosen();
            //$("#tag_images").multiselect('dataprovider', imageTag);

        },
        error: function (data) {

        }
    });
    gearTag = [];
    $.ajax({
        url: './gearTag',
        type: 'GET',
        dataType: 'json',
        uploadProgress: function (event, position, total, percentComplete) {
            alert(percentComplete + '%');

        },
        success: function (data) {

            for (var i = 0; i < data.length; i++) {
                $("#tag_gears")
                        .append($("<option></option>")
                                .attr("value", data[i].id)
                                .text(data[i].name));

            }
            $("#tag_gears").data("placeholder", " ").chosen();

        },
        error: function (data) {

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
    $("#profile_img").click(function (){
        $("#ImageBrowse").click();
    });

</script>
