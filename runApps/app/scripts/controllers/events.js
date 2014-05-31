'use strict';

angular.module('runappsApp')

  .factory('Events', function($q) {
  
    var getEvents = function() {
      var deferred = $q.defer();
	    
		var db = openDatabase('events', '1.0', 'Events DB', 2 * 1024 * 1024);
		
		db.transaction(function (tx) {  
		   tx.executeSql('SELECT * FROM Events', [], function (tx, results) {
		   var len = results.rows.length, i;
		   var response = new Array();
		   for (i = 0; i < len; i++){
				response.push({
					'id' : results.rows.item(i).id,
					'name' : results.rows.item(i).name,
					'description' : results.rows.item(i).description,
					'timing' : results.rows.item(i).timing 
				});
		   }
		   deferred.resolve(response);
		 }, null);
		});
	
      return deferred.promise;
    };
    
    return {
      getEvents: getEvents
    };
  
  })
    .factory('DeleteEvents', function($q) {
  
    var removeEvent = function(id) {
      var deferred = $q.defer();
	    
		var db = openDatabase('events', '1.0', 'Events DB', 2 * 1024 * 1024);
		
		db.transaction(function (tx) {
		   tx.executeSql('DELETE FROM Events WHERE id='+id);
		   tx.executeSql('SELECT * FROM Events', [], function (tx, results) {
		   var len = results.rows.length, i;
		   var response = new Array();
		   for (i = 0; i < len; i++){
				response.push({
					'id' : results.rows.item(i).id,
					'name' : results.rows.item(i).name,
					'description' : results.rows.item(i).description,
					'timing' : results.rows.item(i).timing 
				});
		   }
		   deferred.resolve(response);
		 }, null);
		});
	
      return deferred.promise;
    };
    
    return {
      removeEvent: removeEvent
    };
  
  })
 .controller('EventsCtrl', function ($scope, Events) {
 
		Events.getEvents().then(function(events) {
			$scope.events = events;
		});
		
})
 .controller('EventsDeleteCtrl', function ($scope, $routeParams, DeleteEvents) {

		DeleteEvents.removeEvent($routeParams.id).then(function(events) {
			$scope.events = events;
		});
		
})
 .controller('EventsFormCtrl', function ($scope, $location, $routeParams) {
    
	 $scope.dodaj = function(event) {
        var db = openDatabase('events', '1.0', 'Events DB', 2 * 1024 * 1024);
		 
		db.transaction(function (tx) {
			var id;
			tx.executeSql('SELECT max(id) as max FROM Events', [], function (tx, results) { 
				id = parseInt(results.rows.item(0).max) + 1;
				tx.executeSql('INSERT INTO Events (id, name, description, timing ) VALUES ('+id+',"'+event.name+'", "'+event.description+'", "'+event.timing+'")');
			}, null);
		});
		
		$location.path("/wydarzenia");
    };
		
});
