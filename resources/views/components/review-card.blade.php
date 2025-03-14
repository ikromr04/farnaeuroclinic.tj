@props(['review'])

<article {{ $attributes->merge(['class' => 'relative flex flex-col w-[240px] md:w-full md:mt-[5px] group']) }} data-sizable-wrapper>
  <div class="hidden md:block pointer-events-none absolute -top-[5px] left-0 h-10 rounded-[10px] bg-brand w-[120px] -z-10"></div>
  <div class="bg-white py-8 px-5 rounded-[10px] border border-brand min-h-[300px]">
    <header class="mb-3">
      <div class="flex items-center gap-x-2 mb-2">
        <div>
          <h3 class="font-semibold text-base">{{ $review->name }}</h3>
          <p class="text-xs">
            <time datetime="{{ $review->date }}">{{ Carbon\Carbon::parse($review->date)->isoFormat('DD MMMM Y') }}</time>
          </p>
        </div>
      </div>
      <div class="text-[#FAC816] flex items-center gap-x-1">
        @foreach (range(1, $review->rate) as $rate)
          <svg width="14" height="20">
            <use xlink:href="#star" />
          </svg>
        @endforeach
      </div>
    </header>
    <div class="relative max-h-[160px] overflow-hidden transition-all duration-300" data-sizable="160">
      <p>{{ $review->comment }}</p>
      <div class="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
    </div>
  </div>
</article>
