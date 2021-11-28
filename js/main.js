$.fn.visible = function(partial) {

    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header__bottom').addClass("sticky");
        } else {
            $('.header__bottom').removeClass("sticky");
        }
    });
    $(".title-animation-idle").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("activate-animation");
        }
    });
    $(".text-animation-idle").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.delay(500).addClass("activate-animation");
        }
    });
    
    $(window).scroll(function(event) {
        $(".title-animation-idle").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("activate-animation");
            }
        });
    
        $(".text-animation-idle").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("activate-animation");
            }
        });
    });
    const burger = $('.header__burger');
    const menu = $('.header__menu');
    
    // if ($('html').hasClass('scroll-disabled')) {
    //     $('html').removeClass('scroll-disabled');
    // }
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('header__burger--close');
        menu.toggleClass('header__menu--open');
        // $('html').toggleClass('scroll-disabled');
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            $('.header__menu').removeClass('header__menu--open');
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
        menu.toggleClass('header__menu--open');
        // $('html').toggleClass('scroll-disabled');
    });
    // $('.faq__answer:first').show()
    // $('.faq__question:first').addClass('faq__question--open');
    
    $('.faq__question').on('click', function() {
        var question = $(this);
        var answer = $(this).next();
    
        $('.faq__question').not(question).removeClass('faq__question--open');
        question.toggleClass('faq__question--open');
    
        $('.faq__answer:visible').not(answer).slideUp(200);
        answer.slideToggle(200);
    
    })
    $('#rent-show').on('click', function() {
        $(this).hide().next().slideDown(200);
    });
    const lightbox = GLightbox({
        // touchNavigation: false,
        // keyboardNavigation: false,
        // draggable: false
        selector: '.popup'
    });
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
});