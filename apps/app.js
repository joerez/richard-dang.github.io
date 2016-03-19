var main = function () {
	$("a[href*='#']").click(function(event){ //selects all attributes containing '#'
	    $('html, body').animate({
	        scrollTop: $($(this).attr('href')).offset().top //selects the top offset of href and scrolls to it
	    }, 500);
	    event.preventDefault(); // prevent default event from occuring
	});
};

$(document).ready(main);