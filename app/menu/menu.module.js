import angular from 'angular';
import menu from './menu.directive';

export default angular.module('app.menu', [])
  .directive('menu', menu);
