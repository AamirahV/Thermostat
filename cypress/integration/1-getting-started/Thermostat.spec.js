describe('Thermostat home page', () => {
  it('shows a welcome message!', () => {
    cy.visit('/')
    // change the assertion to expect a message you want
    // see it fail, and then update your html file to make it pass.

    cy.get("#thermostat").should('contain', 'Ultimate Thermostat')
  })

  it('when button clicked then temp increases by 1 ', () => {
    cy.visit('/')
    cy.get("#increaseTemp").click()
    cy.get("#message").should('contain', '21')
  })

  it('when button clicked then temp increases by 1 ', () => {
    cy.visit('/')
    cy.get("#decreaseTemp").click()
    cy.get("#message").should('contain', '19')
  })
  it('when button clicked then temp increases by 1 ', () => {
    cy.visit('/')
    cy.get("#resetTemp").click()
    cy.get("#message").should('contain', '20')
  })

})