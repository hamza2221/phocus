$(document).ready(function(){
	$('.toggle_list').click(function(){
		alert('asdf');
		$('.toggle_list li a').addClass('activeTab');
		$('.toggle_list li a').siblings('.toggle_data').slideToggle();
		
	});
});