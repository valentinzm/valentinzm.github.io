setTimeout(function() {
    document.querySelector('.services__slider').classList.remove('services__slider_loaded');
}, 2000);
document.querySelectorAll('.services__overlay').forEach(function(e) {
    e.addEventListener('mouseover', serviceMouseover);
});

function serviceMouseover(e) {
    this.parentElement.classList.add('services__item_hover');
}
document.querySelectorAll('.services__overlay').forEach(function(e) {
    e.addEventListener('mouseout', serviceMouseout);
});

function serviceMouseout() {
    this.parentElement.classList.remove('services__item_hover');
}