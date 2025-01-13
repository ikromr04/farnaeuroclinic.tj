<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\JsonResponse;

class ProgramController extends Controller
{
  public function index()
  {
    if (request()->category_id) {
      return Program::where('category_id', request()->category_id)->paginate(8, ['*'], 'page', request()->page);
    }
    return Program::paginate(8, ['*'], 'page', request()->page);
  }

  public function prices()
  {
    return Program::paginate(8, ['*'], 'page', request()->page);
  }

  public function get(): JsonResponse
  {
    $programs = Program::orderBy('title')
      ->select(
        'id',
        'category_id',
        'title',
        'slug',
        'description',
        'info',
        'price',
      )->with([
        'category' => function ($query) {
          $query->select(
            'id',
            'title',
            'slug',
            'img',
            'description',
          );
        },
        'blocks' => function ($query) {
          $query->select(
            'id',
            'program_id',
            'title',
            'slug',
            'short_title as shortTitle',
            'content',
          );
        },
        'article' => function ($query) {
          $query->select(
            'id',
            'program_id',
            'info',
          );
        },
      ])->get();

    foreach ($programs as $program) {

      unset($program->category_id);

      unset($program->article->program_id);

      if (count($program->blocks) < 1) {
        unset($program->blocks);
      } else {
        foreach ($program->blocks as $key => $value) unset($program->blocks[$key]->program_id);
      };
    }

    return response()->json($programs, 200);
  }
}
