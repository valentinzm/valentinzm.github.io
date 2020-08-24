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
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,

    spaceBetween: 25,
    navigation: {
        nextEl: '.offers__button-next',
        prevEl: '.offers__button-prev',
    },
    breakpoints: {
        576: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 25,
        },
        768: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1240: {
            centeredSlides: true,
            slidesPerView: 5,
            spaceBetween: 25,
        },
    }
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
    let filter = document.querySelector('.filter__sidebar');
    if (filter) {
        filter.classList.remove('filter__sidebar--open');
    }
}

document.querySelector('.burger').addEventListener('click', mobileMenu);

function mobileMenu() {
    this.classList.add('burger__open');
    document.querySelector('.overlay').classList.add('overlay__show');
    document.querySelector('.mobile-nav').classList.add('mobile-nav__open');
}

document.querySelector('.mobile-search').addEventListener('click', mobileSearch);

function mobileSearch(e) {
    document.querySelector('.search').classList.toggle('search__show')
}
document.querySelectorAll('.catalog__list a').forEach(function(e) {
    e.addEventListener('mouseover', showCaterotyTab);
});

function showCaterotyTab() {
    let cat_id = this.dataset.cat;
    document.querySelectorAll('.catalog__tab').forEach((tab) => { tab.classList.remove('catalog__tab--show') });
    document.querySelector(cat_id).classList.add('catalog__tab--show');
}

//document.querySelector('.mobile-catalog').addEventListener('click', showCatalog);

function showCatalog(e) {
    e.preventDefault();
    document.querySelector('.search').classList.add('catalog__content--show');
}

document.querySelectorAll('.footer__nav--title').forEach(function(title) {
    title.addEventListener('click', function() {
        this.parentElement.classList.toggle('footer__nav--open');
    });
});


document.querySelectorAll('.js-input').forEach(function(e) {
    e.addEventListener('focus', inputFocus);
});

function inputFocus() {
    //console.log(this);
    //this.parentElement.classList.add('label-active');
    let nextText = this.nextElementSibling;
    nextText.classList.add('order__none');

}
document.querySelectorAll('.js-input').forEach(function(e) {
    e.addEventListener('blur', inputBlur);
});

function inputBlur() {
    //this.parentElement.classList.remove('label-active');
    let nextText = this.nextElementSibling;
    if (this.value == '' || this.value == null) {
        nextText.classList.remove('order__none');
    }

}

document.querySelectorAll('.products-minus').forEach(function(min) {
    min.addEventListener('click', function() {
        if (this.nextElementSibling.value != 1) {
            this.nextElementSibling.value--;
        }
    });
});
document.querySelectorAll('.products-plus').forEach(function(plus) {
    plus.addEventListener('click', function() {
        this.previousElementSibling.value++;
    });
});