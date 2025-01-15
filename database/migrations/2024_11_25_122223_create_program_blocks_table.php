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
    Schema::create('program_blocks', function (Blueprint $table) {
      $table->id();
      $table->foreignId('program_id')->constrained()->cascadeOnDelete();
      $table->text('title');
      $table->string('slug')->unique();
      $table->string('short_title');
      $table->text('content');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('program_blocks');
  }
};
