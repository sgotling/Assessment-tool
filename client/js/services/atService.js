atApp.factory('AT',function ($resource, $firebase, $firebaseObject) {


	var rootRef = new Firebase("https://assessmenttool.firebaseio.com");

	var Q = $firebaseObject(rootRef);


	this.addForm = function (f) {
		// rootRef.set(f);
		rootRef.child("forms/" + f.id).set(f);
	}

	var loadedForm = null;
	// this.loadForm = function (f) {
	// 	var ref = new Firebase(rootRef + f.id);
	// 	var F = $firebaseObject(ref);
	// 	return F.$loaded(function () {
	// 		loadedForm = F;
	// 		console.log("loadedForm");
	// 		console.log(loadedForm);
	// 	});	
	// }

	this.loadForm = function (f) {
		rootRef.on("value", function(snapshot) {
  		console.log(snapshot.val());
  		loadedForm = snapshot.val().forms[1].q;
		})
	}

	// testForm: {"id":123,"q":[{"q":"Vad hette ditt första husdjur?","t":"input"},{"a":["1-3 år","30-40 år","Mer än 100 år"],"q":"Vad är din ålder?","t":"select"},{"a":["Välj mig!","Nej inte den ovan, välj mig istället!","Välj inte mig!"],"q":"Välj en av dessa","t":"radio"},{"a":["Allt","Inget","Korv","Köttbullar"],"q":"Vad gillar du för mat?","t":"check"}],"title":"Lite mer"}




	this.getLoadedFrom = function () {
		// return testForm.test;
		return loadedForm
	}

	// this.answer = function (q, a) {
	this.answer = function (a) {
		var q = {};
		q.id = 1;
		alert()
		rootRef.child("answers").push(a);
	}

	var testForm = {test : [
		{
			q : "What is your name?",
			t : "input",
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