$(window).resize(function () {
	if (curtab === 1) {
		$('#wrapper').css({'top':$(window).innerHeight()/2 - 80 + 'px', 'left':$(window).innerWidth()/2 - 290 + 'px'})
	} else {
        $('#wrapper').css({
            'top': Math.max($(window).innerHeight()/2 - 516, $(window).innerHeight()*.06)+'px',
            'height': $(window).innerHeight() - 2*Math.max($(window).innerHeight()/2 - 516, $(window).innerHeight()*.06)+'px',
            'left': Math.max($(window).innerWidth()/2 - 650, $(window).innerWidth()*.15)+'px',
            'width': $(window).innerWidth() - 2*Math.max($(window).innerWidth()/2 - 650, $(window).innerWidth()*.15)+'px',

        });
    }
    windowHeight = $(window).innerHeight();
    windowWidth = $(window).innerWidth();
    if (title === 0 && (windowHeight < 600 || windowWidth < 1160)) {
        $(" .title-text").fadeOut(200);
        title = 1
    } else if (title == 1 && windowHeight >= 600 && windowWidth >= 1160) {
        $(".title-text").fadeIn(200);
        title = 0
    }
    if (menu === 0 && windowWidth < 770) {
    	$('#menu').hide();
    	$('#menu-sm').show();
    	menu = 1;
    } else if (menu === 1 && windowWidth > 770) {
    	$('#menu').show();
    	$('#menu-sm').hide();
    	menu = 0;
    }
    
});