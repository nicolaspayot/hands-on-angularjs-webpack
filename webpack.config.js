(function() {
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
        path: app,
        filename: 'bundle.js'
    }
  };
}());
