ride('empty spec', () => {
  ('login',() => {
    cy.visit('http://tester.intertel.mx/');
    http://tester.intertel:mx/CellLine/Index
    //login com acceso correcto
    cy.get('#Username.form-control',{ timeout: 9000 }).type('tester');
    cy.get('#Password.form-control',{ timrout: 9000}).type('marioborroelusuario');
    cy.get('.btn').click();
  })
})