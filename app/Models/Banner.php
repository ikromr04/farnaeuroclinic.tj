<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Banner extends Model
{
  protected $guarded = [];
  protected $hidden = ['program_category_id'];

  public function category(): BelongsTo
  {
    return $this->belongsTo(ProgramCategory::class, 'program_category_id');
  }
}
