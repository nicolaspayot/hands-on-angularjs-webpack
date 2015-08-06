import indexStyle from './index.scss';
import angular from 'angular';
import app from './index.module';

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [ app.name ], {
    strictDi: true
  });
});
