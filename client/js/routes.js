var routes = function ($routeProvider) {
    $routeProvider
    .when('/', {
    	templateUrl	: 'views/home.html',
        //controller: 'HomeCtrl'
      })
    .when('/teacher', {
    	templateUrl	: 'views/teacher.html',
        controller: 'teacherCtrl'
      })
      .otherwise({
      	redirectTo	: '/'
      });

}

atApp.config(['$routeProvider', routes]);