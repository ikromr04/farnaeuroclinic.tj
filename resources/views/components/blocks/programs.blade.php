@props(['programs'])

<section {{ $attributes->merge([
    'class' => 'relative group md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white md:mx-auto md:w-[90vw] md:max-w-[1150px]',
]) }}>
  <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="bg-brand md:bg-transparent mb-8">
    <div class="container text-white py-6 md:py-0 md:text-inherit md:w-auto">
      <h2 class="font-semibold text-[25px] leaading-[1.2] mb-2 md:mb-5">{{ __('Пациентам') }}</h2>

      <p>
        {{ __('Наши врачи – это признанные эксперты с международным опытом. В FARNA EUROCLINIC мы следуем самым высоким мировым стандартам качества, используя новейшие протоколы и технологии. Благодаря индивидуальному подходу и комплексному лечению, мы помогаем парам преодолеть бесплодие и обрести радость родительства.') }}
      </p>
    </div>
  </div>

  <div class="programs-swiper container md:!hidden">
    <div class="swiper">
      <div class="swiper-wrapper">
        @foreach ($programs as $key => $program)
          <div class="swiper-slide">
            <x-program-card :program="$program" :key="$key" />
          </div>
        @endforeach
      </div>
      <div class="swiper-pagination mt-6"></div>
    </div>
  </div>

  <ol class="hidden md:grid programs-list">
    @foreach ($programs as $key => $program)
      <li>
        <x-program-card :program="$program" :key="$key" />
      </li>
    @endforeach
  </ol>
</section>
