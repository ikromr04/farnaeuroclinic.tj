<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
  public function check(Request $request): JsonResponse
  {
    $user = $request->user();

    if (!$user) return response()->json(['message' => 'Вы не авторизованы.'], 401);

    return response()->json([
      'id' => $user->id,
      'name' => $user->name,
      'login' => $user->login,
    ], 200);
  }

  public function login(LoginRequest $request): JsonResponse
  {
    $user = User::where('login', $request->login)->first();

    return response()->json([
      'user' => [
        'id' => $user->id,
        'name' => $user->name,
        'login' => $user->login,
      ],
      'token' => $user->createToken('access_token')->plainTextToken,
    ], 200);
  }

  public function logout(): JsonResponse
  {
    $user = request()->user();

    if (!$user) return response()->json(['message' => 'Вы не авторизованы.'], 401);

    $user->currentAccessToken()->delete();

    return response()->json(['message' => 'Вы успешно вышли из системы.'], 200);
  }
}
