atApp.controller('AnswerCtrl', function ($scope, $sce, AT, $location) {

	$scope.f = AT.getLoadedForm();
	$scope.answers = {};
	$scope.templates = {
		select : "<select ng-model='answers[q.q]'><option ng-repeat='a in q.a'>{{a}}</option></select>",
		input  : "<input ng-model='answers[q.q]'></input>",
		radio  : "<div ng-repeat='a in q.a'><input type='radio' name='{{q.q}}' ng-model='answers[q.q]' ng-value='q.a[$index]'>{{a}}<br></div>",
		check  : "<div ng-repeat='a in q.a'><input type='checkbox' ng-model='answers[q.q][a]'>{{a}}<br></div> "
	}

	$scope.addAns = function (f, a) {
		AT.answer(f, a);
	}
	$scope.trust = function (elem) {
		return $sce.trustAsHtml(elem);
	}

	var goHome = function () {
		$location.path('/');
		$location.replace();
	}
	/*
	Go to home if the page is updated.
	*/
	if (AT.getLoadedForm() === null) {
		goHome();
	}
	

});