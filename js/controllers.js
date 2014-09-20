var checkdomain = angular.module('checkdomain.controllers', [])

checkdomain.controller('DashCtrl', function($scope) {
});

checkdomain.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});

checkdomain.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});

checkdomain.controller('AccountCtrl', function($scope) {
});
