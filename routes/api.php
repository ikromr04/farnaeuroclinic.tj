<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProgramController;

require base_path('routes/auth.php');

Route::middleware('auth:sanctum')->group(function () {
  Route::prefix('programs')->group(function () {
    Route::get('/', [ProgramController::class, 'get']);
  });
});
