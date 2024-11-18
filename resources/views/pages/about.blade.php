@extends('layouts.app')

@section('title', __('О клинике') . ' | ')

@section('content')
  <main>
    <h1 class="sr-only">{{ __('О клинике') }}</h1>

    <div class="bg-brand mb-10 lg:bg-transparent">
      <div class="container text-white py-8 md:py-10 lg:rounded-[10px] lg:py-10 lg:px-20 about-vitrin">
        <strong class="flex text-[24px] md:text-[26px] xl:text-[32px] leading-[1.2] font-semibold mb-8 md:mb-5 lg:max-w-[530px] xl:max-w-[588px]">
          {{ __('Farna EUROCLINIC – это центр передовых репродуктивных технологий, где наука и опыт сливаются воедино.') }}
        </strong>
        <div class="mb-8 md:mb-5 lg:max-w-[510px] xl:max-w-[530px]">
          <p class="pb-2 border-b border-b-[#50C1B7] mb-2">
            {{ __('Наша команда, состоящая из признанных мировых экспертов, применяет инновационные подходы и персонализированные программы лечения, основанные на последних научных исследованиях.') }}
          </p>
          <p class="pb-2 border-b border-b-[#50C1B7] mb-2">
            {{ __('Благодаря непрерывной работе над совершенствованием наших методик, мы предлагаем пациентам максимальные шансы на успешную беременность.') }}
          </p>
          <p>
            {{ __('Выбирая FARNA EUROCLINIC, вы доверяете свое здоровье и мечту о ребенке лучшим специалистам в области репродуктивной медицины.') }}
          </p>
        </div>

        <div class="flex items-center flex-wrap gap-x-5 gap-y-3">
          <a class="button" href="#application">{{ __('Консультация') }}</a>
          <a class="flex items-center border px-2 rounded-[5px] h-8 md:h-10 md:px-5 leading-none" href="tel:2000000">{{ __('По телефону – 200-00-00') }}</a>
        </div>
      </div>
    </div>

    <x-blocks.advantages class="mb-8 md:mb-12" />

    <x-blocks.mission class="mb-5 md:mb-8 lg:mb-11" />

    <x-blocks.vision class="mb-5 md:mb-8 lg:mb-11" />

    <x-blocks.values class="mb-8 md:mb-8 lg:mb-11" />

    <x-blocks.reviews class="mb-8 md:mb-8 lg:mb-11" :reviews="$data->reviews" />

    <x-application class="mb-8 md:mb-8 lg:mb-11" />
  </main>
@endsection

@section('scripts')
  <script type="module">
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
  </script>
@endsection
