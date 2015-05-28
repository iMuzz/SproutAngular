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

app.controller('dashCtrl', function($scope){
	$scope.userName = "Julia Winehart";
	$scope.loanBalance = 19852;
	$scope.creditScore = 649;
});
