$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CodefiosLogin.feature");
formatter.feature({
  "name": "Codefios page login functionality validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefinition.user_is_on_codefios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"demo1@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.userclicksigninbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be landing on the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefinition.User_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
});