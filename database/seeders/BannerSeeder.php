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
  }
}
