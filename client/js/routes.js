
var routes = function ($routeProvider) {
  $routeProvider.
    when('/', {
    	templateUrl	: 'views/home.html',
      controller: 'HomeCtrl'
    }).
    when('/answer', {
    	templateUrl : 'views/answer.html',
    	controller  : 'AnswerCtrl'
    }).
    otherwise({
    	redirectTo	: '/'
    });

}

atApp.config(['$routeProvider', routes]);