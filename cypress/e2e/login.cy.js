describe('empty spec', () => {
  it('login', () => {
    cy.visit('http://tester.intertel.mx/');
    http://tester.intertel:mx/CellLine/Index
    //login com acceso correcto
    cy.get('#Username.form-control',{ timeout: 90000 }) .type('joRamirez');
    cy.get('#Password.form-control',{ timrout: 90000 }) .type('Temporal2022');
    cy.get('.btn').click();
  })
})