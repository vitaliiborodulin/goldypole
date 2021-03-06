const burger = $('.header__burger');
const menu = $('.nav');

// if ($('html').hasClass('scroll-disabled')) {
//     $('html').removeClass('scroll-disabled');
// }

burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('header__burger--close');
    menu.toggleClass('nav--open');
    // $('html').toggleClass('scroll-disabled');
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        menu.removeClass('nav--open');
        burger.removeClass('header__burger--close');
        // $('html').removeClass('scroll-disabled');
    }
});

$('body').on('click', '.header__menu a[href*="#"]', function(e) {
    var fixed_offset = 70;

    $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - fixed_offset
    }, 300);
    e.preventDefault();
    burger.toggleClass('header__burger--close');
    menu.toggleClass('nav--open');
    // $('html').toggleClass('scroll-disabled');
});