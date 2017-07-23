var main = function() {

    //carousel animations
    $('.slick').slick({
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true
    });

    $('.slick-skills').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    //expand text boxes
    $('.expand-text').click(function() {
        $(this).next().slideToggle(500);
    })

    //Change current nav-item color
    $('.nav-item').click(function() {
        $('.nav-item').removeClass('current-nav-item');
        $(this).addClass('current-nav-item');
        //remove color when main name selected
        $('#nav-name').click(function() {
            $(this).removeClass('current-nav-item');
        });
    });

    //smooth page scrolling
    $("a[href*='#']").click(function(event) { //selects all attributes containing '#'
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top //selects the top offset of href and scrolls to it

        }, 500);
        event.preventDefault(); // prevent default event from occuring
        console.log($($(this).attr('href')).offset().top);
    });

    //skills animations
    $('.skills-box').hover(function() {
        $('img', this).animate({
            opacity: '1'
        }, 300);
        $('p', this).animate({
            opacity: '1'
        });
    }, function() {
        $('img', this).animate({
            opacity: '0.3'
        }, 300);
        $('p', this).animate({
            opacity: '0.3'
        });
    });

    //animate projects
    $('#animate-0').hover(function() {
        $(this).attr('src', 'images/portfolio/step-tracker.gif');
    }, function() {
        $(this).attr('src', 'images/portfolio/step-tracker-start.png');
    });

    $('#animate-1').hover(function() {
        $(this).attr('src', 'images/portfolio/tetristry.gif');
    }, function() {
        $(this).attr('src', 'images/portfolio/tetristry-start.png');
    });

    $('#animate-2').hover(function() {
        $(this).attr('src', 'images/portfolio/address-book.gif');
    }, function() {
        $(this).attr('src', 'images/portfolio/address-book-start.png');
    });


    $('#animate-3').hover(function() {
        $(this).attr('src', 'images/portfolio/boggle.gif');
    }, function() {
        $(this).attr('src', 'images/portfolio/boggle-start.png');
    });


    $('#animate-4').hover(function() {
        $(this).attr('src', 'images/portfolio/hangman.gif');
    }, function() {
        $(this).attr('src', 'images/portfolio/hangman-start.png');
    });

    $('#animate-5').hover(function() {
        $(this).attr('src', 'images/portfolio/intelligent-car.gif');
    }, function() {
        $(this).attr('src', 'images/portfolio/intelligent-car-start.png');
    });

    //auto expand email text box
    document.querySelector('textarea').addEventListener('keydown', autosize);

    function autosize() {
        var self = this;
        setTimeout(function() {
            self.style.cssText = 'height:auto; padding:0';
            self.style.cssText = 'height:' + self.scrollHeight + 'px';
        }, 0);
    }

    //empty form check
    $('#contact-box form').submit(function() {
        var textbox = $('textarea').val();
        var email = $('input[type="email"]').val();
        if (textbox === '') {
            alert('Please enter a message before submiting!');
            return false;
        }
        if (email === '') {
            alert('Please enter your email before submiting!');
            return false;
        }
    });

};

$(document).ready(main);
