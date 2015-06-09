(function() {

  var app = angular.module("githubusermodule");

  var mainController = function($scope, $location) {

    $scope.search = function(username) {
      $location.path("/user/" + username);
    };
  }

  app.controller("mainController", ["$scope", "$location", mainController])
}());