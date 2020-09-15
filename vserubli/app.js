let date = new Date();
//var newDateObj = moment(date).add(20, 'm').toDate();
var newDateObj = new Date(date.getTime() + 20 * 60000);
document.querySelector('#time').textContent = newDateObj.getHours() + ':' + newDateObj.getMinutes();


var snapSlider1 = document.getElementById('slider-snap1');
var snapSlider2 = document.getElementById('slider-snap2');
const sum = document.getElementById('sum');
const days = document.getElementById('days');


noUiSlider.create(snapSlider1, {
    start: 20000,
    connect: 'lower',
    range: {
        'min': 1000,
        'max': 100000
    }
});


noUiSlider.create(snapSlider2, {
    start: 30,
    connect: 'lower',
    step: 1,
    decimals: 0,

    range: {
        'min': 7,
        'max': 180
    }
});

snapSlider1.noUiSlider.on('update', function(value) {
    sum.innerHTML = Math.floor(value);
});
snapSlider2.noUiSlider.on('update', function(value) {

    days.innerHTML = Math.floor(value);
});

document.querySelector('.calculator__form').addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    alert('Событие формы');
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.instant__man--bubble').classList.remove('bubble__effect');
    }, 1500)
})