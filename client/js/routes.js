var routes = function ($routeProvider) {
  $routeProvider.
    when('/', {
    	templateUrl	: 'views/home.html',
        controller: 'HomeCtrl'
    }).
    when('/answer', {
    	templateUrl : 'views/answer.html',
    	controller  : 'AnswerCtrl'
    })
    .when('/teacher', {
    	templateUrl	: 'views/teacher.html',
        controller: 'teacherCtrl'
      })
    .when('/stat', {
        templateUrl : 'views/stat.html',
        controller: 'statCtrl'
      })
    .otherwise({
    	redirectTo	: '/'
    });


}

atApp.config(['$routeProvider', routes]);