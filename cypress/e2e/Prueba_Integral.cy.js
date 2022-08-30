describe('empty spec', () => {
  it('Error_login',() => {
    cy.visit('http://tester.intertel.mx/')
    cy.get('#Username').type('testerqa')
    cy.get('#Password').type('marioborroelusuario')
    cy.get('.btn').click();
  })
})