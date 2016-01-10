$(document).ready(function() {
	$(".showcase-pics img, .about-pics img, .auditions-pics img, .members-pics img, .circle-container img, .extperf-pics img").lazyload({ 
    	event : "click"
    }); 
	$(".past-showcases img").click(function() {
		$("#showcase"+$(this).attr("id").substring(6)+" img").trigger('click');
    });
    $(".b2").click(function() {
    	$(".about-pics img").trigger('click');
    })
    $(".b3").click(function() {
    	$(".auditions-pics img").trigger('click');
    })
    $(".b4").click(function() {
    	$(".members-pics img").trigger('click');
    })
    $(".b5").click(function() {
    	$(".circle-container img").trigger('click');
    })
    $(".b7").click(function() {
    	$(".extperf-pics img").trigger('click');
    })
});