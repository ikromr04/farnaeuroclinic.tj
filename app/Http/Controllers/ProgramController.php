<?php

namespace App\Http\Controllers;

use App\Models\Program;

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
}
