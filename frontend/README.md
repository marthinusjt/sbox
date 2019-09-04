<p align="center">
  <img alt="sbox" src="../images/logo.svg" width="480">
</p>

<h1 align="center">
  Frontend
</h1>

---
<p align="center">
  <img width="300" alt="Home Page Screenshot" src="https://user-images.githubusercontent.com/5419727/64229063-b8b8cf80-ceb6-11e9-819e-65e7332990fe.png">
</p>



- [Getting Started](#getting-started)
- [Structure](#project-structure)
- [Advanced Commands](#advanced-commands)
- [More Resources](#more-resources)


## Getting Started

### `npm start`

```bash
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Project Structure
These project is broken down by multiple directories which all a focus on solves a particular problem.


### Top Level Directories
```
src/
|-- api/
|-- components/
|-- modules/
  |-- app/
  |-- home/
  |-- profile/
```

### Api
The api directory houses all of the files needed to make REST api calls to our backend services. If you need to talk to the backend, that is where they will live.

### Components
These are generic components that should be reused through out modules. Think buttons, snackbars, and etc. You can think of this directory as our design/component system.

### Modules
The module directory contains related feature contained functionality. They have an index file which will be main export and should normally be high level react component or a react route component. They may also contain style.css files needed to style react components.

## Advanced Commands

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## More Resources

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
