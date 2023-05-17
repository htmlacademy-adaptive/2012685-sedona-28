let headerNav = document.querySelector('.header__nav');
let headerBurger = document.querySelector('.header__burger');

headerNav.classList.remove('header__nav--nojs');

headerBurger.addEventListener('click', function () {
  if (headerNav.classList.contains('header__nav--closed')) {
    headerNav.classList.remove('header__nav--closed');
    headerNav.classList.add('header__nav--opened');
  } else {
    headerNav.classList.add('header__nav--closed');
    headerNav.classList.remove('header__nav--opened');
  }
});
