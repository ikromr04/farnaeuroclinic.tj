<?php

namespace Database\Seeders;

use App\Models\Banner;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
  public function run(): void
  {
    foreach (range(1, 5) as $key) {
      Banner::create([
        'category' => 'home-vitrin',
        'title' => 'Беспроцентная рассрочка на прохождение полного курса программ лечения бесплодия.',
        'description' => 'Рассрочка предоставляется на 6 месяцев. Пациент может выбрать вариант рассрочки или скидки на данной услуги.',
        'link' => '/dashboard',
      ]);
    }

    foreach (range(1, 5) as $key) {
      Banner::create([
        'category' => 'for-patient',
        'title' => 'Наши пациенты — это больше, чем клиенты; они часть нашей семьи ФАРНА.',
        'description' => 'Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.',
      ]);
    }

    foreach (range(1, 5) as $key) {
      Banner::create([
        'category' => 'program',
        'title' => 'Наши пациенты — это больше, чем клиенты; они часть нашей семьи ФАРНА.',
        'description' => 'Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.',
      ]);
    }
  }
}
