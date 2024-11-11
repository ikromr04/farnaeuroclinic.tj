@props(['doctor'])

<article {{ $attributes->merge(['class' => 'flex flex-col']) }}>
  <div>
    <img src="{{ asset("/images/doctors/$doctor->avatar") }}" width="240" height="360" alt="{{ $doctor->name }}">
    <a href=""></a>
  </div>
</article>
