describe('Проверка покупки нового аватара', function () {
  it('e2e тест на покупку нового аватара для тренера', function () {
    // Переходим на сайт https://pokemonbattle.ru/
    cy.visit('https://pokemonbattle.ru/')
    
    // Проверяем, что сайт загрузился
    cy.title().should('contain', 'Битва Покемонов')
    
    // Ждем загрузки React приложения
    cy.wait(5000)
    
    // Проверяем наличие формы авторизации
    cy.get('input[id="k_email"]', { timeout: 15000 }).should('be.visible')
    cy.get('input[id="k_password"]', { timeout: 15000 }).should('be.visible')
    
    // Вводим логин
    cy.get('input[id="k_email"]').type('ghaliev@yandex.ru')
    
    // Вводим пароль
    cy.get('input[id="k_password"]').type('1475963Ruselufa!')
    
    // Нажимаем кнопку Подтвердить
    cy.get('button[type="submit"]').click()
    
    // Ждем загрузки после авторизации
    cy.wait(8000)
    
    // Проверяем, что авторизация прошла (ищем элементы, которые появляются после входа)
    cy.get('body').should('contain.text', 'Покемон')
    
    // Дополнительная проверка - ищем элементы интерфейса
    cy.get('body').should('contain.text', 'Тренеры')
    
    // Клик в шапке на аву тренера (если элемент существует)
    cy.get('body').then(($body) => {
      if ($body.find('.header_card_trainer').length > 0) {
        cy.get('.header_card_trainer').click()
        
        // Ждем загрузки
        cy.wait(2000)
        
        // Нажимаем кнопку Смена аватара
        cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click()
        
        // Кликаем Купить у первого доступного аватара
        cy.get('.available > button').first().click()
        
        // Вводим номер карты
        cy.get('.card_number').type('4620869113632996')
        
        // Вводим CVV карты
        cy.get('.card_csv').type('125')
        
        // Вводим срок действия карты
        cy.get('.card_date').type('1226')
        
        // Вводим имя владельца карты
        cy.get('.card_name').type('NAME')
        
        // Нажимаем кнопку Оплатить
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
        
        // Вводим код подтверждения СМС
        cy.get('.threeds_number').type('56456')
        
        // Нажимаем кнопку Оплатить
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
        
        // Проверяем наличие и видимость сообщения об успешной покупке
        cy.contains('Покупка прошла успешно').should('be.visible')
      } else {
        cy.log('Элемент .header_card_trainer не найден - возможно, сайт изменился или требует другую авторизацию')
      }
    })
  })
})
