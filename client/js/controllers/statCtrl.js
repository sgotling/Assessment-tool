atApp.controller('statCtrl', function ($scope, AT) {
	AT.loadAllAnswers();
	// Ett fulhack! Se till att kolla när värde har laddats istället
	setTimeout(function () {
		$scope.answers = AT.getAllAnswers();
		$scope.$apply();
		$scope.getResult($scope.answers);
		$scope.$apply();
	},
	1000);


	$scope.getResult = function (r) {
	/*
	Skriv om hela denna funktion i mindre delar. Gör om helt. 
	Skapa ett skelett genom att först kolla vilka frågor och svar som är med. Sen kan man räkna ut hur mycket av varje svar. 
	Gör en egen funktion för att räkna ut hur många som svarat på varje fråga och hur många som svarat totalt.
	*/
		$scope.result = {}
		for (var key in r) {
			var ans = r[key].a;
			for (var q in ans) {
				var a = ans[q];
				if ($scope.result[q] === undefined) {
					$scope.result[q] = {};
					$scope.result[q][a] = 1;
					$scope.result[q]["total"] = 1;
				}
				else if ($scope.result[q][a] === undefined) {
					$scope.result[q][a] = 1
				}
				else{
					$scope.result[q][a]+=1;
					$scope.result[q]["total"] += 1;
				}
			};
		};
		// console.log($scope.result)
		return $scope.result;
	}

	$scope.testFunction = function (a) {
		return a + 1;
	}
});