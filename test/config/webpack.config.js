const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    client: [
      path.resolve(__dirname, "../src/index.js")
    ]
  },
  devtool: 'eval-inline-source-map',
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: process.env.PUBLIC_PATH || '/'
  },
  stats: {
    colors: true,
    timings: true
  },
  resolve:{
    extensions: ['.js','.jsx','.json',".scss"],
    modules: [
      path.resolve(__dirname,"..","..","src/client/client_modules"),
      "node_modules"
    ]
  },
  module: {
    rules: [{
      test:/\.(scss|sass)$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader",
          options: {
            includePaths: [
              path.resolve(__dirname, "../node_modules/sass-themify"),
            ]
          }
        }
      ]
    }],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      title: "sass-themify-test",
      template: path.resolve(__dirname,"../src/index.ejs"),
      inject: 'body'
    })
  ]
};

