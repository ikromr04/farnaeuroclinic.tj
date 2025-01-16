<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Doctor extends Model
{
  use HasSlug;

  protected $guarded = [];

  public function getSlugOptions(): SlugOptions
  {
    return SlugOptions::create()
      ->generateSlugsFrom('name')
      ->saveSlugsTo('slug');
  }

  public function blocks()
  {
    return $this->hasMany(DoctorBlock::class, 'doctor_id');
  }
}
