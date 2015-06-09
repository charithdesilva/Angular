(function() {

  var app = angular.module("githubusermodule", ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "mainController"
      })
      .when("/user/:username", {
        templateUrl: "userDetails.html",
        controller: "userController"
      })
      .otherwise({
        redirectTo: "/main"
      })
  });
}());