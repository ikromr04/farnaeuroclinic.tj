<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
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
    $data = (object) [
      'banners' => Banner::where('page', 'home')->get(),
      'doctors' => Doctor::limit(10)->get(),
      'programs' => Program::limit(8)->get(),
      'reviews' => Review::get(),
    ];

    $texts = Helper::getTexts('home');

    return view('pages.index', compact('data', 'texts'));
  }

  public function about()
  {
    $data = (object) [
      'reviews' => Review::get(),
    ];

    $texts = Helper::getTexts('about');

    return view('pages.about', compact('data', 'texts'));
  }

  public function forpatient()
  {
    $data = (object) [
      'banners' => Banner::where('page', 'for-patient')->get(),
      'programCategories' => ProgramCategory::get(),
      'reviews' => Review::get(),
    ];

    $texts = Helper::getTexts('forpatient');

    return view('pages.forpatient', compact('data', 'texts'));
  }

  public function category($slug)
  {
    $data = new stdClass();
    $data->category = ProgramCategory::where('slug', $slug)->first();
    $data->banners = Banner::where('program_category_id', $data->category->id)->get();
    $data->programs = Program::latest()
      ->with('article')
      ->where('program_category_id', $data->category->id)
      ->paginate(8);
    $data->reviews = Review::get();

    $texts = Helper::getTexts('category');

    return view('pages.category', compact('data', 'texts'));
  }

  public function program($slug)
  {
    $data = new stdClass();
    $data->program = Program::where('slug', $slug)->first();
    $data->programs = Program::where('program_category_id', $data->program->category_id)->paginate(8);
    $data->reviews = Review::get();

    return view('pages.programs.show', compact('data'));
  }

  public function doctors()
  {
    $data = new stdClass();
    $data->doctors = Doctor::latest()->paginate(8);

    $texts = Helper::getTexts('doctors');

    return view('pages.doctors.index', compact('data', 'texts'));
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
