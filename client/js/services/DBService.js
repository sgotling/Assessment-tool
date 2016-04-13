atApp.factory('DB', function ($resource) {
	// var qs = [];
	var qs =  
	[
		{
			q : "What is your name?",
			t : "input",
			a : ["bla 1", "bla 2", "bla 3"]
		},
		{
			q : "What is your age?",
			t : "select",
			a : ["18-20", "20-25", "25-30"]
		},
		{
			q : "How satisfied are you?",
			t : "radio",
			a : [">(",":(", ":|", ":)", ":D"]
		},
		{
			q : "What is an arduino?",
			t : "check",
			a : ["motor", "processor", "micro controller", "Small computer"]
		}
	];

	this.setQs = function (q) {
		qs.push(q);
		return qs;
	}

	this.getQs = function () {
		return qs;
	}
	return this;
});