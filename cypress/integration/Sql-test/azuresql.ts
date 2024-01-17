/// <reference types="cypress" />

  context('Window', () =>{
    it('Database Interaction', () =>{
        cy.sqlServer("select * from Persons").then(function(result){
            console.log(result)
        })
    })
  })