<!DOCTYPE html>
<html lang="ru">

<head>
  <title>Заявка на консультацию</title>
</head>

<body>
  <div style="display: flex; justify-content: center; font-family: sans-serif; color: #4B5563; font-size: 16px; width: 100%; height: 100%; background-color: #f3f4f6; padding: 40px 40px 80px 40px; box-sizing: border-box;">
    <div style="padding: 32px; background-color: white; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 20%); margin: 0 auto; max-width: 420px;">
      <h1 style="font-size: 20px;">Заявка на консультацию</h1>

      <div>
        <p><strong>Имя:</strong> {{ $data['name'] }}</p>
        <p><strong>Телефон:</strong> {{ $data['tel'] }}</p>
        @if ($data['doctor'])
          <p><strong>Врач:</strong> {{ $data['doctor'] }}</p>
        @endif
      </div>
    </div>
  </div>
</body>

</html>
