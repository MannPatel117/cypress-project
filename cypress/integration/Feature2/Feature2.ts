import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import FormPage from "../../support/formObjects/FormPage";

const formPage = new FormPage();

//Given I visit Torrent Form Page
Given('I open Torrent Form Page',() =>{
    cy.visit(Cypress.env('formUrl'), { failOnStatusCode: false })
    cy.wait(2000)
})

//When I add details to Client Information
When('I focus and blur, input fields', function (){
    formPage.getCompanyName().focus().blur()
    formPage.getCompanyAddress().focus().blur()
    formPage.getCountrySelect().focus().blur()
    formPage.getStateSelect().focus().blur()
    formPage.getCitySelect().focus().blur()
    formPage.getCompanyPincode().focus().blur() 
})

//Then Validate that all input field are valid
Then('Validate that all input field error messages are valid', function()
{
    formPage.getCompanyName().should("have.value", '')
    cy.get('#mat-error-0').should('be.visible')
    formPage.getCompanyAddress().should("have.value", '')
    cy.get('#mat-error-1').should('be.visible')
    formPage.getCountrySelect().should("have.attr", "aria-invalid", 'true')
    cy.get('#mat-error-2').should('be.visible')
    formPage.getStateSelect().should("have.attr", "aria-invalid", 'true')
    cy.get('#mat-error-3').should('be.visible')
    formPage.getCitySelect().should("have.attr", "aria-invalid", 'true')
    cy.get('#mat-error-4').should('be.visible')
    formPage.getCompanyPincode().should("have.value", '')
    cy.get('#mat-error-5').should('be.visible')
})

When('I focus and blur, input fields in Personal Details Section', function (dataTable){
    cy.log(this.data)
    formPage.getPersonalName().focus().blur()
    formPage.getPersonalContact().focus().blur()
    formPage.getPersonalMobile().focus().blur()
    formPage.getPersonalEmail().focus().blur()
    formPage.getPersonalTimezone().focus().blur()
    formPage.getPersonalAddress().focus().blur()
    formPage.getPersonalCountry().focus().blur()
    formPage.getPersonalState().focus().blur()
    formPage.getPersonalCity().focus().blur()
    formPage.getPersonalPincode().focus().blur()
})

//Then Validate that all input field are valid
Then('Validate that all input field error messages are valid personal details', function()
{
    formPage.getPersonalName().should("have.value", '')
    cy.get('#mat-error-0').should('be.visible')
    formPage.getPersonalContact().should("have.value", '')
    cy.get('#mat-error-1').should('be.visible')
    formPage.getPersonalMobile().should("have.value", '')
    cy.get('#mat-error-2').should('be.visible')
    formPage.getPersonalEmail().should("have.value", '')
    cy.get('#mat-error-3').should('be.visible')
    formPage.getPersonalTimezone().should("have.attr", "aria-invalid", 'true')
    cy.get('#mat-error-4').should('be.visible')
    formPage.getPersonalAddress().should("have.value", '')
    cy.get('#mat-error-5').should('be.visible')
    formPage.getPersonalCountry().should("have.attr", "aria-invalid", 'true')
    cy.get('#mat-error-6').should('be.visible')
    formPage.getPersonalState().should("have.attr", "aria-invalid", 'true')
    cy.get('#mat-error-7').should('be.visible')
    formPage.getPersonalCity().should("have.attr", "aria-invalid", 'true')
    cy.get('#mat-error-8').should('be.visible')
    formPage.getPersonalPincode().should("have.value", '')
    cy.get('#mat-error-9').should('be.visible')
})

When('I focus and blur, input fields in Project Details Section', function (){
    formPage.getProjectName().focus().blur()
    formPage.getProjectStatus().focus().blur()
    formPage.getProjectType().focus().blur()
    formPage.getProjectDescription().focus().blur()
    formPage.getProjectAgencies().focus().blur()
    formPage.getProjectComment().focus().blur()
    formPage.getProjectLocation().focus().blur()
    // formPage.getProjectStartDate().focus().blur()
    // formPage.getProjectEndDate().focus().blur()
    formPage.getProjectSample().focus().blur()
})

