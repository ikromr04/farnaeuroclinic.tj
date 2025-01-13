<?php

namespace App\Http\Controllers;

use App\Models\ProgramCategory;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
  public function index(): JsonResponse
  {
    $categories = ProgramCategory::orderBy('title')
      ->select(
        'id',
        'title',
        'slug',
        'img',
        'description',
      )->get();

    return response()->json($categories, 200);
  }
}
