(function() {

  var githubservice = function($http, $log) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          $log.info("user response >> " + response.data.login)
          return response.data;
        });
    };

    var getRepo = function(repoUrl) {
      return $http.get(repoUrl)
        .then(function(response) {
         $log.info("repo response >> " + response.data)
          return response.data;
        });
    };

    return {
      getUser: getUser,
      getRepo: getRepo
    };
  }

  var module = angular.module("githubusermodule");
  module.factory("githubservice", githubservice);
}());