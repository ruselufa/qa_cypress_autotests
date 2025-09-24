describe('Простой тест для проверки работы Cypress', () => {
  it('Проверяет, что сайт login.qa.studio доступен', () => {
    cy.visit('https://login.qa.studio')
    cy.title().should('contain', 'Форма логина')
  })
})
