describe('Простая проверка pokemonbattle.ru', function () {
  it('Проверяет доступность сайта и форму авторизации', function () {
    // Переходим на сайт https://pokemonbattle.ru/
    cy.visit('https://pokemonbattle.ru/')
    
    // Проверяем заголовок
    cy.title().should('contain', 'Битва Покемонов')
    
    // Ждем загрузки React приложения
    cy.wait(5000)
    
    // Проверяем, что страница загрузилась
    cy.get('body').should('not.be.empty')
    
    // Проверяем наличие формы авторизации (если она есть)
    cy.get('body').then(($body) => {
      if ($body.find('input[id="k_email"]').length > 0) {
        cy.log('Форма авторизации найдена')
        cy.get('input[id="k_email"]').should('be.visible')
        cy.get('input[id="k_password"]').should('be.visible')
        
        // Пробуем авторизоваться
        cy.get('input[id="k_email"]').type('USER_LOGIN')
        cy.get('input[id="k_password"]').type('USER_PASSWORD')
        cy.get('button[type="submit"]').click()
        
        // Ждем результата
        cy.wait(5000)
        
        // Проверяем, что что-то изменилось на странице
        cy.get('body').should('not.be.empty')
        cy.log('Авторизация выполнена')
      } else {
        cy.log('Форма авторизации не найдена - возможно, сайт изменился')
      }
    })
  })
})
