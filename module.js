var app=angular.module('myApp',['ngRoute','firebase']);

app.config(['$routeProvider', function($routeProvider){
$routeProvider.
	when('/view1',{
	templateUrl: 'views/view1.html',
	controller: 'controller1' 
	}).
	when('/view2',{
     templateUrl:'views/view2.html',
	 controller: 'controller2' 
	}).
	otherwise({
	redirectTo:'/view1'
	});


}]);
