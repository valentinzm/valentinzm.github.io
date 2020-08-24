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


ymaps.ready(init);

function init() {
    var myPlacemark,
        myMap = new ymaps.Map('map', {
            center: [55.753994, 37.622093],
            zoom: 9,
            controls: [],
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Слушаем клик на карте.
    myMap.events.add('click', function(e) {
        var coords = e.get('coords');

        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);
            // Слушаем событие окончания перетаскивания на метке.
            myPlacemark.events.add('dragend', function() {
                getAddress(myPlacemark.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    });

    // Создание метки.
    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            iconCaption: 'поиск...'
        }, {
            preset: 'islands#violetDotIconWithCaption',
            draggable: true
        });
    }

    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function(res) {
            var firstGeoObject = res.geoObjects.get(0);

            myPlacemark.properties
                .set({
                    // Формируем строку с данными об объекте.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                    balloonContent: firstGeoObject.getAddressLine()
                });
            console.log(firstGeoObject.getPremiseNumber());
            let adressInput = document.querySelector('#adress').nextElementSibling;
            adressInput.classList.add('order__none');

            document.querySelector('#adress').value = firstGeoObject.getThoroughfare();
            let house = firstGeoObject.getPremiseNumber();
            if (house === 'undefined') {
                document.querySelector('#adress').value += ',' + house;
            }

        });



    }
}