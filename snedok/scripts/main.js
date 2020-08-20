var swiper = new Swiper('.front-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.front-slider__pagination',
        type: 'bullets',
    },
});
let swiperOffers = new Swiper('.offers__slider', {
    slidesPerView: 5,
    loop: true,
    centeredSlides: true,

    spaceBetween: 25,
    navigation: {
        nextEl: '.offers__button-next',
        prevEl: '.offers__button-prev',
    },
})
document.querySelector('.catalog__button').addEventListener('click', function(e) {
    document.querySelector('.catalog__content').classList.toggle('catalog__show');
});

document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelectorAll('.products__item').forEach(function(e, idx) {
        e.id = 'product' + idx;
    })
    document.querySelectorAll('.products__add').forEach(function(btn, i) {
        btn.dataset.target = '#product' + i;
    });
});


document.querySelectorAll('.products-minus').forEach(function(e) {
    e.addEventListener('click', function() {
        let cardQty = this.nextElementSibling.value;
        if (cardQty != 1) {
            cardQty--;
        }
    });
});


// document.querySelector('.js-plus').addEventListener('click', function() {
//     qty.value++;
// });

document.querySelectorAll('.products__add').forEach(function(e) {
    e.addEventListener('click', addProduct);
});

function addProduct(event) {
    event.preventDefault();
    let productId = this.dataset.target;
    let product = document.querySelector(productId);
    this.previousElementSibling.remove();
    this.remove();


    product.classList.add('products__added');
}

//modals
document.querySelectorAll('.js-modal').forEach((e) => e.addEventListener('click', showModal));

function showModal(event) {
    event.preventDefault();
    let modal = this.dataset.modal;
    document.querySelector(modal).classList.add('modal__show');
    document.onkeydown = function(e) {
        if (e.keyCode == 27) {
            document.querySelector(modal).classList.remove('modal__show');
        }
    }
}

document.querySelectorAll('.modal__close').forEach((e) => e.addEventListener('click', closeModals));
document.querySelectorAll('.modal__overlay').forEach((e) => e.addEventListener('click', closeModals));

function closeModals(evt) {
    evt.preventDefault();
    document.querySelectorAll('.modal').forEach(function(e) {
        e.classList.remove('modal__show');
    })
}

document.querySelector('.header__price').addEventListener('click', showCart);

function showCart(e) {
    e.preventDefault();
    document.querySelector('.overlay').classList.add('overlay__show');
    document.querySelector('.aside-cart').classList.add('aside-cart__show')
}
document.querySelector('.overlay').addEventListener('click', overlayClose);

function overlayClose() {
    document.querySelector('.overlay').classList.remove('overlay__show');
    document.querySelector('.aside-cart').classList.remove('aside-cart__show');
    document.querySelector('.mobile-nav').classList.remove('mobile-nav__open');
    document.querySelector('.burger').classList.remove('burger__open');
}

document.querySelector('.burger').addEventListener('click', mobileMenu);

function mobileMenu() {
    this.classList.add('burger__open');
    document.querySelector('.overlay').classList.add('overlay__show');
    document.querySelector('.mobile-nav').classList.add('mobile-nav__open');
}

document.querySelectorAll('.catalog__list a').forEach(function(e) {
    e.addEventListener('mouseover', showCaterotyTab);
});

function showCaterotyTab() {
    let cat_id = this.dataset.cat;
    document.querySelectorAll('.catalog__tab').forEach((tab) => { tab.classList.remove('catalog__tab--show') });
    document.querySelector(cat_id).classList.add('catalog__tab--show');
}