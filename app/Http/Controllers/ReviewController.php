<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ReviewController extends Controller
{
  public function index(): JsonResponse
  {
    return response()->json(Review::latest()->get(), 200);
  }

  public function store(Request $request): JsonResponse
  {
    $review = Review::create($request->only('name', 'date', 'rate', 'comment'));

    return response()->json($review, 200);
  }

  public function update(Request $request): JsonResponse
  {
    Review::findOrFail($request->id)
      ->update($request->only('name', 'date', 'rate', 'comment'));

    return response()->json(Review::find($request->id), 200);
  }

  public function delete(int $id)
  {
    Review::find($id)->delete();

    return response()->json([
      'message' => 'Комментария успешно удалена.',
    ], 200);
  }
}
