@props(['category', 'programs', 'texts'])

<section {{ $attributes->merge([
    'class' => 'relative group md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white md:mx-auto md:w-[90vw] md:max-w-[1150px] md:mt-[10px]',
]) }}>
  <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="bg-brand md:bg-transparent mb-8">
    <div class="container text-white py-6 md:py-0 md:text-inherit md:w-auto">
      <div class="leading-[1.2] items-center gap-x-1 font-semibold text-[25px] leaading-[1.2] mb-2 md:mb-5">
        {!! $texts['category-forpatient']->title !!}
      </div>

      {!! $texts['category-forpatient']->content !!}
    </div>
  </div>

  <div class="container md:w-full">
    <ul class="hidden md:flex flex-col gap-y-5 gap-x-2 lg:grid lg:grid-cols-2">
      @foreach ($programs as $key => $program)
        <li>
          <x-program-card class="z-10" :program="$program" />
        </li>
      @endforeach
    </ul>

    <ol class="md:hidden">
      @foreach ($programs as $key => $program)
        <li>
          <a class="flex border-b hover:font-semibold" href="{{ route('program', $program->slug) }}">
            {{ '0' . ++$key . '. ' . $program->title }}
          </a>
        </li>
      @endforeach
    </ol>

    <button class="button !bg-brand !text-white gap-x-2 mt-8 md:mt-10" type="button" data-show-more="2" data-category-id="{{ $category->id }}">
      {{ __('Показать ещё') }}
      <svg width="12" height="6">
        <use xlink:href="#arrow-down" />
      </svg>
    </button>
  </div>
</section>
