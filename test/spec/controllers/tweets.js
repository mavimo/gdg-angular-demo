'use strict';

describe('Controllers', function () {
  // Import module ith controllers
  beforeEach(module('gdg.controllers.tweets'));

  // Create a mock for gdg constant
  var gdg = { url : 'http://yql/tweets'};

  // Create a simulated httpBackend
  var $httpBackend;

  // Configure backend mock
  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');

    // backend definition common for all tests
    $httpBackend.when('JSONP', 'http://yql/tweets').respond(data.tweets.httpResp);
  }));


  describe('Tweets', function () {
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();

      // Controllers must call specified url
      $httpBackend.expectJSONP('http://yql/tweets');

      // Instantiate controller
      var TweetsCtrl = $controller('TweetsCtrl', {
        $scope: scope,
        $html: $httpBackend,
        gdg: gdg
      });

      // Flush request
      $httpBackend.flush();
    }));

    // Validate information in scope
    it('must return tweets', function () {
      expect(scope.tweets).toBeDefined();
    });

    it('must return 15 tweets', function () {
      expect(scope.tweets.length).toBe(15);
    });

    var tweet_attributes = {
      from_user : 'author',
      text : 'text',
      profile_image_url : 'user image url',
      id : 'id',
    };

    angular.forEach(tweet_attributes, function(value, key) {
      it('each tweet must have ' + value, function () {
        angular.forEach(scope.tweets, function(tweet) {
          expect(tweet[key]).toBeDefined();
        });
      });
    });
  });

  describe('Tweet', function () {
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($rootScope, $controller, $routeParams) {
      scope = $rootScope.$new();
      $routeParams.tweet = '325990668457623552';

      // Controllers must call specified url
      $httpBackend.expectJSONP('http://yql/tweets');

      // Instantiate controller
      var TweetCtrl = $controller('TweetCtrl', {
        $scope: scope,
        $html: $httpBackend,
        route: $routeParams,
        gdg: gdg
      });

      // Flush request
      $httpBackend.flush();
    }));

    // Validate information in scope
    it('must return tweet', function () {
      expect(scope.tweet).toBeDefined();
    });

    var tweet_attributes = {
      from_user : 'author',
      text : 'text',
      profile_image_url : 'user image url',
      id : 'id',
    };

    angular.forEach(tweet_attributes, function(value, key) {
      it('tweet must have ' + value, function () {
        expect(scope.tweet[key]).toBeDefined();
      });
    });
  });
});
