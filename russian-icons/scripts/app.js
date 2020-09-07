const zenSlider = new Swiper('.zen__slider', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 0,
        },
        992: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1240: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 28,
        },
    }

});
const rewiewsSlider = new Swiper('.rewiews__slider', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.rewiews-button-next',
        prevEl: '.rewiews-button-prev',
    },

});
document.querySelectorAll('.faq__title').forEach(function(e) {
    e.addEventListener('click', faqList);
});

function faqList(evt) {
    evt.preventDefault();
    document.querySelectorAll('.faq__item').forEach(function(e) {
        e.classList.remove('faq__item--open');
    });
    const content = this.nextElementSibling;
    const parent = this.parentElement;
    parent.classList.toggle('faq__item--open');

    //content.style.display = 'block';
}
// window.addEventListener('scroll', function() {
//     let scrollValue = window.scrollY;
//     if (scrollValue >= 110) {
//         document.querySelector('.navigation').classList.add('navigation__sticky');
//     } else {
//         document.querySelector('.navigation').classList.remove('navigation__sticky');
//     }
// })
document.querySelector('.burger').addEventListener('click', mobileNavigation);

function mobileNavigation(evt) {
    evt.preventDefault();
    this.classList.toggle('burger__open');
    document.querySelector('.navigation').classList.toggle('navigation__open');
}
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: [],
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});