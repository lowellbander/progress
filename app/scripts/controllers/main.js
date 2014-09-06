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

    $scope.dispSettings = false;

    $scope.increment = function () {
        if ($scope.current != $scope.last)
            ++$scope.current;
    };
    $scope.decrement = function () {
        if ($scope.current != $scope.first)
            --$scope.current;
    };

    $scope.first = 1234;
    $scope.last = 1258;
    $scope.current = $scope.first;
    $scope.$watch('current', function(){
        $scope.total = $scope.last - $scope.first;
        $scope.completed = $scope.current - $scope.first;
        $scope.remaining = $scope.total - $scope.completed;
        $scope.percent = Math.round(100 * ($scope.completed / $scope.total));
        $scope.message = $scope.percent == 100 ? "Congratulations! You're done!" : "Good work! Keep going!"
        if ($scope.percent < 0)
            $scope.percent = '...'
    });
    $scope.$watch('first', function(){
        $scope.current = $scope.first;
    });
    $scope.$watch('last', function(){
        $scope.current = $scope.first;
    });
  });
