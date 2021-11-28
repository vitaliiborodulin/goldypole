var arrowUpBtn = $('.btn-up');

function scrollBtn() {
    var top = $(this).scrollTop();

    if (top > 300) {
        arrowUpBtn.stop().fadeIn();
    } else {
        arrowUpBtn.stop().fadeOut();
    }
    // $(this).scrollTop() > 300 ? $('.arrowUpBtn').fadeIn() : $('.arrowUpBtn').fadeOut();
}

scrollBtn();

$(window).on('scroll', scrollBtn);

arrowUpBtn.on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})