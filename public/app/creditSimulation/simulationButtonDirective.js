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