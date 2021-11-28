$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.header__bottom').addClass("sticky");
    } else {
        $('.header__bottom').removeClass("sticky");
    }
});