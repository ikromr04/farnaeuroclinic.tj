<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProgramStoreRequest;
use App\Models\Article;
use App\Models\ArticleBlock;
use App\Models\Program;
use App\Models\ProgramBlock;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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
      ->select([
        'program_category_id',
        'title',
        'slug',
        'info',
        'price',
      ])
      ->with(['category', 'blocks', 'article'])
      ->get();

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

    if (isset($request->blocks)) {
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

      if (isset($request->article['blocks'])) {
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

  public function update(Request $request)
  {
    $program = Program::find($request->id);

    $program->title = $request->title;
    $program->description = $request->description;
    $program->info = $request->info;
    $program->price = $request->price;
    $program->program_category_id = $request->category_id;

    $assignedBlocks = [];
    foreach ($request->blocks as $block) {
      array_push($assignedBlocks,  $block['id']);
    }
    foreach ($program->blocks as $block) {
      if (!in_array($block->id, $assignedBlocks)) {
        $block->delete();
      }
    }
    foreach ($request->blocks as $block) {
      $existedBlock = $program->blocks()->find($block['id']);
      if ($existedBlock) {
        $existedBlock->title = $block['title'];
        $existedBlock->short_title = $block['short_title'];
        $existedBlock->content = $block['content'];
        $existedBlock->update();
      } else {
        ProgramBlock::create([
          'program_id' => $program->id,
          'title' => $block['title'],
          'short_title' => $block['short_title'],
          'content' => $block['content'],
        ]);
      }
    }

    $program->article->info = $request->article['info'];
    $program->article->update();

    $assignedBlocks = [];
    foreach ($request->article['blocks'] as $block) {
      array_push($assignedBlocks,  $block['id']);
    }
    foreach ($program->article->blocks as $block) {
      if (!in_array($block->id, $assignedBlocks)) {
        $block->delete();
      }
    }
    foreach ($request->article['blocks'] as $block) {
      $existedBlock = $program->article->blocks()->find($block['id']);
      if ($existedBlock) {
        $existedBlock->title = $block['title'];
        $existedBlock->short_title = $block['short_title'];
        $existedBlock->content = $block['content'];
        $existedBlock->update();
      } else {
        ArticleBlock::create([
          'article_id' => $program->article->id,
          'title' => $block['title'],
          'short_title' => $block['short_title'],
          'content' => $block['content'],
        ]);
      }
    }

    $program->update();

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
    ])->find($request->id);

    return response()->json($program, 200);
  }

  public function delete(int $id)
  {
    Program::find($id)->delete();

    return response()->json([
      'message' => 'Программа успешно удалена.',
    ], 200);
  }

  public function show(int $id)
  {
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
    ])->find($id);

    return response()->json($program, 200);
  }
}
