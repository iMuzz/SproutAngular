app.directive('animateVideo', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/videoFrame.jade', 
		scope: {
			videoUrl: '@videourl'
		},
		controller: function($scope){
			$scope.test = function(){
				console.log($scope.videoUrl);
			};
		},
	}
});