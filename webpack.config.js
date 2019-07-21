const webpack = require('webpack');
const resolve = require('path').resolve;

module.exports = {
  entry: "./static/scripts/jsx/main.jsx",
  output:{
    path: resolve('./static/scripts/js'),
    publicPath: resolve('./static/scripts/js')},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
