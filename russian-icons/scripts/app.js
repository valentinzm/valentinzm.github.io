const zenSlider = new Swiper('.zen__slider', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        980: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 14,
        },
        1240: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 28,
        },
    }

});
const rewiewsSlider = new Swiper('.rewiews__slider', {
    effect: 'fade',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.rewiews-button-next',
        prevEl: '.rewiews-button-prev',
    },
    breakpoints: {
        540: {
            spaceBetween: 100,
        },

    }

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
}

document.querySelector('.burger').addEventListener('click', mobileNavigation);


function mobileNavigation(evt) {
    evt.preventDefault();
    this.classList.toggle('burger__open');
    document.body.classList.toggle('navigation__body');
    document.querySelector('.mobile-nav').classList.toggle('mobile-nav__show');

}


ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.733856, 37.613360],
            zoom: 17,
            controls: [],
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            //hintContent: 'Собственный значок метки',
            iconCaption: 'Русские Иконы',
        }, {
            iconColor: '#76c356',
            iconImageSize: [42, 42],
            iconImageOffset: [0, 0]
        });

    myMap.geoObjects
        .add(myPlacemark)
});
document.querySelectorAll('.js-modal').forEach((e) => { e.addEventListener('click', showModal) });

function showModal(event) {
    event.preventDefault();
    let modalid = this.dataset.modal;
    document.querySelectorAll('.modal').forEach((modal) => { modal.classList.remove('modal__show') });
    document.querySelector(modalid).classList.add('modal__show');
}
document.querySelectorAll('.overlay').forEach((overlay) => { overlay.addEventListener('click', closeModal) });
document.querySelectorAll('.modal__close').forEach((close) => { close.addEventListener('click', closeModal) });

function closeModal(event) {
    event.preventDefault();
    document.querySelectorAll('.modal').forEach((modal) => { modal.classList.remove('modal__show') });
}

//для страницы икон
document.querySelectorAll('.icon-tab__link').forEach((e) => {
    e.addEventListener('click', showIcon)
});

function showIcon(event) {
    let parent = this.parentElement;
    if (parent.classList.contains('icon-tab__active')) {
        parent.classList.remove('icon-tab__active');
    } else {
        document.querySelectorAll('.icon-tab').forEach((tab) => {
            tab.classList.remove('icon-tab__active')
        });
        parent.classList.add('icon-tab__active');
    }
}
document.querySelector('.search-form__form').addEventListener('submit', function(event) {
    event.preventDefault();
})
document.querySelectorAll('.form').forEach((form) => { form.addEventListener('submit', formSubmitted) });

function formSubmitted(event) {
    event.preventDefault();
    document.querySelectorAll('.modal').forEach((modal) => { modal.classList.remove('modal__show') });
    document.querySelector('#thanks').classList.add('modal__show');
}

document.querySelector('.navigation__search-btn').addEventListener('click', showSearchForm);

function showSearchForm(event) {
    event.preventDefault();
    document.querySelector('.navigation__list').classList.add('hide');
    document.querySelector('.search-form').classList.add('show');
}
document.querySelector('.search-form__close').addEventListener('click', closeSearchForm);

function closeSearchForm(event) {
    event.preventDefault();
    document.querySelector('.search-form').classList.remove('show');
    document.querySelector('.navigation__list').classList.remove('hide');
}