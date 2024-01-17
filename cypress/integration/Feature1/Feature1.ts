import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import FormPage from "../../support/formObjects/FormPage";

const formPage = new FormPage();

//Given I visit Torrent Form Page
Given('I open Torrent Form Page',() =>{
    cy.visit(Cypress.env('formUrl'), { failOnStatusCode: false })
    cy.wait(10000)
})

//When I add details to Client Information
When('I add details to Client Information', function (){
    formPage.getCompanyName().type(this.data.companyName)
    formPage.getCompanyAddress().type(this.data.companyAddress)
    formPage.getCountrySelect().click()
    formPage.getSelectValue().contains(this.data.companyCountry).click()
    formPage.getStateSelect().click()
    formPage.getSelectValue().contains(this.data.companyState).click()
    formPage.getCitySelect().click()
    formPage.getSelectValue().contains(this.data.companyCity).click()
    formPage.getCompanyPincode().type(this.data.companyPincode) 
})

//Then Validate that all input field are valid
Then('Validate that all input field are valid', function()
{
    formPage.getCompanyName().should("have.length.greaterThan", 0).and("have.length.lessThan", 50).and("have.value", this.data.companyName).and("have.attr", "aria-invalid", 'false')
    formPage.getCompanyAddress().should("have.length.greaterThan",0).and("have.length.lessThan", 200).and("have.value", this.data.companyAddress).and("have.attr", "aria-invalid", 'false')
    formPage.getCountrySelect().should("have.attr", "aria-invalid", 'false')
    formPage.getStateSelect().should("have.attr", "aria-invalid", 'false')
    formPage.getCitySelect().should("have.attr", "aria-invalid", 'false')
    formPage.getCompanyPincode().should("have.length.lessThan", 5).and("have.value", this.data.companyPincode)
})

//When I add details to Personal Details Section
When('I add details to Personal Details Section', function (dataTable){
    cy.log(this.data)
    formPage.getPersonalName().type(this.data.personalName)
    formPage.getPersonalContact().type(this.data.personalContact)
    formPage.getPersonalMobile().type(this.data.personalMobile)
    formPage.getPersonalEmail().type(this.data.personalEmail)
    formPage.getPersonalTimezone().click()
    formPage.getSelectValue().contains(this.data.personalTimeZone).click()
    formPage.getPersonalAddress().type(this.data.personalAddress)
    formPage.getPersonalCountry().click()
    formPage.getSelectValue().contains(this.data.personalCountry).click()
    formPage.getPersonalState().click()
    formPage.getSelectValue().contains(this.data.personalState).click()
    formPage.getPersonalCity().click()
    formPage.getSelectValue().contains(this.data.personalCity).click()
    formPage.getPersonalPincode().type(this.data.personalPincode)
})

//Then Validate that all input field are valid
Then('Validate that all personal details input field are valid', function()
{
    formPage.getPersonalName().should("have.length.greaterThan", 0).and("have.length.lessThan", 100).and("have.value", this.data.personalName).and("have.attr", "aria-invalid", 'false')
    formPage.getPersonalContact().should("have.length.greaterThan", 0).and("have.length.lessThan", 11).and("have.value", this.data.personalContact).and("have.attr", "aria-invalid", 'false')
    formPage.getPersonalMobile().should("have.length.greaterThan", 0).and("have.length.lessThan", 11).and("have.value", this.data.personalMobile).and("have.attr", "aria-invalid", 'false')
    formPage.getPersonalEmail().should("have.length.greaterThan", 0).and("have.value", this.data.personalEmail).and("have.attr", "aria-invalid", 'false')
    formPage.getPersonalTimezone().should("have.attr", "aria-invalid", 'false')
    formPage.getPersonalAddress().should("have.length.greaterThan", 0).and("have.length.lessThan", 201).and("have.value", this.data.personalAddress).and("have.attr", "aria-invalid", 'false')
    formPage.getPersonalCountry().should("have.attr", "aria-invalid", 'false')
    formPage.getPersonalState().should("have.attr", "aria-invalid", 'false')
    formPage.getPersonalCity().should("have.attr", "aria-invalid", 'false')
    formPage.getPersonalPincode().should("have.attr", "aria-invalid", 'false')
})

