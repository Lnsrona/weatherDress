// weatherDressApp.controller('loginCtrl', function ($scope,$location,$firebaseObject,Weather) {
// //   var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
//   // download the data into a local object
// //   $scope.data = $firebaseObject(ref);
//   // putting a console.log here won't work, see below
  
//   $scope.signup = function(username,password){
//       Weather.setAccount(username,password);
//   }
  
//   $scope.login = function(username,password){
//       Weather.checkAccount(username,password, function (user){
//         //   alert("Login succed");
//           $location.path('./home');
//       }, function (error)  {  
//             alert(error + ", please try again!");
//       });
//   }
  
// });



//Auth0
weatherDressApp.controller( 'loginCtrl', function ( $scope, auth, $firebaseArray, Weather) {

  $scope.auth = auth;
  
  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/home');
  }
  
  $scope.resetPassword = function(){
    auth.reset({
        connection: 'Username-Password-Authentication'
      });
  };
  
  
  
  $scope.getCloth = function(){
    
  var t=Weather.getWeatherCloth(8,100,"Female",1);
    
    
  }
});