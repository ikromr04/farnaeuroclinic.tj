import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { ru } from 'intl-tel-input/i18n';

const
  input = document.querySelector('[name="phone"]'),
  bannersWrapper = document.querySelector('.banners'),
  doctorsSwiper = document.querySelector('.doctors-swiper'),
  articlesSwiper = document.querySelector('.articles-swiper'),
  reviewsSwiper = document.querySelector('.reviews-swiper'),
  programsSwiper = document.querySelector('.programs-swiper'),
  valuesWrapper = document.querySelector('[data-shown]'),

  setMaxHeight = (wrapper, expanded) => {
    const sizable = wrapper.querySelector('[data-sizable]');
    sizable.style.maxHeight = expanded
      ? `${sizable.scrollHeight}px`
      : `${sizable.dataset.sizable}px`;
  };

if (input) {
  intlTelInput(input, {
    i18n: ru,
    initialCountry: 'tj',
    separateDialCode: true,
  });
}

if (bannersWrapper) {
  new Swiper('.banners .swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    spaceBetween: 16,
    pagination: {
      el: '.banners .swiper-pagination',
      clickable: true,
    },
  });
}

if (doctorsSwiper) {
  new Swiper('.doctors-swiper .swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    spaceBetween: 8,
    navigation: {
      nextEl: '.doctors-swiper .swiper-button-next',
      prevEl: '.doctors-swiper .swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      }
    }
  });
}

if (articlesSwiper) {
  new Swiper('.articles-swiper .swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: '.articles-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 10,
      }
    }
  });
}

if (reviewsSwiper) {
  new Swiper('.reviews-swiper .swiper', {
    loop: true,
    spaceBetween: 8,
    navigation: {
      nextEl: '.reviews-swiper .swiper-button-next',
      prevEl: '.reviews-swiper .swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      }
    }
  });
}

if (programsSwiper) {
  new Swiper('.programs-swiper .swiper', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    spaceBetween: 16,
    pagination: {
      el: '.programs-swiper .swiper-pagination',
      clickable: true,
    },
  });
}

document.addEventListener('click', (evt) => {
  const
    clickedWrapper = evt.target.closest('[data-sizable-wrapper]'),
    activeWrapper = document.querySelector('.shown[data-sizable-wrapper]');

  if (clickedWrapper) {
    if (activeWrapper && activeWrapper !== clickedWrapper) {
      activeWrapper.classList.remove('shown');
      setMaxHeight(activeWrapper, false);
    }

    if (clickedWrapper.classList.contains('shown')) {
      clickedWrapper.classList.remove('shown');
      setMaxHeight(clickedWrapper, false);
    } else {
      clickedWrapper.classList.add('shown');
      setMaxHeight(clickedWrapper, true);
    }
  }

  if (activeWrapper) {
    activeWrapper.classList.remove('shown');
    setMaxHeight(activeWrapper, false);
  }
});

if (valuesWrapper) {
  valuesWrapper.addEventListener('click', (evt) => {
    const valueItem = evt.target.closest('[data-show]');

    if (valueItem) {
      if (valuesWrapper.dataset.shown == valueItem.dataset.show) {
        valuesWrapper.setAttribute('data-shown', '');
      } else {
        if (+valueItem.dataset.show < 4) {
          document.querySelector('.shown[data-show="4"]')?.classList.remove('shown');
          document.querySelector('.shown[data-show="5"]')?.classList.remove('shown');
        }
        valuesWrapper.setAttribute('data-shown', valueItem.dataset.show);
      }
    }
  });

  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('[data-show]')) {
      valuesWrapper.setAttribute('data-shown', '');
      document.querySelector('.shown[data-show]')?.classList.remove('shown');
    }

    if (evt.target.closest('[data-show="4"]')) {
      valuesWrapper.setAttribute('data-shown', '');
      document.querySelector('.shown[data-show="5"]')?.classList.remove('shown');
    }

    if (evt.target.closest('[data-show="5"]')) {
      valuesWrapper.setAttribute('data-shown', '');
      document.querySelector('.shown[data-show="4"]')?.classList.remove('shown');
    }
  });
}
