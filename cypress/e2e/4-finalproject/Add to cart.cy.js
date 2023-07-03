describe('add to cart', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').clear().type('sizeliziogaming')
    cy.get('#loginpassword').clear().type('sizeliziogaming')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
  })
})