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
	
	if(document.location.search.length > 4) {
		for (var i=0;i < vars.length;i++) { 
			var pair = vars[i].split("="); 
			if( (pair[0].substring(0, 4) == "utm_") && (pair[1] != "")) {
				var xVal = pair[1].replace(/\+/g, '%20');
				$("[name='" + pair[0] + "']").val( decodeURIComponent( xVal ) );
			}            
		} 
	}	
});
