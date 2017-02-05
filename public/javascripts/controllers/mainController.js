app.controller("mainCtrl", ['$scope', '$state', 'auth', 'task', 'group', function($scope, $state, auth, task, group) {


	$scope.currentUser = auth.currentUser()

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

	$scope.newtask = function (newtask) {
		newtask.current = $scope.currentUser.username

		task.addtask(newtask);
	}

	$scope.creategroup = function (newgroup) {
		newgroup.admin = $scope.currentUser.username

		group.creategroup(newgroup).then(function(){
      $state.go('home');
    });
	}

	$scope.logIn = function(user){
	  auth.logIn(user).then(function(error){
	    $scope.error = error;
  	}).then(function(){
    	$state.go('home');
  	});
  }

  $scope.signOut = function () {
  	auth.signOut();
  }

}]);

