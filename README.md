# Create React App Template

![Code Quality](https://github.com/tisoap/cra-template-app/actions/workflows/code-quality.yml/badge.svg)
![End to End Tests](https://github.com/tisoap/cra-template-app/actions/workflows/e2e.yml/badge.svg)
![Unit and Regression Tests](https://github.com/tisoap/cra-template-app/actions/workflows/unit.yml/badge.svg)
![Create React App](https://img.shields.io/badge/CRA-Typescript-007ACC?logo=react&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-29B9AD?logo=chakraui&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-6441AA?logo=redux&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-DC3130?logo=testinglibrary&logoColor=white)
![TestCafé](https://img.shields.io/badge/TestCafe-34B0DE?logo=testcafe&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white)

---

This project was bootstrapped using [cra-template-app](https://github.com/tisoap/cra-template-app), a batteries included `create-react-app` template with Chakra UI & Typescript made by [Tiso Alvarez Puccinelli](https://github.com/tisoap).

## Requirements

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)

## Installation

Clone this project using Git. In a terminal, navigate to the cloned project's root folder, and run the following command:

```bash
yarn && yarn start
```

### Enabling GitHub Actions

Once you push your project to your own GitHub repo, you need to add some configurations so all the GitHub actions here work properly. If you don't want those, you can delete the `.github/workflows` folder.

For the [Code Quality](https://codeql.github.com/) analysis, [enable code scanning on your repository](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository).

For [Chromatic](https://www.chromatic.com/), you need to create and account there, add your GitHub project, and add a `CHROMATIC_PROJECT_TOKEN` to your project secrets, [as instructed here](https://www.chromatic.com/docs/github-actions.html).

For [Vercel deploy](https://vercel.com) with E2E testing, you need to add `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` and `VERCEL_TOKEN` to your project secrets.

1. You can get both `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` by linking your project with your vercel account using the `vercel` CLI command, and checking the file created at `.vercel/project.json` in your project. [Further action instructions here](https://github.com/marketplace/actions/deploy-to-vercel-action#vercel-project).

2. The `VERCEL_TOKEN` one can be generated on your [Vercel token page](https://vercel.com/account/tokens), make sure to create a unique one.

## Commands

- `yarn build-storybook`: Creates a production build from the component library docs
- `yarn build`: Creates a production build from this project
- `yarn check`: Runs type and spell checking, code linter and unit tests
- `yarn coverage`: Runs unit tests and opens a code coverage report on `http://127.0.0.1:8080/`
- `yarn start`: Starts the project with hot reload at `http://localhost:3000`
- `yarn generate-theme-typings`: Generates TypeScript typings for your custom Chakra theme (runs automatically on post-install)
- `yarn lint`: Runs the code linter
- `yarn spellcheck`: Checks for spelling typos in code
- `yarn start`: Starts the project at `http://localhost:3000`, but you need to execute the `yarn build` command beforehand
- `yarn storybook`: Starts the component library docs with hot reload at `http://localhost:6006`
- `yarn test-e2e`: Runs all end to end tests using the locally installed Firefox browser, but you need to have started the project in another terminal for it to work
- `yarn test`: Runs all unit tests and code coverage report
- `yarn type-check`: Check validity of all types in the project

## Technologies

This template uses:

- [Create React App](https://create-react-app.dev/) framework
- [TypeScript](https://www.typescriptlang.org/) type checking
- [Chakra UI](https://chakra-ui.com/) as the default component library
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests
- [TestCafé](https://devexpress.github.io/testcafe/) for End-to-End tests
- [Chromatic](https://www.chromatic.com/) for visual regression testing
- [GitHub Actions](https://github.com/features/actions) and [Vercel](https://vercel.com/) for CI/CD pipelines
- [Storybook](https://storybook.js.org/) for component documentation
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code style standardization
- [Yarn](https://yarnpkg.com/) for caching project dependencies
- [CSpell](https://cspell.org/) for code spell checking

### Support

Liked this project and want to show your support? Buy me a coffee:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J472RAJ)
