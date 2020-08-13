document.querySelectorAll('.tips__item').forEach(function(e) {
    e.addEventListener('click', showYT);
});

function showYT(evt) {

    // var target = _ref.target;
    document.querySelector('.modals-layout').style = 'display: block;';
    document.querySelector('.video-modal').style = 'display: block;';
    document.body.style.top = "-".concat(window.scrollY, "px");
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    // var videoCard = target.closest('.slider-block-card');

    document.querySelector('.video-modal .video-yt').src = this.dataset.url;
}



document.querySelectorAll('.close-modal').forEach(function(close) {
    close.addEventListener('click', function(event) {
        var _event$target$closest, _event$target$closest2;

        (_event$target$closest = event.target.closest('.modal')) === null || _event$target$closest === void 0 ? void 0 : (_event$target$closest2 = _event$target$closest.querySelector('iframe')) === null || _event$target$closest2 === void 0 ? void 0 : _event$target$closest2.setAttribute("src", "");
        if (event.target.closest('.modal')) event.target.closest('.modal').style.display = 'none';
        if (event.target.closest('.compare-modal')) event.target.closest('.compare-modal').style.display = 'none';
        document.querySelector('.modals-layout').style.display = 'none';
        var scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelector('.modals-layout').style.display = 'none';
        var scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.style.display = 'none';
        });
        document.querySelectorAll(".flex-land-wrap iframe").forEach(function(iframe) {
            iframe.src = "";
        });
    }
});

document.querySelector('.smart__more').addEventListener('click', showSmartSlide);

function showSmartSlide(evt) {
    evt.preventDefault();
    const slide = document.querySelector('.smart__slide');
    if (slide.classList.contains('smart__slide--on')) {
        //this.textContent = 'Узнать больше о системах навигации';
        this.classList.remove('smart__more--rotate');
        slide.classList.add('smart__slide--off');
        slide.classList.remove('smart__slide--on');
    } else {
        //this.textContent = 'Скрыть';
        this.classList.add('smart__more--rotate');
        slide.classList.add('smart__slide--on');
        slide.classList.remove('smart__slide--off');
    }


}


document.querySelectorAll('.pick__button').forEach(function(e) {
    e.addEventListener('click', filter);
});

function filter(event) {
    event.preventDefault();
    this.classList.add('pick__button--active');
    let best = this.dataset.best;

    // document.querySelectorAll('.pick__product').forEach(function(e) {
    //     e.classList.remove('pick__product--show');
    // });


    document.querySelector('.pick').classList.add('pick__open');
    let tag = this.dataset.tag;

    let six = document.querySelector('.six').classList.contains('pick__button--active');
    let seven = document.querySelector('.seven').classList.contains('pick__button--active');
    if (tag === '1') {
        if (!document.querySelector('.one').classList.contains('detail__picked') && !seven) {
            document.querySelector('.two').classList.add('detail__picked');
            document.querySelectorAll('.pick__product').forEach(function(e) {
                e.classList.remove('pick__product--show');
            });
            document.querySelector(best).classList.add('pick__product--show');
        }

    }
    if (tag === '2') {
        if (!seven) {
            document.querySelector('.two').classList.remove('detail__picked');
            document.querySelector('.one').classList.add('detail__picked');
            document.querySelectorAll('.pick__product').forEach(function(e) {
                e.classList.remove('pick__product--show');
            });
            document.querySelector(best).classList.add('pick__product--show');
        }

    }
    if (tag === '3') {
        if (!seven) {
            document.querySelector('.one').classList.remove('detail__picked');
            document.querySelector('.two').classList.add('detail__picked');
            document.querySelectorAll('.pick__product').forEach(function(e) {
                e.classList.remove('pick__product--show');
            });
            document.querySelector(best).classList.add('pick__product--show');
        }
    }

    if (tag === '4') {
        document.querySelector('.one').classList.remove('detail__picked');
        document.querySelector('.two').classList.remove('detail__picked');
        document.querySelector('.three').classList.add('detail__picked');
    }



    if (tag === '5') {
        if (!seven && !six) {
            document.querySelector('.one').classList.remove('detail__picked');
            document.querySelector('.two').classList.add('detail__picked');
            document.querySelectorAll('.pick__product').forEach(function(e) {
                e.classList.remove('pick__product--show');
            });
            document.querySelector(best).classList.add('pick__product--show');
        }
    }

    if (tag === '6') {

        if (!seven) {
            document.querySelector('.one').classList.remove('detail__picked');
            document.querySelector('.two').classList.add('detail__picked');
            document.querySelectorAll('.pick__product').forEach(function(e) {
                e.classList.remove('pick__product--show');
            });
            document.querySelector(best).classList.add('pick__product--show');
        }

    }

    if (tag === '7') {

        document.querySelector('.one').classList.remove('detail__picked');
        document.querySelector('.two').classList.remove('detail__picked');
        document.querySelector('.three').classList.add('detail__picked');
        document.querySelectorAll('.pick__product').forEach(function(e) {
            e.classList.remove('pick__product--show');
        });
        document.querySelector(best).classList.add('pick__product--show');
    }
    $(".details").slideDown();
    $(".pick__show-btn--open").slideDown().hide();



}

