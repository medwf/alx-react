# Webpack Project Setup

## Resources
Read or watch:
- [Webpack documentation](https://webpack.js.org/concepts/)
- [Webpack beginner guide](https://webpack.js.org/guides/getting-started/)
- [npm-package.json](https://docs.npmjs.com/files/package.json)

## Learning Objectives
By the end of this project, you will be able to explain:
- How to setup Webpack for a basic project
- Entry points, output, and loaders
- How to add plugins
- How to split your code into chunks
- How to setup a dev server

## Requirements
- All of your code will be executed on Ubuntu 18.04 LTS using Node 12.x.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All of your files should end with a new line
- A `README.md` file at the root of the folder of the project is mandatory

## Setup Webpack for a Basic Project

1. **Initialize npm**:
    ```sh
    npm init -y
    ```

2. **Install Webpack and Webpack CLI**:
    ```sh
    npm install webpack webpack-cli --save-dev
    ```

3. **Create Project Structure**:
    ```
    ├── dist
    ├── src
    │   └── index.js
    ├── package.json
    └── webpack.config.js
    ```

4. **Basic Webpack Configuration**:
    ```js
    // webpack.config.js
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [
            // Add your plugins here
        ]
    };
    ```

## Entry Points, Output, and Loaders

- **Entry Point**: The entry point is where Webpack starts bundling. In the configuration above, `./src/index.js` is the entry point.
- **Output**: The output property tells Webpack where to emit the bundles it creates and how to name them. The `filename` and `path` properties in the configuration specify the output.
- **Loaders**: Loaders allow Webpack to process other types of files beyond JavaScript. In the example, `css-loader` and `style-loader` are used to handle `.css` files.

## Adding Plugins

- Plugins can be used to perform a wider range of tasks like bundle optimization, asset management, and injection of environment variables. To add plugins, install them via npm and add them to the `plugins` array in your `webpack.config.js`.

    Example:
    ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        //... other configuration
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    };
    ```

## Code Splitting

- Code splitting is used to split your code into various bundles, which can then be loaded on demand or in parallel. It helps in achieving smaller bundle sizes and better load times.

    Example:
    ```js
    module.exports = {
        //... other configuration
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    };
    ```

## Setting up a Dev Server

- To set up a development server, use `webpack-dev-server`. It provides live reloading and other features to aid development.

    Installation:
    ```sh
    npm install webpack-dev-server --save-dev
    ```

    Configuration:
    ```js
    module.exports = {
        //... other configuration
        devServer: {
            contentBase: './dist',
            hot: true,
        },
    };
    ```

    Add a script to `package.json` to start the server:
    ```json
    "scripts": {
        "start": "webpack serve --open"
    }
    ```
