<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\DoctorBlock;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
  public function index()
  {
    return Doctor::latest()->paginate(4, ['*'], 'page', request()->page);
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
      )->with([
        'blocks' => function ($query) {
          $query->select(
            'id',
            'doctor_id',
            'title',
            'slug',
            'short_title as shortTitle',
            'content',
          );
        }
      ])->get();

    return response()->json($doctors, 200);
  }

  public function store(Request $request): JsonResponse
  {
    if ($request->hasFile('avatar')) {
      $file = $request->file('avatar');
      $fileName = uniqid() . '.' . $file->extension();
      $filePath = '/images/doctors/' . $fileName;
      $file->move(public_path('/images/doctors'), $fileName);
    }

    $doctor = Doctor::create([
      'name' => $request->name,
      'avatar' => $filePath ?? '',
      'position' => $request->position,
      'specialization' => $request->specialization,
      'experience' => $request->experience,
    ]);

    if ($request->blocks) {
      foreach (json_decode($request->blocks) as $block) {
        DoctorBlock::create([
          'doctor_id' => $doctor->id,
          'title' => $block->title,
          'short_title' => $block->short_title,
          'content' => $block->content,
        ]);
      }
    }

    $doctor = Doctor::select(
        'id',
        'name',
        'slug',
        'avatar',
        'position',
        'specialization',
        'experience',
      )->with([
        'blocks' => function ($query) {
          $query->select(
            'id',
            'doctor_id',
            'title',
            'slug',
            'short_title as shortTitle',
            'content',
          );
        }
      ])->find($doctor->id);

    return response()->json($doctor, 200);
  }

  public function delete(int $id)
  {
    Doctor::find($id)->delete();

    return response()->json([
      'message' => 'Доктор успешно удален.',
    ], 200);
  }
}
