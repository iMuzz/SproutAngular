app.directive("countUp", function(){
	return {
		restrict: 'A',
		scope: {
			endValue: '=tuCscore'
		},
		link: function(scope, el, attrs){
			var numAnim = new CountUp(el[0].id, 0, scope.endValue, 0, 4);
			numAnim.start();

			scope.$watch(function() { return attrs["tuVal"]; }, function(newVal, oldVal){
				console.log("This is the new value: " + newVal)
				console.log(typeof newVal)
			});
		}
	}
});