describe('Тесты формы авторизации на login.qa.studio', () => {
  const correctEmail = 'german@dolnikov.ru'
  const correctPassword = 'qa_one_love1'
  const wrongEmail = 'wrong@example.com'
  const wrongPassword = 'wrongpassword'
  const emailWithoutAt = 'germandolnikov.ru'
  const emailWithUpperCase = 'GerMan@Dolnikov.ru'

  beforeEach(() => {
    cy.visit('https://login.qa.studio')
  })

  it('1. Позитивный кейс авторизации', () => {
    // Вводим правильный логин
    cy.get('input[type="email"]').type(correctEmail)
    
    // Вводим правильный пароль
    cy.get('input[type="password"]').type(correctPassword)
    
    // Нажимаем войти
    cy.get('button[type="submit"]').click()
    
    // Проверяем нужный текст и наличие кнопки крестик
    cy.contains('Авторизация прошла успешно').should('be.visible')
    cy.get('.close-button').should('be.visible')
  })

  it('2. Проверка логики восстановления пароля', () => {
    // Нажимаем "Забыли пароль"
    cy.contains('Забыли пароль').click()
    
    // Вводим любой имейл
    cy.get('input[type="email"]').type('test@example.com')
    
    // Нажимаем кнопку восстановления
    cy.get('button[type="submit"]').click()
    
    // Проверяем, что получили нужный текст и есть кнопка крестика
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible')
    cy.get('.close-button').should('be.visible')
  })

  it('3. Негативный кейс авторизации - неправильный пароль', () => {
    // Вводим правильный логин
    cy.get('input[type="email"]').type(correctEmail)
    
    // Вводим НЕправильный пароль
    cy.get('input[type="password"]').type(wrongPassword)
    
    // Нажимаем войти
    cy.get('button[type="submit"]').click()
    
    // Проверяем нужный текст и наличие кнопки крестик
    cy.contains('Такого логина или пароля нет').should('be.visible')
    cy.get('.close-button').should('be.visible')
  })

  it('4. Негативный кейс авторизации - неправильный логин', () => {
    // Вводим НЕправильный логин
    cy.get('input[type="email"]').type(wrongEmail)
    
    // Вводим правильный пароль
    cy.get('input[type="password"]').type(correctPassword)
    
    // Нажимаем войти
    cy.get('button[type="submit"]').click()
    
    // Проверяем нужный текст и наличие кнопки крестик
    cy.contains('Такого логина или пароля нет').should('be.visible')
    cy.get('.close-button').should('be.visible')
  })

  it('5. Негативный кейс валидации - логин без @', () => {
    // Вводим логин без @
    cy.get('input[type="email"]').type(emailWithoutAt)
    
    // Вводим правильный пароль
    cy.get('input[type="password"]').type(correctPassword)
    
    // Нажимаем войти
    cy.get('button[type="submit"]').click()
    
    // Проверяем, что получаем текст с ошибкой
    cy.contains('Нужно исправить ошибку в e-mail').should('be.visible')
  })

  it('6. Проверка приведения к строчным буквам в логине', () => {
    // Вводим логин с заглавными буквами
    cy.get('input[type="email"]').type(emailWithUpperCase)
    
    // Вводим правильный пароль
    cy.get('input[type="password"]').type(correctPassword)
    
    // Нажимаем войти
    cy.get('button[type="submit"]').click()
    
    // Проверяем, что авторизация успешна
    // Этот тест должен упасть, так как разработчик не реализовал приведение к строчным буквам
    cy.contains('Авторизация прошла успешно').should('be.visible')
    cy.get('.close-button').should('be.visible')
  })
})
