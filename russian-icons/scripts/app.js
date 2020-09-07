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