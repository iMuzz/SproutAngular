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

app.controller('dashCtrl', ['$scope', 'UserData', function($scope, UserData){
	$scope.user = UserData;
}]);

// buttons will change plantScore relatively
app.controller('simulationCtrl', ['$scope', 'UserData', function($scope, UserData){
	$scope.user = UserData;

	$scope.modifyPlantScore = function(num){
		$scope.user.changePlantScore(num);
	};
}])