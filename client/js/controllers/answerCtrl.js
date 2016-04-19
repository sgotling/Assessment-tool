atApp.controller('AnswerCtrl', function ($scope, $sce, AT, $location) {

	$scope.qs = AT.getLoadedFrom();

	$scope.templates = {
		select : "<select><option ng-repeat='a in q.a'>{{a}}</option></select>",
		input  : "<input></input>",
		radio  : "<div ng-repeat='a in q.a' ><input type='radio' name='{{q.id}}'>{{a}}<br></div>",
		check  : "<div ng-repeat='a in q.a' ><input type='checkbox' dynamic-model='"+'scopeValue.'+" + field'>{{a.text}} {{a.id}}<br></div> "
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
	
	$scope.answer = {}



});

atApp.directive('dynamicModel', ['$compile', '$parse', function ($compile, $parse) {
    return {
        restrict: 'A',
        terminal: true,
        priority: 100000,
        link: function (scope, elem) {
            var name = $parse(elem.attr('dynamic-model'))(scope);
            elem.removeAttr('dynamic-model');
            elem.attr('ng-model', name);
            $compile(elem)(scope);
        }
    };
}]);