$(window).resize(function () {
    var h = $(window).outerHeight()
    var w = $(window).outerWidth()
	if (curtab === 1) {
		$('#wrapper').css({'top':h/2 - 80 + 'px', 'left':w/2 - 290 + 'px'})
	} else {
        $('#wrapper').css({
            'top': Math.max(h/2 - 516, h*.06)+'px',
            'height': h - 2*Math.max(h/2 - 516, h*.06)+'px',
            'left': Math.max(w/2 - 650, w*.15)+'px',
            'width': w - 2*Math.max(w/2 - 650, w*.15)+'px',
        });
    }
    if (title === 0 && (h < 600 || w < 1160)) {
        $(" .title-text").fadeOut(200);
        title = 1
    } else if (title == 1 && h >= 600 && w >= 1160) {
        $(".title-text").fadeIn(200);
        title = 0
    }
    if (menu === 0 && w < 770) {
    	$('#menu').hide();
    	$('#menu-sm').show();
    	menu = 1;
    } else if (menu === 1 && w > 770) {
    	$('#menu').show();
    	$('#menu-sm').hide();
    	menu = 0;
    }
    
});