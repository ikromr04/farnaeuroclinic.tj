<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    foreach (range(1, 9) as $key) {
      Review::create([
        'name' => 'Мадина',
        'date' => '2024-08-08',
        'rate' => '5',
        'comment' => 'Все отлично! Клиника замечательная! Понравилось абсолютно все! Особенно внимательное отношение к пациентам и высокий профессионализм врачей. Благодаря их опыту и современным методам лечения, я смогла достичь желаемого результата.',
      ]);
    }
  }
}
