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