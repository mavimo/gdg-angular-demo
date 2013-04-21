'use strict';

/* Directives */
angular.module('gdg.controllers.tweets', [])
  .controller('TweetsCtrl', ['$scope', '$http', 'gdg', function (scope, http, gdg) {
    http.jsonp(gdg.url)
      .success(function (data) {
        scope.tweets = data.query.results.json.results;
      })
      .error(function (data) {
        console.log('errore');
      });
  }])
  .controller('TweetCtrl', ['$scope', '$http', '$routeParams', 'gdg', function (scope, http, route, gdg) {

    http.jsonp(gdg.url)
      .success(function (data) {
        var tweets = data.query.results.json.results;
        angular.forEach(tweets, function (tweet) {
          if (tweet.id == route.tweet) {
            scope.tweet = tweet;
          }
        });
      })
      .error(function (data) {
        console.log('errore');
      });
  }]);
