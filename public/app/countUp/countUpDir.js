app.directive("countUp", function(){
	return {
		restrict: 'A',
		scope: {
			endValue: '=tuCscore'
		},
		link: function(scope, el, attrs){
			var numAnim = new CountUp(el[0].id, 0, scope.endValue, 0, 4);
			numAnim.start();

			var changeTo = function(newVal, oldVal){
				var animation = new CountUp(el[0].id, oldVal, newVal, 0, 4);
				animation.start();
			}

			var watchInitializing = true;
			scope.$watch(function() { return attrs["tuVal"]; }, function(newVal, oldVal){
				if (watchInitializing) {
					watchInitializing = false;
				} else {
					changeTo(newVal, oldVal);
				};
			});
		}
	}
});