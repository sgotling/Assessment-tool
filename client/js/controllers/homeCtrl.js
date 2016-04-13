atApp.controller('HomeCtrl', function ($scope, AT, $location) {

	$scope.start = function (f) {
		loadForm(f);
		changeView();
	}

	var loadForm = function (f) {
		AT.loadForm(f)
	}

	var changeView = function () {
		$location.path('/answer');
		$location.replace();
	}

});