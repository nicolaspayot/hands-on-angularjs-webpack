(function() {
  'use strict';

  const angular = require('angular');

  module.exports = angular.module('app', [
    require('./menu/menu.module').name
  ]);
}());
