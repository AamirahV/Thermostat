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

  it('when button clicked then temp decreases by 1 ', () => {
    cy.visit('/')
    cy.get("#decreaseTemp").click()
    cy.get("#message").should('contain', '19')
  })
  it('when button clicked the temp resets', () => {
    cy.visit('/')
    cy.get("#resetTemp").click()
    cy.get("#message").should('contain', '20')
  })
  it('when button clicked cannot go below 10', () => {
    cy.visit('/')
    cy.get("#decreaseTemp").dblclick()
    cy.get("#message").should('contain', '10')
  })
  it('when button clicked can switch on powersaving', () => {
    cy.visit('/')
    cy.get("#increaseTemp").dblclick()
    cy.get("#message").should('contain', '25')
  })
  it('when button clicked can switch off powersaving ', () => {
    cy.visit('/')
    cy.get("#powerSave").click()
    cy.get("#increaseTemp").dblclick()
    cy.get("#message").should('contain', '32')
  })
  it('when button clicked temp can reach a maximum of 25 - powersaving on', () => {
    cy.visit('/')
    cy.get("#increaseTemp").dblclick()
    cy.get("#message").should('contain', '25')
  })
  it('when button clicked temp can reach a maximum of 32 - powersaving off', () => {
    cy.visit('/')
    cy.get("#powerSave").click()
    cy.get("#increaseTemp").dblclick()
    cy.get("#message").should('contain', '32')
  })


})