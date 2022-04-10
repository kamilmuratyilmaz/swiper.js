swiperClass = ".swiper";
swiperSettings = {
    // Optional parameters
    keyboard: true, // allow keyboard control
    loop: true, // allow looping around slides
    lazy: true, //lazyload content useful with large sized pages
    slideToClickedSlide: true, // slides can change by click
    spaceBetween: 20, //space between slides
    centeredSlides: true, // active slide will be centered one, if false it will be on the left by default
    autoplay: {
        delay: 3000, //ms
        disableOnInteraction: false
    },
    // If we need pagination, default bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // pagination bullets are clickable
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    // breakpoints for responsivity, change the size of page to see the magic!
    breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        992: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1
        }
      }
};

var swiper = new Swiper(swiperClass, swiperSettings);