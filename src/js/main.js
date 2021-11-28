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
    //= components/header.js
    //= components/animate.js
    //= components/menu.js
    //= components/shedule.js
    //= components/faq.js
    //= components/rent.js
    //= components/slider.js
    //= components/map.js
    //= components/modal.js
    //= components/upBtn.js
});