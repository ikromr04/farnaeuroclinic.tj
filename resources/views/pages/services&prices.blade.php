@extends('layouts.app')

@section('title', __('Услуги и прайс') . ' | ')

@section('content')
  <main class="flex flex-col gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12 prices-page">
    <section class="relative group md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white md:mx-auto md:w-[90vw] md:max-w-[1150px] md:mt-[10px]">
      <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
      <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

      <div class="container md:w-full">
        <div class="border-brand border-b flex justify-between font-semibold mb-2">
          <span>{{ __('Название') }}</span>
          <span class="whitespace-pre-line text-end leading-[1.2] md:whitespace-normal">{{ __("Стоимость, \n сом.") }}</span>
        </div>

        <ul>
          @foreach ($data->program as $program)
            <li>
              <a class="flex justify-between border-[#222222] border-dashed border-b border-opacity-20 pt-2 transition-all duration-300 hover:font-semibold" href="{{ route('program', $program->slug) }}">
                <span>{{ $program->title }}</span>
                <span>{{ $program->price }}.00</span>
              </a>
            </li>
          @endforeach
        </ul>

        <div class="flex justify-between items-center mt-5">
          <button class="button !bg-brand !text-white gap-x-2" type="button" data-show-more="2">
            {{ __('Показать ещё') }}
            <svg width="12" height="6">
              <use xlink:href="#arrow-down" />
            </svg>
          </button>

          <button class="button-brand !min-h-8 md:!min-h-10 gap-1" type="button" data-modal-show>
            {{ __('Записаться') }} <span class="sr-only md:not-sr-only">{{ __('на прием') }}</span>
          </button>
        </div>
      </div>
    </section>
  </main>
@endsection
