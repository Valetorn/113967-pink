var topBlock = document.querySelector('.main-menu__top-block');
var mainNav = document.querySelector('.main-menu__navigation');
var mainBtn = document.querySelector('.main-menu__btn');

mainNav.classList.add('main-menu__navigation--hidden');
topBlock.classList.add('main-menu__top-block--active');

if (mainBtn.classList.contains('main-menu__btn--close')) {
  mainBtn.classList.remove('main-menu__btn--close');
  mainBtn.classList.add('main-menu__btn--active');
}

mainBtn.addEventListener('click', function() {
  if(mainNav.classList.contains('main-menu__navigation--hidden')) {
    mainNav.classList.remove('main-menu__navigation--hidden');
    topBlock.classList.remove('main-menu__top-block--active');
    mainBtn.classList.remove('main-menu__btn--active');
    mainBtn.classList.add('main-menu__btn--close');
  } else {
    mainNav.classList.add('main-menu__navigation--hidden');
    topBlock.classList.add('main-menu__top-block--active');
    mainBtn.classList.remove('main-menu__btn--close');
    mainBtn.classList.add('main-menu__btn--active');
  }
});
