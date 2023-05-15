## Cypress Testing Project

This repository contains a Cypress testing project for automated end-to-end testing of a web application. The project utilizes the Cypress testing framework, which provides a simple and powerful way to write and execute tests for web applications.

## Videos
[Staff menu test cases - Sama](cypress/videos/Staff_Menu.cy.js.mp4)

[Filter test cases - Aya](cypress/videos/filter.cy.js.mp4) 

[Observe test cases - Marah](Observe&Grade-TestCases/Observe & Grade.mp4) 



## Test Cases
[Test Cases](Goals-TestCases.xlsx) 

### Features

- **End-to-end testing**: The project includes test cases that cover different functionalities of the web application, ensuring thorough test coverage.
- **UI interaction**: The tests interact with the web application's user interface elements, such as buttons, input fields, and navigation links, simulating user actions and verifying expected behaviors.
- **Data validation**: The tests validate data entered in forms, search functionality, and data display to ensure the application handles data correctly.
- **Test automation**: The Cypress framework provides an automated test execution environment, allowing for efficient and reliable testing without manual intervention.

### Setup

To set up and run the Cypress testing project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the web application: [Specify instructions to start the web application]
4. Run the Cypress tests: `npx cypress open`

### Running the Tests

Once the web application is running, you can execute the Cypress tests. Follow the steps below to run the tests:

1. Open a terminal or command prompt.
2. Navigate to the project directory: `cd <project-directory>`
3. Run the Cypress test runner: `npx cypress open`
4. The Cypress Test Runner will open, displaying the available test specs.
5. Click on a test spec to run it in a browser window or choose "Run all specs" to execute all tests.
6. The tests will run, and the Cypress Test Runner will display the test results and any encountered failures.

### Test Scenarios

The Cypress testing project includes various test scenarios that cover different aspects of the web application. Some of the test scenarios implemented are:

**Goals Menu for Staff Account**
- Observer: Verify that the staff account can access the observer functionality in the goals menu.
- Grade: Test the grading functionality in the goals menu and validate the correct grading process.
- Apply Filters: Ensure that the staff account can successfully apply filters in the goals menu to view specific data.

**Staff Menu for Staff Account**

### Continuous Integration

To enable continuous integration and automated test execution, the project can be integrated with popular CI/CD platforms like Jenkins, Travis CI, or GitLab CI/CD. This integration allows for automated test execution on each code commit or scheduled intervals, providing continuous feedback on the application's functionality.

### Conclusion

The Cypress testing project offers a robust testing solution for the web application, ensuring high-quality software by validating its functionality, user interactions, and data handling. The comprehensive test suite and test automation capabilities make it easier to catch and address issues early in the development process, resulting in a more reliable and user-friendly web application.
