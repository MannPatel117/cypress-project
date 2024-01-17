import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I visit html example',()=>{
    cy.visit('http://localhost:3000/')
})

When('When i input file', function (){
    cy.get('[type="file"]').selectFile(Cypress.config("fileServerFolder")+"/cypress/downloads/home-icon.png")
})

Then('File should be inputed', function (){
    const filename= cy.get('[type="file"]')
    console.log(filename)
    cy.get('[type="file"]').should("have.value", "home-icon.png")
})