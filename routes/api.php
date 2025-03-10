<?php

use App\Http\Controllers\BannerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DoctorController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\ReviewController;

require base_path('routes/auth.php');

Route::middleware('auth:sanctum')->group(function () {
  Route::prefix('programs')->group(function () {
    Route::get('/', [ProgramController::class, 'get']);
    Route::post('/', [ProgramController::class, 'store']);
    Route::put('/', [ProgramController::class, 'update']);
    Route::get('/{id}', [ProgramController::class, 'show']);
    Route::delete('/{id}', [ProgramController::class, 'delete']);
  });

  Route::prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::post('/', [CategoryController::class, 'store']);
    Route::post('/update', [CategoryController::class, 'update']);
    Route::delete('/{id}', [CategoryController::class, 'delete']);
  });

  Route::prefix('banners')->group(function () {
    Route::get('/', [BannerController::class, 'index']);
    Route::post('/', [BannerController::class, 'store']);
    Route::post('/update', [BannerController::class, 'update']);
    Route::delete('/{id}', [BannerController::class, 'delete']);
  });

  Route::prefix('doctors')->group(function () {
    Route::get('/', [DoctorController::class, 'get']);
    Route::post('/', [DoctorController::class, 'store']);
    Route::post('/update', [DoctorController::class, 'update']);
    Route::get('/{id}', [DoctorController::class, 'show']);
    Route::delete('/{id}', [DoctorController::class, 'delete']);
  });

  Route::prefix('reviews')->group(function () {
    Route::get('/', [ReviewController::class, 'index']);
    Route::post('/', [ReviewController::class, 'store']);
    Route::post('/update', [ReviewController::class, 'update']);
    Route::delete('/{id}', [ReviewController::class, 'delete']);
  });
});
