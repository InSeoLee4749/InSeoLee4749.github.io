

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

    window.addEventListener('scroll', function() {
        var navi = document.querySelector('.navi'); // navi 요소를 가져옵니다.
        var scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 100) { // 스크롤 위치가 100 이상이라면
            navi.classList.add('fixed-top'); // fixed-top 클래스 추가
        } else { // 스크롤 위치가 100 미만이라면
            navi.classList.remove('fixed-top'); // fixed-top 클래스 제거
        }
    });


