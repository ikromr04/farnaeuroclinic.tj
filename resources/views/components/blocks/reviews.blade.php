@props(['reviews', 'texts'])

@if ($reviews && $reviews->count())
  <section {{ $attributes->merge([
      'class' => 'relative z-0 flex flex-col md:bg-white md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:w-[90vw] md:max-w-[1150px] md:mx-auto md:mt-[10px]',
  ]) }}>
    <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[.5px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
    <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

    <div class="bg-brand text-white md:bg-transparent md:text-inherit md:m-0 md:p-0 py-8 md:py-0">
      <div class="flex items-center justify-between pl-[5vw] gap-x-4 mb-5 md:p-0">
        <div>
          <div class="title">
            {!! $texts['reviews']->title !!}
          </div>

          {!! $texts['reviews']->content !!}
        </div>

        <a class="text-[15px] font-normal min-h-8 pl-4 py-2 !pr-[5vw] !rounded-r-none md:!pr-4 md:text-white md:bg-brand md:!rounded-r-full min-w-max flex items-center gap-x-2 justify-center border border-white text-brand bg-white rounded-full leading-none px-3">
          {{ __('Все отзывы 5.0') }}
          <svg class="text-[#FAC816] mb-[2px]" width="16" height="16">
            <use xlink:href="#star" />
          </svg>
        </a>
      </div>

      <div class="mx-[5vw] md:mx-0">
        {!! $texts['reviews']->content !!}
      </div>
    </div>

    <div class="relative z-0 reviews-swiper px-[5vw] md:max-w-max md:mx-auto md:p-0 md:mt-8 lg:max-w-full">
      <div class="bg-brand absolute top-0 left-0 w-full h-[150px] md:hidden"></div>
      <div class="swiper sm:max-w-[488px] lg:max-w-full">
        <div class="swiper-wrapper">
          @foreach ($reviews as $review)
            <div class="swiper-slide flex flex-col items-center">
              <x-review-card :review="$review" />
            </div>
          @endforeach
        </div>
      </div>

      <div class="absolute z-10 left-1/2 transform -translate-x-1/2 top-[150px] h-0 w-[calc(240px+80px)] sm:w-[584px] md:w-[calc(100%+96px)] md:top-[160px]">
        <button class="swiper-button-prev after:hidden absolute left-0 !m-0 flex w-8 h-8 transform -translate-y-1/2 justify-center items-center rounded-full bg-brand border border-white pr-[2px]" type="button">
          <svg class="flex text-white !w-2 !h-4" width="8" height="16">
            <use xlink:href="#prev" />
          </svg>
        </button>
        <button class="swiper-button-next after:hidden absolute right-0 !m-0 flex w-8 h-8 transform -translate-y-1/2 justify-center items-center rounded-full bg-brand border border-white pl-[2px]" type="button">
          <svg class="flex text-white !w-2 !h-4" width="8" height="16">
            <use xlink:href="#next" />
          </svg>
        </button>
      </div>
    </div>
  </section>
@endif
