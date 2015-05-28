app.directive('animateVideo', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/videoFrame.jade',
		controller: function($scope){
			$scope.test = function(){
				console.log("The button was clicked!");
			};
		}
	}
});