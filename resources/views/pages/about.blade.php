@extends('layouts.app')

@section('title', __('О клинике') . ' | ')

@section('content')
  <main class="flex flex-col gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
    <h1 class="sr-only">{{ __('О клинике') }}</h1>

    <x-blocks.about :texts="$texts" />

    <x-blocks.advantages :texts="$texts" />

    <x-blocks.mission :texts="$texts" />

    <x-blocks.vision :texts="$texts" />

    <x-blocks.values :texts="$texts" />

    <x-blocks.reviews :reviews="$data->reviews" :texts="$texts" />

    <x-application :texts="$texts" />
  </main>
@endsection
