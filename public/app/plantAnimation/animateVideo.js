app.directive('videoPanel', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/videoPanel.jade', 
		scope: {
			videoUrl: '@videourl'
		}
	}
});

app.directive('animateVideo', function($interval){
	return {
		restrict: 'A',
		replace: true,
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
					video.pause();
					video.removeEventListener("timeupdate", pauseAtTime)
				};
			}

			var percentageToSeconds = function(inputPercentage){
				// this '-1' is a hack and needs to be removed
				return ((inputPercentage * video.duration) - 1);
			}

			var rewindToSeconds = function(seconds){
				var currTime = video.currentTime * 100 | 0;
				var seconds = seconds * 100 | 0;
				function frame(){
					currTime -= 1;
					video.currentTime = currTime / 100;

					if (currTime <= seconds) {
						$interval.cancel(promise)
					}; 

				}
				var promise = $interval(frame, 50)
			}

			setTimeout(function(){ 
				resumeToSec(percentageToSeconds(calculatePercentage(attrs['percentage'])));
				video.playbackRate = .5;
				video.play();
			}, 1000);

			scope.$watch(attrs['animateVideo'], function(newVal, oldVal){
				if (newVal > oldVal) {
					resumeToSec(percentageToSeconds(calculatePercentage(newVal)));
				} else {
					rewindToSeconds(percentageToSeconds(calculatePercentage(newVal)));
				};
			});
		}
	}
});