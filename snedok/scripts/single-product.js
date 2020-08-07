const qty = document.querySelector('.single-product__input');
document.querySelector('.js-minus').addEventListener('click', function() {
    if (qty.value != 1) {
        qty.value--;
    }
});
document.querySelector('.js-plus').addEventListener('click', function() {
    qty.value++;
});



var galleryThumbs = new Swiper('.single-product__thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.single-product__top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});


document.querySelectorAll('.tabs__item').forEach(function(e) {
    e.addEventListener('click', productTabs);
});

function productTabs(event) {
    event.preventDefault();
    document.querySelectorAll('.tabs__item').forEach(function(e) {
        e.classList.remove('tabs__item_active');
    });
    document.querySelectorAll('.tabs__content').forEach(function(e) {
        e.classList.remove('tabs__content_active');
    });
    this.classList.add('tabs__item_active');
    let tab = this.dataset.tab;

    document.querySelector(tab).classList.add('tabs__content_active');
}