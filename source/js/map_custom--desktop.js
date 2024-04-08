ymaps.ready(function () {
  var myMap = new ymaps.Map('map--desktop', {
          center: [59.938592, 30.311752],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {
          hintContent: 'Собственный значок метки',
          balloonContent: '',
      }, {
          // Опции:
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/map-pin--table.png',
          // Размеры метки.
          iconImageSize: [113, 106],
          // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
          iconImageOffset: [-74, -67]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
