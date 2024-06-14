const listItem = document.querySelectorAll('.catalog__list__item');

for (i = 0; i < 5; i++) {
    listItem[i].addEventListener('click', function(e) {
        listItem.forEach(function(e) {
            e.classList.remove("catalog__list__item--active");
        })
        if (e.target.classList.contains('catalog__link--1')) {
            document.querySelector('.catalog__list__item--1').classList.toggle('catalog__list__item--active');
        }

        if (e.target.classList.contains('catalog__link--2')) {
            document.querySelector('.catalog__list__item--2').classList.toggle('catalog__list__item--active');
        }

        if (e.target.classList.contains('catalog__link--3')) {
            document.querySelector('.catalog__list__item--3').classList.toggle('catalog__list__item--active');
        }

        if (e.target.classList.contains('catalog__link--4')) {
            document.querySelector('.catalog__list__item--4').classList.toggle('catalog__list__item--active');
        }

        if (e.target.classList.contains('catalog__link--5')) {
            document.querySelector('.catalog__list__item--5').classList.toggle('catalog__list__item--active');
        }
    })
}

document.getElementById('events-btn').addEventListener('click', function(e) {
    document.querySelectorAll('.events__list__item--hide').forEach(function(e) {
        e.classList.remove('events__list__item--hide');
    });
    document.getElementById('events-btn').style = 'display: none'
});

document.addEventListener('DOMContentLoaded', function() {
    function controlDropdowns() {
        const dropdownButtons = document.querySelectorAll('.header-bottom-nav__btn');

        dropdownButtons.forEach((dropdownButton) => {
            dropdownButton.addEventListener('click', (event) => {
                event.stopPropagation();
                const dropdown = dropdownButton.nextElementSibling;
                if (dropdown.classList.contains('open')) {
                    dropdown.classList.remove('open');
                    dropdownButton.classList.remove('rotait');
                } else {
                    closeDropdowns();
                    dropdown.classList.add('open');
                    dropdownButton.classList.add('rotait');
                    getLink(dropdown);
                };
            });
        });

        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('dropdown')) {
                return;
            } else {
                closeDropdowns();
            };
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeDropdowns();
            };
        });

    };

    function closeDropdowns() {
        const dropdownButtons = document.querySelectorAll('.header-bottom-nav__btn');
        dropdownButtons.forEach((dropdownButton) => {
            dropdownButton.classList.remove('rotait');
            dropdownButton.nextElementSibling.classList.remove('open');
        });
    };

    function getLink(dropdown) {
        const dropdownLiks = dropdown.querySelectorAll('.dropdown__link');
        dropdownLiks.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                closeDropdowns();
            });
        });
    };

    controlDropdowns();
    document.querySelectorAll('.ui-accordion-content').forEach(e => {
        e.style.height = null;
    })
});
if (window.innerWidth > 768) {
    let nextBtn = document.querySelector('.swiper-button-next');
    let prevBtn = document.querySelector('.swiper-button-prev');
    let i = 0;

    nextBtn.addEventListener('click', (event) => {
        i++;
        if (i == 5) {
            nextBtn.classList.add('swiper-button-disabled');
        }
        document.querySelector('.current-1').innerHTML = 1 + i;
    })

    prevBtn.addEventListener('click', (event) => {
        i--;
        document.querySelector('.current-1').innerHTML = 1 + i;
    })
}
document.querySelectorAll('.ui-accordion-content').forEach(e => {
    e.style.height = null;
})

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        document.querySelector('.events__list__item--3').classList.add('events__list__item--hide');
    }

    if (window.innerWidth <= 500) {
        let nextBtn = document.querySelector('.swiper-button-next');
        let prevBtn = document.querySelector('.swiper-button-prev');
        let i = 0;
        document.querySelector('.all-1').innerHTML = 24;

        nextBtn.addEventListener('click', (event) => {
            i++;
            if (i == 23) {
                nextBtn.classList.add('swiper-button-disabled');
            }
            if (i == 5) {
                nextBtn.classList.remove('swiper-button-disabled');
            }
            document.querySelector('.current-1').innerHTML = 1 + i;
        })

        prevBtn.addEventListener('click', (event) => {
            i--;
            document.querySelector('.current-1').innerHTML = 1 + i;
        })
    }
    document.querySelectorAll('.ui-accordion-content').forEach(e => {
        e.style.height = null;
    })

    if (window.innerWidth <= 500) {

        document.querySelector('.choices').addEventListener('click', () => {
            document.querySelector('.swiper').classList.toggle('mg-t-50');
            document.querySelector('.gallery-container').classList.toggle('h-904');
        })

        document.querySelector('.events__list__item--2').classList.add('events__list__item--hide');
        document.querySelectorAll('.events__list__item--hide').forEach(function(e) {
            e.classList.remove('events__list__item--hide');
        });
        document.getElementById('events-btn').style = 'display: none'
            // чекбоксы
        let checkboxesList = document.querySelectorAll('.checkboxes-list-item');
        for (let i = 0; i < checkboxesList.length; i++) {
            if (checkboxesList[i].classList.contains('checkbox-active') == false) {
                checkboxesList[i].classList.add('none');
            }
        }

        let labelCheck = document.querySelectorAll('.checkbox-label');
        labelCheck.forEach(function(checkbox) {
            checkbox.addEventListener('click', (e) => {
                e.target.parentNode.classList.add('checkbox-active');
                let closeCheckBtn = e.target.parentNode.lastChild.previousSibling;
                closeCheckBtn.classList.add('checkboxes-list-item__btn--active');
                let removeBtnCheck = document.querySelectorAll('.checkboxes-list-item__btn--active');
                removeBtnCheck.forEach(function(item) {
                    item.addEventListener('click', (e) => {
                        item.parentNode.classList.remove('checkbox-active');
                        if (item.classList.contains('checkboxes-list-item__btn--active')) {
                            let checkboxOff = item.parentNode.firstChild.nextSibling;
                            checkboxOff.checked = false;
                        }

                        if (checkBtn.classList.contains('opened') == false) {
                            item.parentNode.classList.add('none');
                        }
                        item.classList.toggle('checkboxes-list-item__btn--active');
                    })
                })
            })
        })
        let removeBtnCheck = document.querySelectorAll('.checkboxes-list-item__btn--active');
        removeBtnCheck.forEach(function(item) {
            item.addEventListener('click', (e) => {
                item.parentNode.classList.remove('checkbox-active');
                item.classList.toggle('checkboxes-list-item__btn--active');
            })
        })
    }
});

