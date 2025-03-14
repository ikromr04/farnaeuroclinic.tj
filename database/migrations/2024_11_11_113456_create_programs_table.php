<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('programs', function (Blueprint $table) {
      $table->id();
      $table->foreignId('program_category_id')->nullable();
      $table->string('title');
      $table->string('slug')->unique();
      $table->text('description');
      $table->text('info');
      $table->integer('price');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('programs');
  }
};
