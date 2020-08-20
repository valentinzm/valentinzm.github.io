document.querySelector('.filter-btn').addEventListener('click', openMobileFilter);

function openMobileFilter(e) {
    e.preventDefault();
    document.querySelector('.filter__sidebar').classList.add('filter__sidebar--open');
    document.querySelector('.overlay').classList.add('overlay__show');
}