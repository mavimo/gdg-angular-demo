'use strict';

/* Directives */
angular.module('gdg.directives', [])
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }]);
