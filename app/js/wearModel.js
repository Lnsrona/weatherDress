// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.

weatherDressApp.factory('Weather',function ($resource,$firebaseObject,$firebaseArray,$cookieStore,$anchorScroll){
    var location = "Stockholm";
    var country="Sweden"
    var gender="female";
    var OpenWeatherAPI="aaf8a194828942ebcc29a98835489378,c3b7bba4b5ac511ec04d73ac4065ea83"
    var shopstyleAPU="uid1600-33362460-67";
    var hefengAPI="939ca234771f43f29168f5e5d68257a5";
    var arrayFWeather=[];
    var arrayCWeather=[];
    var userID = "56677";
    
    var like_amt = 0;

    $anchorScroll.yOffset = 44;
    
    this.setUserID = function(){
        
    }

   this.setLocation = function(loc){
       location = loc;
   }
   
    this.getLocation = function(){
        return location;
    }
    
    this.setGender = function(gd){
        gender = gd;
    }
    this.getGender = function(){
        return gender;
    }
    
    this.setLike_amt = function(){
        like_amt = like_amt + 1;
    }
    
    this.getLike_amt = function(){
        return like_amt;
    }
    
    this.getAllClothes = $resource('http://api.shopstyle.com/api/v2/products?',{pid:'uid2964-33820658-6',offset:0,limit:10});
    this.getCloth = $resource('http://api.shopstyle.com/api/v2/products/:id',{pid:'uid2964-33820658-6'});
    
    this.getClothing = $resource('http://api.shopstyle.com/api/v2/products?',{fts:"dresses",pid:'uid2964-33820658-6'});
    this.getAccessories = $resource('http://api.shopstyle.com/api/v2/products?',{fts:"accessories",pid:'uid2964-33820658-6'});
    this.getShoes = $resource('http://api.shopstyle.com/api/v2/products?',{fts:"shoes",pid:'uid2964-33820658-6'});
    // this.getCurrentWeather = $resource('http://api.openweathermap.org/data/2.5/weather?',{q:location, APIKEY:'c3b7bba4b5ac511ec04d73ac4065ea83'});    
    
    // this.getWeatherImg = function(condition){
    //     var url;
    //     if(condition == "clear"){
    //         url = "http://vector.me/files/images/1/6/166202/symbols_weather_clear_sunny.jpg";
    //     }
    //     if(condition == "clouds"){
    //         url = "https://www.clipartool.com/wp-content/uploads/2016/02/free-cloud-clipart-images.jpg";
    //     }
    //     else{
    //         url = "http://images.clipartpanda.com/cloudy-weather-clipart-04e503de81548c034e906f729f5dd37b-cloudy-weather-clip-art.jpg";
    //     }
    //     return url;
    // }
    
    this.getCurrent = $resource('http://api.openweathermap.org/data/2.5/weather?',{APIKEY:'c3b7bba4b5ac511ec04d73ac4065ea83'});    
    //this.getForecast = $resource('http://api.openweathermap.org/data/2.5//forecast?',{q:location, cnt:3,appid:'c3b7bba4b5ac511ec04d73ac4065ea83'});
    this.getForecast = $resource('https://api.heweather.com/x3/weather?',{cnty:country,key:'939ca234771f43f29168f5e5d68257a5'});
    
    // this.setWeatherData=function(loc){
    //     this.getForecast.get({city:loc},function(data){
    //         arrayFWeather = data['HeWeather data service 3.0']
    //     });
    //     this.getCurrent.get({q:loc},function(data){
    //         arrayCWeather = data;
    //     });
    // }
    // this.getFWeather=function(){
    //     return arrayFWeather;
    // }
    // this.getCWeather=function(){
    //     return arrayCWeather;
    // }




    this.getWeatherImg = function(condition){
         var url;
         if(condition == "clear"){
             url = "http://vector.me/files/images/1/6/166202/symbols_weather_clear_sunny.jpg";
         }
         if(condition == "clouds"){
             url = "https://www.clipartool.com/wp-content/uploads/2016/02/free-cloud-clipart-images.jpg";
         }
         else{
             url = "http://images.clipartpanda.com/cloudy-weather-clipart-04e503de81548c034e906f729f5dd37b-cloudy-weather-clip-art.jpg";
         }
         return url;
     }
    

    this.getForeImg = function(id){
        for (key in iconSet) {
            if(iconSet[key].id==id){
                return iconSet[key].url;
            }
        }
    }
    
    
    
    
    var iconSet = [
{"id":"100","cond":"Sunny/Clear","url":"img/icon/100.png"},
{"id":"101","cond":"Cloudy","url":"img/icon/101.png"},
{"id":"102","cond":"Few Clouds","url":"img/icon/102.png"},
{"id":"103","cond":"Partly Cloudy","url":"img/icon/103.png"},
{"id":"104","cond":"Overcast","url":"img/icon/104.png"},
{"id":"200","cond":"Windy","url":"img/icon/200.png"},
{"id":"201","cond":"Calm","url":"img/icon/201.png"},
{"id":"202","cond":"Light Breeze","url":"img/icon/202.png"},
{"id":"203","cond":"Moderate/Gentle Breeze","url":"img/icon/203.png"},
{"id":"204","cond":"Fresh Breeze","url":"img/icon/204.png"},
{"id":"205","cond":"Strong Breeze","url":"img/icon/205.png"},
{"id":"206","cond":"High Wind","url":"img/icon/206.png"},
{"id":"207","cond":"Gale","url":"img/icon/207.png"},
{"id":"208","cond":"Strong Gale","url":"img/icon/208.png"},
{"id":"209","cond":"Storm","url":"img/icon/209.png"},
{"id":"210","cond":"Violent Storm","url":"img/icon/210.png"},
{"id":"211","cond":"Hurricane","url":"img/icon/211.png"},
{"id":"212","cond":"Tornado","url":"img/icon/212.png"},
{"id":"213","cond":"Tropical Storm","url":"img/icon/213.png"},
{"id":"300","cond":"Shower Rain","url":"img/icon/300.png"},
{"id":"301","cond":"Heavy Shower Rain","url":"img/icon/301.png"},
{"id":"302","cond":"Thundershower","url":"img/icon/302.png"},
{"id":"303","cond":"Heavy Thunderstorm","url":"img/icon/303.png"},
{"id":"304","cond":"Hail","url":"img/icon/304.png"},
{"id":"305","cond":"Light Rain","url":"img/icon/305.png"},
{"id":"306","cond":"Moderate Rain","url":"img/icon/306.png"},
{"id":"307","cond":"Heavy Rain","url":"img/icon/307.png"},
{"id":"308","cond":"Extreme Rain","url":"img/icon/308.png"},
{"id":"309","cond":"Drizzle Rain","url":"img/icon/309.png"},
{"id":"310","cond":"Storm","url":"img/icon/310.png"},
{"id":"311","cond":"Heavy Storm","url":"img/icon/311.png"},
{"id":"312","cond":"Severe Storm","url":"img/icon/312.png"},
{"id":"313","cond":"Freezing Rain","url":"img/icon/313.png"},
{"id":"400","cond":"Light Snow","url":"img/icon/400.png"},
{"id":"401","cond":"Moderate Snow","url":"img/icon/401.png"},
{"id":"402","cond":"Heavy Snow","url":"img/icon/402.png"},
{"id":"403","cond":"Snowstorm","url":"img/icon/403.png"},
{"id":"404","cond":"Sleet","url":"img/icon/404.png"},
{"id":"405","cond":"Rain And Snow","url":"img/icon/405.png"},
{"id":"406","cond":"Shower Snow","url":"img/icon/406.png"},
{"id":"407","cond":"Snow Flurry","url":"img/icon/407.png"},
{"id":"500 ","cond":"Mist","url":"img/icon/500.png"},
{"id":"501","cond":"Foggy","url":"img/icon/501.png"},
{"id":"502","cond":"Haze","url":"img/icon/502.png"},
{"id":"503","cond":"Sand","url":"img/icon/503.png"},
{"id":"504","cond":"Dust","url":"img/icon/504.png"},
{"id":"507","cond":"Duststorm","url":"img/icon/507.png"},
{"id":"508","cond":"Sandstorm","url":"img/icon/508.png"},
{"id":"900","cond":"Hot","url":"img/icon/900.png"},
{"id":"901","cond":"Cold","url":"img/icon/901.png"},
{"id":"999","cond":"Unknown","url":"img/icon/999.png"}
] 


// code of database

//  var Firebase = require("firebase");
var FirebaseRef = new Firebase("https://blazing-heat-24.firebaseio.com/");
var userbase = FirebaseRef.child("userbase");

this.checkAccount = function(username,password, succuss, fail){
    return userbase.child(username).once("value", function(snapshot) {
        if(snapshot.val() != null){
            var entity = snapshot.val();
            if (entity.userID.password == password)
            {
                succuss(entity.userID);
            } else
            {
                fail("password not match");
            }
        }
        else{
            fail("user doesnot exist");
        }
    });
}

// this.checkName = function(username){

//     FirebaseRef.child(username).on("value", function(snapshot){
//         if(snapshot.val() == null){
//             return true;
//         }
//         else 
//             return false;
//         });
// };

this.setAccount = function(username,password){
    // var boo = _this.checkName(username);
    // if(boo == false){
    //     alert("The user name has already exist, please change another one!");
    //     return;
    // }
    
     return userbase.child(username).once("value", function(snapshot){
        if(snapshot.val() != null){
            alert("The user name has already exist, please change another one!");
            return;
        }
        
        else{            
//            var newuser= userbase.child(username);
             userbase.child(username).child("userID").set ({
                name: username,
                password: password
            });  
            alert("Your account has been created, please log in."); 
        }
        
    });

    // if(username==null || password == null){
    //     alert("input error!");
    //     return;
    // }
       
}

// cloth library

    this.getWeatherCloth = function(temp,code,gender,num){      
        var i;
        var j;
        i =  5 + parseInt(temp / 10) * 10;
        j = parseInt(code / 100);
        //var ref = new Firebase("https://blazing-heat-24.firebaseio.com/weatherDress/A"+i+"C"+j+"/"+gender+"/Array"+num);
        //var ref = new Firebase("https://blazing-heat-24.firebaseio.com/weatherDress/A5C1/Female/Array1");
        
        var ref = FirebaseRef.child("weatherDress").child("A"+i+"C"+j).child(gender).child("Array"+num);
        ref.once("value", function(snapshot) {
            var obj=snapshot.val();
            return obj;    
        });
        //var array = ref.child(gender);
        // var lib = FirebaseRef.child("clothbase").child(count);
        
        
        //     var list = $firebaseArray(ref);
        //         list.$add({ foo: "bar" }).then(function(ref) {
        //         var id = ref.key();
        //         console.log("added record with id " + id);
        //         list.$indexFor(id); // returns location in the array
        //        });
        //    // lib = $firebaseObject(ref);
        //     lib.$add($firebaseObject(ref)).then(function(ref) {
        //         ref.key() === lib.$id; // true
        //         }, function(error) {
        //         console.log("Error:", error);
        //     });
        //     count++;
        //return $firebaseArray(ref);       
    }
    
    
    this.setLike_outfit = function(outfit){
        var obj = FirebaseRef.child("userbase").child(userID).child("outfit").child(outfit.id);
        obj.set({
            url: outfit.url
            //url: url
        })                  
     }
     
     this.del_outfit = function(outfit){
         var obj = FirebaseRef.child("userbase").child(userID).child("outfit").child(outfit.id);
         obj.set({
             url: null
         })   
     }
    
     this.getLike_outfit = function(outfit){
         var ref = FirebaseRef.child("userbase").child(userID).child("outfit");
         ref.on("value",function(snapshot){
             var obj = snapshot.val();
             return obj;
         })
     }
     
     this.checkLike_outfit = function(id){
         var ref = FirebaseRef.child("userbase").child(userID).child("outfit");
            ref.child(id).once("value", function(snapshot){
                if(snapshot.val() != null){
                    return true;
                }
                else{
                    return false;
                }
            });
     }
     
     this.setLike_iem = function(item){
        var obj = FirebaseRef.child("userbase").child(userID).child("item").child(item.id);
        obj.set({
            url: item.url
        })                  
     }
     
     this.del_item = function(item){
         var obj = FirebaseRef.child("userbase").child(userID).child("item").child(item.id);
         obj.set({
             url: null
         })   
     }
    
     this.getLike_item = function(item){
         var ref = FirebaseRef.child("userbase").child(userID).child("item");
         ref.on("value",function(snapshot){
             var obj = snapshot.val();
             return obj;
         })
     }
     
     this.checkLike_item = function(id){
         var ref = FirebaseRef.child("userbase").child(userID).child("item");
            ref.child(id).once("value", function(snapshot){
                if(snapshot.val() != null){
                    return true;
                }
                else{
                    return false;
                }
            });
     }
    
    return this;

 });