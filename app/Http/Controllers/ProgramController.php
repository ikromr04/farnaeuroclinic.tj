<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProgramStoreRequest;
use App\Models\Article;
use App\Models\ArticleBlock;
use App\Models\Program;
use App\Models\ProgramBlock;
use Illuminate\Http\JsonResponse;

class ProgramController extends Controller
{
  public function index()
  {
    if (request()->category_id) {
      return Program::where('program_category_id', request()->category_id)
        ->with('article')
        ->latest()
        ->paginate(8, ['*'], 'page', request()->page);
    }

    return Program::with('article')
      ->paginate(8, ['*'], 'page', request()->page);
  }

  public function prices()
  {
    return Program::paginate(8, ['*'], 'page', request()->page);
  }

  public function get(): JsonResponse
  {
    $programs = Program::latest()
      ->select(
        'id',
        'program_category_id',
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
          $query->select('id', 'program_id', 'info')
            ->with([
              'blocks' => function ($query) {
                $query->select(
                  'id',
                  'article_id',
                  'short_title as shortTitle',
                  'title',
                  'slug',
                  'content',
                );
              },
            ]);
        },
      ])->get();

    return response()->json($programs, 200);
  }

  public function store(ProgramStoreRequest $request): JsonResponse
  {
    $program = Program::create([
      'program_category_id' => $request->category_id,
      'title' => $request->title,
      'description' => $request->description,
      'info' => $request->info,
      'price' => $request->price,
    ]);

    if ($request->blocks) {
      foreach ($request->blocks as $block) {
        ProgramBlock::create([
          'program_id' => $program->id,
          'title' => $block['title'],
          'short_title' => $block['short_title'],
          'content' => $block['content'],
        ]);
      }
    }

    if ($request->article) {
      $article = Article::create([
        'program_id' => $program->id,
        'info' => $request->article['info'],
      ]);

      if ($request->article['blocks']) {
        foreach ($request->article['blocks'] as $block) {
          ArticleBlock::create([
            'article_id' => $article->id,
            'title' => $block['title'],
            'short_title' => $block['short_title'],
            'content' => $block['content'],
          ]);
        }
      }
    }

    $program = Program::select(
      'id',
      'program_category_id',
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
        $query->select('id', 'program_id', 'info')
          ->with([
            'blocks' => function ($query) {
              $query->select(
                'id',
                'article_id',
                'short_title as shortTitle',
                'title',
                'slug',
                'content',
              );
            },
          ]);
      },
    ])->find($program->id);

    return response()->json($program, 200);
  }

  public function delete(int $id)
  {
    Program::find($id)->delete();

    return response()->json([
      'message' => 'Программа успешно удалена.',
    ], 200);
  }
}
