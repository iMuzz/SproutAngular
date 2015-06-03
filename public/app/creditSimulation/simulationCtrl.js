// buttons will change plantScore relatively
app.controller('simulationCtrl', ['$scope', 'UserData', function($scope, UserData){
	$scope.user = UserData;

	$scope.modifyPlantScore = function(num){
		$scope.user.changePlantScore(num);
	};
}])