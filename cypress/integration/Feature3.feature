Feature: 3DAgility Validation

    Login Via Api Testing 
    @LoginAPITesting
    Scenario: Trying to Login via API and store token in Session Storage to bypass Login Screen
    Given I trigger the login API
    When I visit the 3D Agility Site
    Then I should bypass the login screen