<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
  Route::get('/check', [AuthController::class, 'check']);
  Route::post('/login', [AuthController::class, 'login']);

  Route::delete('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});
