
var routes = function ($routeProvider) {
    $routeProvider
    .when('/', {
    	templateUrl	: 'views/home.html',
        //controller: 'HomeCtrl'
      }).
      otherwise({
      	redirectTo	: '/'
      });

}

atApp.config(['$routeProvider', routes]);