//Then Validate that all Project Details input field are valid
Then('Validate that all input field error messages are valid project details', function()
{
    formPage.getProjectName().should("have.value", '')
    cy.get('#mat-error-0').should('be.visible')
    // formPage.getProjectStatus().should("have.attr", "aria-invalid", 'true')
    // cy.get('#mat-error-1').should('be.visible')
    formPage.getProjectType().should("have.attr", "aria-invalid", 'true')
    cy.get('#mat-error-1').should('be.visible')
    formPage.getProjectDescription().should("have.value", '')
    cy.get('#mat-error-2').should('be.visible')
    formPage.getProjectAgencies().should("have.value", '')
    cy.get('#mat-error-3').should('be.visible')
    formPage.getProjectComment().should("have.value", '')
    cy.get('#mat-error-4').should('be.visible')
    formPage.getProjectLocation().should("have.value", '')
    cy.get('#mat-error-5').should('be.visible')
    formPage.getProjectSample().invoke('val').then((value) =>{
        const sampleValue= Number(value);
        expect(sampleValue).to.be.equals(0)
    })
    cy.get('#mat-error-6').should('be.visible')
})


//When Questionnaire Section Testing
When('I focus and blur, input fields in Questionnaire Section', function (){
    formPage.getQuestionSubmittion().focus().blur()
    formPage.getQuestionSample().focus().blur()
    formPage.getQuestionTAT().focus().blur()
    cy.get('#mat-select-18-panel > mat-option').focus().blur()
    formPage.getQuestionShipping().focus().blur()
    formPage.getQuestionMatrix().check()
    formPage.getQuestionMatrixSoil().focus().blur()
    formPage.getQuestionMatrixSoilParam().focus().blur()
    formPage.getQuestionTestingParam().focus().blur()
    // formPage.getQuestionTests().click()
    // formPage.getSelectValue().contains(this.data.questionTest).click()
    // formPage.getQuestionTests().invoke('removeAttr', 'aria-controls')
    // formPage.getQuestionTests().invoke('removeAttr', 'aria-activedescendant')
    // formPage.getQuestionTests().invoke('attr', 'aria-expanded', 'false').should('have.attr', 'aria-expanded', 'false')
    formPage.getQuestionAnalysis().check({force: true})
    formPage.getQuestionAnalysis().uncheck({force: true})
    formPage.getQuestionCanister().focus().blur()
    formPage.getQuestionFlowRegulator().focus().blur()
    formPage.getQuestionCriticalFactor().focus().blur()
    formPage.getQuestionPackage().check({force: true})
    formPage.getQuestionSpeical().focus().blur()
    formPage.getQuestionExcel().focus().blur()
    formPage.getQuestionEDD().focus().blur()
    formPage.getQuestionQuoteDate().focus().blur()
    formPage.getQuestionOutcome().focus().blur()
    formPage.getQuestionLetTorrent().focus().blur()
})

//Then Questionnaire Section Testing
Then('Validate that all input field error messages are valid in Questionnaire', function()
{
    formPage.getQuestionSubmittion().invoke('val').then((value) =>{
        const sampleValue= Number(value);
        expect(sampleValue).to.be.gte(1)
        expect(sampleValue).to.be.lt(1000)
    })
    formPage.getQuestionSample().invoke('val').then((value) =>{
        const sampleValue= Number(value);
        expect(sampleValue).to.be.gte(1)
        expect(sampleValue).to.be.lt(1000)
    })
    formPage.getQuestionTAT().should("have.attr", "aria-invalid", 'false')
    formPage.getQuestionShipping().should("have.attr", "aria-invalid", 'false')
    formPage.getQuestionMatrix().should("be.checked")
    formPage.getQuestionMatrixSoil().should("have.length.greaterThan", 0).and("have.length.lessThan", 200).and("have.value", this.data.questionMatrixSample).and("have.attr", "aria-invalid", 'false')
    formPage.getQuestionMatrixSoilParam().should("have.length.greaterThan", 0).and("have.length.lessThan", 100).and("have.value", this.data.questionMatrixParameter).and("have.attr", "aria-invalid", 'false')
    formPage.getQuestionTestingParam().should("have.value", this.data.questionSamplePerMatrix)
    formPage.getQuestionAnalysis().should("be.checked")
    formPage.getQuestionCanister().should("have.attr", "aria-invalid", 'false')
    formPage.getQuestionFlowRegulator().should("have.attr", "aria-invalid", 'false')
    formPage.getQuestionCriticalFactor().should("have.length.greaterThan", 0).and("have.value", this.data.questionCriticalFactor).and("have.attr", "aria-invalid", 'false')
    formPage.getQuestionPackage().should("be.checked")
    formPage.getQuestionSpeical().should("have.value", this.data.questionSpecial).and("have.attr", "aria-invalid", 'false')
    formPage.getQuestionExcel().should("have.value", this.data.questionExcel).and("have.attr", "aria-invalid", 'false')
    formPage.getQuestionEDD().should("have.value", this.data.questionEDD).and("have.attr", "aria-invalid", 'false')
    formPage.getQuestionLetTorrent().should("have.value", this.data.questionTorrent).and("have.attr", "aria-invalid", 'false')
})