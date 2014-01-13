'use strict';

// Declare app level module which depends on filters, and services
angular.module('nutritiousApp', [
  'dpdUser',
  'dpdCollection',
  'ngRoute',
  'mgcrea.ngStrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  }).
  when('/users/detail/:id', {
    templateUrl: 'user/detail/detail.html',
    controller: 'UserDetailController',
    controllerAs: 'detailCtrl'
  }).
  otherwise({redirectTo: '/'});
}]);
