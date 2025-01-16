<?php

namespace App\Http\Controllers;

use App\Models\ProgramCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

  public function store(Request $request): JsonResponse
  {
    $img = $request->file('img');
    $imgName = uniqid() . '.' . $img->extension();
    $imgPath = '/images/categories/' . $imgName;
    $img->move(public_path('/images/categories'), $imgName);

    $category = ProgramCategory::create([
      'title' => $request->title,
      'img' => $imgPath,
      'description' => $request->description,
    ]);

    return response()->json([
      'id' => $category->id,
      'title' => $category->title,
      'img' => $category->img,
      'description' => $category->description,
    ], 200);
  }

  public function delete(int $id)
  {
    ProgramCategory::find($id)->delete();

    return response()->json([
      'message' => 'Категория успешно удалена.',
    ], 200);
  }
}
