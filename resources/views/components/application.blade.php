<section {{ $attributes->merge([
    'class' => 'container relative z-0 sm:p-10 sm:border sm:border-brand sm:rounded-[10px] md:pl-20 md:pr-12 md:flex md:items-center md:gap-x-10',
]) }}>
  <div class="hidden sm:block pointer-events-none absolute -top-[10px] -left-[.5px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden sm:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="md:min-w-[330px]">
    <h2 class="relative z-10 text-[25px] font-semibold leading-[1.2] whitespace-pre-line mb-5 sm:whitespace-normal">{{ __("Записаться \n на консультацию") }}</h2>

    <form class="flex flex-col mb-5">
      <label class="flex mb-4 border-b border-[#00A596]">
        <span class="sr-only">{{ __('Ваше имя') }}</span>
        <input class="flex w-full bg-transparent border-none placeholder:text-gray-400 p-0 py-1 focus:ring-0 px-[1px]" phone="name" type="text" placeholder="{{ __('Ваше имя') }}">
      </label>

      <label class="flex mb-5 border-b border-[#00A596]">
        <span class="sr-only">{{ __('Телефон') }}</span>
        <input class="hidden" type="tel" name="phone">
        <input class="flex w-full bg-transparent border-none placeholder:text-gray-400 p-0 py-1 !pl-[80px] focus:ring-0 px-[1px]" type="number" autocomplete="off" name="tel" pattern="^\d{3} \d{2} \d{2} \d{2}$" placeholder="987 65 43 21">
      </label>

      <button class="button-brand justify-center" type="submit">
        {{ __('Отправить') }}
      </button>
    </form>
  </div>

  <div class="font-light text-xs leading-[1.2] lg:text-[15px] lg:font-normal">
    <p class="mb-2 md:mb-5">
      {{ __('Оставьте заявку — с вами свяжется консультант с профильным медицинским образованием, который поможет с выбором программы, сориентирует по срокам и стоимости.') }}
    </p>
    <p class="text-[#404040] opacity-50">
      {!! __('Нажимая на кнопку вы подтверждаете, что согласны на <a class="underline" target="_blank">обработку персональных данных</a>. Мы не передаём ваши данные третьим лицам.') !!}
    </p>
  </div>
</section>
