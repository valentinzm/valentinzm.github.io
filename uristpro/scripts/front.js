var front_swiper = new Swiper('.frontpage-slider', {
    // Optional parameters
    loop: true,
    speed: 400,
    effect: "slide",
    parallax: true,
    autoplay: {
        delay: 5000,
    },


})
front_swiper.on('slideChangeTransitionStart', function() {
    console.log('начинаем');
    //front_swiper.slideNext();
});
document.querySelector('.swiper-button-prev__front').addEventListener('click', function(e) {
    let active = front_swiper.activeIndex;
    front_swiper.slides[active].classList.add('front__anim');
    console.log();
    setTimeout(function() {
        front_swiper.slidePrev();
        document.querySelectorAll('.swiper-slide').forEach(function(e) {
            e.classList.remove('front__anim');
        })
    }, 800);
});
document.querySelector('.swiper-button-next__front').addEventListener('click', function(e) {
    let active = front_swiper.activeIndex;
    front_swiper.slides[active].classList.add('front__anim');
    console.log();
    setTimeout(function() {
        front_swiper.slideNext();
        document.querySelectorAll('.swiper-slide').forEach(function(e) {
            e.classList.remove('front__anim');
        })
    }, 800);
});