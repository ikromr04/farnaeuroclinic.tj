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
    Schema::create('banners', function (Blueprint $table) {
      $table->id();
      $table->string('page')->nullable();
      $table->foreignId('program_category_id')
        ->nullable()
        ->constrained()
        ->onDelete('cascade');
      $table->text('title');
      $table->text('description');
      $table->string('color')->default('#00a596');
      $table->string('link')->nullable();
      $table->string('image')->default('/favicons/icon-light.svg');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('banners');
  }
};
