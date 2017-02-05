app.factory('auth', ['$http', '$window', function ($http, $window) {
	var auth = {};

   auth.saveToken = function (token) {
     $window.localStorage['officeToDo-jwt'] = token;
   };

   auth.getToken = function (){
     return $window.localStorage['officeToDo-jwt'];
   }

   auth.isLoggedIn = function(){
     var token = auth.getToken();

     if(token){
       var payload = JSON.parse($window.atob(token.split('.')[1]));

       return payload.exp > Date.now() / 1000;
     } else {
       return false;
     }
   };

   auth.currentUser = function() {
     if(auth.isLoggedIn()){
       var token = auth.getToken();
       var payload = JSON.parse($window.atob(token.split('.')[1]));

       return payload;
     }
   };

   auth.register = function(user) {
     return $http.post('/register', user).then(function(data){
      console.log(data.data.token)
       auth.saveToken(data.data.token);
     });
   };

   auth.logIn = function(user) {
     return $http.post('/login', user).then(function(data){
       auth.saveToken(data.data.token);
     });
   };

   auth.signOut = function() {
     $window.localStorage.removeItem('officeToDo-jwt');
   };

	return auth
}])