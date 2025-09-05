@extends('layouts.app')

@section('title', __('Услуги') . ' | ')

@section('content')
  <main class="flex flex-col gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12 prices-page">
    <section class="relative group md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white md:mx-auto md:w-[90vw] md:max-w-[1150px] md:mt-[10px]">
      <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
      <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

      <div class="container md:w-full">
        @foreach ($data->categories as $category)
          <div class="border-brand border-b flex justify-between font-semibold mb-2 pt-10">
            <span>{!! $category->title !!}</span>
          </div>

          <ul>
            @foreach ($category->programs as $program)
              <li>
                <div class="flex justify-between border-[#222222] border-dashed border-b border-opacity-20 pt-2 transition-all duration-300 hover:font-semibold">
                  <span>{{ $program->title }}</span>
                </div>
              </li>
            @endforeach
          </ul>
        @endforeach


        {{-- <div class="flex justify-between items-center mt-5">

          <button class="button-brand !min-h-8 md:!min-h-10 gap-1" type="button" data-modal-show>
            {{ __('Записаться') }} <span class="sr-only md:not-sr-only">{{ __('на прием') }}</span>
          </button>
        </div> --}}
      </div>
    </section>
  </main>
@endsection
