$(window).load(function() {
	$('.showcase-pics').hide();
	$('.past-showcases img').click(function() {
		// var slideIndex = $('.past-showcases img').slick('slickCurrentSlide');
		// if (slideIndex == 1){
		// slideIndex--;
		// }
		var posterClass = $(this).attr('id');
		//console.log(posterClass);
		//console.log('#showcase'+posterClass.substring(6));
		$('.showcase-pics').fadeOut(200);
		setTimeout(function() {
			$('#showcase'+posterClass.substring(6)).fadeIn(200);
		}, 200);
	})
})