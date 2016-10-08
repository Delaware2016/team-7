angular.module('app.controllers', ['ngOpenFB'])

  .controller('homeCtrl', ['$scope', '$stateParams', '$ionicModal', '$timeout', 'ngFB',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
//You can include any angular dependencies as parameters for this function
//TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $http, $ionicModal, $timeout, ngFB) {
      console.log("Working");
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '310938735945058',
            xfbml      : true,
            version    : 'v2.8'
          });
          FB.AppEvents.logPageView();
        };

        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        $scope.login = function(){
          FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
              console.log('Logged in.');
              FB.api('/me', function(response) {
                console.log('Successful login for: ' + response.name);
              });
            }
            else {
              FB.login();
            }
          });
        }
   }])

.controller('storeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http) {
      console.log("Testing");
      $http.get('https://api.meetup.com/Bonefish-Underwater-Hockey-Wilmington-DE?photo-host=public&sig_id=207040943&sig=df4723ed7f9c43c082c6a91cf6b1f8e5bc9cfc4c'
).then(function successCallback(response) {
      $scope.first = response;
      console.log(response);
  }, function errorCallback(response) {
    console.log("something went horribly wrong...")
  });

  $http ({
  method: 'GET',
  url: 'https://api.meetup.com/DelawareYoungProfessionals?photo-host=public&sig_id=207040943&sig=f9c1b0351a2a226cf1ea0287016fceaa3a8ea3b1'
}).then(function successCallback(response) {
      $scope.second = response;
      console.log(response);
  }, function errorCallback(response) {
    console.log("something went horribly wrong...")
  })

$http ({
  method: 'GET',
  url: 'https://api.meetup.com/Philadelphia-Area-Social-Dance-Tango-and-Yoga-Community?photo-host=public&sig_id=207040943&sig=82cac7f1b942a9fc28e1244618243d4db8b74dc5'
}).then(function successCallback(response) {
      $scope.third = response;
      console.log(response);
  }, function errorCallback(response) {
    console.log("something went horribly wrong...")
  })


    }])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])
.controller('loginCtrl', function ($scope, $ionicModal, $timeout, ngFB) {$scope.fbLogin = function () {
    console.log("working");
    $scope.login = function(){
    ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
      function (response) {
        if (response.status === 'connected') {
          console.log('Facebook login succeeded');
          $scope.closeLogin();
        } else {
          alert('Facebook login failed');
        }
      })}
  }})

    .controller('newUserCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams) {


      }])


.controller('userHomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {


      }])

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
