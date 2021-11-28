$('.shedule__box').each(function(i, el) {
    var el = $(el);
    var shedule = el.find('iframe');
    if (el.visible(true)) {
        shedule.attr('src', shedule.attr('data-src'));
        shedule.removeAttr('data_src');
    }
});

$(window).scroll(function(event) {
    $('.shedule__box').each(function(i, el) {
        var el = $(el);
        var shedule = el.find('iframe');
        if (el.visible(true)) {
            shedule.attr('src', shedule.attr('data-src'));
            shedule.removeAttr('data_src');
        }
    });
});