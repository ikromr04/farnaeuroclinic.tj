@extends('layouts.app')

@section('title', __('Главная') . ' | ')

@section('content')
  <main>
    <h1 class="sr-only">Farna Euroclinic</h1>

    <div class="relative z-0 home-vitrin bg-brand text-white overflow-hidden md:px-[5vw] lg:px-20 lg:w-[90vw] lg:max-w-[1150px] lg:mx-auto lg:rounded-[10px] mb-8 md:mb-10">
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

    <x-blocks.advantages class="mb-8 md:mb-10" />
  </main>
@endsection

@section('scripts')
  <script type="module">
    new Swiper('.home-vitrin .swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      spaceBetween: 16,
      pagination: {
        el: '.home-vitrin .swiper-pagination',
        clickable: true,
      },
    });
  </script>
@endsection
