'use strict';

angular.module('runappsApp')
 .factory('Groups', function($q) {
  
    var getGroups = function() {
      var deferred = $q.defer();
	    
		/*var db = openDatabase('events', '1.0', 'Events DB', 2 * 1024 * 1024);
		
		db.transaction(function (tx) { 	
		   tx.executeSql('SELECT * FROM Users', [], function (tx, results) {
		   var len = results.rows.length, i;
		   var response = {}
		   
		   for (i = 0; i < len; i++){
		   
				if (response[results.rows.item(i).group] == 'undefined'){
						response[results.rows.item(i).group] = []
				}
				
				response[results.rows.item(i).group].push({
					'firstname' : results.rows.item(i).firstname,
					'secondname' : results.rows.item(i).secondname
				});
		   }
		   
		   console.log(response);
		   deferred.resolve(response);
		 }, null);
		});*/
	
	  var response = {
		'grupa1' : {
			'name' : 'Biegacze',
			'items' : [
				{'firstname' : 'Jan', 'secondname' : 'Kowalski'},
				{'firstname' : 'John', 'secondname' : 'Smith'}
			]
		},
		'grupa2' : {
			'name' : 'Maratończcy',
			'items' :[
				{'firstname' : 'Mateusz', 'secondname' : 'Roberts'},
				{'firstname' : 'Joseph', 'secondname' : 'Neuman'}
			]
		},
	  }
	  
	  deferred.resolve(response);
      return deferred.promise;
    };
    
    return {
      getGroups: getGroups
    };
  
  })
  
  .controller('GroupsCtrl', function ($scope, Groups) {
	
	Groups.getGroups().then(function(groups) {
			$scope.groups = groups;
		});
});
