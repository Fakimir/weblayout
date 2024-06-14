let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    slidesPerGroup: 3,
    grid: {
        rows: 1,
        fill: "row"
    },
    spaceBetween: 20,
    pagination: {
        el: ".test-section .test-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        441: {
            slidesPerView: 2,
            grid: {
                rows: 1
            },
            spaceBetween: 34
        },

        768: {
            slidesPerView: 2,
            grid: {
                rows: 1
            },
            spaceBetween: 34
        },

        1200: {
            slidesPerView: 3,
            grid: {
                rows: 1
            },
            spaceBetween: 50
        },

        1920: {
            slidesPerView: 3,
            grid: {
                rows: 1
            },
            spaceBetween: 50
        }
    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
        init: function() {
            this.slides.forEach(slide => {
                if (!slide.classList.contains('slide-visible')) {
                    slide.tabIndex = '-1';
                } else {
                    slide.tabIndex = '';
                }
            });
        },
        slideChange: function() {
            this.slides.forEach(slide => {
                if (!slide.classList.contains('slide-visible')) {
                    slide.tabIndex = '-1';
                } else {
                    slide.tabIndex = '';
                }
            });
        }
    },

    on: {
        /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
        beforeResize: function() {
            this.slides.forEach((el) => {
                el.style.marginTop = "";
            });
        }
    }
});

let swiper3 = new Swiper('.swiper-3', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
        },

        577: {
            slidesPerView: 2,
        },

        769: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    }
});

let swiper4 = new Swiper('.swiper-4', {
    slidesPerView: 3,
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        290: {
            slidesPerView: 1,
        },

        577: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        769: {
            slidesPerView: 1,
        },

        1024: {
            slidesPerView: 3,
        },
    }
});

let swiperHero = new Swiper(".hero-swiper", {
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade",
});