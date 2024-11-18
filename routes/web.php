<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AppController::class, 'index'])->name('home');
Route::get('/about', [AppController::class, 'about'])->name('about');
Route::get('/for-patients', [AppController::class, 'forpatient'])->name('forpatient');
Route::get('/programs/{slug}', [AppController::class, 'program'])->name('program');
Route::get('/articles/{slug}', [AppController::class, 'article'])->name('article');
Route::get('/doctors', [AppController::class, 'doctors'])->name('doctors');
Route::get('/doctors/{slug}', [AppController::class, 'doctor'])->name('doctor');
Route::get('/services-and-prices', [AppController::class, 'servicesAndPrices'])->name('services&prices');
Route::get('/contacts', [AppController::class, 'contacts'])->name('contacts');
Route::get('/apply', [AppController::class, 'apply'])->name('apply');

Route::get('/articles', [ArticleController::class, 'index']);

Route::view('/{path}', 'dashboard')->where('path', '.*');
