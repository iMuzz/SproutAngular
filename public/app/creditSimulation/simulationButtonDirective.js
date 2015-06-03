app.directive('simulationButton', function(){
	return {
		restrict: 'E',
		templateUrl: '/partials/simulationButton.jade',
		scope: {
			scoreChange: "@",
			onActivate: "&method"
		},
		link: function(scope, el, attrs) {
			var _el = el;
			var active = false;
			scope.activateButton = function(){
				if (active) {
					el.find(".simulation").removeClass("sim-active")
					active = false
					// scope.onActivate();
				} else {
					el.find(".simulation").addClass("sim-active")
					active = true;
					scope.onActivate();
				};
			};
		}
	}
});

// app.directive('clickActivator', function(){
// 	return {
// 		restrict: 'A',
// 		link: function(scope, el, attrs) {

// 		}
// 	}
// });