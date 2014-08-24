'use strict';

/**
 * @ngdoc function
 * @name progressApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the progressApp
 */
angular.module('progressApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
