atApp.controller('AnswerCtrl', function ($scope, $sce, AT, $location) {

	$scope.qs = AT.getLoadedFrom();

	$scope.templates = {
		select : "<select><option ng-repeat='a in q.a'>{{a}}</option></select>",
		input  : "<input></input>",
		radio  : "<div ng-repeat='a in q.a'><input type='radio' name='{{q.id}}'>{{a}}<br></div>",
		check  : "<div ng-repeat='a in q.a'><input type='checkbox'>{{a}}<br></div> "
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
	if (AT.getLoadedFrom() === null) {
		goHome();
	}
	

});