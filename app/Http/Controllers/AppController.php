<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Banner;
use App\Models\Doctor;
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
    return view('pages.forpatient');
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
