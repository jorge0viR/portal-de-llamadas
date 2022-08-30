describe('empty spec', () => {
  it('Listedo de celulares',() => {
    cy.visit('http://tester.intertel.mx/')

   //login
    cy.get('#Username.form-control',{ timeout: 90000 }) .type('testerqa');
    cy.get('#Password.form-control',{ timrout: 90000 }) .type('marioborroelusuario');
    cy.get('.btn').click();

  
  
   //Validacion de listado de celulares 
   cy.visit('tester.intertel.mx/CellLine/Index')
  /*
   cy.get('#navbarDropdown',{ timeout: 30000}).click(); 

   cy.xpath('/htal/body/nav/div/ul[1[/li[2[/div/a[1[',{ timeout: 30000 }).click();
  */
  })
})