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
      'slug' => $category->title,
      'img' => $category->img,
      'description' => $category->description,
    ], 200);
  }

  public function update(Request $request): JsonResponse
  {
    $category = ProgramCategory::find($request->id);
    $category->title = $request->title;
    $category->description = $request->description;

    if ($request->hasFile('img')) {
      $file = $request->file('img');

      if (file_exists(public_path($category->img))) unlink(public_path($category->img));

      $fileName = uniqid() . '.' . $file->extension();
      $filePath = '/images/categories/' . $fileName;
      $file->move(public_path('/images/categories'), $fileName);

      $category->img = $filePath;
    }

    $category->update();

    return response()->json([
      'id' => $category->id,
      'title' => $category->title,
      'slug' => $category->title,
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
