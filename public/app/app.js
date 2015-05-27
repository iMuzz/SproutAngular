(function(){
	var app = angular.module('dashboard', ['ngResource', 'ngRoute']);
	
	// app.config(function($routeProvider, $locationProvider){
	// 	$locationProvider.html5Mode({
	// 		enabled: true,
	// 		requireBase: false
	// 	});
	// 	$routeProvider
	// 		.when('/', 
	// 			{
	// 				templateUrl: 'main', 
	// 				controller: 'mainCtrl'
	// 			}
	// 		);
	// });

	app.controller('mainCtrl', function($scope){
		$scope.someVar = "Hello Angular"; 
	});

	app.directive('testDirective', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/main.jade',
			controller: function(scope){
				console.log("Test");
			}
		}
	});

})();