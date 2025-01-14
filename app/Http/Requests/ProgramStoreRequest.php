<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProgramStoreRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'title' => 'required',
      'category_id' => 'required',
      'description' => 'required',
      'price' => 'required',
      'info' => 'required',
    ];
  }

  public function messages(): array
  {
    return [
      'title.required' => 'Обязательное поле',
      'category_id.required' => 'Обязательное поле',
      'description.required' => 'Обязательное поле',
      'price.required' => 'Обязательное поле',
      'info.required' => 'Обязательное поле',
    ];
  }
}
