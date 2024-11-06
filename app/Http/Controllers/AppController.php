<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
  public function index()
  {
    return view('pages.index');
  }

  public function about()
  {
    return view('pages.about');
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
