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
    Schema::create('doctor_blocks', function (Blueprint $table) {
      $table->id();
      $table->integer('doctor_id');
      $table->string('short_title');
      $table->string('slug')->unique();
      $table->text('title');
      $table->text('content');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('doctor_blocks');
  }
};