// document.querySelectorAll('.pick__button--active').forEach(function(e) {
//     e.addEventListener('click', removeActive);
// });

// function removeActive() {
//     this.classList.remove('pick__button--active');
// }

document.querySelectorAll('.pick__reset').forEach(function(e) {
    e.addEventListener('click', resetFiler);
})

function resetFiler(event) {
    event.preventDefault();
    document.querySelectorAll('.pick__product--best').forEach(function(e) {
        e.classList.remove('pick__product--show');
    });
    document.querySelector('.pick').classList.remove('pick__open');
    document.querySelectorAll('.pick__button').forEach(function(e) {
        e.classList.remove('pick__button--active');
    });
    document.querySelectorAll('.detail').forEach(function(e) {
        e.classList.remove('detail__picked');
    })
    $(".details").slideUp();
    $('.pick__show-btn--open').show();
    document.querySelectorAll('.pick__product').forEach(function(e) {
        e.classList.remove('pick__product--show');
    });
}



jQuery('.pick__show-btn--open').on("click", function(event) {

    event.preventDefault();
    $(".details").slideDown();
    $(this).slideDown().hide();
    document.querySelector('.pick').classList.add('pick__open');
});
jQuery('.pick__show-btn--close').on("click", function(event) {

    event.preventDefault();
    $(".details").slideUp();
    $('.pick__show-btn--open').show();
    document.querySelector('.pick').classList.remove('pick__open');

});
document.addEventListener('scroll', navScroll);

function navScroll() {
    //let top = body.offsetTop;
    console.log();
    let tips = document.querySelector('#tips').offsetTop;
    let compare = document.querySelector('#compare').offsetTop;
    if (window.pageYOffset >= 56 && window.pageYOffset <= 4700) {
        document.querySelectorAll('.header__item').forEach(function(e) {
            e.classList.remove('header__item--active');

        });
        document.querySelector('.item_main').classList.add('header__item--active');
    } else if (window.pageYOffset >= 4700 && window.pageYOffset <= 5800) {
        document.querySelectorAll('.header__item').forEach(function(e) {
            e.classList.remove('header__item--active');

        });
        document.querySelector('.item_ep').classList.add('header__item--active');
    } else if (window.pageYOffset >= 5800) {
        document.querySelectorAll('.header__item').forEach(function(e) {
            e.classList.remove('header__item--active');

        });
        document.querySelector('.item_tips').classList.add('header__item--active');
    }
}

document.querySelector('.tips__clone').addEventListener('click', cloneBlocks);

function cloneBlocks(e) {
    e.preventDefault();
    document.querySelector('.tips__row').classList.add('tips__row--added');
    document.querySelectorAll('.tips__item').forEach(function(e) {
        e.classList.remove('tips__item--hidden');
    })



    document.querySelector('.tips__clone').remove();

}