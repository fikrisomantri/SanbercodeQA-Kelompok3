describe('Sign Up Demoblaze', () => {
  it('Success Sign Up', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#sign-username')
    cy.get('#sign-password')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    cy.wait(100)
  }) 
})
