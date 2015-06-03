app.directive('videoPanel', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/videoPanel.jade', 
		scope: {
			videoUrl: '@videourl'
		}
	}
});

app.directive('testDirective', function(){
	return {
		restrict: 'A',
		link: function(scope, el, attrs) {
			
			var MAX_CREDIT_SCORE = 850;
			var video = el.find('video')[0];
			var initialPlayToPerc;
			var endTime;

			var calculatePercentage = function(creditScore) {
				return creditScore / MAX_CREDIT_SCORE;
			}

			var resumeToSec = function(stopTime){
				endTime = stopTime;
				video.addEventListener("timeupdate", pauseAtTime);
				video.play();
			}

			var pauseAtTime = function(){
				if (video.currentTime >= endTime) {
					console.log("endTime = " + endTime)
					console.log("video.currentTime = " + video.currentTime)
					video.pause();
					video.removeEventListener("timeupdate", pauseAtTime)
				};
			}

			var percentageToSeconds = function(inputPercentage){
				return inputPercentage * video.duration
			}

			initialPlayToPerc = calculatePercentage(attrs['percentage']);
			setTimeout(function(){ 
				scope.vidLength = video.duration;
				resumeToSec(initialPlayToPerc * scope.vidLength);
				video.play();
			}, 1000);

			scope.$watch(attrs['testDirective'], function(newVal, oldVal){
				resumeToSec(percentageToSeconds(calculatePercentage(newVal)));
			});
		}
	}
});