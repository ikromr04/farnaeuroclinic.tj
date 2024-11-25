@props(['articles'])

<section {{ $attributes->merge([
    'class' => 'relative z-0 flex flex-col md:bg-white md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:w-[90vw] md:max-w-[1150px] md:mx-auto md:mt-[10px]',
]) }}>
  <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[.5px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="bg-brand text-white md:bg-transparent md:text-inherit py-8 md:py-0">
    <h2 class="title flex items-center justify-between pl-[5vw] gap-x-4 mb-5 md:p-0">
      {{ __('Популярные программы') }}

      <a class="text-[15px] font-normal min-w-max min-h-8 pl-4 py-2 !pr-[5vw] button !rounded-r-none md:!pr-4 md:text-white md:bg-brand md:!rounded-r-full md:hover:text-brand md:hover:border-brand" href="{{ route('services') }}">
        {{ __('Все услуги') }}
      </a>
    </h2>

    <p class="mx-[5vw] md:mx-0">
      {{ __('Наши врачи – это признанные эксперты с международным опытом. В FARNA EUROCLINIC мы следуем самым высоким мировым стандартам качества, используя новейшие протоколы и технологии. Благодаря индивидуальному подходу и комплексному лечению, мы помогаем парам преодолеть бесплодие и обрести радость родительства.') }}
    </p>
  </div>

  @if ($articles && $articles->count())
    <div class="relative articles-swiper md:flex md:items-center md:justify-center md:mx-auto md:w-auto xl:block xl:max-w-full mt-8">
      <div class="swiper md:h-[448px] xl:h-auto">
        <div class="swiper-wrapper">
          @foreach ($articles as $article)
            <div class="swiper-slide">
              <x-article-card :article="$article" />
            </div>
          @endforeach
        </div>
      </div>

      <div class="static swiper-pagination mt-6 flex justify-center gap-1 md:flex-col md:gap-2 md:mt-0 md:absolute md:-ml-[5px] md:!left-[calc(100%+40px)] xl:flex-row xl:static xl:mt-10"></div>
  @endif
  </div>
</section>
