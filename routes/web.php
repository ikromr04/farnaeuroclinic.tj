<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ProgramController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AppController::class, 'index'])->name('home');
Route::get('/about', [AppController::class, 'about'])->name('about');
Route::get('/for-patients', [AppController::class, 'forpatient'])->name('forpatient');
Route::get('/program-categories/{slug}', [AppController::class, 'category'])->name('category');
Route::get('/programs/{slug}', [AppController::class, 'program'])->name('program');
Route::get('/doctors', [AppController::class, 'doctors'])->name('doctors');
Route::get('/doctors/{slug}', [AppController::class, 'doctor'])->name('doctor');
Route::get('/services-and-prices', [AppController::class, 'servicesAndPrices'])->name('services&prices');
Route::get('/services', [AppController::class, 'services'])->name('services');
Route::get('/services/{slug}', [AppController::class, 'service'])->name('service');

Route::get('/program', [ProgramController::class, 'index']);
Route::get('/doctor', [DoctorController::class, 'index']);
Route::get('/prices', [ProgramController::class, 'prices']);

Route::view('/{path}', 'dashboard')->where('path', '.*');
