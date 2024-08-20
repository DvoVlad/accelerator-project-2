const burgerButton = document.querySelector('.page-header__burger');
const navigation = document.querySelector('.page-header__navigation');

const toggleMenu = () => {
  burgerButton.classList.toggle('page-header__burger--cross');
  navigation.classList.toggle('page-header__navigation--open');
  document.body.classList.toggle('body--scroll-lock');
};

const removeMenu = () => {
  burgerButton.classList.remove('page-header__burger--cross');
  navigation.classList.remove('page-header__navigation--open');
  document.body.classList.remove('body--scroll-lock');
};

burgerButton.addEventListener('click', () => {
  toggleMenu();
});

navigation.addEventListener('click', (e) => {
  const element = e.target;
  if(!element.closest('.page-header__item-link')){
    return;
  }
  removeMenu();
});
