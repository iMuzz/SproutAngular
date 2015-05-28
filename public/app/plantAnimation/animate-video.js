app.directive('animateVideo', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/videoFrame.jade', 
		scope: {
			videoUrl: '@videourl',
			percentage: '=percentage'
		},
		controller: function($scope){
			$scope.test = function(){
				console.log($scope.videoUrl);
				console.log($scope.percentage  = $scope.percentage + .1);

			};
		},
	}
});