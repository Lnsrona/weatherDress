// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('likedCtrl', function ($scope,Weather,auth,$cookieStore) {
var userID=Weather.getUserID();

if(userID==undefined||userID==""){
	
    auth.signin();
    $scope.status="You need to log in to see your liked item/outfit.";
}else{


Weather.checkAccount(userID,function(data){
    
//ourfit
    //得到cookie里的id存储字符串
    var r=$cookieStore.get("likedOutfit");
    console.log(r);
    var string2=[];
    var j=1;
    if(r!=undefined){
      //字符串转化为数组形式
        string2[0]=s.substr(0,9);
         for(var i=0;i<r.length-1;i++)
        {
           if(r.charAt(i)== ',' ){
            string2[k]=r.substr(i+1 , 9 );
            j++;
            }
        }
        Weather.getLike_outfit(function(data){
          $scope.likedOutfit=data;
          $scope.$apply();
        },userID);
    }else{
        $scope.status="You didn't add any liked item/outfit. Why don't you CLICK hearts to like something.";
    }
//outfit callback 结束 


//item
    //得到cookie里的id存储
    var s=$cookieStore.get("likedItem");
    console.log(s);
    var string=[];
    var k=1;
    if(s!=undefined){
      //字符串转化为数组形式
        string[0]=s.substr(0,9);
         for(var i=0;i<s.length-1;i++)
        {
           if(s.charAt(i)== ',' ){
            string[k]=s.substr(i+1 , 9 );
            k++;
            }
        }

      //获取数据库的数据
      Weather.getLike_item(function(data){

        //用cookie里的string来获得url，在规范成数组形式，输出到页面上
        $scope.likedItem=[];
           for(key in string){
              url=$scope.itemArray[string[key]].url;
              id=string[key];
              $scope.likedItem.push({"id":id,"url":url});
              $scope.$apply();
           } 
          console.log($scope.likedItem);

          //喜欢
          for(key in array){
            $scope.likedInfo[key]=true;
            $scope.$apply();
          }
      //这种最简单的scope变量都没有输出到页面上  
      $scope.status="You liked something:";
    
      },userID);

    }else{
      $scope.status="You didn't add any liked item/outfit. Why don't you CLICK hearts to like something.";
    }
 //item callback 结束   
  },function(error){
      $scope.status="You didn't add any liked item/outfit. Why don't you CLICK hearts to like something.";
  });
//check account callback 结束
}

});
