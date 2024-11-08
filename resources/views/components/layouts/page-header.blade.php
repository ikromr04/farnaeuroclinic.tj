<header class="container z-10 flex items-center justify-between py-7 after:content-[''] after:fixed after:top-0 after:left-0 after:w-screen after:h-screen after:transition-all after:duration-300 after:pointer-events-none group-[.menu-shown]:after:bg-white group-[.menu-shown]:after:pointer-events-auto md:after:hidden md:pt-14">
  <x-layouts.main-logo />

  <x-layouts.page-navigation />

  <button class="flex items-center justify-center w-11 h-11 text-brand md:hidden" type="button" onclick="window.document.body.classList.add('menu-shown')">
    <span class="sr-only">{{ __('Показать меню') }}</span>
    <svg width="24" height="18">
      <use xlink:href="#menu" />
    </svg>
  </button>
</header>
