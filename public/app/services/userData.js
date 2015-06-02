app.service('UserData', function(){
	
	this.plantScore = 649;
	this.userName =  "Julia Winehart",
	this.loanBalance =  19852,
	this.creditScore =  649,
	
	this.changePlantScore = function(scoreChange){
		this.plantScore += scoreChange;
	};
});