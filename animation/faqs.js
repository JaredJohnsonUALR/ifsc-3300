$(document).ready( () => {
	
	// runs when an h2 heading is clicked
    $("#faqs h2").click( evt => {
		const h2 = evt.currentTarget;

		$(h2).toggleClass("minus");

		//part 10 asked if the easings improce the animations. In this case, i could see how it could make them better, but i dont think it works for this instance.
		if ($(h2).attr("class") != "minus") {
		   	$(h2).next().slideUp(1500, "easeOutBounce");
	   	}
	   	else {
	        $(h2).next().slideDown(1500, "easeOutBounce");
		   }
		   
		evt.preventDefault();
    }); // end click
    
    // runs when the page is ready
    $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )  
		         .animate( { fontSize: "175%", left: "0" }, 1000 );
		    
	// runs when the top-level heading is clicked
	$("#faqs h1").click( () => {
		$("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000 )  
			         .animate( { fontSize: "175%", left: "0" }, 1000 );
	}); // end click
    
}); // end ready
