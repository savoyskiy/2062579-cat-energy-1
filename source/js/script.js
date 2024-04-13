//скрытие-отображение меню в мобильной версии
let navList = document.querySelector('.navigation__list');
let navButton = document.querySelector('.navigation__button');

navList.classList.remove('navigation__list--no-js');
navButton.classList.remove('navigation__button--no-js');

navButton.addEventListener('click', function () {
  navList.classList.toggle('navigation__list--hidden');
  navButton.classList.toggle('navigation__button--close');
  navButton.classList.toggle('navigation__button--open');
});

//обновление страницы при изменении ширины окна для корректной работы карты
window.addEventListener('resize', function () {
  window.location.reload();
});
