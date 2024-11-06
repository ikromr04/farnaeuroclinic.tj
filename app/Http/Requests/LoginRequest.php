<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'email' => 'required',
      'password' => 'required',
    ];
  }

  public function messages()
  {
    return [
      'email.required' => 'Поле логин обязательно для заполнения.',
      'password.required' => 'Пароль обязательно для заполнения.',
    ];
  }
}
