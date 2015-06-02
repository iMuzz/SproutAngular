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

// app.factory('UserDataFactory', ['', function(){
// 	return {
// 		userName: "Julia Winehart",
// 		loanBalance: 19852,
// 		creditScore: 649,
// 		plantScore: 649
// 	};
// }]);

app.controller('dashCtrl', ['$scope', function($scope){
	// $scope.user = UserDataFactory;

	$scope.userName = "Julia Winehart";
	$scope.loanBalance = 19852;
	$scope.creditScore = 649;
	$scope.plantScore = 649;
}]);
