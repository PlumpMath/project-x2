app.factory('task', ['$http', function ($http) {
	var task = {};

	task.addtask = function (newtask) {
		return $http.post('/addnewtask', newtask)
	}

	return task
}])