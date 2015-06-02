app.directive('videoPanel', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/videoPanel.jade', 
		scope: {
			videoUrl: '@videourl',
			percentage: '=percentage'
		},
		controller: function($scope){
			$scope.playToPerc = $scope.percentage / 850;
		},
	}
});

app.directive('startVideo', function(){
	return {
		restrict: 'A',
		link: function(scope, el, attrs){
			var video = el[0];

			setTimeout(function(){ 
				scope.vidLength = video.duration;
				resumeToSec(scope.playToPerc * scope.vidLength);
				// resumeToSec(2);
				video.play();
			}, 1000);

			var resumeToSec = function(stopTime){
				scope.endTime = stopTime;
				video.addEventListener("timeupdate", pauseAtTime);

				video.play();
			}

			var pauseAtTime = function(){
				if (video.currentTime >= scope.endTime) {
					video.pause();
					video.removeEventListener("timeupdate", pauseAtTime)
				};
			}
		}
	}
});