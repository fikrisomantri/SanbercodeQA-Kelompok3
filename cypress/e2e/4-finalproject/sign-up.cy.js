describe('Sign Up Demoblaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
  })
  it('Success Sign Up', () => {
    cy.get('#signin2').click()
    cy.get('#sign-username').type('azzania')
    cy.get('#sign-password').type('260994')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(100)
  })
    it('Failed Sign Up - Blank Username', () => {
      cy.get('#signin2').click()
      cy.get('#sign-username')
      cy.get('#sign-password').type('260994')
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
    it('Failed Sign Up - Blank Password', () => {
      cy.get('#signin2').click()
      cy.get('#sign-username').type('azzania')
      cy.get('#sign-password')
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
 })
    it('Failed Sign Up - Blank Username & Password', () => {
      cy.get('#signin2').click()
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
    it('Failed Sign Up - Username & Password already exist', () => {
      cy.get('#signin2').click()
      cy.get('#sign-username').type('azzania')
      cy.get('#sign-password').type('260994')
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
})
