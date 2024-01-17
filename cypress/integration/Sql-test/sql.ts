/// <reference types="Cypress" />

context('Window', () =>{
    let response:any;    
    it('Verify the retrieved data', () => {
        // cy.visit('http://localhost:3000')
        // cy.get('input').type('Chaitanya')
        // cy.get('button').click()
        cy.task('queryDb','select * from test.users').then((resp:any) => {
            console.log("Hi",resp)
            response=resp;
            expect(response[2].userName).to.equal("Chaitanya");
          })
        
      })
})