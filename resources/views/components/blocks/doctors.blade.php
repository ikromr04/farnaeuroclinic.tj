@props(['doctors' => []])

<section {{ $attributes->merge(['class' => 'flex flex-col']) }}>
  <div class="bg-brand text-white">
    <h2 class="title flex items-center justify-between pl-[5vw] pt-9 gap-x-4 mb-5">
      Врачи

      <a class="text-[15px] min-h-8 pl-4 py-2 !pr-[5vw] button !rounded-r-none" href="{{ route('doctors') }}">
        Посмотреть всех специалистов
      </a>
    </h2>

    <p class="mx-[5vw] mb-8">
      Наши врачи – это признанные эксперты с международным опытом. В FARNA EUROCLINIC мы следуем самым высоким мировым стандартам качества, используя новейшие протоколы и технологии. Благодаря индивидуальному подходу и комплексному лечению, мы помогаем парам преодолеть бесплодие и обрести радость родительства.
    </p>
  </div>

  <div class="swiper">
    <div class="swiper-wrapper">
      @foreach ($doctors as $doctor)
        <div class="swiper-slide">

        </div>
      @endforeach
    </div>
    <div class="swiper-pagination"></div>
  </div>
</section>
