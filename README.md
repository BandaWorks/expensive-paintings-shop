Необходимо сверстать макет страницы интернет-магазина очень дорогих (но крайне красивых, конечно же) картин.

### Технический стек
- VueJS
- Стили по BEM
- SCSS

### Фичи
- По нажатию на кнопку "Купить" выполняется запрос `PATCH /paintings/:id` с указанием нового статуса для картины `status: in-puchase`.
- На время выполнения запроса вместо надписи “купить” должен появляться лоадер. Внешний вид лоадера на ваше усмотрение.
- После удачного запроса внешний вид кнопки должен менять состояние: “в корзине”
- После перезагрузки страницы состояния товаров (в корзине он или нет) должно сохраняться (можно использовать LocalStorage или любое другое решение для локального хранения данных).

### Сервер

В проекте подключен фейковый бекенд, сделанный с помощью [MirageJS](https://miragejs.com/). Доступные запросы: GET и PATCH.

**GET /api/paintings**

 ```json
{
  "paintings": [
    {
      "type": "painting",
      "paintingName": "Рождение Венеры",
      "authorFullName": "Сандро Боттичелли",
      "status": "available",
      "price": {
        "value": 2000000,
        "currencyCode": "USD"
      },
      "discount": 0.5,
      "id": "1"
    },
    {
      "type": "painting",
      "paintingName": "Тайная вечеря",
      "authorFullName": "Леонардо да Винчи",
      "status": "available",
      "price": {
        "value": 3000000,
        "currencyCode": "USD"
      },
      "discount": null,
      "id": "2"
    },
    {
      "type": "painting",
      "paintingName": "Сотворение Адама",
      "authorFullName": "Микеланджело Буонарроти",
      "status": "available",
      "price": {
        "value": 5000000,
        "currencyCode": "USD"
      },
      "discount": null,
      "id": "3"
    },
    {
      "type": "painting",
      "paintingName": "Урок анатомии",
      "authorFullName": "Рембрандт ван Рейн",
      "status": "sold",
      "price": {
        "value": 4000000,
        "currencyCode": "USD"
      },
      "discount": 0.25,
      "id": "4"
    }
  ]
}
```


**PATCH /paintings/3**
```js
await fetch('/api/paintings/3', { 
  method: 'PATCH', 
  body: JSON.stringify({ 
    // Изменяем статус с 'sold' на 'available'  
    painting: { status: 'available' },
  }),
});
```

```json
{
  "painting": {
    "type": "painting",
    "paintingName": "Сотворение Адама",
    "authorFullName": "Микеланджело Буонарроти",
    "status": "available",
    "price": {
      "value": 5000000,
      "currencyCode": "USD"
    },
    "discount": null,
    "id": "3"
  }
}
```
