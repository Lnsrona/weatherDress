// Dinner controller that we use whenever we want to display detailed
// information for one dish
weatherDressApp.controller('homeCtrl', function ($scope,$anchorScroll,$location,Weather, auth, $http, store, $rootScope) {

    $scope.location = Weather.getLocation();

    // Weather.setWeatherData(Weather.getLocation());

//     $scope.auth = auth;
//     console.log($rootScope.profile);
//     $scope.callApi = function() {
//         // Just call the API as you'd do using $http
//         $http({
//         url: 'http://localhost:8000/secured/ping',
//         method: 'GET'
//         }).then(function() {
//         alert("We got the secured data successfully");
//         }, function(response) {
//         if (response.status == -1) {
//             alert("Please download the API seed so that you can call it.");
//         }
//         else {
//             alert(response.data);
//         }
//         });
//     }

//   $scope.logout = function() {
//     auth.signout();
//     store.remove('profile');
//     store.remove('token');
//     $location.path('/login');
//   }



  
 $scope.dataGet=function(){
  Weather.getForecast.get({city:Weather.getLocation()},function(data){
      
      var result = data['HeWeather data service 3.0']
      console.log(data['HeWeather data service 3.0']);

      
//今天
      var todayWeather= result[0].daily_forecast[0];
      
      //气温
      $scope.maxTempToday = todayWeather.tmp.max;
      $scope.minTempToday = todayWeather.tmp.min;

      //体感
      $scope.flTempToday = result[0].now.cond.fl;

      //图标相关
      var iconIDToday = todayWeather.cond.code_d;
      $scope.iconToday = Weather.getForeImg(iconIDToday);
     
      //日期
      $scope.dateToday = todayWeather.date.slice(5);
      //湿度
      $scope.humToday = todayWeather.hum;
      //风力
      $scope.windToday = todayWeather.wind.sc; 

      //概率
      $scope.precToday = todayWeather.pop;
      //能见度
      $scope.visToday =  todayWeather.vis;
       


//明天
      var tmrWeather= result[0].daily_forecast[1];
      //气温
      $scope.maxTempTmr = tmrWeather.tmp.max;
      $scope.minTempTmr = tmrWeather.tmp.min;
      
      //图标相关
      var iconIDTmr = tmrWeather.cond.code_d;
      $scope.iconTmr = Weather.getForeImg(iconIDTmr);
      //$scope.condToday = todayWeather.cond.text_d;

      //日期
      $scope.dateTmr = tmrWeather.date.slice(5);
      //湿度
      $scope.humTmr = tmrWeather.hum;
      //风力
      $scope.windTmr = tmrWeather.wind.sc; 
      //概率
      $scope.precTmr = tmrWeather.pop;
      //能见度
      $scope.visTmr =  tmrWeather.vis;

//后天
      var aftWeather= result[0].daily_forecast[2];
      //气温
      $scope.maxTempAft = aftWeather.tmp.max;
      $scope.minTempAft = aftWeather.tmp.min;
      
      //图标相关
      var iconIDAft = aftWeather.cond.code_d;
      $scope.iconAft = Weather.getForeImg(iconIDAft);
      //$scope.condToday = todayWeather.cond.text_d;

      //日期
      $scope.dateAft = aftWeather.date.slice(5);
      //湿度
      $scope.humAft = aftWeather.hum;
      //风力
      $scope.windAft = aftWeather.wind.sc; 
      //概率
      $scope.precAft = aftWeather.pop;
      //能见度
      $scope.visAft =  aftWeather.vis;
       
  });



  Weather.getCurrent.get({q:Weather.getLocation()},function(data){

        $scope.currentWeather = data;
        console.log(data);
       
        //一句话描述
        $scope.description= data.weather[0].main;
        

        //当前温度
        $scope.temperature= Math.round(data.main.temp-273);

        //图片
        $scope.imgUrl = Weather.getWeatherImg(data.weather[0].main);

  });
}

$scope.dataGet();


    $scope.weatherDetail=function(){
        $('#generW').hide();
        $('#detailW').show();
    }
    $scope.weatherGener=function(){
        $('#generW').show();
        $('#detailW').hide();
    }



    $scope.toToday= function () {
      $('#generW').show();
      $('#detailW').hide();
      $('#toTmr').hide();
      $('#toAft').hide();
      $('#todaySelected').show();
      $('#tmrSelected').hide();
      $('#aftSelected').hide();
    }
    $scope.toTmr= function () {
      $('#generW').hide();
      $('#detailW').hide();
      $('#toTmr').show();
      $('#toAft').hide();
      $('#todaySelected').hide();
      $('#tmrSelected').show();
      $('#aftSelected').hide();
    }
    $scope.toAft= function () {
      $('#generW').hide();
      $('#detailW').hide();
      $('#toTmr').hide();
      $('#toAft').show();
      $('#todaySelected').hide();
      $('#tmrSelected').hide();
      $('#aftSelected').show();
    }
    




  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  

  
    
    $scope.sidebar=false;
    
    $scope.goto = function (id) {
        console.log(id);
        if($scope.gender_f){
          id="F"+id;

        }else{
          id="M"+id;
        }
        console.log(id);
            $location.hash(id);
            $anchorScroll();
    }

    $scope.setLocation = function(location){
        Weather.setLocation(location);
        $scope.dataGet();
    }
    
    $scope.setGender = function(gender){
        Weather.setGender(gender);
    }
    $scope.getGender = function(){
       var gender=Weather.getGender();
       if(gender=="female"){
          $scope.gender_f = true;
          $scope.gender_m = false;
       }else{
          $scope.gender_f = false;
          $scope.gender_m = true;
       }
       console.log("1");
       console.log($scope.gender_f);
    }
   $scope.getGender();
   
}).directive("scroll", function ($window) {
    return function(scope, element, attrs) {
      
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset < window.innerWidth*1.61-40) {
                 scope.showCasual = true;
                 scope.showOutdoor = false;
                 scope.showOffice = false;
                 scope.showFashion = false;

             } else if (this.pageYOffset < window.innerWidth*1.61*2-40){
                 scope.showCasual = false;
                 scope.showOutdoor= true;
                 scope.showOffice = false;
                 scope.showFashion = false;
                
             }else if (this.pageYOffset < window.innerWidth*1.61*3-40){
                 scope.showCasual = false;
                 scope.showOutdoor= false;
                 scope.showOffice = true;
                 scope.showFashion = false;
             }else{
                 scope.showCasual = false;
                 scope.showOutdoor= false;
                 scope.showOffice = false;
                 scope.showFashion = true;

             }
            scope.$apply();
        });
    };
});
