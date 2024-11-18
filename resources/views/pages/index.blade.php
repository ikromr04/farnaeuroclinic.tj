@extends('layouts.app')

@section('title', __('Главная') . ' | ')

@section('content')
  <main class="flex flex-col">
    <h1 class="sr-only">{{ __('Farna Euroclinic') }}</h1>

    <x-blocks.banners :banners="$data->banners" />

    <x-blocks.advantages class="my-8 md:my-10 lg:my-12" />

    <x-blocks.doctors class="mb-8 md:mb-10 lg:mb-12" :doctors="$data->doctors" />

    <x-blocks.popular-programs class="mb-8 md:mb-10 lg:mb-12" :articles="$data->articles" />

    <x-blocks.reviews class="mb-8 md:mb-10 lg:mb-12" :reviews="$data->reviews" />

    <x-application class="mb-8 md:mb-10 lg:mb-12" />
  </main>
@endsection
