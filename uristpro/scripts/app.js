// document.addEventListener('DOMContentLoaded', loaded);
// function loaded(){
//   alert('загрузил');
// }

window.onload = function() {
    document.body.classList.add('loaded');
    setTimeout(function() {
        document.querySelector('.preloader').remove();
    }, 1000);
}

'use strict'
document.querySelector('.burger').addEventListener('click', openNavigation);

function openNavigation() {
    document.querySelector('.nav').classList.toggle('nav__oven');
    document.querySelector('.site-header').classList.toggle('fixed');
}

// mySwiper.on('slideChange', function () {
//   console.log('slide changed');
// });

const services = new Swiper('.services__slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 50,
    slidesPerView: 1,
    centeredSlides: false,
    slideVisibleClass: 'visible_slider',
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false,
            slidesPerView: 1.5,
            spaceBetween: 100,
        },
        992: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 100,
        },
        1241: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 80,
        },
        1440: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 100,
        },
    }
})

//document.querySelector('.search-button').addEventListener('click', showSearch);
function showSearch(e) {
    e.preventDefault();
    document.querySelector('.search').classList.toggle('search__show');
}
document.querySelector('.search__close').addEventListener('click', closeSearch);

function closeSearch(e) {
    e.preventDefault();
    document.querySelector('.search').classList.remove('search__show');
}

document.querySelectorAll('.footer-form__input').forEach((item) => {
    item.addEventListener('focus', labelFocused)
});

function labelFocused() {
    this.parentElement.classList.add('label-active');
}
document.querySelectorAll('.footer-form__input').forEach((item) => {
    item.addEventListener('blur', labelUnfocused)
});

function labelUnfocused() {
    this.parentElement.classList.remove('label-active');
}