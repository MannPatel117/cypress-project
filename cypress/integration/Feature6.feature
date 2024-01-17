Feature: Modal testing in 3D Agility

    Modal Testing 
    @FileInput
    Scenario: Logging into 3D Agility Admin and trying the modals
    Given I visit 3D Agility and Login
    When When I click on a modal
    Then The modal contains should be tested