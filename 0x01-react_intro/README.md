# React Project

## Resources

### Read or watch:
- [React Official Website](https://reactjs.org/)
- [Getting started with React](https://reactjs.org/docs/getting-started.html)
- [Quick Start with React](https://reactjs.org/docs/create-a-new-react-app.html)
- [create-react-app](https://create-react-app.dev/docs/getting-started/)
- [React Developer Tools](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html)
- [What is Babel?](https://babeljs.io/docs/en/)
- [Enzyme](https://enzymejs.github.io/enzyme/)

## Learning Objectives
By the end of this project, you should be able to explain the following concepts to anyone without the help of Google:

1. **How to create a basic Javascript application using React**
2. **How to use the package `create-react-app` to start developing quickly with React**
3. **What JSX is and how to use it**
4. **How to use the React Developer Tools to debug your code**
5. **How to use Enzyme’s Shallow rendering to test your application**
6. **How to use React with Webpack & Babel**

## Requirements

- All your files will be interpreted/compiled on **Ubuntu 18.04 LTS** using **node 12.x.x** and **npm 6.x.x**
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory

## Project Setup

### 1. Install Node.js and npm
Ensure you have Node.js and npm installed. You can check this by running:
```bash
node -v
npm -v
```
If not installed, follow the instructions on the [Node.js website](https://nodejs.org/) to install both.

### 2. Create a New React App
Use `create-react-app` to set up a new React project:
```bash
npx create-react-app my-app
cd my-app
npm start
```
This will create a new directory called `my-app` and set up a basic React project, which can be viewed in the browser by navigating to `http://localhost:3000`.

### 3. Understanding JSX
JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write elements directly within your JavaScript code. Here’s a basic example:
```jsx
const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### 4. Debugging with React Developer Tools
React Developer Tools is a Chrome and Firefox extension that provides a way to inspect the React component hierarchy in the browser. Install it from the browser’s extension store and use it to debug your React applications.

### 5. Testing with Enzyme
Enzyme is a testing utility for React that makes it easier to test your React Components' output. Install it with:
```bash
npm install --save enzyme enzyme-adapter-react-16
```
Here’s a simple test using Enzyme’s shallow rendering:
```jsx
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

### 6. Using React with Webpack & Babel
Webpack is a module bundler, and Babel is a JavaScript compiler. `create-react-app` sets up both for you, but if you’re setting up a project manually, you’ll need to install and configure them.

**Install Webpack and Babel:**
```bash
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react
```

**Configure Babel:**
Create a `.babelrc` file in your project root:
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

**Configure Webpack:**
Create a `webpack.config.js` file:
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

## Conclusion
This README outlines the necessary steps and resources to get started with React, from basic setup using `create-react-app` to more advanced configurations involving Webpack and Babel. By following these instructions and utilizing the provided resources, you should be able to create, debug, and test React applications effectively.
