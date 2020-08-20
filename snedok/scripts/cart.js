document.querySelectorAll('.order__input').forEach(function(e) {
    e.addEventListener('focus', inputFocus);
});

function inputFocus() {
    //console.log(this);
    //this.parentElement.classList.add('label-active');
    let nextText = this.nextElementSibling;
    nextText.classList.add('order__none');

}
document.querySelectorAll('.order__input').forEach(function(e) {
    e.addEventListener('blur', inputBlur);
});

function inputBlur() {
    //this.parentElement.classList.remove('label-active');
    let nextText = this.nextElementSibling;
    if (this.value == '' || this.value == null) {
        nextText.classList.remove('order__none');
    }

}

document.querySelectorAll('.order__delivery').forEach(function(item) {
    item.addEventListener('click', orderActive);
});

function orderActive() {
    document.querySelectorAll('.order__delivery').forEach((e) => { e.classList.remove('order__delivery--active') });
    this.classList.add('order__delivery--active');
}