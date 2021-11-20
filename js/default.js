$(document).ready(function () {
    var swiper = new Swiper(".slider1", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".paging",
            clickable: true,
        },
        navigation: {
            nextEl: ".slider1 .next",
            prevEl: ".slider1 .prev",
        },
    });
});