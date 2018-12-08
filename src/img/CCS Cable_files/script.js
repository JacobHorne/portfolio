/* js file */

(function( window, undefined ){

	//CODE FOR SLIDER
	
	//DROP DOWN ON HOVER OR ClICK 
	$(function(){

		$("#module").hide();

		$("#mobile-nav").on( "click", function(e){   
	      	$("#module").slideToggle(300);
	      	e.preventDefault();
		});
	});
})( window, undefined );