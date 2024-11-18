@props(['program', 'articles'])

<section {{ $attributes->merge([
    'class' => 'relative group md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white md:mx-auto md:w-[90vw] md:max-w-[1150px]',
]) }}>
  <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="bg-brand md:bg-transparent mb-8">
    <div class="container text-white py-6 md:py-0 md:text-inherit md:w-auto">
      <h2 class="leading-[1.2] items-center gap-x-1 font-semibold text-[25px] leaading-[1.2] mb-2 md:mb-5">
        <a class="inline transition-all duration-300 hover:text-brand" href="{{ route('forpatient') }}">
          {{ __('Пациентам') }}
        </a> |
        <span>{{ $program->name }}</span>
      </h2>

      <p>
        {{ __('Наши врачи – это признанные эксперты с международным опытом. В FARNA EUROCLINIC мы следуем самым высоким мировым стандартам качества, используя новейшие протоколы и технологии. Благодаря индивидуальному подходу и комплексному лечению, мы помогаем парам преодолеть бесплодие и обрести радость родительства.') }}
      </p>
    </div>
  </div>

  <div class="container md:w-full">
    <ul class="hidden md:flex flex-col gap-y-5 gap-x-2 lg:grid lg:grid-cols-2">
      @foreach ($articles as $key => $article)
        <li>
          <x-article-card class="z-10" :article="$article" />
        </li>
      @endforeach
    </ul>

    <ol class="md:hidden">
      @foreach ($articles as $key => $article)
        <li>
          <a class="flex border-b hover:font-semibold" href="{{ route('article', $article->slug) }}">
            {{ '0' . ++$key . '. ' . $article->title }}
          </a>
        </li>
      @endforeach
    </ol>

    <button class="button !bg-brand !text-white gap-x-2 mt-8 md:mt-10" type="button" data-show-more="2" data-program-id="{{ $program->id }}">
      {{ __('Показать ещё') }}
      <svg width="12" height="6">
        <use xlink:href="#arrow-down" />
      </svg>
    </button>
  </div>
</section>
