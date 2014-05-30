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
  
  .controller('EventsCtrl', function ($scope, Events) {
 
		Events.getEvents().then(function(events) {
			$scope.events = events;
		});
		
});
