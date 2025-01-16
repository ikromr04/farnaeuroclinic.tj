<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class ProgramCategory extends Model
{
  use HasSlug;

  protected $guarded = [];

  public function getSlugOptions(): SlugOptions
  {
    return SlugOptions::create()
      ->generateSlugsFrom('title')
      ->saveSlugsTo('slug');
  }

  public function programs(): HasMany
  {
    return $this->hasMany(Program::class);
  }

  public function banners(): HasMany
  {
    return $this->hasMany(Banner::class);
  }
}
