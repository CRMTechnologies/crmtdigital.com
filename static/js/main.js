$(document).ready(function(){		
	$("#float-contact-us-button").hide();
	scrollTimeout = setTimeout(function(){$("#float-contact-us-button").show()},750);
	
	if($(window).scrollTop() > 100) {
		$("nav.navbar").addClass("navbar-color");
	}
		
	$(window).on("scroll", function() {
		$("#float-contact-us-button").hide();
		if (scrollTimeout) clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(function(){$("#float-contact-us-button").show()},750);		
		if($(window).scrollTop() > 100) {
			$("nav.navbar").addClass("navbar-color");
		} else {
			$("nav.navbar").removeClass("navbar-color");
		}
	});				
});