//When I add details to Project Details Section
When('I add details to Project Details Section', function (){
    formPage.getProjectName().type(this.data.projectName)
    formPage.getProjectStatus().click()
    formPage.getSelectValue().contains(this.data.projectStatus).click()
    formPage.getProjectType().click()
    formPage.getSelectValue().contains(this.data.projectType).click()
    formPage.getProjectDescription().type(this.data.projectDescription)
    formPage.getProjectAgencies().type(this.data.projectAgencies)
    formPage.getProjectComment().type(this.data.projectComment)
    formPage.getProjectLocation().type(this.data.projectLocation)
    formPage.getProjectStartDate().click()
    cy.get('#mat-datepicker-0').contains(this.data.projectStartDate).click()
    formPage.getProjectEndDate().click({force: true})
    cy.get('#mat-datepicker-1').contains(this.data.projectEndDate).click({force: true})
    formPage.getProjectSample().type(this.data.projectSample)
})

//Then Validate that all Project Details input field are valid
Then('Validate that all Project Details input field are valid', function()
{
    formPage.getProjectName().should("have.length.greaterThan", 0).and("have.length.lessThan", 100).and("have.value", this.data.projectName).and("have.attr", "aria-invalid", 'false')
    formPage.getProjectStatus().should("have.attr", "aria-invalid", 'false')
    formPage.getProjectType().should("have.attr", "aria-invalid", 'false')
    formPage.getProjectDescription().should("have.length.greaterThan", 0).and("have.length.lessThan", 301).and("have.value", this.data.projectDescription)
    formPage.getProjectAgencies().should("have.length.greaterThan", 0).and("have.length.lessThan", 101).and("have.value", this.data.projectAgencies).and("have.attr", "aria-invalid", 'false')
    formPage.getProjectComment().should("have.length.greaterThan", 0).and("have.length.lessThan", 101).and("have.value", this.data.projectComment).and("have.attr", "aria-invalid", 'false')
    formPage.getProjectLocation().should("have.length.greaterThan", 0).and("have.length.lessThan", 11).and("have.value", this.data.projectLocation).and("have.attr", "aria-invalid", 'false')
    formPage.getProjectSample().invoke('val').then((value) =>{
        const sampleValue= Number(value);
        expect(sampleValue).to.be.gte(1)
        expect(sampleValue).to.be.lt(100)
    })
})



//When Questionnaire Section Testing
When('I add details to Questionnaire Section', function (){
    formPage.getQuestionSubmittion().type(this.data.questionSubmits)
    formPage.getQuestionSample().type(this.data.questionSamples)
    formPage.getQuestionTAT().click()
    cy.get('#mat-select-18-panel > mat-option').contains(this.data.questionTAT).click()
    formPage.getQuestionShipping().click()
    formPage.getSelectValue().contains(this.data.questionDeliverLab).click()
    formPage.getQuestionMatrix().check()
    formPage.getQuestionMatrixSoil().type(this.data.questionMatrixSample)
    formPage.getQuestionMatrixSoilParam().type(this.data.questionMatrixParameter)
    formPage.getQuestionTestingParam().type(this.data.questionSamplePerMatrix)
    // formPage.getQuestionTests().click()
    // formPage.getSelectValue().contains(this.data.questionTest).click()
    // formPage.getQuestionTests().invoke('removeAttr', 'aria-controls')
    // formPage.getQuestionTests().invoke('removeAttr', 'aria-activedescendant')
    // formPage.getQuestionTests().invoke('attr', 'aria-expanded', 'false').should('have.attr', 'aria-expanded', 'false')
    formPage.getQuestionAnalysis().check({force: true})
    formPage.getQuestionCanister().click({force: true})
    formPage.getSelectValue().contains(this.data.questionCanister).click()
    formPage.getQuestionFlowRegulator().click({force: true})
    formPage.getSelectValue().contains(this.data.questionFlowRegulator).click()
    formPage.getQuestionCriticalFactor().type(this.data.questionCriticalFactor, {force: true})
    formPage.getQuestionPackage().check({force: true})
    formPage.getQuestionSpeical().type(this.data.questionSpecial, {force: true})
    formPage.getQuestionExcel().type(this.data.questionExcel, {force: true})
    formPage.getQuestionEDD().type(this.data.questionEDD, {force: true})
    formPage.getQuestionQuoteDate().click()
    cy.get('#mat-datepicker-2').contains(this.data.questionQuote).click({force:true})
    formPage.getQuestionOutcome().click()
    cy.get('#mat-datepicker-3').contains(this.data.questionOutcome).click()
    formPage.getQuestionLetTorrent().type(this.data.questionTorrent)
})

//Then Questionnaire Section Testing
Then('Validate that all Questionnaire Input Fields are Valids', function()
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



