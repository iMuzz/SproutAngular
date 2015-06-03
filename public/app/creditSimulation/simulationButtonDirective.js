app.directive('simulationButton', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/simulationButton.jade',
		scope: {
			scoreChange: "@"
		},
		controller: function($scope) {
			console.log("This is the first button: "+ $scope.scoreChange);
		}
	}
});