// $(document).ready(function() {
// 	var images=new Array();
// 	for (i = 1; i <= 23; i++) {
// 		images.push("images/adt"+i+".jpg");
// 	}
// 	console.log(images);
// 	var nextimage=0;
// 	doSlideshow();

// 	function doSlideshow(){
// 	    if(nextimage>=images.length){nextimage=0;}
// 	    $('body').animate(function() {
// 	    	backgroundImage: "url('"+images[nextimage++]+"')"
// 	    }, 1000);
// 	    setTimeout(doSlideshow,3000);
// 	}
// })

$(document).ready(function() {
	images = new Array();
	for (i = 1; i <= 11; i++) {
		images.push("images/background/adt"+i+".jpg");
	}
	images = shuffleArray(images);
	setTimeout(function () {
		$("body").backstretch(images, {duration: 6000, fade: 1000, lazyload: true});
		var instance = $('body').data('backstretch');
		var index = $("body").data("backstretch").index;
		$(window).on("backstretch.before", function (e, instance, index) {
			console.log(index)
	  // If we wanted to stop the slideshow after it reached the end
	  		if (index === instance.images.length - 1) {
	  			console.log("shuffling!")
	    		instance.images = shuffleArray(instance.images);
	    	}
		});
	}, 6000);

	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}
});