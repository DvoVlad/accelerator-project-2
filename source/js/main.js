import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './menu';
import './form';

const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
    bulletElement: 'button',
    renderBullet: function (index, className) {
      return `<button class="${className}" type="button"><span class="visually-hidden">Элемент пагинации ${index + 1}</span></button>`;
    },
  },
  breakpointsBase: 'container',
  breakpoints: {
    1440: {
      allowTouchMove: false
    }
  },
  on: {
    afterInit: function() {
      const heroButtons = document.querySelectorAll('.hero__button');
      const activeButton = document.querySelector('.swiper-slide-active').querySelector('.hero__button');
      for(let i = 0; i < heroButtons.length; i++) {
        heroButtons[i].setAttribute('tabindex', -1);
      }
      activeButton.setAttribute('tabindex', 0);
    }
  }
});

heroSwiper.on('slideChangeTransitionEnd', () => {
  const heroButtons = document.querySelectorAll('.hero__button');
  const activeButton = document.querySelector('.swiper-slide-active').querySelector('.hero__button');
  for(let i = 0; i < heroButtons.length; i++) {
    heroButtons[i].setAttribute('tabindex', -1);
  }
  activeButton.setAttribute('tabindex', 0);
});

new Swiper('.tours__swiper', {
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

const reviewsSlider = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  autoHeight: true,
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
    disabledClass: 'reviews__slider-disabled'
  },
  breakpointsBase: 'container',
  breakpoints: {
    290: {
      slidesPerView: 1,
      allowTouchMove: true
    },
    1160: {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove: true
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
          allowTouchMove: false
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
      enabled: true
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
      enabled: true
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 5,
      enabled: false
    }
  },
});

const form = document.querySelector('.form__send-form');
const sendButton = document.querySelector('.form__submit');
sendButton.addEventListener('click', () => {
  form.classList.add('form__send-form--sended');
});

/* observer я использовал для того чтобы корректно отрабатывало переполнение в слайдере с параметром autoHeight:true*/

const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    reviewsSlider.update();
  });
});

const reviewsBlocks = document.querySelectorAll('.reviews__text-wrapper');

for (let i = 0; i < reviewsBlocks.length; i++) {
  observer.observe(
    reviewsBlocks[i],
    {
      childList: true,
      attributes: true,
      subtree: true,
      characterData: true,
      attributeOldValue: true,
      characterDataOldValue: true
    }
  );
}

const reviewsPictureBlocks = document.querySelectorAll('.reviews__picture-wrapper');

for (let i = 0; i < reviewsPictureBlocks.length; i++) {
  observer.observe(
    reviewsPictureBlocks[i],
    {
      childList: true,
      attributes: true,
      subtree: true,
      characterData: true,
      attributeOldValue: true,
      characterDataOldValue: true
    }
  );
}
