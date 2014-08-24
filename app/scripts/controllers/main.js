'use strict';

/**
 * @ngdoc function
 * @name progressApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the progressApp
 */
angular.module('progressApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.first = 1092;
    $scope.last = 1113;
    $scope.current = $scope.first;
    $scope.$watch('current', function(){
        $scope.total = $scope.last - $scope.first;
        $scope.completed = $scope.current - $scope.first;
        $scope.percent = Math.round(100 * ($scope.completed / $scope.total));
        if ($scope.percent < 0)
            $scope.percent = '...'
    });
  });
