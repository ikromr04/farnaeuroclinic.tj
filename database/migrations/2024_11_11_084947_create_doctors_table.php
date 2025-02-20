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
    Schema::create('doctors', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->string('slug')->unique();
      $table->string('avatar');
      $table->text('position');
      $table->string('specialization');
      $table->string('experience');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('doctors');
  }
};
