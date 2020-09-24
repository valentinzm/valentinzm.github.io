document.querySelectorAll('.app__list--nav a').forEach(function(item) {
    item.addEventListener('click', showTab);
});


function showTab(e) {
    e.preventDefault();
    let tab = this.getAttribute("href");
    if (tab === '#') {
        console.log('пусто');
    } else {
        let key = document.querySelector('.app__item--show').id;
        localStorage.setItem('page', key);
        document.querySelector('.app__back').classList.remove('app__back--none');
        document.querySelector('.app__item--show').classList.add('app__item--off');
        setTimeout(function(e) {
            document.querySelectorAll('.app__item').forEach(function(e) {
                e.classList.remove('app__item--show');
                e.classList.remove('app__item--off');
                document.querySelector(tab).classList.add('app__item--show');
            });
            let mainTab = document.querySelector('#first');
            if (mainTab.classList.contains('app__item--show')) {
                console.log('main app__item--show');
            }
            //console.log();
        }, 100)

    }
}


document.querySelectorAll('.app__list--tab a').forEach(function(e) {
    e.addEventListener('click', showSublist);
});

function showSublist(event) {
    event.preventDefault();
    console.log(this);
    let list = this.nextElementSibling;
    jQuery(list).slideToggle();
}
document.querySelector('.content__link').addEventListener('click', showMain);

function showMain(event) {
    event.preventDefault();
    document.querySelectorAll('.app__item').forEach(function(e) {
        e.classList.remove('app__item--show');

    });

    document.querySelector('#first').classList.add('app__item--show');
    document.querySelector('#first').classList.add('app__item--on');
    let mainTab = document.querySelector('#first');
    if (mainTab.classList.contains('app__item--show')) {
        document.querySelector('.app__back').classList.add('app__back--none');
    }

}

document.querySelectorAll('.js-form').forEach(function(e) {
    e.addEventListener('click', toForm);

});


function toForm(e) {
    e.preventDefault();
    console.log(this);
    document.querySelectorAll('.app__item').forEach(function(e) {
        e.classList.remove('app__item--show');
    });
    //document.querySelector('#elite').
    document.querySelector('#elite').classList.add('app__item--show');
    document.querySelector('#elite').classList.add('app__item--on');
}
// document.querySelector('.scroll-down').addEventListener('click', function() {
//     const screen = document.querySelector('.screen');
//     screen.scrollIntoView({ block: "center", behavior: "smooth" });
// });
document.querySelector('.form').addEventListener('submit', formAlert);

function formAlert(e) {
    e.preventDefault();
    document.querySelector('.form__alert').classList.add('form__alert--show');
}
//back page

document.querySelector('.app__back').addEventListener('click', backButton);

function backButton(event) {
    let page = localStorage.getItem('page');
    console.log(localStorage.getItem('page'));
    event.preventDefault();
    document.querySelectorAll('.app__item').forEach(function(e) {
        e.classList.remove('app__item--show');

    });
    document.querySelector('#' + page).classList.add('app__item--show');
    document.querySelector('#' + page).classList.add('app__item--on');
    let mainTab = document.querySelector('#first');
    if (mainTab.classList.contains('app__item--show')) {
        document.querySelector('.app__back').classList.add('app__back--none');
    }

}