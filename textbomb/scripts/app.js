document.querySelector('.hamburger').addEventListener('click', menu);

function menu() {
    this.classList.toggle('open');
    document.querySelector('.site-nav').classList.toggle('menu-open');
}

AOS.init();

document.addEventListener("DOMContentLoaded", function(event) {
    let links = document.getElementsByClassName('price__link');
    for (var i = 0; i < links.length; i++) {
        if (links[i].offsetHeight > 34) {
            links[i].classList.add('price__lineheight')
        }
    }
});


//РјРѕРґР°Р»РєР°

document.querySelectorAll('.modal-btn').forEach(function(e) {
    e.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function(e) {
    e.onclick = closeModal;
});

document.querySelectorAll('.modal-overlay').forEach(function(e) {
    e.onclick = closeOverlay;
});

function showModal(e) {
    e.preventDefault();
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.add('show');
    document.onkeydown = function(e) {
        if (e.keyCode == 27) {
            document.querySelector(modalId).classList.remove('show');
        }
    }
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(function(e) {
        e.classList.remove('show');
    });
}

function closeOverlay() {
    this.classList.remove('show');
}


document.querySelector('.team__container').addEventListener('mousemove', planets_move);

function planets_move(event) {
    let eventY = event.clientY;
    let eventX = event.clientX;
    let formY = -eventY / 30;
    let formX = -eventX / 30;

    document.querySelector('.earth').style.transform = 'translate(' + formX + 'px, ' + formY + 'px)';
    document.querySelector('.mars').style.transform = 'translate(' + formX + 'px, ' + formY + 'px)';
    document.querySelector('.plus1').style.transform = 'translate(' + -formX + 'px, ' + -formY + 'px)';
    document.querySelector('.plus2').style.transform = 'translate(' + -formX + 'px, ' + -formY + 'px)';
    document.querySelector('.plus3').style.transform = 'translate(' + -formX + 'px, ' + -formY + 'px)';
}


if (window.innerWidth > 1024) {
    document.querySelector('.bg-form').addEventListener('mousemove', rocket_move);
}

function rocket_move(event) {
    let eventY = event.clientY;
    let eventX = event.clientX;
    let formY = -eventY / 50;
    let formX = -eventX / 50;
    document.querySelector('.rocket').style.transform = 'translate(' + formX + 'px, ' + formY + 'px)';
}

window.addEventListener('resize', resizing);

function resizing() {
    if (window.innerWidth > 1024) {
        document.querySelector('.bg-form').addEventListener('mousemove', rocket_move);
        document.querySelector('.rocket').style.transform = 'rotate(0deg)';
    } else {
        document.querySelector('.bg-form').removeEventListener('mousemove', rocket_move);
        document.querySelector('.rocket').style.transform = 'rotate(90deg)';
    }
}


document.querySelector('.btn__submenu a').addEventListener('click', mobileMenu);

function mobileMenu(evt) {
    document.querySelector('.sub-menu__block').classList.add('block');
}
document.querySelector('.btn__back').addEventListener('click', backMenuButton);

function backMenuButton() {

    document.querySelector('.sub-menu__block').classList.remove('block');
}

const slider = document.querySelector('.grid');
const svg = document.querySelector('.grid svg');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    svg.style.display = "none";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('touchmove', (e) => {
    isDown = true;
    slider.classList.add('active');
    svg.style.display = "none";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});

document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Форма подтверждена');
    })
})