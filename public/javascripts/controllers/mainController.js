app.controller("mainCtrl", ['$scope', function($scope) {



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

	$scope.teamTasks = ['teamTask1', 'teamTask2', 'teamTask3', 'teamTask4', 'teamTask5', 'teamTask6', 'teamTask7', 'teamTask8']


}]);