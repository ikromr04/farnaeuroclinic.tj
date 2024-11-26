<?php

namespace Database\Seeders;

use App\Models\ProgramCategory;
use Illuminate\Database\Seeder;

class ProgramCategorySeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $programCategories = [
      [
        'title' => 'Бесплодие',
        'img' => 'program.png',
        'description' => "Наши пациенты — это больше, чем клиенты; они часть нашейсемьи ФАРНА. Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.",
      ],
      [
        'title' => 'ЭКО',
        'img' => 'program.png',
        'description' => "Наши пациенты — это больше, чем клиенты; они часть нашейсемьи ФАРНА. Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.",
      ],
      [
        'title' => 'Диагностики и лечения',
        'img' => 'program.png',
        'description' => "Наши пациенты — это больше, чем клиенты; они часть нашейсемьи ФАРНА. Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.",
      ],
      [
        'title' => 'Женское и мужское здоровье',
        'img' => 'program.png',
        'description' => "Наши пациенты — это больше, чем клиенты; они часть нашейсемьи ФАРНА. Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.",
      ],
    ];

    foreach ($programCategories as $category) {
      ProgramCategory::create([
        'title' => $category['title'],
        'img' => $category['img'],
        'description' => $category['description'],
      ]);
    }
  }
}
