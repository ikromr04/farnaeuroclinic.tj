@extends('layouts.app')

@section('title', __('Главная') . ' | ')

@section('content')
  <main class="flex flex-col gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
    <h1 class="sr-only">{{ __('Farna Euroclinic') }}</h1>

    <x-blocks.banners :banners="$data->banners" />

    <x-blocks.advantages :texts="$texts" />

    <x-blocks.doctors :doctors="$data->doctors" :texts="$texts" />

    <x-blocks.popular-programs :programs="$data->programs" :texts="$texts" />

    <x-blocks.reviews :reviews="$data->reviews" :texts="$texts" />

    <x-application :texts="$texts" />
  </main>
@endsection
