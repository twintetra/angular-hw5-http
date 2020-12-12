## Взаимодействие с сервером - вывод и преобразование данных

Вывести на экран информацию по запросу https://jsonplaceholder.typicode.com/users Заполнить таблицу из 3-х полей и сделать фронтовый поиск по полям по тексту (по вхождению) под каждым заголовком. С использованием выпадающих списков по контексту столбца с галками (https://material.angular.io/components/checkbox/overview).

Столбцы:
- Имя    "name": "Leanne Graham", "username": "Bret", С конкатенировать строку: name (username)
- Почта    "email": "Sincere@april.biz",
- Адрес    "address": 
      "zipcode": "92998-3874",      
      "city": "Gwenborough"
      "street": "Kulas Light",
      "suite": "Apt. 556",

С конкатенировать строку адреса используя интерцептор (миделвеер для запроса): zipcode + city + street + suite

По клику на строку открывать координаты места расположения в модальном окне на карте. Карту можно подключить одной из библиотек: https://habr.com/ru/post/318600/ или https://techrocks.ru/2019/10/05/best-javascript-maps-api-and-libraries/

[Взаимодействие с сервером](https://stackblitz.com/github/twintetra/angular-hw5-http)
