let navList = document.querySelector('.navigation__list');
let navButton = document.querySelector('.navigation__button--opener');

navList.classList.remove('navigation__list--no-js');

navButton.addEventListener('click', function () {
  if (navList.classList.contains('navigation__list--hidden')) {
    navList.classList.remove('navigation__list--hidden');
  } else {
    navList.classList.add('navigation__list--hidden');
  }
});
