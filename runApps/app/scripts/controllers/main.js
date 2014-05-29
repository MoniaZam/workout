'use strict';

angular.module('runappsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	// var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

// db.transaction(function (tx) {
   // tx.executeSql('CREATE TABLE IF NOT EXISTS Events (id unique, name text)');
   // tx.executeSql('INSERT INTO Events (id, name, dsc, time) VALUES (1, "Brzuszki do poduszki", "Otwieramy wydarzenie robimy brzuszki przez sen", "Codziennie 22:00")');
   // tx.executeSql('INSERT INTO Events (id, name, dsc, time) VALUES (2, "Rolkami po krakowie", "Rozpoczynamy sezon rolkowy na błoniach", "Piątek 19:00")');
// });


// db.transaction(function (tx) {
   // tx.executeSql('SELECT * FROM Events', [], function (tx, results) {
   // var len = results.rows.length, i;
  
   // $scope.events = 'mm';
   // for (i = 0; i < len; i++){
  
		// $scope.event = results.rows.item(i).name;	
		// console.log(i);
   // }
 // }, null);
//});

  });
