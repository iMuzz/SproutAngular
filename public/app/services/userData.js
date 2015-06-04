app.service('UserData', function(){
	
	this.userName =  "Julia Winehart",
	this.loanBalance =  19852,
	this.creditScore =  100,
	this.payments = 10,
	this.inquiries = 3,
	this.openAccounts = 8,
	this.plantScore = 100,
	this.scoreChange = 35;
	
	this.changePlantScore = function(scoreChange){
		this.plantScore += scoreChange;
	};
});