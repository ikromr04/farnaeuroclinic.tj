import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { ru } from 'intl-tel-input/i18n';

const
  input = document.querySelector('[name="phone"]'),
  bannersWrapper = document.querySelector('.banners'),
  doctorsSwiper = document.querySelector('.doctors-swiper'),
  articlesSwiper = document.querySelector('.articles-swiper'),
  reviewsSwiper = document.querySelector('.reviews-swiper'),
  wrappers = document.querySelectorAll('[data-sizable-wrapper]'),

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

wrappers.forEach((wrapper) => {
  const sizableElement = wrapper.querySelector('[data-sizable]');
  if (!sizableElement) return;

  wrapper.addEventListener('mouseenter', () => {
    if (!wrapper.classList.contains('shown')) {
      wrapper.classList.add('shown');
      setMaxHeight(wrapper, true);
    }
  });

  wrapper.addEventListener('mouseleave', () => {
    if (wrapper.classList.contains('shown')) {
      wrapper.classList.remove('shown');
      setMaxHeight(wrapper, false);
    }
  });
});

document.addEventListener('click', (evt) => {
  const clickedWrapper = evt.target.closest('[data-sizable-wrapper]');
  const activeWrapper = document.querySelector('.shown[data-sizable-wrapper]');

  if (activeWrapper && activeWrapper !== clickedWrapper) {
    activeWrapper.classList.remove('shown');
    setMaxHeight(activeWrapper, false);
  }

  if (clickedWrapper && !clickedWrapper.classList.contains('shown')) {
    clickedWrapper.classList.add('shown');
    setMaxHeight(clickedWrapper, true);
  }
});

