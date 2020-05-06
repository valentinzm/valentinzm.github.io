
(function () {
  var toggler = document.querySelector('.js-addition-toggler');
  var block = document.querySelector('.addition');

  toggler.addEventListener('click', function() {
    block.classList.toggle('is-visible');
  });
})();