atApp.controller('teacherCtrl', function ($scope, DB) {
	$scope.f = {};
	$scope.f.q = [];
	$scope.q = {};
	$scope.q.a = [];
	$scope.types=["select", "input", "radio", "check"];
	$scope.var = {
		newQ: false,
		fs:[],
		f: {},
		
	}
	$scope.var.f.q = []

	

	$scope.addForm = function (f) {
		var fCopy = angular.copy(f);
		console.log($scope.f);
		$scope.var.fs.push(f);
	}

	$scope.addQuestion = function (q) {
		var qCopy = angular.copy(q);
		console.log(qCopy)
		$scope.var.f.q.push(q);
		// $scope.newQ=false;

	}

	$scope.clearF = function () {
		$scope.var.f = {};
		$scope.var.f.q = [];
	}

	$scope.clearQ = function () {
		$scope.q = {};
		$scope.q.a = [];
	}
	
	$scope.addAnswer = function (a) {
		var aCopy = angular.copy(a);
		$scope.q.a.push(aCopy);
	}

	$scope.remove = function (array, index) {
		array.splice(index, 1);
	}
	$scope.showAns = function (t) {
		if (t != "input" && t != undefined) {
			return true;
		}
		else {
			return false;
		}
	}
});