$(document).ready(function() {
	for (i=1;i<2;i++) {
		$("#hmm").on("click", function() {
			$("#hmm").load("testing.html", function(response, status, xhr) {
				$("img.lazy").lazyload();
			}); 
	    });
	}     
});