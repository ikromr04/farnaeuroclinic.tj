@php
  $routeName = Route::currentRouteName();
  $isHomePage = $routeName !== 'home';
@endphp

<footer class="mt-auto bg-brand py-8 md:pt-10 lg:pt-16">
  <div class="container flex flex-col items-center text-center text-white text-xs md:grid md:grid-cols-[auto_1fr]">
    <div class="order-2 md:order-1 md:pt-4 md:pb-8 md:pr-10 md:pl-20 md:text-start md:border-r md:border-r-white md:border-opacity-50 lg:pr-[70px] lg:pb-16 lg:text-base">
      <a class="flex mb-3" @if ($isHomePage) href="{{ route('home') }}" @endif>
        <svg xmlns="http://www.w3.org/2000/svg" width="174" height="60" fill="none">
          <path fill="#fff"
            d="M30.919 31.897c-1.422 8.709.211 14.203 3.252 17.025 3.572 3.314 8.743 2.69 12.732.513 5.674-3.096 10.555-9.976 10.555-19.438 0-15.166-12.294-27.46-27.461-27.46-15.134 0-27.506 12.307-27.46 27.46.024 7.84 3.014 15.136 8.573 20.694 8.366 8.369 21.046 10.87 31.932 6.337-11.22 5.617-25.388 3.05-34.255-5.82C3.359 45.78 0 38.28 0 29.998 0 13.431 13.432 0 29.997 0c16.567 0 29.997 13.432 29.997 29.997 0 10.496-5.495 18.17-11.883 21.657-4.972 2.714-11.265 3.203-15.664-.88-3.566-3.308-5.547-9.46-4.076-18.942-.67.518-1.307 1.475-1.81 2.933-1.27 3.667-1.427 7.912-4.034 10.525-4.4 4.412-11.877.643-9.61-6.156-6.948-1.765-6.083-10.092.007-11.414 3.387-.735 6.818 1.124 10.346 2.11.862.24 4.255.954 4.395-.705.098-1.181-2.755-2.021-3.514-2.171-3.656-.722-7.65-.524-10.415-2.72-4.879-3.879-1.973-11.73 5.038-10.243.973-7.1 9.345-7.177 11.343-1.274 1.126 3.333-.397 7.013-.96 10.685-.14.915-.45 4.201.963 4.354 1.41.152 1.724-3.456 1.747-4.364.085-3.633-.655-7.42 1.03-10.414 3.059-5.432 11.27-3.804 10.91 3.354 7.166-.163 8.565 8.092 3.051 10.998-2.957 1.56-6.604.804-10.146.746-.748-.013-4.542.174-4.672 1.438-.183 1.79 3.946 1.418 4.876 1.294 3.497-.467 7.014-1.624 10.118-.42 5.811 2.253 5.37 10.612-1.766 11.275 1.182 7.07-6.79 9.632-10.45 4.588-2.202-3.03-1.65-7.33-2.379-11.194-.28-1.48-.838-2.562-1.52-3.16Zm121.6 11.28a7.896 7.896 0 0 0-1.517-1.012 3.971 3.971 0 0 0-1.861-.452c-.639 0-1.241.12-1.807.361a4.533 4.533 0 0 0-1.472.994 4.716 4.716 0 0 0-.985 1.481 4.564 4.564 0 0 0-.361 1.807c0 .638.12 1.24.361 1.807.241.566.569 1.056.985 1.472.415.416.906.744 1.472.985.566.24 1.168.36 1.807.36.674 0 1.304-.128 1.888-.387a4.506 4.506 0 0 0 1.508-1.076.564.564 0 0 1 .226-.162.758.758 0 0 1 .28-.054c.157 0 .274.054.352.162a.598.598 0 0 1 .118.362c0 .192-.054.343-.163.451a5.574 5.574 0 0 1-1.879 1.346 5.695 5.695 0 0 1-2.33.48c-.795 0-1.542-.151-2.241-.452a5.804 5.804 0 0 1-1.824-1.229 5.812 5.812 0 0 1-1.229-1.825 5.6 5.6 0 0 1-.451-2.24 5.6 5.6 0 0 1 .451-2.24 5.922 5.922 0 0 1 1.229-1.834 5.727 5.727 0 0 1 1.824-1.237 5.604 5.604 0 0 1 2.241-.452c.807 0 1.563.156 2.267.47.705.313 1.322.74 1.852 1.282.06.06.114.139.162.235a.644.644 0 0 1 .073.29.43.43 0 0 1-.163.36.6.6 0 0 1-.379.127.557.557 0 0 1-.434-.18Zm-11.436-2.06c0-.157.055-.29.163-.398a.54.54 0 0 1 .397-.162c.157 0 .289.054.398.162.108.109.162.241.162.398V51.54c0 .157-.054.29-.162.397a.542.542 0 0 1-.398.163.54.54 0 0 1-.397-.163.542.542 0 0 1-.163-.397V41.117Zm-10.153 0c0-.157.054-.29.163-.398a.54.54 0 0 1 .397-.162c.133 0 .232.027.298.081.067.054.136.13.208.226l6.215 8.798v-8.545c0-.157.054-.29.162-.398a.542.542 0 0 1 .398-.162c.157 0 .289.054.398.162.108.109.162.241.162.398V51.54c0 .157-.054.29-.162.397a.543.543 0 0 1-.398.163.457.457 0 0 1-.325-.117 1.261 1.261 0 0 1-.217-.262l-6.179-8.744v8.563c0 .157-.054.29-.162.397a.542.542 0 0 1-.398.163.54.54 0 0 1-.397-.163.538.538 0 0 1-.163-.397V41.117Zm-2.89 0c0-.157.054-.29.162-.398a.542.542 0 0 1 .398-.162.54.54 0 0 1 .397.162c.109.109.163.241.163.398V51.54c0 .157-.054.29-.163.397a.54.54 0 0 1-.397.163.541.541 0 0 1-.398-.163.541.541 0 0 1-.162-.397V41.117Zm-7.209 0c0-.157.054-.29.163-.398a.54.54 0 0 1 .397-.162c.157 0 .289.054.398.162.108.109.162.241.162.398v9.864h4.589c.157 0 .289.054.398.163.108.108.162.24.162.397 0 .157-.054.29-.162.397a.542.542 0 0 1-.398.163h-5.149a.54.54 0 0 1-.397-.163.538.538 0 0 1-.163-.397V41.117Zm-2.349 2.06a7.896 7.896 0 0 0-1.517-1.012 3.968 3.968 0 0 0-1.861-.452c-.638 0-1.24.12-1.807.361a4.533 4.533 0 0 0-1.472.994 4.696 4.696 0 0 0-1.346 3.288c0 .638.121 1.24.362 1.807.24.566.569 1.056.984 1.472.415.416.906.744 1.472.985.567.24 1.169.36 1.807.36.675 0 1.304-.128 1.888-.387a4.52 4.52 0 0 0 1.509-1.076.56.56 0 0 1 .225-.162.759.759 0 0 1 .281-.054c.156 0 .273.054.352.162a.604.604 0 0 1 .117.362c0 .192-.054.343-.162.451a5.594 5.594 0 0 1-1.879 1.346c-.723.32-1.5.48-2.331.48-.795 0-1.541-.151-2.24-.452a5.797 5.797 0 0 1-1.825-1.229 5.792 5.792 0 0 1-1.228-1.825 5.6 5.6 0 0 1-.452-2.24c0-.795.15-1.542.452-2.24.301-.699.71-1.31 1.228-1.834a5.72 5.72 0 0 1 1.825-1.237 5.595 5.595 0 0 1 2.24-.452c.807 0 1.563.156 2.267.47.705.313 1.322.74 1.852 1.282.06.06.114.139.163.235a.643.643 0 0 1 .072.29.43.43 0 0 1-.163.36.597.597 0 0 1-.379.127.557.557 0 0 1-.434-.18Zm-15.735-2.584c.795 0 1.542.15 2.24.451.699.302 1.31.714 1.834 1.238a5.827 5.827 0 0 1 1.237 1.834c.301.698.452 1.445.452 2.24 0 .795-.151 1.542-.452 2.24a5.718 5.718 0 0 1-1.237 1.825 5.917 5.917 0 0 1-1.834 1.229 5.595 5.595 0 0 1-2.24.451c-.795 0-1.542-.15-2.241-.451a5.802 5.802 0 0 1-1.824-1.23 5.797 5.797 0 0 1-1.228-1.824 5.6 5.6 0 0 1-.452-2.24c0-.795.15-1.542.452-2.24.3-.699.71-1.31 1.228-1.834a5.725 5.725 0 0 1 1.824-1.237 5.604 5.604 0 0 1 2.241-.452Zm0 1.12c-.639 0-1.241.12-1.807.361a4.537 4.537 0 0 0-1.472.994 4.715 4.715 0 0 0-.985 1.481 4.562 4.562 0 0 0-.361 1.807c0 .638.12 1.24.361 1.807.241.566.57 1.056.985 1.472a4.61 4.61 0 0 0 1.472.985c.566.24 1.168.36 1.807.36.638 0 1.24-.12 1.806-.36a4.73 4.73 0 0 0 1.482-.985 4.53 4.53 0 0 0 .993-1.472 4.564 4.564 0 0 0 .362-1.807 4.637 4.637 0 0 0-1.355-3.288 4.653 4.653 0 0 0-3.288-1.355Zm-12.99-.578a.57.57 0 0 1 .163-.407.527.527 0 0 1 .397-.171h2.963c.434 0 .837.081 1.21.244a3.169 3.169 0 0 1 1.654 1.653c.162.373.243.77.243 1.192 0 .385-.066.747-.198 1.084a3.236 3.236 0 0 1-.542.912 3.14 3.14 0 0 1-.822.687c-.32.187-.66.31-1.021.37l2.746 4.462c.036.06.07.127.1.2.03.072.045.15.045.234 0 .097-.045.205-.136.325-.09.12-.22.181-.388.181a.527.527 0 0 1-.298-.09.761.761 0 0 1-.226-.235l-3.09-5.04h-1.68v4.805c0 .157-.054.29-.162.397a.541.541 0 0 1-.398.163.54.54 0 0 1-.397-.163.54.54 0 0 1-.163-.397V41.135Zm1.12.542v3.938h2.403a1.985 1.985 0 0 0 1.816-1.201c.102-.235.153-.49.153-.768a1.98 1.98 0 0 0-1.21-1.815 1.918 1.918 0 0 0-.759-.154h-2.403Zm-10.785-.542c0-.133.054-.262.163-.388a.522.522 0 0 1 .415-.19.48.48 0 0 1 .397.18c.097.12.145.26.145.416v6.937c0 .398.075.771.226 1.12a2.902 2.902 0 0 0 1.535 1.536c.356.157.732.235 1.13.235.397 0 .77-.078 1.12-.235.349-.157.656-.364.921-.623s.476-.563.632-.912c.157-.35.235-.723.235-1.12v-6.956c0-.133.054-.262.163-.388a.522.522 0 0 1 .415-.19c.169 0 .301.066.398.198a.673.673 0 0 1 .144.398v6.937c0 .554-.108 1.075-.325 1.563a4.054 4.054 0 0 1-2.14 2.132 3.894 3.894 0 0 1-1.563.316 3.895 3.895 0 0 1-1.563-.316 4.059 4.059 0 0 1-1.274-.858 4.062 4.062 0 0 1-.858-1.274 3.897 3.897 0 0 1-.316-1.563v-6.955Zm-8.112-.018a.54.54 0 0 1 .163-.398.54.54 0 0 1 .397-.162h5.492a.54.54 0 0 1 .398.162.54.54 0 0 1 .162.398c0 .156-.054.289-.162.397a.54.54 0 0 1-.398.163H73.1v4.029h3.288a.54.54 0 0 1 .398.162.54.54 0 0 1 .162.398.54.54 0 0 1-.162.397.54.54 0 0 1-.398.163H73.1v4.155h4.932a.54.54 0 0 1 .398.163.54.54 0 0 1 .162.397.54.54 0 0 1-.162.398.54.54 0 0 1-.398.162H72.54a.54.54 0 0 1-.397-.162.54.54 0 0 1-.163-.398V41.117ZM160.54 8.843a1.7 1.7 0 0 1 .452-.636 1.05 1.05 0 0 1 .738-.308c.273 0 .519.096.738.288.219.191.383.41.492.656l10.132 23.503c.054.11.082.274.082.493 0 .328-.109.615-.328.861-.219.246-.52.37-.903.37-.574 0-.97-.26-1.189-.78l-3.281-7.506h-11.527l-3.281 7.506a1.27 1.27 0 0 1-.493.574 1.293 1.293 0 0 1-.697.206c-.383 0-.69-.123-.923-.37a1.216 1.216 0 0 1-.348-.861c0-.164.041-.328.123-.492l10.213-23.504Zm1.19 3.815-4.676 10.583h9.311l-4.635-10.583ZM127.766 9.17c0-.355.123-.656.369-.902s.546-.37.902-.37c.301 0 .526.062.677.185.15.123.308.294.471.513l14.111 19.976V9.171c0-.355.123-.656.369-.902.246-.247.547-.37.902-.37.356 0 .657.123.903.37.246.246.369.547.369.902v23.668c0 .355-.123.656-.369.902s-.547.37-.903.37c-.3 0-.546-.09-.738-.267a2.943 2.943 0 0 1-.492-.595l-14.028-19.853v19.443c0 .355-.123.656-.37.902-.246.246-.546.37-.902.37-.355 0-.656-.124-.902-.37a1.228 1.228 0 0 1-.369-.902V9.17Zm-19.074.041c0-.355.123-.663.369-.923s.547-.39.902-.39h6.727c.985 0 1.901.185 2.748.554a7.18 7.18 0 0 1 3.754 3.754c.369.847.554 1.75.554 2.707 0 .875-.151 1.695-.452 2.461a7.346 7.346 0 0 1-1.23 2.071 7.132 7.132 0 0 1-1.867 1.559 6.751 6.751 0 0 1-2.317.841l6.235 10.131c.082.137.157.288.225.452.069.164.103.341.103.533 0 .219-.103.465-.308.738-.205.274-.499.41-.882.41-.246 0-.471-.068-.677-.205a1.735 1.735 0 0 1-.512-.533l-7.015-11.444h-3.814v10.911c0 .355-.123.656-.369.902s-.547.37-.903.37c-.355 0-.656-.124-.902-.37a1.228 1.228 0 0 1-.369-.902V9.212Zm2.543 1.23v8.943h5.455c.602 0 1.176-.117 1.723-.35a4.486 4.486 0 0 0 1.436-.963c.41-.41.731-.882.964-1.415a4.321 4.321 0 0 0 .349-1.743 4.37 4.37 0 0 0-.349-1.723 4.494 4.494 0 0 0-4.123-2.748h-5.455ZM92.777 8.844c.082-.219.232-.43.45-.636.22-.205.466-.307.74-.307.273 0 .519.095.737.287.22.191.384.41.493.656l10.131 23.504c.055.11.082.273.082.492 0 .328-.109.615-.328.861-.219.247-.519.37-.902.37-.574 0-.971-.26-1.19-.78l-3.281-7.506H88.183L84.9 33.29c-.11.246-.273.438-.492.574a1.295 1.295 0 0 1-.697.206c-.383 0-.691-.123-.923-.37a1.214 1.214 0 0 1-.35-.861c0-.164.042-.328.124-.492L92.777 8.843Zm1.19 3.815L89.29 23.24h9.311l-4.635-10.583ZM71.98 9.17c0-.355.123-.656.37-.902.246-.246.546-.37.902-.37h12.51c.356 0 .657.124.903.37s.37.547.37.902c0 .356-.124.656-.37.903-.246.246-.547.369-.903.369H74.523v9.147h7.097c.355 0 .656.123.902.37.246.245.37.546.37.902 0 .355-.124.656-.37.902s-.547.369-.903.369h-7.096v10.706c0 .355-.123.656-.369.902s-.547.37-.902.37c-.356 0-.656-.123-.902-.37a1.228 1.228 0 0 1-.37-.902V9.171Z" />
        </svg>
      </a>

      <address class="not-italic flex flex-col mb-3 text-white">
        <strong class="font-normal">ООО «Farna Euroclinic»</strong>
        Таджикистан, Душанбе ул. Лохути, 13
      </address>

      <p class="mb-3 text-white">
        {!! __('Мы работаем по будням с 8:00 до 20:00 <br> По субботам с 09:00 до 18:00') !!}
      </p>

      <ul class="mb-8 md:mb-0 text-white" id="contacts">
        <li>
          <a href="tel:+992372000000">
            +992(37)2 000000
          </a>
        </li>
        <li>
          <a href="mailto:info@farna.tj">
            info@farna.tj
          </a>
        </li>
      </ul>
    </div>

    <div class="order-1 md:order-2 w-full max-w-[420px] md:pl-10 md:pr-20 lg:pl-[70px] md:w-full md:max-w-none md:self-start">
      <iframe class="max-w-full w-full rounded-[10px] h-52 mb-8 md:mb-0 lg:h-[255px]" src="https://yandex.com/map-widget/v1/?ll=68.800243%2C38.566419&mode=whatshere&whatshere%5Bpoint%5D=68.799382%2C38.566644&whatshere%5Bzoom%5D=17&z=17.91" allowfullscreen="true"></iframe>
    </div>

    <p class="pt-5 border-opacity-50 border-t border-t-white w-full order-3 md:col-span-2 md:pt-8 md:flex md:justify-around lg:text-[16px]">
      <span>&copy; {{ date('Y') }} <strong class="font-normal">Farna Euroclinic</strong>.</span> {{ __('Все права защищены.') }}
    </p>
  </div>
</footer>
