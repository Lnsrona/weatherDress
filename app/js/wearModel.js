// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.

weatherDressApp.factory('Weather',function ($resource,$cookieStore,$anchorScroll,$firebaseObject,$firebaseArray,$http,auth){
    var location = "Stockholm";
    var country="Sweden"
    var gender="female";
    var OpenWeatherAPI="aaf8a194828942ebcc29a98835489378,c3b7bba4b5ac511ec04d73ac4065ea83"
    var shopstyleAPU="uid1600-33362460-67";
    var hefengAPI="939ca234771f43f29168f5e5d68257a5";
    var arrayFWeather=[];
    var arrayCWeather=[];
    var profile=[];
    var like_amt = 0;
    var userID="";
    var _this=this;

$anchorScroll.yOffset = 44;
    this.setProfile=function(pro){
        profile=pro;
        userID=profile.clientID;

        console.log(profile);
        $cookieStore.put("userID", userID);
        
    }
    this.getProfile=function(){
        return profile
    }

    this.getUserID=function(){
            userID=$cookieStore.get("userID");
            return userID;
        
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
    
    this.getAllClothes = $resource('//api.shopstyle.com/api/v2/products?',{pid:'uid2964-33820658-6'});
    this.getCloth = $resource('//api.shopstyle.com/api/v2/products/:id',{pid:'uid2964-33820658-6'});
    
    this.getClothing = $resource('//api.shopstyle.com/api/v2/products?',{fts:"dresses",pid:'uid2964-33820658-6'});
    this.getAccessories = $resource('//api.shopstyle.com/api/v2/products?',{fts:"accessories",pid:'uid2964-33820658-6'});
    this.getShoes = $resource('//api.shopstyle.com/api/v2/products?',{fts:"shoes",pid:'uid2964-33820658-6'});
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
    this.getCurrent = function(city){
        return $http({
        url:'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c3b7bba4b5ac511ec04d73ac4065ea83',
        crossDomain: true,
        dataType: 'json'
    }).then(function SuccessCallback(response){
        var data = response.data;
        return data;
    });
}
       
    //this.getForecast = $resource('http://api.openweathermap.org/data/2.5//forecast?',{q:location, cnt:3,appid:'c3b7bba4b5ac511ec04d73ac4065ea83'});
    this.getForecast = function(city){
        return $http({
        url:'https://api.heweather.com/x3/weather?city='+city+'&key=939ca234771f43f29168f5e5d68257a5',
        crossDomain: true,
        dataType: 'json'
    }).then(function SuccessCallback(response){
        var data = response.data;
        return data;
    });
}

    
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

// this.checkAccount = function(username){
//     return userbase.child(username).once("value", function(snapshot) {
//         if(snapshot.val() != null){
//             var entity = snapshot.val();
//             if (entity.userID.password == password)
//             {
//                 succuss(entity.userID);
//             } else
//             {
//                 fail("password not match");
//             }
//         }
//         else{
//             fail("user doesnot exist");
//         }
//     });
// }

this.checkAccount = function(userid,success,fail){
    var ref = userbase.child(userid);

    return ref.once("value",function(snapshot){
        if(snapshot.val() == null){
            console.log("11111111111");
            //return false;
            fail(false);
        }
        else{
            //return true;
            success(true);
        }
    })
}





//设置数据库
// this.setAccount = function(username){
//     // var boo = _this.checkName(username);
//     // if(boo == false){
//     //     alert("The user name has already exist, please change another one!");
//     //     return;
//     // }
    
//      return userbase.child(username).once("value", function(snapshot){
//         if(snapshot.val() != null){
//             alert("The user name has already exist, please change another one!");
//             return;
//         }
        
//         else{            
// //            var newuser= userbase.child(username);
//              userbase.child(username).child("userID").set ({
//                 name: username,
//                 password: password
//             });  
//             alert("Your account has been created, please log in."); 
//         }
        
//     });

//     // if(username==null || password == null){
//     //     alert("input error!");
//     //     return;
//     // }
       
// }

// cloth library

    this.getWeatherCloth = function(temp,code,gender,num,success){      
        var i;
        var j;
        i =  5 + parseInt(temp / 10) * 10;
        j = parseInt(code / 100);
        //var ref = new Firebase("https://blazing-heat-24.firebaseio.com/weatherDress/A"+i+"C"+j+"/"+gender+"/Array"+num);
        //var ref = new Firebase("https://blazing-heat-24.firebaseio.com/weatherDress/A5C1/Female/Array1");
        
        var ref = FirebaseRef.child("weatherDress").child("A"+i+"C"+j).child(gender).child("Array"+num);
        return ref.once("value", function(snapshot) {
            var obj=snapshot.val();
            //return obj;    
            success(obj);
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
    
    
    this.setLike_outfit = function(id,url,userid){
        var string=$cookieStore.get("likedOutfit");
        if(string!=undefined){
            string=string+","+id;
            $cookieStore.put("likedOutfit",string);
        }else{
            $cookieStore.put("likedOutfit",id)
        }
        
            var obj = FirebaseRef.child("userbase").child(userid).child("outfit").child(id);
        obj.set({
            url: url
            //url: url
        })    
        
                      
     }
     
     this.del_outfit = function(id,userid){
         var string=$cookieStore.get("likedOutfit");
         for(key in string){
            if(string[key]==id){
                string.splice(key,1);
            }
         }
         var obj = FirebaseRef.child("userbase").child(userid).child("outfit").child(id);
         obj.set({
             url: null
         })   
     }
    
     this.getLike_outfit = function(success){
        // var string=$cookies.get("likedOutfit");
        // string.push("likedOutfit":id);
        // $cookies.push("string");
        // if(userid==""||userid==undefined){
        //     return;
        // }else{
          var ref = FirebaseRef.child("userbase").child("MA98QpSJYVgn4Jvkop2jZ3k357Q7XmQL").child("outfit").child("2");
          return ref.on("value",function(snapshot){
             var obj = snapshot.val();
             console.log("objjjjjjjjjjjjjjjjj");
             console.log(obj);
             success(obj);
         })
       // }

         
     }
     
     this.checkLike_outfit = function(id,success,fail,userid){
         var ref = FirebaseRef.child("userbase").child(userid).child("outfit");
            return ref.child(id).once("value", function(snapshot){
                if(snapshot.val() != null){
                    success(true);
                    //return true;
                }
                else{
                    fail(false);
                    //return false;
                }
            });
     }
     
     this.setLike_item = function(id,url,userid){
        var string=$cookieStore.get("likedItem");
        if(string!=undefined){
            string=string+","+id;
            $cookieStore.put("likedItem",string);
        }else{
            $cookieStore.put("likedItem",id)
        }
        
        var obj = FirebaseRef.child("userbase").child(userid).child("item").child(id);
        obj.set({
            url: url
        })                  
     }
     
     this.del_item = function(id,userid){
         var string=$cookieStore.get("likedItem");
         for(key in string){
            if(string[key]==id){
                string.splice(key,1);
            }
         }
         var obj = FirebaseRef.child("userbase").child(userid).child("item").child(id);
         obj.set({
             url: null
         })   
     }
    
     this.getLike_item = function(success,userid){
        
            var ref = FirebaseRef.child("userbase").child(userid).child("item");
            return ref.on("value",function(snapshot){
             var obj = snapshot.val();
             success(obj);
            })
         
     }
     
     this.checkLike_item = function(id,success,fail,userid){
         var ref = FirebaseRef.child("userbase").child(userid).child("item");
            return ref.child(id).once("value", function(snapshot){
                if(snapshot.val() != null){
                    success(true);
                    //return true;
                }
                else{
                    fail(false);
                    //return false;
                }
            });
     }  
     // var itemArray='';
     // this.setItemLib=function(result){
     //    itemArray=result;
     // }
     // this.getItemLib=function(){
     //    return itemArray;
     // }
    
    return this;

 });