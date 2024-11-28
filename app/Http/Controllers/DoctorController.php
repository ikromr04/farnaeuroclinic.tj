<?php

namespace App\Http\Controllers;

use App\Models\Doctor;

class DoctorController extends Controller
{
  public function index()
  {
    return Doctor::paginate(4, ['*'], 'page', request()->page);
  }
}
