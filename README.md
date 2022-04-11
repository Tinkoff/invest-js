# Trading Open API - JS SDK

SDK для работы с OpenAPI Тинькофф Инвестиции, который можно использовать для создания торговых роботов.

`npm i @tinkoff/invest-js --save`

## Документация

Доступна по [ссылке](https://tinkoff.github.io/investAPI/)

## Авторизация

Более полную информацию можно просмотреть в [документации](https://tinkoff.github.io/invest-openapi/auth/)

1. Перейдите в [настройки](https://tinkoff.ru/invest/settings/) блок "Токен для OpenAPI"
2. Функция "Подтверждение сделок кодом" должна быть отключена
3. Выпустите токен OpenApi для биржи и Sandbox. Возможно система
   попросит вас авторизоваться еще раз, не беспокойтесь, это необходимо
   для подключения робота к торговой платформе.
4. Скопируйте токен и сохраните, токен отображается только один раз, просмотреть
   его позже не получится, тем не менее вы можете выпускать неограниченное количество токенов.

## Пример

см. более сложный пример в [example](./example)

```typescript

```

## Sandbox

Для использования _Sandbox_ необходимо передать в apiURL и в secretToken url
эндпоинта с апи sandbox'а и токен для песочницы.
Более подробно в [документации](https://tinkoff.github.io/invest-openapi/env/)

```typescript
import { OpenAPIClient } from '@tinkoff/invest-js';

const client = new OpenAPIClient({
  token: process.env.TOKEN as string,
});

client.instruments.shares({}, (x, y) => {
  if (x) {
    console.log(x);
  }
  console.log(
    x,
    y!.instruments.filter((x) => x.ticker === 'AAPL')
  );
});
```
