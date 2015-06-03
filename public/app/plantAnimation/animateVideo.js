app.directive('videoPanel', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/videoPanel.jade', 
		scope: {
			videoUrl: '@videourl'
		},

		link: function(scope, el, attrs) {
			// scope.playToPerc = attrs['percentage'] / 850;
			// var video = el.find('video')[0];

			// setTimeout(function(){ 
			// 	scope.vidLength = video.duration;
			// 	resumeToSec(scope.playToPerc * scope.vidLength);
			// 	// resumeToSec(2);
			// 	video.play();
			// }, 1000);

			// var resumeToSec = function(stopTime){
			// 	scope.endTime = stopTime;
			// 	video.addEventListener("timeupdate", pauseAtTime);

			// 	video.play();
			// }

			// var pauseAtTime = function(){
			// 	if (video.currentTime >= scope.endTime) {
			// 		video.pause();
			// 		video.removeEventListener("timeupdate", pauseAtTime)
			// 	};
			// }
		}
	}
});

app.directive('testDirective', function(){
	return {
		restrict: 'A',
		link: function(scope, el, attrs) {
			var MAX_CREDIT_SCORE = 850;

			var calculatePercentage = function(creditScore) {
				return creditScore / MAX_CREDIT_SCORE;
			}

			console.log(attrs['percentage']);
			scope.playToPerc = calculatePercentage(attrs['percentage']);
			var video = el.find('video')[0];

			setTimeout(function(){ 
				scope.vidLength = video.duration;
				resumeToSec(scope.playToPerc * scope.vidLength);
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

			scope.$watch(attrs['testDirective'], function(newVal, oldVal){
				resumeToSec(calculatePercentage(newVal));
			});
		}
	}
});