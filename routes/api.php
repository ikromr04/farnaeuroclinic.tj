<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProgramController;

require base_path('routes/auth.php');

Route::middleware('auth:sanctum')->group(function () {
  Route::prefix('programs')->group(function () {
    Route::get('/', [ProgramController::class, 'get']);
    Route::post('/', [ProgramController::class, 'store']);
  });

  Route::prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
  });
});
