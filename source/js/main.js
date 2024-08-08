// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './menu';

new Swiper('.hero__swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true
  },
  breakpointsBase: 'container',
  breakpoints: {
    1440: {
      allowTouchMove: false
    }
  },
});

new Swiper('.tours__swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.tours__slider-next',
    prevEl: '.tours__slider-prev',
  },
  breakpointsBase: 'container',
  breakpoints: {
    290: {
      slidesPerView: 1
    }
  },
});
