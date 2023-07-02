describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('#recipient-email').type('burhan@gmail.com')
    cy.get('#recipient-name').type('burhan')
    cy.get('#message-text').type('lagi belajar auto testing')
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('#recipient-email').type('12312412')
    cy.get('#recipient-name').type('1231231')
    cy.get('#message-text').type('1231231231')
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
})