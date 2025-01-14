<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Program extends Model
{
  use HasSlug;

  protected $guarded = ['id'];
  protected $hidden = ['category_id'];

  public function getSlugOptions(): SlugOptions
  {
    return SlugOptions::create()
      ->generateSlugsFrom('title')
      ->saveSlugsTo('slug');
  }

  public function category()
  {
    return $this->belongsTo(ProgramCategory::class, 'category_id');
  }

  public function blocks()
  {
    return $this->hasMany(ProgramBlock::class, 'program_id');
  }

  public function article()
  {
    return $this->hasOne(Article::class, 'program_id');
  }
}
