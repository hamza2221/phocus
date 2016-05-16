$(document).ready(function () {


    $('.toggle').click(function () {
        $('.inner_navigation').addClass('active_nav');
    });
    $('.closs').click(function () {
        $('.inner_navigation').removeClass('active_nav');
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 60) {
            $('header').addClass('scrolled_header');
            $('#dashboard-header #header__container').addClass('sticky-menu');

        } else {
            $('header').removeClass('scrolled_header');
            $('#dashboard-header #header__container').removeClass('sticky-menu');

        }
    });




    $('#photographer_btn').click(function () {
        $('#photographer_mask').fadeIn();
    });

    $('#client_reg').click(function () {
        $('#client_register_mask').fadeIn();
    });

    $('#just_client').click(function () {
        $('#client_register_mask').fadeIn();
    });

    $('#login').click(function () {
        $('#login_mask').fadeIn();
    });
    $('.mask_close').click(function () {

        $('.mask').fadeOut();
    });


    $('.left_tabs li').click(function () {
        $('.left_tabs li').removeClass('active_tab');
        $(this).addClass('active_tab');

        $('.tabs_data').hide();
        $('#' + this.id + '_data').fadeIn();

    });

    $('.faq_list li a').click(function () {
        $(this).toggleClass('active_faq');
        $(this).siblings('.faq_data').slideToggle();

    });

    $('.checkBox_label').mousedown(function () {
        $(this).toggleClass('checked_label');

    });
    /*========================================= mask controler */
    $('.go_to_login_mask').mousedown(function () {
        $('#photographer_mask').hide();
        $('#client_register_mask').hide();
        $('#password_reset_email').hide();
        $('#login_mask').fadeIn();
    });
    $('.go_to_register_mask').mousedown(function () {
        $('#login_mask').hide();
        $('#client_register_mask').hide();
        $('#password_reset_email').hide();
        $('#photographer_mask').fadeIn();
    });



//	$("#go_to_step_1, #go_to_step_2, #go_to_step_3, #back_to_step_2").click(function() {
//		var id = $(this).attr("id");
//		if(id=='go_to_step_2')
//		{
//			$('#provider_step_1').hide();
//			$('#provider_step_2').show();
//			$('#provider_step_3').hide();	
//		}
//		else if(id=='go_to_step_3')
//		{
//			$('#provider_step_1').hide();
//			$('#provider_step_2').hide();
//			$('#provider_step_3').show();	
//		}
//		else if(id=='back_to_step_2')
//		{
//			$('#provider_step_1').hide();
//			$('#provider_step_2').show();
//			$('#provider_step_3').hide();	
//		}
//
//		
//	});	
    /*========================================= mask controler */
});




