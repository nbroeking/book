---
layout: layout.hbs
---

# Features

## Feature: Login

``` gherkin
Feature: Login
  As a user of ChatyKathy
  I want to login via Github.
  So that messages are logged in under my account. 

  Scenario: Starting App
    Given when I am first visiting page
    When the page loads
    Then I should see a login prompt
    
  Scenario: Login
    Given I have a github account
    When I click login
    Then Github validates my info and logs into Chatty Kathy
     
   
  Scenario: Validated
    Given I loged in
    When the page loads
    Then I should see the home page
```

## Feature: My App's Feature 2

``` gherkin
TODO:

```

## Feature: My App's Feature 3

``` gherkin
TODO:

```

## Feature: My App's Feature 4

``` gherkin
TODO:

```


# Examples

## Feature: Usage

``` gherkin
Feature: Usage
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I go to the README file
    Then I should see "Usage" as the page title
```

## Feature: Serve Coffee

``` gherkin
Feature: Serve coffee
  Coffee should not be served until paid for
  Coffee should not be served until the button has been pressed
  If there is no coffee left then money should be refunded

  Scenario: Buy last coffee
    Given there are 1 coffees left in the machine
    And I have deposited 1$
    When I press the coffee button
    Then I should be served a coffee

  Scenario: No more coffees
    Given there is no coffee left in the machine
    And I have deposited $1
    When I press the coffee button
    Then I should be refunded $1
```
