import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit 3D Agility and Login',()=>{
    cy.visit('https://3dadminuat.z13.web.core.windows.net/')
    cy.wait(2000)
})

When('When I click on a modal', function (){
    cy.get('#user_name').type('WinjitDev')
    cy.get('#Password').type('Winjit@123')
    cy.get('.blue-btn').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > a').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .action-cell > .form-check').click()
    cy.get('#disableDeviceModal > .modal-dialog > .modal-content > .modal-header').should('be.visible')
    cy.get('#disableDeviceModal > .modal-dialog > .modal-content > .modal-body > .ad-pro-block').contains("No").click()
})

Then('The modal contains should be tested', function (){
    cy.log("ho")
})