atApp.controller('teacherCtrl', function ($scope) {
	// alert();
	$scope.questions = [];
	$scope.question = {};
	$scope.question.answers = [];

	$scope.addQuestion = function (question) {
		var quest = angular.copy(question);
		$scope.questions.push(quest);
		$scope.question = {};
		$scope.question.answers = [];
		console.log($scope.questions);

	}
	
	$scope.addAnswer = function (ans) {
		var a = angular.copy(ans);
		$scope.question.answers.push(a);
	}

	$scope.remove = function (array, index) {
		array.splice(index, 1);
	}
});