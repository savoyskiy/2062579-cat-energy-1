if (document.documentElement.clientWidth < 768) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323037],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: '',
        }, {
            // Опции:
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-pin.png',
            // Размеры метки.
            iconImageSize: [57, 53],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-26, -42]
        });

    myMap.geoObjects
        .add(myPlacemark);
  });
} else if (document.documentElement.clientWidth >= 1440) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938592, 30.311752],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {
            hintContent: 'Собственный значок метки',
            balloonContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pin--table.png',
            iconImageSize: [113, 106],
            iconImageOffset: [-74, -67]
        });

    myMap.geoObjects
        .add(myPlacemark);
  });
} else {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323037],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pin--table.png',
            iconImageSize: [113, 106],
            iconImageOffset: [-51, -54]
        });

    myMap.geoObjects
        .add(myPlacemark);
  });
}
