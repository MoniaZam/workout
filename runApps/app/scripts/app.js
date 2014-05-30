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
	  .when('/wydarzenia/usun/:id', {
        templateUrl: 'views/events.html',
        controller: 'EventsDeleteCtrl'
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
	
  }).run(function($rootScope) {
		
		var db = openDatabase('events', '1.0', 'Events DB', 2 * 1024 * 1024);

		db.transaction(function (tx) {
		   tx.executeSql('DROP TABLE Events');
		   tx.executeSql('CREATE TABLE IF NOT EXISTS Events (id unique, name, description, timing)');
		   tx.executeSql('INSERT INTO Events (id, name, description, timing ) VALUES (1, "Areobik w parku", "Areobik w parku Jordana", "Codziennie 19:00")');
		   tx.executeSql('INSERT INTO Events (id, name, description, timing ) VALUES (2, "Rolkami po Krakowie", "Na rolkach wzdłóż Wisły", "Soboty 15:00")');	   
		});
});
