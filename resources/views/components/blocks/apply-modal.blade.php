@props(['texts'])

<div class="fixed top-0 left-0 transition-all duration-300 z-20 flex items-center justify-center bg-white w-full h-full sm:bg-black sm:bg-opacity-60 invisible opacity-0 group-[.modal-shown]:visible group-[.modal-shown]:opacity-100" data-modal-close>
  <div class="flex items-center justify-center w-full h-full bg-white rounded-[10px] flex-col sm:w-max sm:h-max">
    <button class="flex items-center justify-center w-11 h-11 text-brand ml-auto m-2 sm:hidden" type="button" onclick="window.document.body.classList.remove('modal-shown')">
      <span class="sr-only">{{ __('Скрыть меню') }}</span>
      <svg width="18" height="18">
        <use xlink:href="#x" />
      </svg>
    </button>
    <x-application class="!mt-0" :texts="$texts" />
  </div>
</div>
