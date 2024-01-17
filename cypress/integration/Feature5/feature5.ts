import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I visit 3D Agility Signup page',()=>{
    cy.visit(Cypress.env('project_3dAgility'))
})

When('When i password', function (){
    cy.get('.white-btn').click()
    cy.get(':nth-child(3) > .in-w-icon > #Password').type("Hi")
    //assersion
    cy.get(':nth-child(3) > .in-w-icon > #Password').clear()
})

Then('Test for strength', function (){
    cy.log("hi")
})