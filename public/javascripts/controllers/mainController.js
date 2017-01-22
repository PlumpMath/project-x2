app.controller("mainCtrl", ['$scope', function($scope) {



	$scope.myTasks = [
		{
			day: 'monday',
			tasks: ['myTask1', 'myTask2']
		},
		{
			day: 'tuesday',
			tasks: ['myTask3', 'myTask4']
		},
		{
			day: 'wednesday',
			tasks: ['myTask5', 'myTask6']
		},
		{
			day: 'thursday',
			tasks: ['myTask7', 'myTask8']
		},
		{
			day: 'friday',
			tasks: ['myTask9', 'myTask10']
		},
		{
			day: 'general',
			tasks: ['x-tra-task1', 'x-tra-task2']
		}
	]

	$scope.teamTasks = ['teamTask1', 'teamTask2', 'teamTask3', 'teamTask4', 'teamTask5', 'teamTask6', 'teamTask7', 'teamTask8']

	console.log($scope.myTasks)

}]);