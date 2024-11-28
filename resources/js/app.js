import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { ru } from 'intl-tel-input/i18n';

const
  inputs = document.querySelectorAll('[name="phone"]'),
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

if (inputs) {
  inputs.forEach((input) => {
    intlTelInput(input, {
      i18n: ru,
      initialCountry: 'tj',
      separateDialCode: true,
    });
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

if (document.querySelector('.category-page')) {
  document.querySelector('[data-show-more]').addEventListener('click', (evt) => {
    fetch(`/program?category_id=${evt.target.dataset.categoryId}&page=${evt.target.dataset.showMore}`)
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
                  <a class="underline" href="/services/${article.slug}">
                    Подробнее
                  </a>
                  <a class="button-brand" href="/programs/${article.slug}">
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

if (document.querySelector('.services-page')) {
  document.querySelector('[data-show-more]').addEventListener('click', (evt) => {
    fetch(`/program?page=${evt.target.dataset.showMore}`)
      .then((response) => response.json())
      .then((data) => {
        if (window.innerWidth < 768) {
          evt.target.previousElementSibling.insertAdjacentHTML('beforeend', data.data.map((article, index) => `
            <li>
              <a class="flex border-b hover:font-semibold" href="/programs/${article.slug}">
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
                  <a class="underline" href="/services/${article.slug}">
                    Подробнее
                  </a>
                  <a class="button-brand" href="/programs/${article.slug}">
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

if (document.querySelector('.doctors-page')) {
  document.querySelector('[data-show-more]').addEventListener('click', (evt) => {
    fetch(`/doctor?page=${evt.target.dataset.showMore}`)
      .then((response) => response.json())
      .then((data) => {
        if (window.innerWidth < 768) {
          evt.target.parentElement.previousElementSibling.insertAdjacentHTML('beforeend', data.data.map((doctor) => `
            <li>
              <article class="max-w-full">
                <a class="grid grid-cols-[80px_1fr] gap-5" href="/doctors/${doctor.slug}">
                  <img class="flex w-20 h-20 object-cover object-top rounded-full bg-slate-200" src="/images/doctors/${doctor.avatar}" width="240" height="360" alt="${doctor.name}">

                  <div>
                    <p class="mb-3">${doctor.position.split('\n')[0]}</p>

                    <h2 class="font-light">${doctor.name}</h2>
                  </div>
                </a>
              </article>
            </li>
          `).join(' '))
        } else {
          evt.target.parentElement.previousElementSibling.insertAdjacentHTML('beforeend', data.data.map((doctor) => `
            <li>
             <article class="relative flex-col md:w-full md:mt-[5px] hidden md:flex">
                <style>
                  .doctor-avatar:hover span {
                    color: #00a596;
                    background-color: white;
                  }
                </style>
                <div class="hidden md:block pointer-events-none absolute -top-[5px] left-0 h-10 rounded-[10px] bg-brand w-[120px] -z-10"></div>

                <a class="relative doctor-avatar flex border border-brand rounded-[10px] w-[240px] h-[240px] overflow-hidden mb-5 md:h-[360px] md:w-full" href="/doctors/${doctor.slug}">
                  <img class="absolute w-full h-full object-cover object-top transition-all origin-top duration-300 xl:hover:scale-125 bg-slate-200" src="/images/doctors/${doctor.avatar}" width="240" height="360" alt="${doctor.name}">
                  <span class="absolute -bottom-[1px] -right-[1px] button-brand">
                    Записаться
                  </span>
                </a>

                <p class="mb-3">${doctor.position.split('\n')[0]}</p>

                <h2 class="font-light">${doctor.name}</h2>
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

if (document.querySelector('.prices-page')) {
  document.querySelector('[data-show-more]').addEventListener('click', (evt) => {
    fetch(`/prices?page=${evt.target.dataset.showMore}`)
      .then((response) => response.json())
      .then((data) => {
        evt.target.parentElement.previousElementSibling.insertAdjacentHTML('beforeend', data.data.map((program) => `
            <li>
              <a class="flex justify-between border-[#222222] border-dashed border-b border-opacity-20 pt-2 transition-all duration-300 hover:font-semibold" href="/programs/${program.slug}">
                <span>${program.title}</span>
                <span>${program.price}, сом.</span>
              </a>
            </li>
          `).join(' '))
        if (+data.last_page === +evt.target.dataset.showMore) {
          evt.target.remove();
        } else {
          ++evt.target.dataset.showMore
        }
      })
  });
}

document.addEventListener('click', (evt) => {
  if (evt.target.closest('[data-modal-show')) {
    document.body.classList.add('modal-shown');
    if (evt.target.dataset.doctorId) {
      document.body.setAttribute('data-doctor-id', evt.target.dataset.doctorId);
    }
  }

  if (evt.target.hasAttribute('data-modal-close')) {
    document.body.classList.remove('modal-shown');
    document.body.removeAttribute('data-doctor-id');
  }

  if (evt.target.hasAttribute('data-apply-form')) {
    evt.preventDefault();
    const
      form = evt.target.closest('form'),
      dialCode = form.querySelector('.iti__selected-dial-code').textContent;

    if (!form.name.value) {
      form.name.parentElement.nextElementSibling.classList.remove('hidden');
      form.name.addEventListener('input', () => form.name.parentElement.nextElementSibling.classList.add('hidden'))
      return;
    }
    if (!form.tel.value) {
      form.tel.parentElement.nextElementSibling.classList.remove('hidden')
      form.tel.addEventListener('input', () => form.tel.parentElement.nextElementSibling.classList.add('hidden'))
      return;
    }

    evt.target.classList.add('submitting');
    evt.target.setAttribute('disabled', 'disabled');

    fetch(`/apply?name=${form.name.value.trim()}&code=${dialCode}&tel=${form.tel.value.trim()}&doctor=${document.body.dataset.doctorId?.trim() || ''}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        form.reset();
        form.children[0].classList.remove('hidden')
        setTimeout(() => {
          form.children[0].classList.add('hidden')
        }, 5000);
        evt.target.classList.remove('submitting');
        evt.target.removeAttribute('disabled');
      });
  }
});
