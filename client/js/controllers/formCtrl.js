atApp.controller('FormCtrl', function ($scope, $sce, DB) {

	$scope.qs = [
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
	];

	$scope.qs = DB.getQs();

	$scope.templates = {
		select : "<select><option ng-repeat='a in q.a'>{{a}}</option></select>",
		input  : "<input></input>",
		radio  : "<form><div ng-repeat='a in q.a'><input type='radio' name='{{q.id}}'>{{a}}<br></div></form>",
		check  : "<div ng-repeat='a in q.a'><input type='checkbox'>{{a}}<br></div> "
	}

	$scope.trust = function (elem) {
		return $sce.trustAsHtml(elem);
	}

});