# Автотесты на Cypress

## Установка
```bash
npm install
```

## Запуск тестов
```bash
# Все тесты
npm run cypress:run

# Открыть Cypress Test Runner
npm run cypress:open

# Конкретный тест
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Тесты

### login.cy.js
6 тестов для формы авторизации на login.qa.studio:
- ✅ Позитивный кейс авторизации
- ✅ Восстановление пароля
- ✅ Негативные кейсы (неправильный логин/пароль)
- ✅ Валидация email
- ❌ Проверка регистра букв (должен упасть - баг разработчика)

### pokemon.cy.js
E2E тест покупки аватара на pokemonbattle.ru
- ⚠️ Требует замены USER_LOGIN и USER_PASSWORD на реальные данные

### simple.cy.js
Проверка доступности сайта login.qa.studio

### pokemon-simple.cy.js
Простая проверка pokemonbattle.ru

## Важно
- Для тестов покемонов замените USER_LOGIN и USER_PASSWORD на реальные данные
- Тест с приведением к строчным буквам должен упасть (это баг разработчика)
