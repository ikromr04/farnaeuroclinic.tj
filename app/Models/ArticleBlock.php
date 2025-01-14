<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class ArticleBlock extends Model
{
  use HasSlug;

  protected $guarded = ['id'];

  protected $hidden = ['article_id'];

  public function getSlugOptions(): SlugOptions
  {
    return SlugOptions::create()
      ->generateSlugsFrom('short_title')
      ->saveSlugsTo('slug');
  }

  public function article()
  {
    return $this->belongsTo(Article::class, 'article_id');
  }
}
