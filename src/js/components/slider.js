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