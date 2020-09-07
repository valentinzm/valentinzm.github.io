const zenSlider = new Swiper('.zen__slider', {
    // Optional parameters

    loop: true,
    slidesPerView: 3,
    spaceBetween: 28,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

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