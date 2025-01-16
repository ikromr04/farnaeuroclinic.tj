<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\JsonResponse;

class DoctorController extends Controller
{
  public function index()
  {
    return Doctor::paginate(4, ['*'], 'page', request()->page);
  }

  public function get(): JsonResponse
  {
    $doctors = Doctor::latest()
    ->select(
      'id',
      'name',
      'slug',
      'avatar',
      'position',
      'specialization',
      'experience',
    )->get();

    return response()->json($doctors, 200);
  }
}
