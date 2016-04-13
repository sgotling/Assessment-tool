atApp.factory('AT',function ($resource, $firebase, $firebaseObject) {


	var rootRef = new Firebase("https://assessmenttool.firebaseio.com");

	var Q = $firebaseObject(rootRef);

	this.addForm = function (f) {
		rootRef.set(f);
	}

	var loadedForm = null;
	this.loadForm = function (f) {
		var ref = new Firebase(rootRef + f.id);
		var F = $firebaseObject(ref);
		return F.$loaded(function () {
			loadedForm = F;
		});
		
		
	}
	this.getLoadedFrom = function () {
		return loadedForm;
	}

	this.answer = function (q, a) {
		rootRef.child(q.id).push(a);
	}

	var testForm = {test : [
		{
			q : "What is your name?",
			t : "input",
			a : ["bla 1", "bla 2", "bla 3"],
			id : "1"
		},
		{
			q : "What is your age?",
			t : "select",
			a : ["18-20", "20-25", "25-30"],
			id: "2"
		},
		{
			q : "How satisfied are you?",
			t : "radio",
			a : [">(",":(", ":|", ":)", ":D"],
			id: "3"
		},
		{
			q : "What is an arduino?",
			t : "check",
			a : ["motor", "processor", "micro controller", "Small computer"],
			id: "4"
		},
	]};


	return this;
});