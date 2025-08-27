@props(['texts'])

<section {{ $attributes->merge([
    'class' => 'relative container md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white',
]) }}>
  <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <div class="mb-2 md:mb-5">
    <div class="font-semibold text-[25px] leaading-[1.2]">
      {!! $texts['about-values']->title !!}
    </div>
    {!! $texts['about-values']->content !!}
  </div>

  <ol class="md:hidden">
    @foreach (range(1, 5) as $key)
      <li class="relative mb-2 group" data-sizable-wrapper>
        <div class="font-semibold mb-2">
          <span>0{{ $key }}.</span>
          {!! $texts['value-' . $key]->title !!}
        </div>
        <div class="transition-all duration-300 max-h-[72px] overflow-hidden md:max-h-none" data-sizable="72">
          {!! $texts['value-' . $key]->content !!}
        </div>
        <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0 md:hidden"></div>
      </li>
    @endforeach
  </ol>

  <div class="group" data-value>
    <div class="hidden md:grid grid-cols-2 gap-2 xl:hidden max-h-[628px]">
      <div class="flex flex-col gap-2">
        <div class="relative group border border-brand py-8 px-6 rounded-[10px] bg-white z-10" data-sizable-wrapper data-value-left>
          <div class="font-semibold mb-3 flex items-center gap-x-2">
            <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">01</span>
            {!! $texts['value-1']->title !!}
          </div>
          <div class="relative transition-all duration-300 max-h-[110px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
            {!! $texts['value-1']->content !!}
            <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
          </div>
        </div>
        <div class="relative group border border-brand py-8 px-6 rounded-[10px] bg-white z-10" data-sizable-wrapper data-value-left>
          <div class="font-semibold mb-3 flex items-center gap-x-2">
            <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">03</span>
            {!! $texts['value-3']->title !!}
          </div>
          <div class="relative transition-all duration-300 max-h-[110px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
            {!! $texts['value-3']->content !!}

            <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 mb-2">
        <div class="relative group border border-brand py-8 px-6 rounded-[10px] bg-white z-10" data-sizable-wrapper>
          <div class="font-semibold mb-3 flex items-center gap-x-2">
            <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">02</span>
            {!! $texts['value-2']->title !!}
          </div>
          <div class="relative transition-all duration-300 max-h-[110px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
            {!! $texts['value-2']->content !!}

            <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
          </div>
        </div>
        <div class="relative group border border-brand py-8 px-6 rounded-[10px] bg-white z-10" data-sizable-wrapper>
          <div class="font-semibold mb-3 flex items-center gap-x-2">
            <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">04</span>
            {!! $texts['value-4']->title !!}
          </div>
          <div class="relative transition-all duration-300 max-h-[110px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
            {!! $texts['value-4']->content !!}

            <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden md:block relative group border border-brand py-8 px-6 rounded-[10px] w-[calc(50%-4px)] xl:hidden transition-all duration-300 group-[[data-value='left']]:ml-[calc(50%+4px)]" data-sizable-wrapper>
      <div class="font-semibold mb-3 flex items-center gap-x-2">
        <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">05</span>
        {!! $texts['value-5']->title !!}
      </div>
      <div class="relative transition-all duration-300 max-h-[110px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
        {!! $texts['value-5']->content !!}

        <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
      </div>
    </div>
  </div>

  <div class="hidden flex-col gap-2 xl:flex group" data-shown>
    <div class="grid grid-cols-3 gap-2 items-start max-h-[236px] z-10">
      <div class="relative bg-white border border-brand py-8 px-6 rounded-[10px]" data-show="1">
        <div class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">01</span>
          {!! $texts['value-1']->title !!}
        </div>
        <div class="relative transition-all duration-300 max-h-[110px] group-[[data-shown='1']]:max-h-[500px] overflow-hidden">
          {!! $texts['value-1']->content !!}
          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[[data-shown='1']]:opacity-0"></div>
        </div>
      </div>
      <div class="relative bg-white border border-brand py-8 px-6 rounded-[10px]" data-show="2">
        <div class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">02</span>
          {!! $texts['value-2']->title !!}
        </div>
        <div class="relative transition-all duration-300 max-h-[110px] group-[[data-shown='2']]:max-h-[500px] overflow-hidden">
          {!! $texts['value-2']->content !!}
          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[[data-shown='2']]:opacity-0"></div>
        </div>
      </div>
      <div class="relative bg-white border border-brand py-8 px-6 rounded-[10px]" data-show="3">
        <div class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">03</span>
          {!! $texts['value-3']->title !!}
        </div>
        <div class="relative transition-all duration-300 max-h-[110px] group-[[data-shown='3']]:max-h-[500px] overflow-hidden">
          {!! $texts['value-3']->content !!}
          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[[data-shown='3']]:opacity-0"></div>
        </div>
      </div>
    </div>

    <div class="flex w-full items-start gap-2 z-0">
      <div class="relative group transition-all duration-300 border border-brand py-8 px-6 rounded-[10px] w-[324px] ml-[166px] group-[[data-shown='1']]:ml-[332px] group-[[data-shown='2']]:ml-0 group-[[data-shown='2']]:mr-[332px] group-[[data-shown='3']]:mx-0" data-show="4" onclick="this.classList.toggle('shown')">
        <div class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">04</span>
          {!! $texts['value-4']->title !!}
        </div>
        <div class="relative transition-all duration-300 max-h-[110px] group-[.shown]:max-h-[500px] overflow-hidden">
          {!! $texts['value-4']->content !!}

          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
        </div>
      </div>
      <div class="relative group transition-all duration-300 border border-brand py-8 px-6 rounded-[10px] w-[324px] group-[[data-shown='3']]:mr-[332px]" data-show="5" onclick="this.classList.toggle('shown')">
        <div class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">05</span>
          {!! $texts['value-5']->title !!}
        </div>
        <div class="relative transition-all duration-300 max-h-[110px] group-[.shown]:max-h-[500px] overflow-hidden">
          {!! $texts['value-5']->content !!}

          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
        </div>
      </div>
    </div>
  </div>
</section>
