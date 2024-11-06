<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AppController::class, 'index'])->name('home');
Route::get('/about', [AppController::class, 'about'])->name('about');
Route::get('/for-patients', [AppController::class, 'forpatient'])->name('forpatient');
Route::get('/doctors', [AppController::class, 'doctors'])->name('doctors');
Route::get('/services-and-prices', [AppController::class, 'servicesAndPrices'])->name('services&prices');
Route::get('/contacts', [AppController::class, 'contacts'])->name('contacts');
Route::get('/apply', [AppController::class, 'apply'])->name('apply');

Route::get('/{path}', [AppController::class, 'react'])->where('path', '.*');
