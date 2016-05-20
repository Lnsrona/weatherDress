// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('likedCtrl', function ($scope,Weather,auth) {
// var userID=Weather.getUserID();
//   if(Weather.checkAccount(userID)){
//   	$scope.likedOutfit=Weather.getLike_outfit();
//   	console.error($scope.likedOutfit);
//   	$scope.likedItem=Weather.geLike_item();
//   	console.error($scope.likedItem);
//   }else{
//   	$scope.status="You didn't add any liked item/outfit. Why don't you CLICK hearts to like something."
//   }
	
	Weather.checkAccount(userID,function(data){
		Weather.getLike_outfit(function(data){
			$scope.likedOutfit=data;
		});
  	console.error($scope.likedOutfit);
  	Weather.geLike_item(function(data){
			$scope.likedItem=data;
		});
  	console.error($scope.likedItem);
	},function(error){
			$scope.status="You didn't add any liked item/outfit. Why don't you CLICK hearts to like something."
	});



});
