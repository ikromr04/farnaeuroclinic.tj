<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <meta name="description" content="Farna Euro Clinic – европейский уровень медицины в Таджикистане. Диагностика, лечение неврологических заболеваний, консультации специалистов. Запишитесь на прием онлайн.">
  <meta name="keywords" content="неврология Душанбе, клиника Душанбе, Farna Euro Clinic, лечение, диагностика, медицина Таджикистан">
  <meta name="robots" content="index, follow">
  <meta http-equiv="Content-Language" content="ru">

  <meta property="og:title" content="Farna Euro Clinic – Современная медицинская клиника в Душанбе">
  <meta property="og:description" content="Европейский уровень медицины в Таджикистане. Современное оборудование, опытные врачи, диагностика и лечение.">
  <meta property="og:image" content="https://farnaeuroclinic.tj/images/og-image.jpg">
  <meta property="og:url" content="https://farnaeuroclinic.tj/">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Farna Euro Clinic – Современная клиника в Душанбе">
  <meta name="twitter:description" content="Диагностика и лечение неврологических заболеваний в Таджикистане. Запишитесь на прием онлайн.">
  <meta name="twitter:image" content="https://farnaeuroclinic.tj/images/og-image.jpg">

  <link rel="canonical" href="https://farnaeuroclinic.tj/">

  <link rel="icon" href="{{ asset('favicon.ico') }}">
  <link rel="icon" href="{{ asset('favicons/icon.svg') }}" type="image/svg+xml">
  <link rel="apple-touch-icon" href="{{ asset('favicons/180x180.png') }}">
  <link rel="manifest" href="{{ asset('manifest.webmanifest') }}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  @vite(['resources/css/app.css'])

  <title>@yield('title'){{ config('app.name') }}</title>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XKXGF9M8RW"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-XKXGF9M8RW');
  </script>

  <!-- Yandex.Metrika counter -->
  <script type="text/javascript">
    (function(m, e, t, r, i, k, a) {
      m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
      };
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=104044726', 'ym');

    ym(104044726, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: "dataLayer",
      accurateTrackBounce: true,
      trackLinks: true
    });
  </script>
  <noscript>
    <div><img src="https://mc.yandex.ru/watch/104044726" style="position:absolute; left:-9999px;" alt="" /></div>
  </noscript>
  <!-- /Yandex.Metrika counter -->
</head>

<body class="flex flex-col min-h-screen group">
  <x-icons />

  <x-layouts.page-header />

  @yield('content')

  <x-layouts.page-footer :texts="$texts" />

  <x-blocks.apply-modal :texts="$texts" />

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  @vite(['resources/js/app.js'])
</body>

</html>
