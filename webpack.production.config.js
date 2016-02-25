'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },

  module: {
    loaders: [
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less')},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.jpg$/, loader: 'file'}
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style.css')
  ]
};
