<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
  protected $hidden = ['program_id'];

  protected $guarded = [];

  public function program()
  {
    return $this->belongsTo(Program::class, 'program_id');
  }

  public function blocks()
  {
    return $this->hasMany(ArticleBlock::class, 'article_id');
  }
}
