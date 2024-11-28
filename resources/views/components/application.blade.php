<section id="application" {{ $attributes->merge([
    'class' => 'container relative z-0 sm:p-10 sm:border sm:border-brand sm:rounded-[10px] md:pl-20 md:pr-12 md:flex md:items-center md:gap-x-10 sm:mt-[10px]',
]) }}>
  <div class="hidden sm:block pointer-events-none absolute -top-[10px] -left-[.5px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden sm:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="md:min-w-[330px]">
    <h2 class="relative z-10 text-[25px] font-semibold leading-[1.2] whitespace-pre-line mb-5 sm:whitespace-normal">{{ __("Записаться \n на консультацию") }}</h2>

    <form class="flex flex-col mb-5">
      <span class="text-green-600 hidden">Ваша заявка успешно отправлена</span>
      <label class="flex mb-4 border-b border-[#00A596]">
        <span class="sr-only">{{ __('Ваше имя') }}</span>
        <input class="flex w-full bg-transparent border-none placeholder:text-gray-400 p-0 py-1 focus:ring-0 px-[1px]" name="name" type="text" placeholder="{{ __('Ваше имя') }}" required>
      </label>
      <span class="-mt-3 mb-2 text-red-600 hidden">Введите ваше имя.</span>

      <label class="flex mb-5 border-b border-[#00A596]">
        <span class="sr-only">{{ __('Телефон') }}</span>
        <input class="hidden" type="tel" name="phone">
        <input class="flex w-full bg-transparent border-none placeholder:text-gray-400 p-0 py-1 !pl-[80px] focus:ring-0 px-[1px]" type="number" autocomplete="off" name="tel" pattern="^\d{3} \d{2} \d{2} \d{2}$" placeholder="987 65 43 21">
      </label>
      <span class="-mt-3 mb-2 text-red-600 hidden">Введите свой номер телефона.</span>

      <button class="button-brand justify-center group" type="submit" data-apply-form>
        <span class="group-[.submitting]:hidden">{{ __('Отправить') }}</span>
        <span class="hidden group-[.submitting]:block" role="status">
          <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-200 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </span>
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
