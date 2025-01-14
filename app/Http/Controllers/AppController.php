<?php

namespace App\Http\Controllers;

use App\Mail\ApplicationMail;
use App\Models\Banner;
use App\Models\Doctor;
use App\Models\Program;
use App\Models\ProgramCategory;
use App\Models\Review;
use stdClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AppController extends Controller
{
  public function index()
  {
    $data = new stdClass();
    $data->banners = Banner::where('page', 'home')->get();
    $data->doctors = Doctor::limit(10)->get();
    $data->programs = Program::limit(8)->get();
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
    $data->banners = Banner::where('page', 'for-patient')->get();
    $data->programCategories = ProgramCategory::get();
    $data->reviews = Review::get();

    return view('pages.forpatient', compact('data'));
  }

  public function category($slug)
  {
    $data = new stdClass();
    $data->category = ProgramCategory::where('slug', $slug)->first();
    $data->banners = Banner::where('program_id', $data->category->id)->get();
    $data->programs = Program::latest()
      ->with('article')
      ->where('category_id', $data->category->id)
      ->paginate(8);
    $data->reviews = Review::get();

    return view('pages.category', compact('data'));
  }

  public function program($slug)
  {
    $data = new stdClass();
    $data->program = Program::where('slug', $slug)->first();
    $data->programs = Program::where('category_id', $data->program->category_id)->paginate(8);
    $data->reviews = Review::get();

    return view('pages.programs.show', compact('data'));
  }

  public function doctors()
  {
    $data = new stdClass();
    $data->doctors = Doctor::paginate(8);

    return view('pages.doctors.index', compact('data'));
  }

  public function doctor($slug)
  {
    $data = new stdClass();
    $data->doctor = Doctor::where('slug', $slug)->first();

    return view('pages.doctors.show', compact('data'));
  }

  public function services()
  {
    $data = new stdClass();
    $data->programs = Program::paginate(8);

    return view('pages.services.index', compact('data'));
  }

  public function service($slug)
  {
    $data = new stdClass();
    $data->program = Program::where('slug', $slug)->first();

    return view('pages.services.show', compact('data'));
  }

  public function servicesAndPrices()
  {
    $data = new stdClass();
    $data->program = Program::paginate(8);

    return view('pages.services&prices', compact('data'));
  }

  public function apply(Request $request)
  {
    Mail::to('info@farna.tj')->send(new ApplicationMail([
      'name' => $request->name,
      'tel' => '+' . $request->code . ' ' . $request->tel,
      'doctor' => $request->doctor,
    ]));

    return response(['message' => 'success'], 200);
  }

  public function react()
  {
    return view('react');
  }
}
