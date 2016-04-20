atApp.controller('AnswerCtrl', function ($scope, $sce, AT, $location) {

	$scope.f = AT.getLoadedForm();
	$scope.answers = {};
	$scope.templates = {
		select : "<select ng-model='answers[q.q]'><option ng-repeat='a in q.a'>{{a}}</option></select>",
		input  : "<input type='text' ng-model='answers[q.q]'></input>",
		radio  : "<div ng-repeat='a in q.a'><input type='radio' name='{{q.q}}' ng-model='answers[q.q]' ng-value='q.a[$index]'><p>{{a}}<p><br></div>",
		check  : "<div ng-repeat='a in q.a'><input type='checkbox' ng-model='answers[q.q][a]'><p>{{a}}<p><br></div> "
	}

	$scope.addAns = function (f, a) {
		console.log(a)
		AT.answer(f, a);
		goHome();
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