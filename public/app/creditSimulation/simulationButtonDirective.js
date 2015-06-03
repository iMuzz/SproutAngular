app.directive('simulationButton', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/simulationButton.jade',
		scope: {
			scoreChange: "@",
			onActivate: "&method"
		},
		link: function(scope, el, attrs) {
			var active = false;

			var oppositeNum = function(num) {
				return num * -1;
			}

			// This directive probably knows too much about how the plantScore should work
			// right now it knows that every time this button is clicked the value needs to be flipped in order for scoreChange to do the right thing
			scope.activateButton = function(){
				if (active) {
					el.find(".simulation").removeClass("sim-active")
					active = false;
					scope.onActivate({scoreChange: oppositeNum(parseInt(scope.scoreChange, 10))});
				} else {
					el.find(".simulation").addClass("sim-active")
					active = true;
					scope.onActivate({scoreChange: parseInt(scope.scoreChange, 10)});
				};
			};
		}
	}
});