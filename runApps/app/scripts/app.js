'use strict';

angular
  .module('runappsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/wydarzenia', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
	  .when('/grupy', {
        templateUrl: 'views/groups.html',
        controller: 'GroupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
	
  });
