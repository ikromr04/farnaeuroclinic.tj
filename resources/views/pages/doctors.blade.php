@extends('layouts.app')

@section('title', __('Врачи') . ' | ')

@section('content')
  <main class="flex flex-col mb-8 md:mb-10 lg:mb-12 doctors-page">
    <div class="relative z-0 flex flex-col md:bg-white md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:w-[90vw] md:max-w-[1150px] md:mx-auto md:mt-[10px]">
      <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[.5px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
      <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

      <div class="bg-brand text-white md:bg-transparent md:text-inherit py-8 md:py-0">
        <h1 class="title flex items-center justify-between pl-[5vw] gap-x-4 mb-5 md:p-0">
          {{ __('Наши специалисты') }}
        </h1>

        <p class="mx-[5vw] md:mx-0">
          {{ __('Наши врачи – это признанные эксперты с международным опытом. В FARNA EUROCLINIC мы следуем самым высоким мировым стандартам качества, используя новейшие протоколы и технологии. Благодаря индивидуальному подходу и комплексному лечению, мы помогаем парам преодолеть бесплодие и обрести радость родительства.') }}
        </p>
      </div>
    </div>

    @if ($data->doctors && $data->doctors->count())
      <ul class="flex flex-col container gap-5 mt-8">
        @foreach ($data->doctors as $doctor)
          <li>
            <article class="max-w-full md:hidden">
              <a class="grid grid-cols-[80px_1fr] gap-5" href="{{ route('doctor', $doctor->slug) }}">
                <img class="flex w-20 h-20 object-cover object-top rounded-full bg-slate-200" src="{{ asset("/images/doctors/$doctor->avatar") }}" width="240" height="360" alt="{{ $doctor->name }}">

                <div>
                  <p class="mb-3">{{ explode("\n", $doctor->position)[0] }}</p>

                  <h2 class="font-light">{{ $doctor->name }}</h2>
                </div>
              </a>
            </article>
          </li>
        @endforeach
      </ul>

      <div class="container">
        <button class="button !bg-brand !text-white gap-x-2 mt-8 md:mt-10" type="button" data-show-more="2">
          {{ __('Показать ещё') }}
          <svg width="12" height="6">
            <use xlink:href="#arrow-down" />
          </svg>
        </button>
      </div>
    @endif
  </main>
@endsection
