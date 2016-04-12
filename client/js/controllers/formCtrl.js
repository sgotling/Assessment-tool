atApp.controller('FormCtrl', function ($scope, $sce) {

	$scope.qs = [
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

	$scope.templates = {
		select : "<select><option ng-repeat='a in q.a'>{{a}}</option></select>",
		input  : "<input></input>",
		radio  : "<div ng-repeat='a in q.a'><input type='radio'>{{a}}<br></div>",
		check  : "<div ng-repeat='a in q.a'><input type='checkbox'>{{a}}<br></div> "
	}

	$scope.trust = function (elem) {
		return $sce.trustAsHtml(elem);
	}

});