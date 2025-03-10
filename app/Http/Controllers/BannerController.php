<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class BannerController extends Controller
{
  public function index(): JsonResponse
  {
    $banners = Banner::latest()->get();

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
      'image' => $imgPath ?? '/favicons/icon-light.svg',
    ]);

    return response()->json($banner, 200);
  }

  public function update(Request $request): JsonResponse
  {
    $banner = Banner::find($request->id);
    $banner->title = $request->title;
    $banner->description = $request->description;
    $banner->page = $request->page;
    $banner->program_category_id = $request->program_category_id;
    $banner->link = $request->link;

    if ($request->hasFile('image')) {
      $file = $request->file('image');

      $fileName = uniqid() . '.' . $file->extension();
      $filePath = '/images/banners/' . $fileName;
      $file->move(public_path('/images/banners'), $fileName);

      $banner->image = $filePath;
    }

    $banner->update();

    return response()->json($banner, 200);
  }

  public function delete(int $id)
  {
    Banner::find($id)->delete();

    return response()->json([
      'message' => 'Баннер успешно удален.',
    ], 200);
  }
}
