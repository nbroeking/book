---
layout: layout.hbs
---

# Features

## Feature: My App's Feature 1

``` gherkin
TODO:

```

## Feature: Chat Window

``` gherkin
  Chat window should allow users to submit messages 
  Chat Window should not be visible until user is logged in
  Chat window should contain messages associated with +/- score

  Scenario: Submit Message
    Given I am logged in
    And have selected a chat window
    And have typed in a message
    When I press the submit button
    Then I should see my message appear in chat

  Scenario: View Messages
    Given I am logged in 
    When I select a chat window
    Then I should see all messages from users in chat

  Scenario: Upvote Message
    Given I am logged in
    And have selected a chat window
    When I press the + button on a chat submission
    Then I should see the + count increase by 1
```

## Feature: My App's Feature 3

``` gherkin
TODO:

```

## Feature: Admin

``` gherkin
  Active user list should display all offline/online users
  Admin should have ability to block user 
  Admin should have ability to view blocked users

  Scenario: View users
    Given I am logged in as an Admin
    When I click the admin page
    Then I should see a list of online/offline users

  Scenario: Block User
    Given I am logged in as an Admin
    When I select a user
    And click block
    Then user should get blocked 

  Scenario: Blocked Users
    Given I am logged in as an Admin
    When I click the admin page
    Then I should see a list of blocked users 

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
