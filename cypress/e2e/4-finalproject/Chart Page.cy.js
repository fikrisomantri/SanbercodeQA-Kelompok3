describe('Chart Page Scenario', () => {
  
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/cart.html')
    })
  
  it('Berhasil akses Chart Page', () => {
    
    cy.get('[width="120"]').should('be.visible')
    cy.get('thead > tr > :nth-child(2)').should('be.visible')
    cy.get('thead > tr > :nth-child(3)').should('be.visible')
    cy.get('thead > tr > :nth-child(4)').should('be.visible')
    cy.get('.col-lg-1 > .btn').should('be.visible')
    
  })

  it('Berhasil menampilkan produk di dalam chart', () => { 
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.visit('https://www.demoblaze.com/prod.html?idp_=1')
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('#tbodyid > :nth-child(1) > :nth-child(1) > img').should('be.visible')
    cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get('#tbodyid > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get('#tbodyid > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get('.col-lg-1 > .btn').should('be.visible')
    
  })

  it('Berhasil delete product dari chart', () => {    
    cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click()
    cy.get('.col-lg-1 > .btn').should('be.visible')  
  })


})