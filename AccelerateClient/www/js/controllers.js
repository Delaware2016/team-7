angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('storeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('newUserCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('userHomeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  console.log("test")
  $http.get('https://api.meetup.com/Bonefish-Underwater-Hockey-Wilmington-DE?photo-host=public&sig_id=207040943&sig=df4723ed7f9c43c082c6a91cf6b1f8e5bc9cfc4c'
).then(function successCallback(response) {
      $scope.first = response;
  }, function errorCallback(response) {
    console.log("something went horribly wrong...")
  });

  $http ({
  method: 'GET',
  url: 'https://api.meetup.com/DelawareYoungProfessionals?photo-host=public&sig_id=207040943&sig=f9c1b0351a2a226cf1ea0287016fceaa3a8ea3b1'
}).then(function successCallback(response) {
      $scope.second = response;
  }, function errorCallback(response) {
    console.log("something went horribly wrong...")
  })

  $http ({
  method: 'GET',
  url: 'https://api.meetup.com/Philadelphia-Area-Social-Dance-Tango-and-Yoga-Community?photo-host=public&sig_id=207040943&sig=82cac7f1b942a9fc28e1244618243d4db8b74dc5'
}).then(function successCallback(response) {
      $scope.third = response;
  }, function errorCallback(response) {
    console.log("something went horribly wrong...")
  })
}

])
   
.controller('categoriesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myGroupsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 