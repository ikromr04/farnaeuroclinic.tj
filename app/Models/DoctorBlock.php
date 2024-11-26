<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class DoctorBlock extends Model
{
  use HasSlug;

  protected $guarded = ['id'];

  public function getSlugOptions(): SlugOptions
  {
    return SlugOptions::create()
      ->generateSlugsFrom('short_title')
      ->saveSlugsTo('slug');
  }

  public function doctor()
  {
    return $this->belongsTo(Doctor::class, 'doctor_id');
  }
}
