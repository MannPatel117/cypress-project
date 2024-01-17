import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import agility from "../../support/agilityObjects/agility";

const projectAgility = new agility();
let token:any;
Given('I trigger the login API',()=>{
    cy.request("POST","https://uatapi.3dagility.com/api/v1.0/user/onBoarding/login",
    {password: "@Mann2001", email: "mann.patel@winjit.com"}).
    then(function(response:any)
    {
        expect(response.status).to.eq(200)
        console.log("HI", response.body.data.data)
    //    Cypress.env('token', response.body.data.data);
       token=JSON.stringify(response.body.data.data);
       console.log(Cypress.env('token'))
    })
})

When('I visit the 3D Agility Site', function (){
    cy.visit(Cypress.env('project_3dAgility'),{
       onBeforeLoad :function(window)
       {
         window.sessionStorage.setItem('userLogin',token)
       }
    })
})

Then('I should bypass the login screen', function (){
    cy.get('.blue-btn').click()
    cy.get('h3').should('have.text', 'What are you working on today?')
    cy.get('.c-option-card-row > :nth-child(1)').click()
    cy.get(':nth-child(7) > .do-option-btn').click()
    cy.get(':nth-child(1) > .do-option-btn').click()
    cy.get(':nth-child(1) > .do-option-btn').click()
    cy.get('.chat-textbox-block > .ng-pristine').type("Suggest me products")
    cy.get('.chat-textbox-block > .s-btn').click()
    cy.wait(10000)
    cy.get('.sender-msg > .msg-block > .msg-card > .msg-con').should("be.visible")
    cy.get('.w-100').click()
    cy.get('#disableDeviceModal').should("be.visible")
    cy.get('.b-trans-btn').click()
    cy.get('h3').should('have.text', 'What are you working on today?')
})