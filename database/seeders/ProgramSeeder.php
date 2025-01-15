<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\ArticleBlock;
use App\Models\Program;
use App\Models\ProgramBlock;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProgramSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    foreach (range(1, 16) as $key) {
      $program = Program::create([
        'title' => 'Бережное лечение бесплодия',
        'program_category_id' => 1,
        'description' => 'Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин.',
        'info' => '<p>Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. </p><p>В любом случае, предварительный этап лечения требует от пары дисциплины, терпения и оптимизма. Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. В любом случае, предварительный этап лечения требует от пары дисциплины,терпения и оптимизма.</p><p>В любом случае, предварительный этап лечения требует от пары дисциплины, терпения и оптимизма. Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. В любом случае, предварительный этап лечения требует от пары дисциплины,терпения и оптимизма.</p>',
        'price' => 3740,
      ]);

      $article = Article::create([
        'program_id' => $program->id,
        'info' => '<p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%.</p><p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%.</p><p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%</p>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Виды леченый',
        'title' => 'Виды леченый',
        'content' => '<p>На первый прием к гинекологу лучше придти с результатами анализов и медицинскими картами, чтобы врач сразу помог оценить ваши перспективы и составить примерный план лечения.</p>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Вопрос/ответ',
        'title' => 'Вопрос/ответ',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Цены на лечение',
        'title' => 'Цены на лечение',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Подготовка',
        'title' => 'Подготовка к ЭКО: сдача анализов',
        'content' => '<p>На первый прием к гинекологу лучше придти с результатами анализов и медицинскими картами, чтобы врач сразу помог оценить ваши перспективы и составить примерный план лечения.</p>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Список анализов',
        'title' => 'Список исследований обязательно включает следующие виды анализов:',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Что входит в оплату',
        'title' => 'Что входит в оплату лечения?',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);
    }

    foreach (range(1, 16) as $key) {
      $program = Program::create([
        'title' => 'Бережное лечение бесплодия',
        'program_category_id' => 2,
        'description' => 'Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин.',
        'info' => '<p>Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. </p><p>В любом случае, предварительный этап лечения требует от пары дисциплины, терпения и оптимизма. Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. В любом случае, предварительный этап лечения требует от пары дисциплины,терпения и оптимизма.</p><p>В любом случае, предварительный этап лечения требует от пары дисциплины, терпения и оптимизма. Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. В любом случае, предварительный этап лечения требует от пары дисциплины,терпения и оптимизма.</p>',
        'price' => 3740,
      ]);

      $article = Article::create([
        'program_id' => $program->id,
        'info' => '<p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%.</p><p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%.</p><p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%</p>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Виды леченый',
        'title' => 'Виды леченый',
        'content' => '<p>На первый прием к гинекологу лучше придти с результатами анализов и медицинскими картами, чтобы врач сразу помог оценить ваши перспективы и составить примерный план лечения.</p>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Вопрос/ответ',
        'title' => 'Вопрос/ответ',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Цены на лечение',
        'title' => 'Цены на лечение',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Подготовка',
        'title' => 'Подготовка к ЭКО: сдача анализов',
        'content' => '<p>На первый прием к гинекологу лучше придти с результатами анализов и медицинскими картами, чтобы врач сразу помог оценить ваши перспективы и составить примерный план лечения.</p>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Список анализов',
        'title' => 'Список исследований обязательно включает следующие виды анализов:',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Что входит в оплату',
        'title' => 'Что входит в оплату лечения?',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);
    }

    foreach (range(1, 16) as $key) {
      $program = Program::create([
        'title' => 'Бережное лечение бесплодия',
        'program_category_id' => 3,
        'description' => 'Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин.',
        'info' => '<p>Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. </p><p>В любом случае, предварительный этап лечения требует от пары дисциплины, терпения и оптимизма. Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. В любом случае, предварительный этап лечения требует от пары дисциплины,терпения и оптимизма.</p><p>В любом случае, предварительный этап лечения требует от пары дисциплины, терпения и оптимизма. Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. В любом случае, предварительный этап лечения требует от пары дисциплины,терпения и оптимизма.</p>',
        'price' => 3740,
      ]);

      $article = Article::create([
        'program_id' => $program->id,
        'info' => '<p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%.</p><p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%.</p><p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%</p>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Виды леченый',
        'title' => 'Виды леченый',
        'content' => '<p>На первый прием к гинекологу лучше придти с результатами анализов и медицинскими картами, чтобы врач сразу помог оценить ваши перспективы и составить примерный план лечения.</p>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Вопрос/ответ',
        'title' => 'Вопрос/ответ',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Цены на лечение',
        'title' => 'Цены на лечение',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Подготовка',
        'title' => 'Подготовка к ЭКО: сдача анализов',
        'content' => '<p>На первый прием к гинекологу лучше придти с результатами анализов и медицинскими картами, чтобы врач сразу помог оценить ваши перспективы и составить примерный план лечения.</p>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Список анализов',
        'title' => 'Список исследований обязательно включает следующие виды анализов:',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Что входит в оплату',
        'title' => 'Что входит в оплату лечения?',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);
    }

    foreach (range(1, 16) as $key) {
      $program = Program::create([
        'title' => 'Бережное лечение бесплодия',
        'program_category_id' => 4,
        'description' => 'Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин.',
        'info' => '<p>Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. </p><p>В любом случае, предварительный этап лечения требует от пары дисциплины, терпения и оптимизма. Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. В любом случае, предварительный этап лечения требует от пары дисциплины,терпения и оптимизма.</p><p>В любом случае, предварительный этап лечения требует от пары дисциплины, терпения и оптимизма. Подготовка к экстракорпоральному оплодотворению – важный этап в жизни каждой пары, которая лечится от бесплодия. От него во многом зависит, принесет ли первый протокол ЭКО желанный результат – долгожданную беременность. В зависимости от состояния здоровья мужчины и женщины, решившихся на ЭКО, процесс подготовки занимает разное время. В любом случае, предварительный этап лечения требует от пары дисциплины,терпения и оптимизма.</p>',
        'price' => 3740,
      ]);

      $article = Article::create([
        'program_id' => $program->id,
        'info' => '<p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%.</p><p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%.</p><p>Эффективные программы лечения бесплодия и восстановления репродуктивной функции у женщин и мужчин. Не всегда такая сложная процедура как ЭКО получается с первого раза. Нашей целью является желанная беременность, и мы хотим прийти к ней вместе с нашим пациентом. Вторую и третью программы ЭКО в нашей клинике вы можете сделать со скидкой 10%. Начиная с четвертой попытки скидка на все программы ЭКО составит 15%</p>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Виды леченый',
        'title' => 'Виды леченый',
        'content' => '<p>На первый прием к гинекологу лучше придти с результатами анализов и медицинскими картами, чтобы врач сразу помог оценить ваши перспективы и составить примерный план лечения.</p>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Вопрос/ответ',
        'title' => 'Вопрос/ответ',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ArticleBlock::create([
        'article_id' => $article->id,
        'short_title' => 'Цены на лечение',
        'title' => 'Цены на лечение',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Подготовка',
        'title' => 'Подготовка к ЭКО: сдача анализов',
        'content' => '<p>На первый прием к гинекологу лучше придти с результатами анализов и медицинскими картами, чтобы врач сразу помог оценить ваши перспективы и составить примерный план лечения.</p>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Список анализов',
        'title' => 'Список исследований обязательно включает следующие виды анализов:',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);

      ProgramBlock::create([
        'program_id' => $program->id,
        'short_title' => 'Что входит в оплату',
        'title' => 'Что входит в оплату лечения?',
        'content' => '<ul><li>Общий анализ крови;</li><li>Анализ крови на ВИЧ, краснуху, сифилис и гепатит;</li><li>УЗИ органов малого таза, молочных желез и щитовидной железы, а также гистеросальпингография (для женщин);</li><li>Мазок из влагалища, уретры, цервикального канала;</li><li>Мазок из уретры (для мужчин);</li><li>Анализ мочи;</li><li>Кардиограмма и флюорография;</li><li>Анализ крови на гормоны;</li></ul>',
      ]);
    }
  }
}
