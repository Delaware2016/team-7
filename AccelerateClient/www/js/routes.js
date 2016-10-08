angular.module('app.routes', ['ngOpenFB'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.store', {
    url: '/store',
    views: {
      'side-menu21': {
        templateUrl: 'templates/store.html',
        controller: 'storeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.newUser', {
    url: '/newUser',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newUser.html',
        controller: 'newUserCtrl'
      }
    }
  })

  .state('menu.map', {
    url: '/map',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('menu.userHome', {
    url: '/userHome',
    views: {
      'side-menu21': {
        templateUrl: 'templates/userHome.html',
        controller: 'userHomeCtrl'
      }
    }
  })

  .state('menu.categories', {
    url: '/categories',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categories.html',
        controller: 'categoriesCtrl'
      }
    }
  })

  .state('menu.myGroups', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myGroups.html',
        controller: 'myGroupsCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/side-menu21/home')



});
