const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      // open: true,
    },
    port: 8564,
  },
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared',
    },
    body: {
      import: './modules/body/body.js',
      dependOn: 'shared',
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared',
    },
    shared: 'jquery',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
  mode: "development",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    // new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ filename: './index.html'}),
    new CleanWebpackPlugin(),
  ],
};
