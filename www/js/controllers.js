angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

//.controller('ChatsCtrl', function($scope, Chats) {
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  }
//})
//
//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})
//
//.controller('FriendsCtrl', function($scope, Friends) {
//  $scope.friends = Friends.all();
//})
//
//.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//  $scope.friend = Friends.get($stateParams.friendId);
//})

.controller('GraphsCtrl', function($scope, Sales) {

    //Options

    $scope.width = 280;
    $scope.height = 280;
    $scope.yAxis = 'Sales';
    $scope.xAxis = '2014';

    // Get the data from the service
    $scope.mySales = Sales.all();

    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum

    $scope.max = 0;
    var arrLength = $scope.mySales.length;
    for(var i = 0; i < arrLength; i++){
        if($scope.mySales[i].value > $scope.max){
            $scope.max = $scope.mySales[i].value;
        }
    }
})

.controller('AboutCtrl', function($scope) {

})

.controller('HelpCtrl', function($scope) {

})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
