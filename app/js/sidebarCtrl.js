weatherDressApp.controller('sidebarCtrl', function ($scope,Weather) {
    
    $scope.gender_f = true;
    $scope.gender_m = false;
    $scope.genre_c=true; 
    $scope.genre_office=false; 
    $scope.genre_outdoor=false; 
    $scope.genre_f=false;
    
    $scope.setLocation = function(location){
        Weather.setLocation(location);
    }
    
    $scope.getLocation = function(){
        return Weather.getLocation();
    }
    
    

});