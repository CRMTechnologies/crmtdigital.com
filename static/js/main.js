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
		var query = window.location.search.substring(1); 
		var vars = query.split("&"); 
		for (var i=0;i < vars.length;i++) { 
			var pair = vars[i].split("="); 
			if( (pair[0].substring(0, 4) == "utm_") && (pair[1] != "")) {
				var xVal = pair[1].replace(/\+/g, '%20');
				sessionStorage.setItem( pair[0], decodeURIComponent( xVal ) );
			}            
		} 
	}	
});

function setHiddenFormFields() {
    var hiddenFields = document.querySelectorAll("input[name^='utm_']");
	for (var i=0; i<hiddenFields.length; i++) {
		var param = sessionStorage.getItem(hiddenFields[i].name);
		if (param) { 
			document.getElementsByName(hiddenFields[i].name)[0].value = param;
		}
	}
	if( $('#htuk').length > 0 ) {
		document.getElementById('htuk').value = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	}
}
