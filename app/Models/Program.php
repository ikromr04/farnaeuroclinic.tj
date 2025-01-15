<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Program extends Model
{
  use HasSlug;

  protected $guarded = ['id'];
  protected $hidden = ['program_category_id'];

  public function getSlugOptions(): SlugOptions
  {
    return SlugOptions::create()
      ->generateSlugsFrom('title')
      ->saveSlugsTo('slug');
  }

  public function category()
  {
    return $this->belongsTo(ProgramCategory::class, 'program_category_id');
  }

  public function blocks()
  {
    return $this->hasMany(ProgramBlock::class);
  }

  public function article()
  {
    return $this->hasOne(Article::class);
  }
}
