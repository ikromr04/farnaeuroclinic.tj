@php
  $routeName = Route::currentRouteName();
  $isHomePage = $routeName !== 'home';
@endphp

<a class="flex min-w-max max-w-max min-h-max max-h-max" @if ($isHomePage) href="{{ route('home') }}" @endif>
  <picture>
    <source media="(min-width: 1024px)" srcSet="/images/main-logo.desktop.svg" width="174" height="60" />
    <source media="(min-width: 768px)" srcSet="/images/main-logo.tablet.svg" width="60" height="60" />
    <source srcSet="/images/main-logo.mobile.svg" width="95" height="60" />
    <img src="/images/main-logo.mobile.svg" alt="{{ $isHomePage ? 'Логотип Farna Euroclinic' : 'На главную страницу' }}" />
  </picture>
</a>
