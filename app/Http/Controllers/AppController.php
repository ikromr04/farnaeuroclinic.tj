<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Banner;
use App\Models\Doctor;
use App\Models\Program;
use App\Models\Review;
use Illuminate\Http\Request;
use stdClass;

class AppController extends Controller
{
  public function index()
  {
    $data = new stdClass();
    $data->banners = Banner::where('category', 'home-vitrin')->get();
    $data->doctors = Doctor::limit(10)->get();
    $data->articles = Article::limit(8)->get();
    $data->reviews = Review::get();

    return view('pages.index', compact('data'));
  }

  public function about()
  {
    $data = new stdClass();
    $data->reviews = Review::get();

    return view('pages.about', compact('data'));
  }

  public function forpatient()
  {
    $data = new stdClass();
    $data->banners = Banner::where('category', 'for-patient')->get();
    $data->programs = Program::get();
    $data->reviews = Review::get();

    return view('pages.forpatient', compact('data'));
  }

  public function program($slug)
  {
    $data = new stdClass();
    $data->banners = Banner::where('category', 'program')->get();
    $data->reviews = Review::get();
    $data->program = Program::where('slug', $slug)->first();
    $data->articles = Article::where('program_id', $data->program->id)->paginate(8);

    return view('pages.program', compact('data'));
  }

  public function doctors()
  {
    return view('pages.doctors');
  }

  public function servicesAndPrices()
  {
    return view('pages.services&prices');
  }

  public function contacts()
  {
    return view('pages.contacts');
  }

  public function apply()
  {
    return view('pages.apply');
  }

  public function react()
  {
    return view('react');
  }
}
