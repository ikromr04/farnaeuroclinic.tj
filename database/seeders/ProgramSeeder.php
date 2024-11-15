<?php

namespace Database\Seeders;

use App\Models\Program;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProgramSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $programs = [
      [
        'name' => 'Бесплодие',
        'img' => 'program.png',
        'description' => "Наши пациенты — это больше, чем клиенты; они часть нашейсемьи ФАРНА. Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.",
      ],
      [
        'name' => 'ЭКО',
        'img' => 'program.png',
        'description' => "Наши пациенты — это больше, чем клиенты; они часть нашейсемьи ФАРНА. Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.",
      ],
      [
        'name' => 'Диагностики и лечения',
        'img' => 'program.png',
        'description' => "Наши пациенты — это больше, чем клиенты; они часть нашейсемьи ФАРНА. Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.",
      ],
      [
        'name' => 'Женское и мужское здоровье',
        'img' => 'program.png',
        'description' => "Наши пациенты — это больше, чем клиенты; они часть нашейсемьи ФАРНА. Мы подходим к каждому случаю с глубоким пониманием и эмпатией, стремясь создать комфортную и поддерживающую атмосферу.",
      ],
    ];

    foreach ($programs as $program) {
      Program::create([
        'name' => $program['name'],
        'img' => $program['img'],
        'description' => $program['description'],
      ]);
    }
  }
}
