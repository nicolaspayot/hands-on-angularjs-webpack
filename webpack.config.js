'use strict';

var webpack = require('webpack')
var path = require('path');

var app  = __dirname + '/app';

module.exports = {
  context: app,
  entry: {
    app: ['webpack/hot/dev-server', './index.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "ng-cache-loader" },
      { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
      { test: /\.js$/, loader: 'ng-annotate!babel!eslint', exclude: /node_modules/ }
    ]
  }
};
