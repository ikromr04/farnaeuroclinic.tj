@php
  $routeName = Route::currentRouteName();
@endphp

<nav class="fixed top-0 left-0 flex flex-col-reverse justify-end transform transition-all duration-300 w-screen z-10 -translate-y-full group-[.menu-shown]:translate-y-0 md:translate-y-0 md:static md:flex-row">
  <ul class="flex flex-col gap-[6px] md:flex-row md:items-center md:gap-0">
    <li>
      <a class="navlink" @if($routeName !== 'about') href="{{ route('about') }}" @endif>
        {{ __('О клинике') }}
      </a>
    </li>
    <li>
      <a class="navlink" @if($routeName !== 'forpatient') href="{{ route('forpatient') }}" @endif>
        {{ __('Пациентам') }}
      </a>
    </li>
    <li>
      <a class="navlink" @if($routeName !== 'doctors') href="{{ route('doctors') }}" @endif>
        {{ __('Врачи') }}
      </a>
    </li>
    <li>
      <a class="navlink" @if($routeName !== 'services&prices') href="{{ route('services&prices') }}" @endif>
        {{ __('Услуги и прайс') }}
      </a>
    </li>
    <li>
      <a class="navlink" @if($routeName !== 'contacts') href="{{ route('contacts') }}" @endif>
        {{ __('Контакты') }}
      </a>
    </li>
    <li>
      <a class="flex justify-center min-h-10 text-white font-semibold bg-brand items-center border-b-[#D3D3D3] mt-4 text-center transition-all duration-300 hover:bg-transparent hover:text-brand md:mt-0 md:py-2 md:px-5 md:rounded-[10px] md:ml-3 md:leading-none md:gap-x-3 md:font-normal" @if($routeName !== 'apply') href="{{ route('apply') }}" @endif>
        <svg class="sr-only md:not-sr-only" width="17" height="18">
          <use xlink:href="#apply" />
        </svg>
        {{ __('Записаться') }}
      </a>
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
