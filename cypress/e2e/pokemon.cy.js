describe('Проверка покупки нового аватара', function () {
  it('e2e тест на покупку нового аватара для тренера', function () {
    // Переходим на сайт https://pokemonbattle.ru/
    cy.visit('https://pokemonbattle.ru/')
    
    // Вводим логин
    cy.get('input[id="k_email"]').type('USER_LOGIN')
    
    // Вводим пароль
    cy.get('input[id="k_password"]').type('USER_PASSWORD')
    
    // Нажимаем кнопку Подтвердить
    cy.get('button[type="submit"]').click()
    
    // Ждем загрузки
    cy.wait(2000)
    
    // Клик в шапке на аву тренера
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
  })
})
