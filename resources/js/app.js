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
  valuesLeft = document.querySelector('[data-value-left]'),

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

if (document.querySelector('.program-page')) {
  document.querySelector('[data-show-more]').addEventListener('click', (evt) => {
    fetch(`/articles?program_id=${evt.target.dataset.programId}&page=${evt.target.dataset.showMore}`)
      .then((response) => response.json())
      .then((data) => {
        if (window.innerWidth < 768) {
          evt.target.previousElementSibling.insertAdjacentHTML('beforeend', data.data.map((article, index) => `
            <li>
              <a class="flex border-b hover:font-semibold" href="/articles/${article.slug}">
                ${((index + 1) + 8 * (evt.target.dataset.showMore - 1)).toString().padStart(2, '0')}. ${article.title}
              </a>
            </li>
          `).join(' '))
        } else {
          evt.target.previousElementSibling.previousElementSibling.insertAdjacentHTML('beforeend', data.data.map((article, index) => `
            <li>
              <article class="relative flex flex-col max-w-[90vw] mx-auto sm:h-[204px] sm:pt-10 sm:pr-6 sm:pb-6 sm:pl-10 sm:border sm:border-brand sm:rounded-[10px] mt-[5px]">
                <div class="hidden sm:block pointer-events-none absolute -top-[5px] -left-[.5px] h-10 rounded-[10px] bg-brand w-[240px] -z-10"></div>
                <div class="hidden sm:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

                <h2 class="title mb-3 sm:line-clamp-1 sm:mb-[10px] lg:!text-[26px]">${article.title}</h2>
                <p class="mb-7 sm:line-clamp-2 sm:mb-5 lg:mb-3 xl:mb-5">${article.description}</p>

                <div class="flex justify-between items-center">
                  <a class="underline" href="/articles/${article.slug}">
                    Подробнее
                  </a>
                  <a class="button-brand" href="/articles/${article.slug}">
                    Записаться <span class="hidden sm:inline">&nbsp;на приём</span>
                  </a>
                </div>
              </article>
            </li>
          `).join(' '))
        }

        if (+data.last_page === +evt.target.dataset.showMore) {
          evt.target.remove();
        } else {
          ++evt.target.dataset.showMore
        }
      })
  });
}

if (valuesLeft) {
  document.addEventListener('click', (evt) => {
    const value = evt.target.closest('[data-value-left]');

    if (value) {
      const valueWrapper = evt.target.closest('[data-value]');

      if (valueWrapper.dataset.value == 'left') {
        valueWrapper.setAttribute('data-value', '');
      } else {
        valueWrapper.setAttribute('data-value', 'left');
      }
    } else {
      evt.target.closest('[data-value="left"]')?.setAttribute('data-value', '');
    }
  })
}
