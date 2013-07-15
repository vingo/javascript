
function PhoneList($scope) {
    $scope.phones = [
       { "name": '三星', "disc": 'Good很不错的手机',"age":10 },
       { "name": 'Nokia', "disc": '我喜欢.', "age": 20 },
       { "name": 'Amoi', "disc": '很好的手机正在用', "age": 30 }

       ];
    
       $scope.orderprop = 'age';
   }
   function imageList($scope) {
       $scope.Img = [{ "id": 1, "img": '/img/1.jpg'}];
       $scope.hello = function(name) {
       alert('hello  ' + (name || ' World') + '!');
           
       };

   }

   function checkValue($scope) {
       $scope.cost = 1; //初始化
   }
   
   