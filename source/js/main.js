// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './menu';

new Swiper('.hero__swiper', {
  modules: [Pagination],
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
  modules: [Navigation],
  navigation: {
    nextEl: '.tours__slider-next',
    prevEl: '.tours__slider-prev',
    disabledClass: 'tours__slider-disabled'
  },
  breakpointsBase: 'container',
  breakpoints: {
    290: {
      slidesPerView: 1
    },
    678: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false
    }
  },
});

new Swiper('.training__swiper', {
  // Navigation arrows
  modules: [Navigation],
  navigation: {
    nextEl: '.training__slider-next',
    prevEl: '.training__slider-prev',
    disabledClass: 'training__slider-disabled'
  },
  breakpointsBase: 'container',
  breakpoints: {
    290: {
      slidesPerView: 1,
      initialSlide: 2
    },
    678: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 0,
      allowTouchMove: false
    }
  },
});

new Swiper('.reviews__swiper', {
  // Navigation arrows
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
    disabledClass: 'reviews__slider-disabled'
  },
  breakpointsBase: 'container',
  breakpoints: {
    290: {
      slidesPerView: 1
    },
    1160: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1520: {
      slidesPerView: 2,
      spaceBetween: 120,
      allowTouchMove: false
    }
  },
});

let advantagesSlider;

const initAdvantageSlider = () => {
  if(window.matchMedia('(min-width: 1440px)').matches && advantagesSlider === undefined) {
    advantagesSlider = new Swiper('.advantages__swiper', {
      // Navigation arrows
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: '.advantages__slider-next',
        prevEl: '.advantages__slider-prev',
        disabledClass: 'advantages__slider-disabled'
      },
      breakpointsBase: 'container',
      breakpoints: {
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 30,
          initialSlide: 1,
        }
      },
    });
  } else if(window.matchMedia('(max-width: 1439px)').matches && advantagesSlider !== undefined){
    advantagesSlider.destroy();
    advantagesSlider = undefined;
  }
};

window.addEventListener('load', () => {
  initAdvantageSlider();
});

window.addEventListener('resize', () => {
  initAdvantageSlider();
});

new Swiper('.gallery__swiper', {
  // Navigation arrows
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.gallery__slider-next',
    prevEl: '.gallery__slider-prev',
    disabledClass: 'advantages__slider-disabled'
  },
  breakpointsBase: 'container',
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 5,
      enabled: false
    }
  },
});
//breakpoints: { 320: { enabled: false, }, 768: { enabled: true, } }
