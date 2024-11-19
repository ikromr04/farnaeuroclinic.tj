<section {{ $attributes->merge([
    'class' => 'relative container md:py-10 md:px-20 md:border md:border-brand md:rounded-[10px] md:bg-white',
]) }}>
  <div class="hidden md:block pointer-events-none absolute -top-[10px] -left-[1px] h-10 rounded-[20px] bg-brand w-[448px] -z-10"></div>
  <div class="hidden md:block pointer-events-none absolute top-0 left-0 w-full h-10 bg-white rounded-[10px]"></div>

  <h2 class="font-semibold text-[25px] leaading-[1.2] mb-2 md:mb-5">{{ __('Ценности') }}</h2>

  <ol class="md:hidden">
    @foreach (range(1, 5) as $key)
      <li class="relative mb-2 group" data-sizable-wrapper>
        <h3 class="font-semibold mb-2">
          <span>0{{ $key }}.</span>
          {{ __('Эмпатия и забота') }}
        </h3>
        <div class="transition-all duration-300 max-h-[72px] overflow-hidden md:max-h-none" data-sizable="72">
          <p>
            {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
          </p>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0 md:hidden"></div>
      </li>
    @endforeach
  </ol>

  <div class="group" data-value>
    <div class="hidden md:grid grid-cols-2 gap-2 xl:hidden max-h-[628px]">
      <div class="flex flex-col gap-2">
        <div class="relative group border border-brand py-8 px-6 rounded-[10px] bg-white z-10" data-sizable-wrapper data-value-left>
          <h3 class="font-semibold mb-3 flex items-center gap-x-2">
            <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">01</span>
            {{ __('Эмпатия и забота') }}
          </h3>
          <div class="relative transition-all duration-300 max-h-[180px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
            <p>
              {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
            </p>
            <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
          </div>
        </div>
        <div class="relative group border border-brand py-8 px-6 rounded-[10px] bg-white z-10" data-sizable-wrapper data-value-left>
          <h3 class="font-semibold mb-3 flex items-center gap-x-2">
            <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">03</span>
            {{ __('Эмпатия и забота') }}
          </h3>
          <div class="relative transition-all duration-300 max-h-[180px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
            <p>
              {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
            </p>

            <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 mb-2">
        <div class="relative group border border-brand py-8 px-6 rounded-[10px] bg-white z-10" data-sizable-wrapper>
          <h3 class="font-semibold mb-3 flex items-center gap-x-2">
            <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">02</span>
            {{ __('Эмпатия и забота') }}
          </h3>
          <div class="relative transition-all duration-300 max-h-[180px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
            <p>
              {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
            </p>

            <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
          </div>
        </div>
        <div class="relative group border border-brand py-8 px-6 rounded-[10px] bg-white z-10" data-sizable-wrapper>
          <h3 class="font-semibold mb-3 flex items-center gap-x-2">
            <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">04</span>
            {{ __('Эмпатия и забота') }}
          </h3>
          <div class="relative transition-all duration-300 max-h-[180px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
            <p>
              {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
            </p>

            <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative group border border-brand py-8 px-6 rounded-[10px] w-[calc(50%-4px)] xl:hidden transition-all duration-300 group-[[data-value='left']]:ml-[calc(50%+4px)]" data-sizable-wrapper>
      <h3 class="font-semibold mb-3 flex items-center gap-x-2">
        <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">05</span>
        {{ __('Эмпатия и забота') }}
      </h3>
      <div class="relative transition-all duration-300 max-h-[180px] group-[.shown]:max-h-[500px] overflow-hidden" data-sizable="180">
        <p>
          {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
        </p>

        <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
      </div>
    </div>
  </div>

  <div class="hidden flex-col gap-2 xl:flex group" data-shown>
    <div class="grid grid-cols-3 gap-2 items-start max-h-[306px] z-10">
      <div class="relative bg-white border border-brand py-8 px-6 rounded-[10px]" data-show="1">
        <h3 class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">01</span>
          {{ __('Эмпатия и забота') }}
        </h3>
        <div class="relative transition-all duration-300 max-h-[180px] group-[[data-shown='1']]:max-h-[500px] overflow-hidden">
          <p>
            {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
          </p>
          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[[data-shown='1']]:opacity-0"></div>
        </div>
      </div>
      <div class="relative bg-white border border-brand py-8 px-6 rounded-[10px]" data-show="2">
        <h3 class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">02</span>
          {{ __('Эмпатия и забота') }}
        </h3>
        <div class="relative transition-all duration-300 max-h-[180px] group-[[data-shown='2']]:max-h-[500px] overflow-hidden">
          <p>
            {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
          </p>
          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[[data-shown='2']]:opacity-0"></div>
        </div>
      </div>
      <div class="relative bg-white border border-brand py-8 px-6 rounded-[10px]" data-show="3">
        <h3 class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">03</span>
          {{ __('Эмпатия и забота') }}
        </h3>
        <div class="relative transition-all duration-300 max-h-[180px] group-[[data-shown='3']]:max-h-[500px] overflow-hidden">
          <p>
            {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
          </p>
          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[[data-shown='3']]:opacity-0"></div>
        </div>
      </div>
    </div>

    <div class="flex w-full items-start gap-2 z-0">
      <div class="relative group transition-all duration-300 border border-brand py-8 px-6 rounded-[10px] w-[324px] ml-[166px] group-[[data-shown='1']]:ml-[332px] group-[[data-shown='2']]:ml-0 group-[[data-shown='2']]:mr-[332px] group-[[data-shown='3']]:mx-0" data-show="4" onclick="this.classList.toggle('shown')">
        <h3 class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">04</span>
          {{ __('Эмпатия и забота') }}
        </h3>
        <div class="relative transition-all duration-300 max-h-[180px] group-[.shown]:max-h-[500px] overflow-hidden">
          <p>
            {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
          </p>

          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
        </div>
      </div>
      <div class="relative group transition-all duration-300 border border-brand py-8 px-6 rounded-[10px] w-[324px] group-[[data-shown='3']]:mr-[332px]" data-show="5" onclick="this.classList.toggle('shown')">
        <h3 class="font-semibold mb-3 flex items-center gap-x-2">
          <span class="flex items-center justify-center text-white min-w-12 min-h-12 bg-brand rounded-full max-h-12 max-w-12 leading-none font-semibold text-[29px]">05</span>
          {{ __('Эмпатия и забота') }}
        </h3>
        <div class="relative transition-all duration-300 max-h-[180px] group-[.shown]:max-h-[500px] overflow-hidden">
          <p>
            {{ __('Мы предоставляем высококачественные и интонационные методы помощи пациентам, стремимся к созданию безопасной и эффективной среды для процедур экстракорпорального оплодотворения, обеспечивая ациентам доступ к передовым технологиям и высококвалифицированному медицинскому персоналу. Наша миссия – помочь семьям осуществить свою мечту о рождении здорового ребенка, обеспечивая им поддержку, заботу и понимание на каждом  этапе этого важного и чувствительного процесса.') }}
          </p>

          <div class="absolute bottom-0 left-0 w-full h-[72px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 group-[.shown]:opacity-0"></div>
        </div>
      </div>
    </div>
  </div>
</section>
