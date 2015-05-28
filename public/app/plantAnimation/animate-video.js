app.directive('animateVideo', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/videoFrame.jade', 
		scope: {
			videourl: '@videourl'
		},
		controller: function($scope){
			$scope.test = function(){
				console.log($scope.videourl);
			};
		},
	}
});