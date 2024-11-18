<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
  public function index()
  {
    return Article::where('program_id', request()->program_id)->paginate(8, ['*'], 'page', request()->page);
  }
}
