# Playwright HR IS

This is a Playwright-based end-to-end testing suite for the OrangeHRM demo application, focusing on login functionality.

## Project Structure

- `pages/`: Contains Page Object Model classes for interacting with web pages.
  - `login.ts`: Defines the `LoginPage` class with locators and methods for the login page of the OrangeHRM demo site.
- `tests/`: Contains test specifications.
  - `login.spec.ts`: Test case for successful login with valid credentials.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/ruby-rae-olaya22/playwright-hrms.git
   cd Playwright-HR-IS
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Install dotenv for environment variable management:
   ```
   npm install dotenv
   ```

4. Install Playwright browsers:
   ```
   npx playwright install
   ```

## Tools

This project utilizes the Playwright MCP server for generating test plans, creating test scripts, and healing failing tests.

## Setup

Create a `.env` file in the root directory with your test credentials:

```
USERNAME_login=your_username
PASSWORD_login=your_password
```

Replace `your_username` and `your_password` with valid credentials for the OrangeHRM demo site.

## Running Tests

To run all tests:
```
npx playwright test
```

To run tests in a specific browser:
```
npx playwright test --project=chromium
```

To run a specific test file:
```
npx playwright test tests/login.spec.ts
```

To view the test report:
```
npx playwright show-report
```

## Configuration

The project uses `playwright.config.ts` for configuration:
- Tests run in parallel by default.
- Supports Chromium, Firefox, and WebKit browsers.
- Generates HTML reports and traces on failure.

## Test Overview

### Login Test
- Navigates to the OrangeHRM login page.
- Enters valid username and password from environment variables.
- Verifies successful login by checking the URL contains "dashboard/index".