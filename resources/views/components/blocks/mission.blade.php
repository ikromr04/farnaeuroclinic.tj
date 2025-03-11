@props(['texts'])

<section {{ $attributes->merge([
    'class' => 'relative container group md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white md:mt-[10px]',
]) }} data-sizable-wrapper>
  <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="font-semibold text-[25px] leaading-[1.2] mb-2 md:mb-5">
    {!! $texts['about-mission']->title !!}
  </div>

  <div class="relative transition-all duration-300 max-h-[190px] overflow-hidden group-[.shown]:max-h-[1000px] md:max-h-none" data-sizable="190">
    {!! $texts['about-mission']->content !!}
    <div class="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0 md:hidden"></div>
  </div>
</section>
