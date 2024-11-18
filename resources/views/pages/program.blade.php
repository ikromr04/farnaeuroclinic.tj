@extends('layouts.app')

@section('title', __('Пациентам') . ' | ')

@section('content')
  <main>
    <h1 class="sr-only">{{ __('Пациентам') }}</h1>

    <div class="relative z-0 patients-swiper bg-brand text-white overflow-hidden md:px-[5vw] lg:px-20 lg:w-[90vw] lg:max-w-[1150px] lg:mx-auto lg:rounded-[10px] mb-8 md:mb-10">
      <div class="swiper">
        <div class="swiper-wrapper">
          @foreach ($data->banners as $banner)
            <div class="swiper-slide md:flex md:items-center md:gap-11 md:py-12 xl:py-10 lg:gap-8 xl:gap-24">
              <div class="mx-auto max-w-[90vw] pt-8 pb-14 md:max-w-none md:py-0">
                <h2 class="title mb-5 md:mb-6 lg:mb-8">{{ $banner->title }}</h2>
                <p>{{ $banner->description }}</p>
                @if ($banner->link)
                  <a class="button max-w-max mt-5 md:mt-6 lg:mt-8" href="{{ $banner->link }}">{{ __('Подробнее') }}</a>
                @endif
              </div>
              <img class="hidden md:flex md:min-w-[260px] md:min-h-[260px] lg:min-w-[300px] lg:min-h-[300px] xl:min-w-[320px] xl:min-h-[320px]" src="{{ $banner->image }}" width="260" height="260" alt="{{ $banner->title }}" />
            </div>
          @endforeach
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <svg class="absolute bottom-0 right-0 min-w-[270px] min-h-[270px] transform translate-x-1/2 translate-y-1/2 opacity-10 md:hidden" width="270" height="270">
        <use xlink:href="#icon" />
      </svg>
    </div>

    <x-blocks.advantages class="mb-8 md:mb-12" />

    <x-blocks.program class="mb-5 md:mb-8 lg:mb-11" :program="$data->program" :articles="$data->articles" />

    <x-blocks.reviews class="mb-5 md:mb-8 lg:mb-11" :reviews="$data->reviews" />

    <x-application class="mb-5 md:mb-8 lg:mb-11" />
  </main>
@endsection

@section('scripts')
  <script type="module">
    new Swiper('.program-swiper .swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      spaceBetween: 16,
      pagination: {
        el: '.program-swiper .swiper-pagination',
        clickable: true,
      },
    });

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

    document.querySelector('[name="tel"]').addEventListener('input', (evt) => {
      const phoneNumber = evt.target.value;

      if (phoneNumber.length > 11) {
        evt.target.value = phoneNumber.slice(0, 11);
      }
    });

    document.querySelector('[data-show-more]').addEventListener('click', (evt) => {
      fetch(`/articles?program_id=${evt.target.dataset.programId}&page=${evt.target.dataset.showMore}`)
        .then((response) => response.json())
        .then((data) => {
          if (window.innerWidth < 768) {
            evt.target.previousElementSibling.insertAdjacentHTML('beforeend', data.data.map((article, index) => `
              <li>
                <a class="flex border-b hover:font-semibold" href="/articles/${article.slug}">
                  ${((index+1)+8*(evt.target.dataset.showMore-1)).toString().padStart(2, '0')}. ${article.title}
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
                    <a class="button-brand" href="/articles/${article.slug}#apply">
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
  </script>
@endsection
