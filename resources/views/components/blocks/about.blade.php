@props(['texts'])

<div {{ $attributes->merge(['class' => 'bg-brand lg:bg-transparent']) }}>
  <div class="container text-white py-8 md:py-10 lg:rounded-[10px] lg:py-10 lg:px-20 about-vitrin">
    <div class="flex text-[24px] md:text-[26px] xl:text-[32px] leading-[1.2] font-semibold mb-8 md:mb-5 lg:max-w-[530px] xl:max-w-[588px]">
      {!! $texts['about-vitrin']->title !!}
    </div>
    <div class="mb-8 md:mb-5 lg:max-w-[510px] xl:max-w-[530px]">
      {!! $texts['about-vitrin']->content !!}
    </div>

    <div class="flex items-center flex-wrap gap-x-5 gap-y-3">
      <a class="button" href="#application">{{ __('Записать на консультацию') }}</a>
      <div class="flex items-center border px-2 gap-1 rounded-[5px] h-8 md:h-10 md:px-5 leading-none">
        {{ __('Связаться по телефону ') }} {!! $texts['tel']->content !!}
      </div>
    </div>
  </div>
</div>
