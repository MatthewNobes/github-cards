# GitHub Cards

This project was created as part of my React learning from a course on Pluralsight. It is a simple React application that collects information about GitHub users from a typed in username. It relies on axios to communicate with the GitHub API by sending it a request for user information.

My plan is to upgrade the code built in the course so I can demonstrate my React refactoring skills. I also plan to add error handling and jest testing.

## Class Component Branch

The class component branch plays host to the class component version of GitHub cards, used mainly as a reference for how this method of React works.

## Master branch

This branch will be converted to use function components instead, as this is the more modern form of React and refactoring it will be good practice.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

This is used to run the automated tests built into this program. Jest has been included to generate and manage these tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

Used to deploy a build of the application to the gh-pages branch, the branch connected to GitHub pages, the hosting tool for this application. The live web-app can be viewed here [matthewnobes.github.io/github-cards/](https://www.matthewnobes.github.io/github-cards/)
