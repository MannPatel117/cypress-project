/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


declare namespace Cypress {
  interface Chainable<Subject = any> {
    loginAPI():Chainable<any>;
    sqlServer(query: string): Chainable<any>;
  }
}

Cypress.Commands.add("loginAPI",()=>{
  cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",
  {"userEmail":"zarifansari@gmail.com","userPassword":"Harley!09876"}).
  then(function(response:any){
      console.log(response)
      expect(response.status).to.equal(200)  
      Cypress.env('token', response.body.token)
  })
})



Cypress.Commands.add('sqlServer', (query) => {
  if(!query) {
    throw new Error('Query must be set');
  }
  console.log(query, "... calling task function")
  cy.task('sqlServerr', query).then((response:any) => {
    let result: any = [];
    console.log("triggered")
    const flatten:any = (r:any) => Array.isArray(r) && r.length === 1 ? flatten(r[0]) : r;

    if(response) {
      for (let i in response) {
        result[i] = [];
        for (let c in response[i]) {
          result[i][c] = response[i][c].value;
        }
      }
      result = flatten(result);
    } else {
      result = response;
    }

    return result;
  });
});