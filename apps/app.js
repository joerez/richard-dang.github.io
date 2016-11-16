var main = function () {

//Change current nav-item color
	$('.nav-item').click(function(){
		$('.nav-item').removeClass('current-nav-item');
		$(this).addClass('current-nav-item');
		//remove color when main name selected
		$('#nav-name').click(function(){
			$(this).removeClass('current-nav-item');
		});
	});

//smooth page scrolling
	$("a[href*='#']").click(function(event){ //selects all attributes containing '#'
	    $('html, body').animate({
	        scrollTop: $($(this).attr('href')).offset().top //selects the top offset of href and scrolls to it

	    }, 500);
	    event.preventDefault(); // prevent default event from occuring
		console.log($($(this).attr('href')).offset().top);

	});

//skills animations
	//$('#skills p').hide();
	$('.skills-box').hover(function (){
		$('img', this).animate({
			//width:'80%',
			opacity:'1'
		}, 300);
			$('p',this).animate({
				opacity:'1'
			})
	//	$('p',this).fadeIn(200);
	}, function () {
		$('img', this).animate({
			//width:'60%',
			opacity:'0.3'
		}, 300);
			$('p',this).animate({
				opacity:'0.3'
			})
		//$('p',this).fadeOut(200);
	});

//animate projects
	$('#animate-0').hover(function (){
		$(this).attr('src', 'images/portfolio/step-tracker.gif');
	}, function () {
		$(this).attr('src', 'images/portfolio/step-tracker-start.png');
	});

	$('#animate-1').hover(function (){
		$(this).attr('src', 'images/portfolio/tetristry.gif');
	}, function () {
		$(this).attr('src', 'images/portfolio/tetristry-start.png');
	});

	$('#animate-2').hover(function (){
		$(this).attr('src', 'images/portfolio/address-book.gif');
	}, function () {
		$(this).attr('src', 'images/portfolio/address-book-start.png');
	});


	$('#animate-3').hover(function (){
		$(this).attr('src', 'images/portfolio/boggle.gif');
	}, function () {
		$(this).attr('src', 'images/portfolio/boggle-start.png');
	});


	$('#animate-4').hover(function (){
		$(this).attr('src', 'images/portfolio/hangman.gif');
	}, function () {
		$(this).attr('src', 'images/portfolio/hangman-start.png');
	});

	$('#animate-5').hover(function (){
		$(this).attr('src', 'images/portfolio/intelligent-car.gif');
	}, function () {
		$(this).attr('src', 'images/portfolio/intelligent-car-start.png');
	});


//contact box not working message
	$("#contact-box").children().click(function () {
		alert ("Contact is not working at the moment, sorry!\nPlease send your inquiry to: richardspacedang@gmail.com");
	});


//transition projects
/*	$('.next-arrow').click(function(){
		var currentBox = $('.active-box');
		var nextBox = currentBox.next('.text-box');

		if (nextBox.length === 0){
			nextBox = $('.text-box').first();
		}

		currentBox.animate({
		left:'+=50rem'
		}, 300, function () {
			currentBox.removeClass('active-box');
			nextBox.addClass('active-box next-box');
			nextBox.animate({
			left:'+=50rem'
			}, 300);
		});

	});

	$('.prev-arrow').click(function(){
		var currentBox = $('.active-box');
		var prevBox = currentBox.prev('.text-box');

		if (prevBox.length === 0){
			prevBox = $('.text-box').last();
		}

		currentBox.animate({
			right:'+=50%'
		}, 300, function () {
			currentBox.removeClass('active-box');
			prevBox.addClass('active-box prev-box');
			prevBox.animate({
			right:'+=50%'
			}, 300);
		});
	});*/

//change current navbar item on scroll
/*	$(window).scroll (function (event) {
		var scrollPos = $(window).scrollTop();
		if (scrollPos >= $($("a[href='#home']").attr('href')).offset().top) {
			$("a[href='#home']").children().addClass('current-nav-item');
		}
		 if (scrollPos >= $($("a[href='#about']").attr('href')).offset().top) {
			$("a[href='#about']").children().addClass('current-nav-item');
			console.log('out');
		}
		 if (scrollPos >= $($("a[href='#portfolio']").attr('href')).offset().top) {
			$("a[href='#portfolio']").children().addClass('current-nav-item');
		}
		 if (scrollPos >= $($("a[href='#skills']").attr('href')).offset().top) {
			$("a[href='#skills']").children().addClass('current-nav-item');
		}
		 if (scrollPos >= $($("a[href='#contact']").attr('href')).offset().top) {
			$("a[href='#contact']").children().addClass('current-nav-item');
		}
	});*/
};

$(document).ready(main);
