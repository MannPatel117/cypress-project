import { Before } from "@badeball/cypress-cucumber-preprocessor";
Before(() => {
  cy.fixture('3dAgility').then(function(data) {
    this.data = data
  })
})