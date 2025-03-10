@php
  $routeName = Route::currentRouteName();
@endphp

<nav class="fixed top-0 left-0 flex flex-col-reverse justify-end transform transition-all duration-300 w-screen z-10 -translate-y-full group-[.menu-shown]:translate-y-0 md:translate-y-0 md:static md:flex-row">
  <ul class="flex flex-col gap-[6px] md:flex-row md:items-center md:gap-0">
    <li>
      <a class="navlink{{ $routeName == 'about' ? ' active' : ' ' }}" href="{{ route('about') }}">
        {{ __('О клинике') }}
      </a>
    </li>
    <li>
      <a class="navlink{{ $routeName == 'forpatient' ? ' active' : ' ' }}" href="{{ route('forpatient') }}">
        {{ __('Пациентам') }}
      </a>
    </li>
    <li>
      <a class="navlink{{ $routeName == 'doctors' ? ' active' : ' ' }}" href="{{ route('doctors') }}">
        {{ __('Врачи') }}
      </a>
    </li>
    <li>
      <a class="navlink{{ $routeName == 'services&prices' ? ' active' : ' ' }}" href="{{ route('services&prices') }}">
        {{ __('Услуги и прайс') }}
      </a>
    </li>
    <li>
      <a class="navlink" href="#contacts">
        {{ __('Контакты') }}
      </a>
    </li>
    <li class="md:ml-3">
      <button class="flex justify-center w-full min-h-10 text-white font-semibold bg-brand items-center border-b-[#D3D3D3] md:border md:border-brand mt-4 text-center transition-all duration-300 hover:bg-transparent hover:text-brand md:mt-0 md:py-2 md:px-5 md:rounded-[10px] md:leading-none md:gap-x-3 md:font-normal" data-modal-show onclick="window.document.body.classList.remove('menu-shown')">
        <svg class="sr-only md:not-sr-only" width="17" height="18">
          <use xlink:href="#apply" />
        </svg>
        {{ __('Записаться') }}
      </button>
    </li>
  </ul>

  <div class="container flex items-center justify-between py-7 md:hidden">
    <x-layouts.main-logo />

    <button class="flex items-center justify-center w-11 h-11 text-brand" type="button" onclick="window.document.body.classList.remove('menu-shown')">
      <span class="sr-only">{{ __('Скрыть меню') }}</span>
      <svg width="18" height="18">
        <use xlink:href="#x" />
      </svg>
    </button>
  </div>
</nav>
