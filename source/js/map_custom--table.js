ymaps.ready(function () {
  var myMap = new ymaps.Map('map--table', {
          center: [59.938631, 30.323037],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: '',
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/map-pin--table.png',
          // Размеры метки.
          iconImageSize: [113, 106],
          // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
          iconImageOffset: [50, -50]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
