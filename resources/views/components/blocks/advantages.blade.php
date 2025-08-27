@props(['texts'])

<section {{ $attributes->merge(['class' => 'container flex justify-center']) }}>
  <h2 class="sr-only">{{ __('Наши преимущества') }}</h2>

  <ul class="flex flex-col gap-y-5 gap-x-8 max-w-max md:grid md:grid-cols-[1fr_1fr_1fr] lg:gap-x-[60px]">
    <li class="flex gap-x-4 gap-y-4 items-center md:flex md:flex-col md:text-center lg:flex-row lg:text-left">
      <div class="text-brand flex justify-center items-center min-w-14 min-h-14">
        <svg width="44" height="56">
          <use xlink:href="#leaf" />
        </svg>
      </div>
      <div>
        {!! $texts['advantage-1']->title !!}
      </div>
    </li>
    <li class="flex gap-x-4 gap-y-4 items-center md:flex md:flex-col md:text-center lg:flex-row lg:text-left">
      <div class="text-brand flex justify-center items-center min-w-14 min-h-14">
        <svg width="55" height="43">
          <use xlink:href="#heartcare" />
        </svg>
      </div>
      <div>
        {!! $texts['advantage-2']->title !!}
      </div>
    </li>
    <li class="flex gap-x-4 gap-y-4 items-center md:flex md:flex-col md:text-center lg:flex-row lg:text-left">
      <div class="text-brand flex justify-center items-center min-w-14 min-h-14">
        <svg width="37" height="54">
          <use xlink:href="#medal" />
        </svg>
      </div>
      <div>
        {!! $texts['advantage-3']->title !!}
      </div>
    </li>
  </ul>
</section>
