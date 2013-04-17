'use strict';

var app = angular.module('gdgApp', [
    'gdg.services',
    'gdg.directives',
    'gdg.filters',
    'gdg.controllers.tweets',
  ])

  .constant('gdg', {
    'url' : 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22http%3A%2F%2Fsearch.twitter.com%2Fsearch.json%3Fq%3Dangularjs%22&format=json&callback=JSON_CALLBACK',
  })

  .constant('version', '0.0.1')

  // Configure services
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tweets', {
      templateUrl: 'views/tweets.html',
      controller: 'TweetsCtrl'
    });
    $routeProvider.when('/tweets/:tweet', {
      templateUrl: 'views/tweet.html',
      controller: 'TweetCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/tweets'});
  }]);
