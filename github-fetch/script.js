// Code goes here

(function() {

  var app = angular.module("githubusermodule", []);

  var userController = function($scope, $http) {

    var getUserDetails = function(response) {
      $scope.error = "";
      $scope.user = response.data;
      $http.get(response.data.repos_url).then(getRepoDetails, function() {
        $scope.error = "Repo url error...";
      });

    }

    var getRepoDetails = function(response) {
      $scope.repos = response.data;
    }

    $scope.search = function(username) {

      $http.get("https://api.github.com/users/" + username)
        .then(getUserDetails, function(error) {
          $scope.error = "User error...";
          $scope.user = null;
        });
    };
    
   
  }
  
  

  app.controller("userController", ["$scope", "$http", userController])

})();