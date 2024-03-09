let navList = document.querySelector('.navigation__list');
let navButton = document.querySelector('.navigation__button');

navList.classList.remove('navigation__list--no-js');

navButton.addEventListener('click', function () {
  if (navList.classList.contains('navigation__list--hidden')) {
    navList.classList.remove('navigation__list--hidden');
    navButton.classList.remove('navigation__button--close');
    navButton.classList.add('navigation__button--open');
  } else {
    navList.classList.add('navigation__list--hidden');
    navButton.classList.add('navigation__button--close');
    navButton.classList.remove('navigation__button--open');
  }
});
