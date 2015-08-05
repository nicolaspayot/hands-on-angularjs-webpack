(function() {
  'use strict';

  const angular = require('angular');

  const menuModule = angular.module('app.menu', []);

  menuModule.directive('menu', require('./menu.directive'));

  module.exports = menuModule;
}());
