<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
  public function index()
  {
    return Doctor::paginate(4, ['*'], 'page', request()->page);
  }
}
