app.factory('group', ['$http', function ($http) {
	var group = {};

	group.creategroup = function (newgroup) {
		return $http.post('/creategroup', newgroup)
	}

	return group
}])