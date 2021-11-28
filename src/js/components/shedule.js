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