describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com//')
    cy.get('#btn-make-appointment').click
    cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control')

  })
})