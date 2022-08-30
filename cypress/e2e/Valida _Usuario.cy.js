describe('empty spec', () => {
  it('Listedo de celulares',() => {
    cy.visit('http://tester.intertel.mx/')

   //login
    cy.get('#Username.form-control',{ timeout: 90000 }) .type('testerqa');
    cy.get('#Password.form-control',{ timrout: 90000 }) .type('marioborroelusuario');
    cy.get('.btn').click();

   //Validacion de usuario 
   cy.visit('http://tester.intertel.mx/User/Index')
   cy.get('.btn-primary').click();  
   cy.get('#Name').type('jorgejasoevamarioluisfernandoaduardomari');
   cy.get('#UserName').type('jorgejasoevamarioluisfernandoaduardomari');
   cy.get('#Email').type('2022@gmail.com');
   cy.get('#PhoneNumber').type('5532365668');
   cy.get('#PasswordHash').type('Temporal2022');
   cy.get('#ConfirmPassword').type('Temporal2022');
   cy.get('#UserTypeId').select('Interno');
   cy.get('.filter-option-inner-inner ').click();
   cy.get('.dropdown-menu > :nth-child(2) > .dropdown-item').click();
   cy.get('.btn-primary ').click();
  })
})