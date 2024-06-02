const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
        // use: [
          // "file-loader",
          // {
          //   loader: "image-webpack-loader",
          //   options: {
          //     // optipng: { optimizationLevel: 7 },
          //     // pngquant: { quality: [0.65, 0.80], speed: 4 },
          //   },
          // },
        // ],
      },
    ]
  }
};
