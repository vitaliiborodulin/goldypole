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
    $('.shedule__loading').one('click', function() {
        $(this).next().attr('src', $(this).next().attr('data-src'));
        $(this).next().removeAttr('data-src');
        $(this).remove();
    })
    
    $('.shedule__box').each(function(i, el) {
        var el = $(el);
        var shedule = el.find('iframe');
        if (el.visible(true) && shedule.attr('data-src')) {
            $('.shedule__loading').remove();
            shedule.attr('src', shedule.attr('data-src'));
            shedule.removeAttr('data-src');
        }
    });
    
    $(window).scroll(function(event) {
        $('.shedule__box').each(function(i, el) {
            var el = $(el);
            var shedule = el.find('iframe');
            if (el.visible(true) && shedule.attr('data-src')) {
                $('.shedule__loading').remove();
                shedule.attr('src', shedule.attr('data-src'));
                shedule.removeAttr('data-src');
            }
        });
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
    const swiper = new Swiper('.feedback__list', {
        slidesPerView: 1,
        // spaceBetween: 40,
        // loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    $('.contacts__map').each(function(i, el) {
        var el = $(el);
        var map = el.find('script');
        if (el.visible(true)) {
            map.attr('src', map.attr('data-src'));
            // map.removeAttr('data-src');
        }
    });
    
    $(window).scroll(function(event) {
        $('.contacts__map').each(function(i, el) {
            var el = $(el);
            var map = el.find('script');
            if (el.visible(true)) {
                map.attr('src', map.attr('data-src'));
                // map.removeAttr('data-src');
            }
        });
    });
    // const lightbox = GLightbox({
    //     touchNavigation: false,
    //     keyboardNavigation: false,
    //     draggable: false,
    //     selector: '.popup'
    // });
    
    MicroModal.init({
        awaitCloseAnimation: true,
        // onShow: () => $('body').scrollTop().addClass('hidden'),
        onShow: () => {
            $(this).scrollTop();
            $('body').addClass('hidden')
        },
        onClose: () => $('body').removeClass('hidden')
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