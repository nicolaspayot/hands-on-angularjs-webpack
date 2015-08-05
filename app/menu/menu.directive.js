(function() {
  'use strict';

  /*@ngInject*/
  function menu($timeout) {
    return {
      restrict: 'E',
      templateUrl: './menu/menu.html',
      link: function(scope, element) {
        $timeout(1000).then(function() {
          element.find('ul').append('<li>Menu 4</li>');
        });
      }
    }
  }

  module.exports = menu;
}());
