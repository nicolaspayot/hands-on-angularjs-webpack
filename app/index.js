(function() {
  'use strict';

  const angular = require('angular');
  const app = require('./index.module');

  angular.element(document).ready(function() {
    angular.bootstrap(document.body, [app.name], {
      strictDi: true
    });
  });
}());
