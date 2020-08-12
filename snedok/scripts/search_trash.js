document.querySelector('.search__form').addEventListener('submit', testForm);

function testForm(event) {
    event.preventDefault();
    alert('Произошло подтверждение');
}

document.querySelector('.search__input').addEventListener('input', testSearchAjax);

function testSearchAjax() {
    console.log(this.value);
}