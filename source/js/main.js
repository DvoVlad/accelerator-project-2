// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const burgerButton = document.querySelector('.page-header__burger');
const navigation = document.querySelector('.page-header__navigation');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('page-header__burger--cross');
  navigation.classList.toggle('page-header__navigation--open');
});
