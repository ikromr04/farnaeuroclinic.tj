@props(['program', 'key'])

<article {{ $attributes->merge([
    'class' => 'w-full border border-brand rounded-[10px] overflow-hidden',
]) }}>
  <img class="w-full aspect-[490/250] flex object-cover" src="{{ asset("/images/programs/$program->img") }}" width="490" height="250" alt="{{ $program->name }}">

  <div class="py-8 pl-6 pr-10">
    <h3 class="font-semibold mb-3 flex items-center gap-x-2 uppercase">
      <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">0{{ ++$key }}</span>
      {{ $program->name }}
    </h3>

    <p>{{ $program->description }}</p>

    <a class="text-sm flex font-semibold max-w-max mt-3" href="{{ route('program', $program->slug) }}">
      {{ __('Все статьи') }}
    </a>
  </div>
</article>
