'use strict';


// Declare app level module which depends on filters, and services
angular.module('nutritiousApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  }).
  when('/users/login', {
    templateUrl: 'user/login/login.html',
    controller: 'UserLoginController',
    controllerAs: 'loginCtrl'
  }).
  when('/users/register', {
    templateUrl: 'user/register/register.html',
    controller: 'UserRegisterController',
    controllerAs: 'registerCtrl'
  }).
  when('/users/detail/:id', {
    templateUrl: 'user/detail/detail.html',
    controller: 'UserDetailController',
    controllerAs: 'detailCtrl'
  }).
  otherwise({redirectTo: '/'});
}]);
