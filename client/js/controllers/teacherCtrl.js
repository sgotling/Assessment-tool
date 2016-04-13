atApp.controller('teacherCtrl', function ($scope, DB) {
	// alert();
	$scope.qs = DB.getQs();
	$scope.q = {};
	$scope.q.a = [];
	$scope.types=["select", "input", "radio", "check"];

	$scope.addQuestion = function (q) {
		var qCopy = angular.copy(q);
		DB.setQs(q);
		$scope.q = {};
		$scope.q.a = [];
		console.log($scope.qs);

	}
	
	$scope.addAnswer = function (a) {
		var aCopy = angular.copy(a);
		$scope.q.a.push(aCopy);
	}

	$scope.remove = function (array, index) {
		array.splice(index, 1);
	}
});