let modal = document.querySelector('.modal');

document.querySelectorAll('.swiper-slide__box').forEach(function(slide) {
    slide.addEventListener('click', () => {
        modal.classList.add('show');
    })
})

document.querySelector('.tabs-btn-close').addEventListener('click', () => {
    document.querySelector('.tab-content-modal-active').classList.remove('tab-content-modal-active');
})

burger = document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.header__container__list').classList.toggle('media-list');
    document.querySelector('.header__container__list__item--exit').classList.toggle('none');
    document.querySelector('.button-enter-block').classList.toggle('block');
})

document.querySelector('.exit-burger-btn').addEventListener('click', () => {
    document.querySelector('.header__container__list').classList.toggle('media-list');
    document.querySelector('.header__container__list__item--exit').classList.toggle('none');
    document.querySelector('.button-enter-block').classList.toggle('block');
})

document.querySelector('.header-media-search__media-search').addEventListener('click', () => {
    document.querySelector('.media-serch-input-hide').classList.toggle('media-search-input');
    document.querySelector('.header-media-search__media-search').classList.toggle('mg-r-10');
    document.querySelector('.header-media-search').classList.toggle('header-media-search--active')
})

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.758468, 37.601088],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 19
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
}

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 4,
            maxLength: 10
        },

        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },
    },

    messages: {
        name: {
            minLength: 'Слишком мало символов, минимум 4',
            required: 'Это поле обязательно'
        },
        tel: {
            required: 'Это поле обязательно',
            function: 'Введен некорректный номер телефона'
        }
    },
});

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
});

$(function() {
    $(".accordion").accordion({
        active: 0,
        collapsible: true
    });
});

(() => {
    tippy('.tooltip', {});
})();

document.querySelectorAll('.custom-checkbox').forEach((label) => {
    label.addEventListener('click', () => {
        label.childNodes[5].classList.toggle('color-active');
    })
})