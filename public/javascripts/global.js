$(document).ready(collapseNavbar);
$(window).scroll(collapseNavbar);
$('.parallax-window').parallax({imageSrc: '../images/head.jpeg'});

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
    }
});


$(document).on('scroll', function () {
    var scrollPos = $(document).scrollTop();
    $('section').each(function() {
        var current = $(this);
        var bgColor = current.css('backgroundColor');
        if (current.position().top - $('.navbar').height() <= scrollPos && current.position().top - $('.navbar').height() + current.height() > scrollPos) {
            $('.navbar').css('background', bgColor);
        }
        if (current.prop('header')) {
            $('.navbar').css('background','none');
        }
    });

});