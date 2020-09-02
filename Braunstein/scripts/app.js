document.querySelectorAll('.app__list a').forEach(function(item) {
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
        document.querySelector('.app__item--show').classList.add('app__item--off');
        setTimeout(function(e) {
            document.querySelectorAll('.app__item').forEach(function(e) {
                e.classList.remove('app__item--show');
                e.classList.remove('app__item--off');
                document.querySelector(tab).classList.add('app__item--show');
            });
            let mainTab = document.querySelector('#main');
            if (mainTab.classList.contains('app__item--show')) {
                console.log('содержит');
            }
        }, 100)

    }


}

document.querySelector('.content__link').addEventListener('click', showMain);

function showMain(event) {
    event.preventDefault();
    document.querySelectorAll('.app__item').forEach(function(e) {
        e.classList.remove('app__item--show');

    });
    document.querySelector('#main').classList.add('app__item--show');
    document.querySelector('#main').classList.add('app__item--on');
    document.querySelector('app__back')
}

document.querySelector('.scroll-down').addEventListener('click', function() {
    const screen = document.querySelector('.screen');
    screen.scrollIntoView({ block: "center", behavior: "smooth" });
});

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

}