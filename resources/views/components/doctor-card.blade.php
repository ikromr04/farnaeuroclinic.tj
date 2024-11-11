@props(['doctor'])

<article {{ $attributes->merge(['class' => 'flex flex-col w-[240px] md:w-full']) }}>
  <style>
    .doctor-avatar:hover span {
      color: #00a596;
      background-color: white;
    }
  </style>
  <a class="relative doctor-avatar flex border border-brand rounded-[10px] w-[240px] h-[240px] overflow-hidden mb-5 md:h-[360px] md:w-full" href="{{ route('doctor', $doctor->slug) }}">
    <img class="absolute w-full h-full object-cover object-top transition-all origin-top duration-300 hover:scale-125" src="{{ asset("/images/doctors/$doctor->avatar") }}" width="240" height="360" alt="{{ $doctor->name }}">
    <span class="absolute -bottom-[1px] -right-[1px] button-brand">
      Записаться
    </span>
  </a>

  <p class="mb-3">{{ explode("\n", $doctor->position)[0] }}</p>

  <h2 class="font-light">{{ $doctor->name }}</h2>
</article>