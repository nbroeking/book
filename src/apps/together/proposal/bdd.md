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

## Feature: Chat Window

``` gherkin
Feature: Chat Window
	As a user of Chaty Kathy
	I want to chat with other users
	So that I can exchange messages with everyone elses

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

## Feature: Categories

``` gherkin
Feature: Categories
  As a user of ChattyKathy
  I want to view or create categories
  So that I can view specfic topics or create one of my own. 

  Scenario: Changing Categories
    Given I am logged in with my GitHub repository
    When I go to select a category
    Then I should see the selected categories chats.

  Scenario: Creating New Categories
    Given I am logged in with my GitHub repository
    When I click create new topic
    Then I should see the new topic appear in the list.
    
  Scenario: Removing Categories
    Given I am logged in with my GitHub repository
    When I go to remove a topic
    Then I should see the topic removed from the list. 
```

## Feature: Admin

``` gherkin
Feature: Admin Page
	As a admin of Chaty Kathy
	I want to manage users
	So that I can provide a positive environment

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
