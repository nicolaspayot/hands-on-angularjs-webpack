import menuHtml from './menu.html';

function menu($timeout) {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'menu.html',
    link: (scope, element) => {
      $timeout(1000).then(() => {
        element.find('ul').append('<li>Menu 4</li>');
      });
    }
  }
}

export default menu;
