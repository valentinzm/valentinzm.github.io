/* eslint-disable no-undef */
$(document).ready(function() {
    $('.replies__toggler').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('replies__toggler--expanded');
        $(this).parent().find('.replies__comments').toggleClass('replies__comments--expanded');
        $(this).parents().eq(1).find('.comment__footer').toggleClass('comment__footer--expanded');
    })

    $('.header__toggler').click(function() {
        if ($(this).hasClass('header__toggler--active')) {
            $('.header__navbar').fadeOut();
            $(this).removeClass('header__toggler--active');
        } else {
            $(this).addClass('header__toggler--active');
            $('.header__navbar').css("display", "flex").hide().fadeIn();
        }
    })

    $('.bakers__load-more').click(function(e) {
        e.preventDefault();
        $('.bakers__baker').css("display", "flex")
            .hide()
            .fadeIn();
    })

    $('.header__langswitch').hover(function() {
        $('.langswitch__dropdown').slideDown({
            start: function() {
                $(this).css({
                    display: "flex"
                })
            }
        });
    }, function() {
        $('.langswitch__dropdown').slideDown({
            start: function() {
                $(this).css({
                    display: "none"
                })
            }
        });
    })

    $('.banners__slider').slick({
        prevArrow: '<button class="banners__controls banners__controls--prev"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 1L1 18.5L18.5 36" stroke="white"/></svg></button>',
        nextArrow: '<button class="banners__controls banners__controls--next"><svg width="20" height="37" viewBox="0 0 20 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L18.5 18.5L1 36" stroke="white"/></svg></button>',
        dots: true,
        /*         autoplay: true,
                autoplaySpeed: 5000, */
        customPaging: function(slider, i) {
            return '<button class="banners__dot"><span>0' + (i + 1) + '</span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6879 6.82198H23.6328C21.9109 3.4553 18.7109 0.966777 14.888 0.233398C14.8765 0.333535 14.8432 0.422036 14.788 0.511682L14.4995 1.0116L11.1442 6.82312H22.6879V6.82198Z" fill="#FA403A"/><path d="M1.11142 16.5114H8.25637L6.18956 12.9112L2.48853 6.51129L2.0115 5.69971C0.744822 7.65494 0 9.99984 0 12.4998C0 13.9446 0.244714 15.3332 0.7 16.6216C0.82188 16.555 0.966648 16.5114 1.11142 16.5114Z" fill="#FA403A"/><path d="M2.31127 18.1784H1.36636C3.09977 21.5668 6.32167 24.0565 10.1665 24.7784C10.1665 24.6451 10.1997 24.5003 10.2779 24.367L10.4894 23.9888H10.5009L13.8456 18.1772H2.31127V18.1784Z" fill="#FA403A"/><path d="M3.55586 5.02188L6.91204 10.8334L8.93384 7.3334L9.01204 7.18863L12.6787 0.833324L13.1455 0.0114441C12.9339 0 12.7121 0 12.5006 0C8.7225 0 5.32245 1.67809 3.04526 4.34477C3.15569 4.42182 3.25583 4.52196 3.33384 4.64479L3.55586 5.02188Z" fill="#FA403A"/><path d="M21.9672 20.6447C21.8453 20.5896 21.7452 20.4894 21.6672 20.3561L21.4451 19.9781L18.0901 14.1562L16.0681 17.6677L15.9682 17.8561L12.3223 24.1666L11.8441 24.9885C12.0671 24.9885 12.2786 24.9999 12.5004 24.9999C16.289 24.9999 19.6785 23.3114 21.9672 20.6447Z" fill="#FA403A"/><path d="M23.8882 8.48915H16.7432L18.81 12.0893L22.5099 18.4892L22.9881 19.3008C24.2548 17.3456 24.9996 15.0007 24.9996 12.5007C24.9996 11.0559 24.7549 9.66733 24.2996 8.37891C24.1777 8.44547 24.0329 8.48915 23.8882 8.48915Z" fill="#FA403A"/></svg></button>';
        },
        appendDots: $('.banners__dots'),
    })

    $('.season__carousel').slick({
        slidesToShow: 4,
        prevArrow: '<button class="season__controls season__controls--prev"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M18.5 1L1 18.5L18.5 36" stroke="white"/></svg></button>',
        nextArrow: '<button class="season__controls season__controls--next"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 1L18 18.5L0.5 36" stroke="white"/></svg></button>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,

                }
            },

        ]
    })

    $('.pledges__list').slick({
        slidesToShow: 3,
        dots: false,
        prevArrow: '<button class="pledges__controls pledges__controls--prev"><svg width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 30L1 15.5L15.5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="pledges__controls pledges__controls--next"><svg width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15.5 15.5L0.999995 30" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,

                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,

                }
            },

        ]
    });

    if (window.matchMedia("(max-width: 600px)").matches) {
        // $('.related__carousel').slick({
        //     //centerMode: true,
        //     arrows: false,
        //     slidesToShow: 1,
        // })

        // $('.bakers__list').slick({
        //     arrows: false,
        //     slidesToShow: 5,
        //     //centerMode: true,
        //     infinite: true,
        // })


        $('.directors').slick({
            dots: false,
            slidesToShow: 1,
        });
        $('.sup-slider').slick({
            dots: true,
            slidesToShow: 1,
        });
    }

    // $(document).scroll(function () { 
    //     var logoOffset = $('.inside__logo').offset().top;
    //     var offset = $(window).scrollTop();
    //     var logoInside = 'assets/img/icons/logo-inside.png';
    //     var logoBase = 'assets/img/icons/logo.png';

    //     if (offset > logoOffset) {
    //         $('.header__logo img').attr('src', logoInside);
    //     } else {
    //         $('.header__logo img').attr('src', logoBase);
    //     }
    // });

    // jQuery(window).on('resize', function() {
    //     var viewportWidth = jQuery(window).width();

    //     if (viewportWidth < 1024) {
    //         $('.sup-slider').slick({
    //             dots: true,
    //             slidesToShow: 1.5,
    //         });
    //     } else {

    //     }
    // });

});

document.querySelector('.read-more__button').addEventListener('click', readMore);

function readMore() {
    this.remove();
    document.querySelectorAll('.read-more__text').forEach(function(e) {
        e.classList.remove('read-more__text');
    })
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
//var countDownDate = new Date("Sep 1, 2020 15:37:25").getTime();
var deadline = new Date(Date.parse(new Date("Sep 1, 2020 15:37:25")) + 0 * 0 * 0 * 0 * 1000);
initializeClock('clockdiv', deadline);

document.querySelector('.bakers__list li').classList.add('bakers__active');
document.querySelectorAll('.bakers__list li').forEach(function(e) {
    e.onclick = bakersActive;
});

function bakersActive() {
    document.querySelectorAll('.bakers__list li').forEach(function(e) {
        e.classList.remove('bakers__active');
    });

    this.classList.add('bakers__active');
    let next = this.nextElementSibling;
    let prev = this.previousElementSibling
    if (next == null || prev == null) {
        console.log('конец');
    } else if (this.dataset.index == 1 || this.dataset.index == 2) {
        document.querySelectorAll('.bakers__list li').forEach(function(e) {
            e.style.transform = 'translateX(0)';
        });
    } else {
        document.querySelectorAll('.bakers__list li').forEach(function(e) {
            e.style.transform = 'translateX(-66px)';
        });
    }



}