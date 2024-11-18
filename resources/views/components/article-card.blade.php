@props(['article'])

<article {{ $attributes->merge([
    'class' => 'relative flex flex-col max-w-[90vw] mx-auto sm:h-[204px] sm:pt-10 sm:pr-6 sm:pb-6 sm:pl-10 sm:border sm:border-brand sm:rounded-[10px] mt-[5px]',
]) }}>
  <div class="hidden sm:block pointer-events-none absolute -top-[5px] -left-[.5px] h-10 rounded-[10px] bg-brand w-[240px] -z-10"></div>
  <div class="hidden sm:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <h2 class="title mb-3 sm:line-clamp-1 sm:mb-[10px] lg:!text-[26px]">{{ $article->title }}</h2>
  <p class="mb-7 sm:line-clamp-2 sm:mb-5 lg:mb-3 xl:mb-5">{{ $article->description }}</p>

  <div class="flex justify-between items-center">
    <a class="underline" href="{{ route('article', $article->slug) }}">
      {{ __('Подробнее') }}
    </a>
    <a class="button-brand" href="{{ route('article', $article->slug) }}">
      Записаться <span class="hidden sm:inline">&nbsp;на приём</span>
    </a>
  </div>
</article>
