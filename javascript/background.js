//Only numPictures needs to be changed in this file!

$(window).load(function() {
	var images = new Array();
	//change numPictures depending on how many pictures you want to rotate
	var numPictures = 12;

	$('body').css({'background-image': 'url("../images/background/adt1.jpg")'});
	setTimeout(function() {

	for (i = 1; i <= numPictures; i++) {
		images.push("images/background/adt"+i+".jpg");
	}
	images = shuffleArray(images);
	setTimeout(function () {
		$("body").backstretch(images, {duration: 6000, fade: 1000, lazyload: true});
		var instance = $('body').data('backstretch');
		var index = $("body").data("backstretch").index;
		$(window).on("backstretch.before", function (e, instance, index) {
	  		if (index === instance.images.length - 1) {
	    		instance.images = shuffleArray(instance.images);
	    	}
		});
	});

	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}
	
	}, 1000);
});
