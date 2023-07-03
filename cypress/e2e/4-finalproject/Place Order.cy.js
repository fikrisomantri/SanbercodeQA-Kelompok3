describe('Place Order Scenario', () => {
  
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/cart.html')
    })
  
  it('Berhasil Place Order Input semua field', () => {
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('James')
    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Jakarta')
    cy.get('#card').type('12345678')
    cy.get('#month').type('May')
    cy.get('#year').type('2023')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()   
  })

  it('Berhasil Place Order Field Country tidak diinput', () => {    
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('James')
    cy.get('#city').type('Jakarta')
    cy.get('#card').type('12345678')
    cy.get('#month').type('May')
    cy.get('#year').type('2023')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
  })

  it('Berhasil Place Order Field City tidak diinput', () => {    
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('James')
    cy.get('#country').type('Indonesia')
    cy.get('#card').type('12345678')
    cy.get('#month').type('May')
    cy.get('#year').type('2023')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
  })

  it('Berhasil Place Order Field Month tidak diinput', () => {    
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('James')
    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Jakarta')
    cy.get('#card').type('12345678')
    cy.get('#year').type('2023')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
  })

  it('Berhasil Place Order Field Year tidak diinput', () => {    
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('James')
    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Jakarta')
    cy.get('#card').type('12345678')
    cy.get('#month').type('May')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
  })

  it('Failed Place Order Field name tidak diinput', () => {    
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Jakarta')
    cy.get('#card').type('12345678')
    cy.get('#month').type('May')
    cy.get('#year').type('2023')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
  })

  it('Failed Place Order Field Credit card tidak diinput', () => {    
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('James')
    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Jakarta')
    cy.get('#month').type('May')
    cy.get('#year').type('2023')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
  })

  it('Failed Place Order semua field tidak terisi', () => {    
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  
  })
})