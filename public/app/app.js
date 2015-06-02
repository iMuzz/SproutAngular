var app = angular.module('dashboard', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', 
			{
				templateUrl: '/partials/main.jade', 
				controller: 'dashCtrl'
			}
		);
});

app.controller('dashCtrl', ['$scope', '$http','UserData', function($scope, $http, UserData){
	$scope.user = UserData;
}]);
