(function() {

  var app = angular.module("githubusermodule");

  var userController = function($scope, githubservice, $routeParams) {

    var getUserDetails = function(response) {
      $scope.error = "";
      $scope.user = response;
      githubservice.getRepo(response.repos_url).then(getRepoDetails, function() {
        $scope.error = "Repo url error...";
      });
    }

    var getRepoDetails = function(response) {
      $scope.repos = response;
    }

    $scope.username = $routeParams.username;
    $scope.repoOrder = "+name";
    githubservice.getUser($scope.username).then(getUserDetails, function(error) {
      $scope.error = "User error...";
      $scope.user = null;
    });

  }

  app.controller("userController", ["$scope", "githubservice", "$routeParams", userController])
}());