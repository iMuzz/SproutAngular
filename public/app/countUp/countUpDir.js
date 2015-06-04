// To use this directive 
// 1. Add an ID to the element.
// 2. Add the attribute 'count-up' to the element.
// 3. Add the attribute 'cu-end-val="Your_value"' to the element with the value that you want to count to.

app.directive("countUp", function(){
	return {
		restrict: 'A',
		scope: {
			endValue: '=cuEndVal'
		},
		link: function(scope, el, attrs){
			var numAnim = new CountUp(el[0].id, 0, scope.endValue, 0, 4);
			numAnim.start();

			var changeTo = function(newVal, oldVal){
				var animation = new CountUp(el[0].id, oldVal, newVal, 0, 4);
				animation.start();
			}

			if (attrs["cuChangingVal"] !== undefined ) {
				var watchInitializing = true;
				scope.$watch(function() { return attrs["cuChangingVal"]; }, function(newVal, oldVal){
					if (watchInitializing) {
						watchInitializing = false;
					} else {
						changeTo(newVal, oldVal);
					};
				});
			};
		}
	}
});