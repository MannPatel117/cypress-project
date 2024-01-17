Feature: Torrent Form Validation

    Torrent Form Testing 
    @NullValidationForClientInformation
    Scenario: Verifing error messages in Null Values in Client Information
    Given I open Torrent Form Page
    When I focus and blur, input fields
    Then Validate that all input field error messages are valid

    @NullValidationForPersonalDetails
    Scenario: Personal Detail Section Testing
    Given I open Torrent Form Page
    When I focus and blur, input fields in Personal Details Section
    Then Validate that all input field error messages are valid personal details

    @NullValidationForProjectDetails
    Scenario: Project Detail Section Testing
    Given I open Torrent Form Page
    When I focus and blur, input fields in Project Details Section
    Then Validate that all input field error messages are valid project details

    @NullValidationForQuestionnaire
    Scenario: Questionnaire Section Testing
    Given I open Torrent Form Page
    When I focus and blur, input fields in Questionnaire Section
    Then Validate that all input field error messages are valid in Questionnaire
