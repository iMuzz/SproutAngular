app.service('UserData', function(){
	
	this.plantScore = 100;
	this.userName =  "Julia Winehart",
	this.loanBalance =  19852,
	this.creditScore =  100,
	
	this.changePlantScore = function(scoreChange){
		this.plantScore += scoreChange;
	};
});