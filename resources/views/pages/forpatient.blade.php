@extends('layouts.app')

@section('title', __('Пациентам') . ' | ')

@section('content')
  <main class="flex flex-col gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
    <h1 class="sr-only">{{ __('Пациентам') }}</h1>

    <x-blocks.banners :banners="$data->banners" />

    <x-blocks.advantages :texts="$texts" />

    <x-blocks.program-categories :categories="$data->programCategories" />

    <x-blocks.reviews :reviews="$data->reviews" />

    <x-application />
  </main>
@endsection
