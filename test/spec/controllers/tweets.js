'use strict';

describe('Controllers', function () {
  describe('Multiple Tweets', function () {
    // load the controller's module
    beforeEach(module('gdg.controllers.tweets'));

    var TweetsCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
      scope = {};
      TweetsCtrl = $controller('TweetsCtrl', {
        $scope: scope
      });
    }));

    it('GDG TweetsCtrl must return tweets', function () {
      expect(scope.tweets).toBeDefined();
    });

    it('GDG TweetsCtrl must return 10 tweets', function () {
      expect(scope.tweets.length).toBe(10);
    });
  });

  describe('Single Tweet', function () {
    it('GDG TweetCtrl must return tweet', function () {
      expect(scope.tweet).toBeDefined();
    });

    it('GDG TweetCtrl must return 1 tweets', function () {
      expect(scope.tweet.length).toBe(10);
    });
  });
});
