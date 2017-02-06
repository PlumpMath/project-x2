app.factory('caseService', ['$http', function ($http) {
	var nCase = {};

	nCase.createcase = function (newcase) {
		return $http.post('/createcase', newcase);
	}

	nCase.findCase = function (caseName) {
		return $http.get('/cases/' + caseName);
	}

	nCase.auhtenticate = function (details) {
		return $http.post('/authcase', details)
	}

	return nCase
}])