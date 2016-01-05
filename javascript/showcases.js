$(document).ready(function() {
	$('.past-showcases img').click(function() {
		var posterClass = $(this).attr('id');
		$('.showcase-pics').fadeOut(200);
		setTimeout(function() {
			$('#showcase'+posterClass.substring(6)).fadeIn(200);
		}, 200);
	})
})