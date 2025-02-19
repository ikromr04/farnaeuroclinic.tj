<?php

/**
 * Custom helper class
 * @author Ikrom Rahimov fleck97rgb@gmail.com
 */

namespace App\Helpers;

use App\Models\Text;

class Helper
{
  public static function getTexts($pageName)
  {
    $texts = Text::select('slug', 'page', 'title', 'content')
      ->where('page', $pageName)
      ->orWhere('page', 'all')
      ->get();

    foreach ($texts as $text) {
      $response[$text->slug] = (object) [
        'title' => $text->title,
        'content' => $text->content,
      ];
    }

    return $response;
  }
}
