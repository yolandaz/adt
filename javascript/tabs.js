$(document).ready(function() {
	menu = 0
	title = 0
	$('div#tab1').show();
	var titles = ["", "About Us", "Members", "Members", "Members", "Performances", "Performances", "Performances"];
	$('#wrapper').css('top', '50%').css('top', '-=80px');
	$('#wrapper').css('left', '50%').css('left', '-=290px');
	if ($(window).innerHeight() < 600 || $(window).innerWidth() < 1160) {
		$(" .title-text").hide();
        title = 1;
    }
	if ($(window).innerWidth() < 770) {
		$('#menu').hide();
	} else {$('#menu-sm').hide();}
	curtab = 1;
	var done = [0,0,0];
	var x = 0;
	var y = 0;
	$('.b1').click(function(){
		if (x == 0 && y == 0) {
			x = 1;
			if (curtab != 1) {
				$('div.tabContent').fadeOut(600);
				$('div.title-text').fadeOut(600);
				$('#logo').fadeOut(600);
				setTimeout(function() {
					$("#logo").css('top', '-130px');
					$(".tabContent").css({'overflow': 'visible'});	
					$('div.title-text').text('');
					$('#announcement').animate({
						bottom: $(window).innerHeight()/2 + 80 + 'px'
					}, 600)
					$('#wrapper').animate({
						top: $(window).innerHeight()/2 - 80 + 'px',
						height: '160px',
						left: $(window).innerWidth()/2 - 290 + 'px',
						width: '580px'
					}, 600);
					$("#menu a").animate({
						padding: '5px 10px 5px 10px'
					}, 600);
					$("#menu").animate({
						margin: '10px 10px 10px 10px',
						right: '0%'
					}, 600);
				}, 600);
		        setTimeout(function() {
		        	$('div#tab1').fadeIn(400);
		        	$('#logo').fadeIn(400);
		        }, 1200);
		        curtab = 1;
		    }
		    setTimeout(function() {
		    	x = 0;
		    }, 1200);
		}
    });
    $('#menu a:not(.b1, .dropdown-toggle), #menu-sm a:not(.b1, .dropdown-toggle)').click(function(){
    	if (y == 0 && x == 0) {
    		y = 1;
	    	var buttonId = $(this).attr('class');
	    	//console.log(buttonId);
		    if (curtab != buttonId.charAt(1)) {
		    	$('div.tabContent').fadeOut(600);
		    	$('div.title-text').fadeOut(600);
		    	$('#logo').fadeOut(600);
				setTimeout(function() {
					$("#logo").css('top', '100px');
					$('.tabContent').css({'overflow':'auto'});
					$('div.title-text').text(titles[curtab-1]);
					$('#announcement').animate({
						bottom: Math.max($(window).innerHeight()/2 - 516, $(window).innerHeight()*.06) + $(window).innerHeight() - 2*Math.max($(window).innerHeight()/2 - 516, $(window).innerHeight()*.06) + 'px'
					}, 600)
					$('#wrapper').animate({
						top: Math.max($(window).innerHeight()/2 - 516, $(window).innerHeight()*.06)+'px',
						height: $(window).innerHeight() - 2*Math.max($(window).innerHeight()/2 - 516, $(window).innerHeight()*.06)+'px',
						left: Math.max($(window).innerWidth()/2 - 650, $(window).innerWidth()*.15)+'px',
						width: $(window).innerWidth() - 2*Math.max($(window).innerWidth()/2 - 650, $(window).innerWidth()*.15)+'px',

					}, 600);
					$("#menu a").animate({
						padding: '5px 20px 5px',
					}, 600);
					$("#menu").animate({
						margin: '25px 10px 10px 10px',
						right: '0%'
					}, 600);
				}, 600);
				setTimeout(function() {
					if ($(window).innerHeight() >= 600 && $(window).innerWidth() >= 1160) {
				        $(".title-text").fadeIn(400);
				    }
		        	$('div#ta'+buttonId).fadeIn(400);
		        	$('#logo').fadeIn(400);
		        	if (buttonId == 'b6' && done[0] == 0) {
			        	$('.shows1').slick({
					        infinite: false,
					        slidesToShow: 3,
					        slidesToScroll: 1,
					        focusOnSelect: true,
					        centerMode: true,
					        centerPadding: '0px',
					        lazyLoad: 'on-demand',
					        edgeFriction: 0.1,
					        initialSlide: 1
					    });
					    done[0] = 1;
			        }
		        }, 1200);
		        curtab = buttonId.charAt(1);
		    }
		    setTimeout(function() {
		    	y = 0;
		    }, 1200);
	    }
	});
});