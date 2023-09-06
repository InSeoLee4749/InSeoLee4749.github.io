

window.onload = function(){
    var swiperAbout = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".mySwiper .swiper-button-next",
            prevEl: ".mySwiper .swiper-button-prev",
        },
        breakpoints: {
          
            991: {
              slidesPerView: 2,
              spaceBetween: 40,
            }
          },
    });

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        navigation: {
        nextEl: ".mySwiper2 .swiper-button-next",
        prevEl: ".mySwiper2 .swiper-button-prev",
        },
    });
}

