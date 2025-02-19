@extends('layouts.app')

@section('title', __('О клинике') . ' | ')

@section('content')
  <main class="flex flex-col gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
    <h1 class="sr-only">{{ __('О клинике') }}</h1>

    <x-blocks.about />

    <x-blocks.advantages :texts="$texts" />

    <x-blocks.mission />

    <x-blocks.vision />

    <x-blocks.values />

    <x-blocks.reviews :reviews="$data->reviews" />

    <x-application />
  </main>
@endsection
