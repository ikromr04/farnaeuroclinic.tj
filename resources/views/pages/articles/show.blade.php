@extends('layouts.app')

@section('title', $data->article->title . ' | ')

@section('content')
  <main class="flex flex-col gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
    <div class="bg-brand py-8 md:py-20">
      <div class="container text-white">
        <h1 class="text-2xl md:text-[26px] lg:text-[32px] font-semibold leading-[1.2] max-w-[580px] xl:max-w-[864px] mb-5 md:mb-6 lg:mb-8">{{ $data->article->title }}</h1>

        <p class="max-w-[560px] xl:max-w-[800px]">{{ $data->article->description }}</p>

        <div class="flex items-center flex-wrap gap-x-5 gap-y-3  mt-5 md:mt-6 lg:mt-8">
          <a class="button" href="#application">{{ __('Записаться') }}</a>
          <a class="flex items-center border px-2 rounded-[5px] h-8 md:h-10 md:px-5 leading-none" href="tel:2000000">{{ __('По телефону – 200-00-00') }}</a>
        </div>
      </div>
    </div>

    <div class="container flex flex-col gap-8 md:gap-10 lg:gap-12 md:block">
      <div class="hidden relative z-10 md:block float-left border bg-white border-brand rounded-[10px] mr-10 lg:mr-14 mb-6 min-w-[270px] max-w-[270px] lg:min-w-[430px] lg:max-w-[430px] overflow-hidden">
        <div class="hidden md:block pointer-events-none absolute -top-[5px] -left-[1px] h-10 rounded-[10px] bg-brand w-[120px] -z-10"></div>
        <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>
        <ul class="p-10 flex flex-col gap-y-2">
          @foreach ($data->article->blocks as $block)
            <li>
              <a class="block text-xl max-w-max leading-none border-b border-[#222222] border-opacity-50 border-dashed pt-1" href="#{{ $block->slug }}">
                {{ $block->short_title }}
              </a>
            </li>
          @endforeach
          <li>
            <a class="block text-xl max-w-max leading-none border-b border-[#222222] border-opacity-50 border-dashed pt-1" href="#articles">
              {{ __('Статьи по теме') }}
            </a>
          </li>
          <li>
            <a class="block text-xl max-w-max leading-none border-b border-[#222222] border-opacity-50 border-dashed pt-1" href="#application">
              {{ __('Записаться на приём') }}
            </a>
          </li>
        </ul>

        <svg class="absolute z-10 top-4 pointer-events-none right-4 hidden lg:block min-w-[380px] min-h-[380px] transform translate-x-1/2 -translate-y-1/2 text-brand opacity-10" width="270" height="270">
          <use xlink:href="#icon" />
        </svg>
      </div>

      <div class="relative group" data-sizable-wrapper>
        <ul class="hidden md:flex absolute top-0 right-0 items-center py-3 px-5 bg-opacity-10 bg-brand float-left w-[calc(100%-290px)] lg:w-[calc(100%-470px)] mb-4 leading-none">
          <li class="min-w-max">
            <a href="{{ route('forpatient') }}">{{ __('Пациентам') }}</a>
            <span class="inline-block pl-[3px] pr-[5px]">|</span>
          </li>
          <li class="min-w-max">
            <a href="{{ route('program', $data->article->category->slug) }}">{{ $data->article->category->name }}</a>
            <span class="text-brand inline-block transform translate-y-[1px] px-1"> > </span>
          </li>
          <li class="font-light line-clamp-1">
            {{ $data->article->title }}
          </li>
        </ul>
        <div class="transition-all duration-300 max-h-[90px] overflow-hidden md:!max-h-none md:inline" data-sizable="90">
          <div class="md:mx-5 md:pt-16 plate lg:mx-10">
            {!! $data->article->info !!}
          </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0 md:hidden"></div>
      </div>

      <div class="relative md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white flex flex-col gap-8 md:mt-12 xl:mt-14 mb-8 md:mb-10 lg:mb-12">
        <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
        <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

        @foreach ($data->article->blocks as $block)
          <section id="{{ $block->slug }}">
            <h2 class="title mb-2">
              <span class="md:hidden">{{ $block->short_title }}</span>
              <span class="hidden md:inline">{{ $block->title }}</span>
            </h2>

            <div class="relative group" data-sizable-wrapper>
              <div class="transition-all duration-300 max-h-[90px] overflow-hidden md:!max-h-none" data-sizable="90">
                {!! $block->content !!}
              </div>
              <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0 md:hidden"></div>
            </div>
          </section>
        @endforeach

        @if ($data->articles && $data->articles->count())
          <div class="relative articles-swiper md:flex md:items-center md:justify-center md:mx-auto md:w-auto xl:block xl:max-w-full mt-8" id="articles">
            <div class="swiper md:h-[448px] xl:h-auto">
              <div class="swiper-wrapper">
                @foreach ($data->articles as $article)
                  <div class="swiper-slide">
                    <x-article-card :article="$article" />
                  </div>
                @endforeach
              </div>
            </div>

            <div class="static swiper-pagination mt-6 flex justify-center gap-1 md:flex-col md:gap-2 md:mt-0 md:absolute md:-ml-[5px] md:!left-[calc(100%+40px)] xl:flex-row xl:static xl:mt-10"></div>
        @endif
      </div>
    </div>

    <x-application />
  </main>
@endsection
