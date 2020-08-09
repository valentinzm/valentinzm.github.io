document.querySelectorAll('.tips__item').forEach(function(e) {
    e.addEventListener('click', showYT);
});

function showYT(evt) {

    // var target = _ref.target;
    document.querySelector('.modals-layout').style = 'display: block;';
    document.querySelector('.video-modal').style = 'display: block;';
    document.body.style.top = "-".concat(window.scrollY, "px");
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    // var videoCard = target.closest('.slider-block-card');

    document.querySelector('.video-modal .video-yt').src = this.dataset.url;
}



document.querySelectorAll('.close-modal').forEach(function(close) {
    close.addEventListener('click', function(event) {
        var _event$target$closest, _event$target$closest2;

        (_event$target$closest = event.target.closest('.modal')) === null || _event$target$closest === void 0 ? void 0 : (_event$target$closest2 = _event$target$closest.querySelector('iframe')) === null || _event$target$closest2 === void 0 ? void 0 : _event$target$closest2.setAttribute("src", "");
        if (event.target.closest('.modal')) event.target.closest('.modal').style.display = 'none';
        if (event.target.closest('.compare-modal')) event.target.closest('.compare-modal').style.display = 'none';
        document.querySelector('.modals-layout').style.display = 'none';
        var scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelector('.modals-layout').style.display = 'none';
        var scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.style.display = 'none';
        });
        document.querySelectorAll(".flex-land-wrap iframe").forEach(function(iframe) {
            iframe.src = "";
        });
    }
});