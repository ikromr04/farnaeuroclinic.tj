<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class BannerController extends Controller
{
  public function index(): JsonResponse
  {
    $banners = Banner::latest()
      ->select(
        'id',
        'page',
        'title',
        'description',
        'link',
        'program_category_id',
        'image',
      )->with([
        'category' => function ($query) {
          $query->select(
            'id',
            'title',
            'slug',
            'img',
            'description',
          );
        },
      ])->get();

    return response()->json($banners, 200);
  }

  public function store(Request $request): JsonResponse
  {
    if ($request->hasFile('image')) {
      $img = $request->file('image');
      $imgName = uniqid() . '.' . $img->extension();
      $imgPath = '/images/banners/' . $imgName;
      $img->move(public_path('/images/banners'), $imgName);
    }

    $banner = Banner::create([
      'page' => $request->page,
      'program_category_id' => $request->program_category_id,
      'title' => $request->title,
      'description' => $request->description,
      'link' => $request->link,
      'image' => $imgPath,
    ]);

    $banner = Banner::latest()
      ->select(
        'id',
        'page',
        'title',
        'description',
        'link',
        'program_category_id',
        'image',
      )->with([
        'category' => function ($query) {
          $query->select(
            'id',
            'title',
            'slug',
            'img',
            'description',
          );
        },
      ])->find($banner->id);
    return response()->json($banner, 200);
  }
}
