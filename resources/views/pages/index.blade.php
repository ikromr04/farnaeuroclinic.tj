@extends('layouts.app')

@section('title', __('Главная') . ' | ')

@section('content')
  <main class="flex flex-col gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
    <h1 class="sr-only">{{ __('Farna Euroclinic') }}</h1>

    <x-blocks.banners :banners="$data->banners" />

    <x-blocks.advantages />

    <x-blocks.doctors :doctors="$data->doctors" />

    <x-blocks.popular-programs :articles="$data->articles" />

    <x-blocks.reviews :reviews="$data->reviews" />

    <x-application />
  </main>
@endsection
