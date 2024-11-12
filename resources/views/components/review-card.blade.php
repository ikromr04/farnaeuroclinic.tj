@props(['review'])

<article {{ $attributes->merge(['class' => 'relative flex flex-col w-[240px] md:w-full md:mt-[5px] group']) }}>
  <div class="hidden md:block pointer-events-none absolute -top-[5px] left-0 h-10 rounded-[10px] bg-brand w-[120px] -z-10"></div>
  <div class="bg-white py-8 px-5 rounded-[10px] border border-brand min-h-[300px]">
    <header class="mb-3">
      <div class="flex items-center gap-x-2 mb-2">
        <span class="text-white w-12 h-1/2 min-w-12 min-h-12 flex items-center justify-center bg-[#EB5757] rounded-full">
          <svg width="14" height="20">
            <use xlink:href="#yandex" />
          </svg>
        </span>
        <div>
          <h3 class="font-semibold text-base">{{ $review->name }}</h3>
          <p class="text-xs">
            <time datetime="{{ $review->date }}">{{ Carbon\Carbon::parse($review->date)->isoFormat('DD MMMM Y') }}</time> на <span class="underline text-blue-600">Яндекс</span>
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
    <p class="line-clamp-5 group-[.review-shown]:line-clamp-none">{{ $review->comment }}</p>
    <button class="text-[14px] font-semibold mt-2" type="button" onclick="this.closest('article').classList.toggle('review-shown')">
      <span class="group-[.review-shown]:hidden">Читать дальше</span>
      <span class="hidden group-[.review-shown]:inline">Свернуть</span>
    </button>
  </div>
</article>