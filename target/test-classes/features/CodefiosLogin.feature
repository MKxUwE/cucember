Feature: Codefios page login functionality validation

Scenario: User should be able to login with valid credentials

 Given User is on codefios login page
 
 When user enters username as "demo1@codefios.com"
 When user enter password as "abc123"
 When User click on sign in button
 Then user should be landing on the dashboard page 