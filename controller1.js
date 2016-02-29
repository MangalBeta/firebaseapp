
app.controller('controller1', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
	var firebaseObj = new Firebase("https://myauthenticationapp.firebaseio.com"); 
	console.log(firebaseObj);
	var loginObj = $firebaseSimpleLogin(firebaseObj);
		console.log(loginObj);
	$scope.SignIn = function(event) {
    event.preventDefault();  
    var username = $scope.user.email;
    var password = $scope.user.password;
     console.log(password);
    loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
}
}]);
