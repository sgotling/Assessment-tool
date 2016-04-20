atApp.factory('AT',function ($resource, $firebase, $firebaseObject) {


	var rootRef = new Firebase("https://assessmenttool.firebaseio.com");

	var Q = $firebaseObject(rootRef);


	this.addForm = function (f) {
  		f.id = Object.keys(allForms).length; //OBS EJ BRA METOD EFTERSOM MAN KAN SKRIVA ÖVER FORMULÄR OM MAN TAR BORT NÅGOT.
		rootRef.child("forms/" + f.id).set(f); //Kanske bättre med en lista
	}

	var allForms = null;
	var loadedForm = null;

	this.loadForm = function (f) {
		rootRef.on("value", function(snapshot) {
  		loadedForm = snapshot.val().forms[f.id];
		})
	}

	this.loadAllForms = function () {
		rootRef.on("value", function(snapshot) {
		allForms = snapshot.val().forms;
		})

	}
	

	this.getAllForms = function () {
		return allForms;
	}


	this.getLoadedForm = function () {
		return loadedForm;
	}



	this.answer = function (f, a) {
		var ans = {};
		ans.a = a;
		ans.fid = f.id;
		ans.date = Date.now();
		rootRef.child("answers").push(ans);
	}

	return this;
});


/*Reserv och testdata*/
// testForm: {"id":123,"q":[{"q":"Vad hette ditt första husdjur?","t":"input"},{"a":["1-3 år","30-40 år","Mer än 100 år"],"q":"Vad är din ålder?","t":"select"},{"a":["Välj mig!","Nej inte den ovan, välj mig istället!","Välj inte mig!"],"q":"Välj en av dessa","t":"radio"},{"a":["Allt","Inget","Korv","Köttbullar"],"q":"Vad gillar du för mat?","t":"check"}],"title":"Lite mer"}
// {"id":123,"q":[{"a":["Sant","Falskt"],"q":"Jag har programmerat förut.","t":"radio"},{"a":["1","2","3","4"],"q":"Jag vill lära mig mer programmering. (4 stämmer helt - 1 stämmer inte alls)","t":"radio"},{"a":["1","2","3","4"],"q":"Jag förstår vad programmering är och hur det används. (4 stämmer helt - 1 stämmer inte alls)","t":"radio"},{"a":["Ett programspråk","En minidator","Endast en kontakt för att koppla komponenter till datorn"],"q":"En Arduino är:","t":"radio"},{"a":["Välja väg i programmet och upptäcka händelser","Avsluta ett program","Repetera kod flera gånger"],"q":"En if-sats är till för att:","t":"radio"},{"a":["Välja väg i programmet och upptäcka händelser","Avsluta ett program","Repetera kod flera gånger"],"q":"En loop är till för att:","t":"radio"},{"a":["Uppifrån och ned","Nedifrån och upp","Grisen gal i granens topp","Den läser in den kod som behövs först och gör en prioritering"],"q":"Ett program läses:","t":"radio"}],"title":"Förarbete Vetenskapens Hus Upplands Bro"}





	// var allForms = null;
	// var loadedForm = null;

	// this.setForm = function (f) {
	// 	loadedForm = allForms[f.id];
	// }

	// this.loadForms = function () {
	// 	rootRef.on("value", function(snapshot) {
	// 		allForms = snapshot.val().forms;
	// 	});
	// }

	// this.getAllForms = function () {
	// 	return allForms;
	// }

	// this.getLoadedForm = function () {
	// 	alert()
	// 	return loadedForm;
	// }