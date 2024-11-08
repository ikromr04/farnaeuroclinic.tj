<section {{ $attributes->merge(['class' => 'container flex justify-center']) }}>
  <h2 class="sr-only">{{ __('Наши преимущества') }}</h2>

  <ul class="flex flex-col gap-y-5 gap-x-8 max-w-max md:flex-row lg:gap-x-[60px]">
    <li class="flex gap-x-4 gap-y-4 items-center md:flex md:flex-col md:text-center lg:flex-row lg:text-left">
      <div class="text-brand flex justify-center items-center min-w-14 min-h-14">
        <svg width="44" height="56">
          <use xlink:href="#leaf" />
        </svg>
      </div>
      <p class="whitespace-pre-line">{{ __("Более 10 лет \n ответственной работы") }}</p>
    </li>
    <li class="flex gap-x-4 gap-y-4 items-center md:flex md:flex-col md:text-center lg:flex-row lg:text-left">
      <div class="text-brand flex justify-center items-center min-w-14 min-h-14">
        <svg width="55" height="43">
          <use xlink:href="#heartcare" />
        </svg>
      </div>
      <p class="whitespace-pre-line">{{ __("Более 50.000 успешно \n проведённых программ") }}</p>
    </li>
    <li class="flex gap-x-4 gap-y-4 items-center md:flex md:flex-col md:text-center lg:flex-row lg:text-left">
      <div class="text-brand flex justify-center items-center min-w-14 min-h-14">
        <svg width="37" height="54">
          <use xlink:href="#medal" />
        </svg>
      </div>
      <p class="whitespace-pre-line">{{ __("Врачи высшей категории, \n доценты и к.м.н.") }}</p>
    </li>
  </ul>
</section>
