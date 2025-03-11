<?php

namespace App\Http\Controllers;

use App\Models\Text;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TextController extends Controller
{
  public function index(): JsonResponse
  {
    return response()->json(Text::latest()->get(), 200);
  }

  public function update(Request $request): JsonResponse
  {
    Text::findOrFail($request->id)
      ->update($request->only('page', 'title', 'content'));

    return response()->json(Text::find($request->id), 200);
  }
}
