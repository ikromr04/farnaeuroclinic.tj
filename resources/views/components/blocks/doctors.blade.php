@props(['doctors'])

<section {{ $attributes->merge([
    'class' => 'relative z-0 flex flex-col md:bg-white md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:w-[90vw] md:max-w-[1150px] md:mx-auto md:mb-12',
]) }}>
  <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[.5px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="bg-brand text-white -mb-[120px] pb-[120px] md:bg-transparent md:text-inherit md:m-0 md:p-0">
    <h2 class="title flex items-center justify-between pl-[5vw] pt-9 gap-x-4 mb-5 md:p-0">
      {{ __('Врачи') }}

      <a class="text-[15px] font-normal min-h-8 pl-4 py-2 !pr-[5vw] button !rounded-r-none md:!pr-4 md:text-white md:bg-brand md:!rounded-r-full md:hover:text-brand md:hover:border-brand" href="{{ route('doctors') }}">
        {{ __('Посмотреть всех специалистов') }}
      </a>
    </h2>

    <p class="mx-[5vw] mb-8 md:mx-0">
      {{ __('Наши врачи – это признанные эксперты с международным опытом. В FARNA EUROCLINIC мы следуем самым высоким мировым стандартам качества, используя новейшие протоколы и технологии. Благодаря индивидуальному подходу и комплексному лечению, мы помогаем парам преодолеть бесплодие и обрести радость родительства.') }}
    </p>
  </div>

  <div class="relative doctors-swiper mb-8 sm:max-w-[584px] px-[40px] sm:mx-auto md:mb-0 md:max-w-full md:p-0">
    <div class="swiper">
      <div class="swiper-wrapper">
        @foreach ($doctors as $doctor)
          <div class="swiper-slide flex flex-col items-center">
            <x-doctor-card :doctor="$doctor" />
          </div>
        @endforeach
      </div>
    </div>

    <div class="absolute z-10 left-1/2 transform -translate-x-1/2 top-[120px] h-0 w-[calc(240px+80px)] sm:w-[584px] md:w-[calc(100%+96px)] md:top-[180px]">
      <button class="swiper-button-prev after:hidden absolute left-0 !m-0 flex w-8 h-8 transform -translate-y-1/2 justify-center items-center rounded-full bg-brand border border-white pr-[2px]" type="button">
        <svg class="flex text-white !w-2 !h-4" width="8" height="16">
          <use xlink:href="#prev" />
        </svg>
      </button>
      <button class="swiper-button-next after:hidden absolute right-0 !m-0 flex w-8 h-8 transform -translate-y-1/2 justify-center items-center rounded-full bg-brand border border-white pl-[2px]" type="button">
        <svg class="flex text-white !w-2 !h-4" width="8" height="16">
          <use xlink:href="#next" />
        </svg>
      </button>
    </div>
  </div>
</section>
