$(document).ready(function(){

	console.log('Hello');

	$('#btn-open-form').click(function(e){
		e.preventDefault();
		console.log('Click');
		$(this).hide();
		$('.booking-form-wrapper').fadeIn(1000);

	});

	//phone-mask

	$("#phone-mask").mask("+7 (999) 999-99-99");


})