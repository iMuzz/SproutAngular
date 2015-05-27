(function(){
	var app = angular.module('dashboard', ['ngResource', 'ngRoute']);
	
	app.config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', 
				{
					templateUrl: '/partials/main.jade', 
					controller: 'mainCtrl'
				}
			);
	});

	app.controller('mainCtrl', function($scope){
		$scope.someVar = "Does this even work?"; 
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