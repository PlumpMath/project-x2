app.controller("mainCtrl", ['$scope', '$state', 'auth', function($scope, $state, auth) {


/*$scope.onSignIn = function (googleUser) {
	console.log(googleUser)
  var profile = googleUser.getBasicProfile();
  console.log('Signed in as: ' + googleUser.getBasicProfile().getName());
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}*/

	$scope.register = function (x) {
		auth.register(x).then(function(){
      $state.go('home');
    });
	}

	$scope.myTasks = [
		{
			day: 'Monday',
			tasks: ['myTask1', 'myTask2']
		},
		{
			day: 'Tuesday',
			tasks: ['myTask3', 'myTask4']
		},
		{
			day: 'Wednesday',
			tasks: ['myTask5', 'myTask6']
		},
		{
			day: 'Thursday',
			tasks: ['myTask7', 'myTask8']
		},
		{
			day: 'Friday',
			tasks: ['myTask9', 'myTask10']
		},
		{
			day: 'General/ASAP',
			tasks: ['x-tra-task1', 'x-tra-task2']
		}
	]

	$scope.teamTasks = ['teamTask1', 'teamTask2', 'teamTask3', 'teamTask4', 'teamTask5', 'teamTask6', 'teamTask7', 'teamTask8', 'teamTask9', 'teamTask10', 'teamTask11', 'teamTask12', 'teamTask13', 'teamTask14', 'teamTask15']

	$scope.newtask = function (forUser, taskDescr, deadline) {
		if (forUser && taskDescr && deadline) {
			alert ('There is a new task for: ' + forUser + ' to do: ' + taskDescr + ' until: ' + deadline);
		} else {
			alert ('Refresh now and next time complete ALL fields');
		}
	}


}]);

