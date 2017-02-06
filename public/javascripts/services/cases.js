app.factory('caseService', ['$http', '$window', function ($http, $window) {
	var nCase = {};

	nCase.createcase = function (newcase) {
		return $http.post('/createcase', newcase).then(function (data) {
			nCase.saveToken(data.data.token)
		})
	}

	nCase.findCase = function (caseName) {
		return $http.get('/cases/' + caseName);
	}

	nCase.auhtenticate = function (details) {
		return $http.post('/authcase', details).then(function (data) {
			nCase.saveToken(data.data.token)
		})
	}

	nCase.saveToken = function (token) {
    $window.localStorage['caseJoin-jwt'] = token;
  };

  nCase.getToken = function () {
  	return $window.localStorage['caseJoin-jwt'];
  }

	nCase.isLoggedInCase = function(){
    var token = nCase.getToken();

    if(token){
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  nCase.currentCase = function() {
    if(nCase.isLoggedInCase()){
      var token = nCase.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      return payload;
    }
  };

  nCase.signOut = function() {
    $window.localStorage.removeItem('caseJoin-jwt');
  };

	return nCase
}])