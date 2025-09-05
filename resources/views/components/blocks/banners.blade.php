@props(['banners'])

@if ($banners && $banners->count())
  <div {{ $attributes->merge([
      'class' => 'relative z-0 banners text-white overflow-hidden lg:w-[90vw] lg:max-w-[1150px] lg:mx-auto lg:rounded-[10px]',
  ]) }}>
    <div class="swiper">
      <div class="swiper-wrapper">
        @foreach ($banners as $banner)
          <div class="swiper-slide md:flex md:items-center md:gap-11 md:py-12 xl:py-10 lg:gap-8 xl:gap-24 md:px-[5vw] lg:px-20">
            <div class="pointer-events-none absolute top-0 left-0 -z-10 w-full h-full" style="background-color: {{ $banner->color }}"></div>
            <div class="mr-auto max-w-[90vw] pt-8 pb-14 md:max-w-none md:py-0">
              <h2 class="text-2xl md:text-[26px] lg:text-[32px] font-semibold leading-[1.2] mb-5 md:mb-6 lg:mb-8">{{ $banner->title }}</h2>
              <p>{!! $banner->description !!}</p>
              @if ($banner->link)
                <a class="button max-w-max mt-5 md:mt-6 lg:mt-8" href="{{ $banner->link }}">{{ __('Подробнее') }}</a>
              @endif
            </div>
            <img class="hidden object-cover md:flex md:min-w-[260px] md:min-h-[260px] lg:min-w-[300px] lg:min-h-[300px] xl:min-w-[320px] xl:min-h-[320px]" src="{{ asset($banner->image) }}" width="260" height="260" alt="{{ $banner->title }}" />
          </div>
        @endforeach
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <svg class="absolute bottom-0 right-0 min-w-[270px] min-h-[270px] transform translate-x-1/2 translate-y-1/2 opacity-10 md:hidden" width="270" height="270">
      <use xlink:href="#icon" />
    </svg>
  </div>
@endif
