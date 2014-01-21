angular.module('nutritiousApp').
  controller('UserDetailController', ['$scope', '$routeParams', '$http', '$filter', 'dpdUserStore',
    function($scope, $routeParams, $http, $filter, dpdUserStore) {
      $scope.username = $routeParams.id;
      $scope.me = dpdUserStore;

      $scope.collProps = [
      {
        key: 'time',
        readable: 'time logged',
        type: 'datetime'
      },{
        key: 'quantity',
        readable: 'quantity'
      },{
        key: 'food',
        readable: 'food',
        path: 'name'
      }];

      $scope.foodsMap = {};

      $scope.foods = [];

      $http.get('/foods').success(function (foods){
        var nutritions = [];
        $scope.foods = foods;

        foods.forEach(function(food) {
          nutritions.push(food.nutrition);
        });
        console.log(nutritions);
        $scope.nutritionalInfo = $filter('foodsToNutrition')(nutritions);

        foods.forEach(function (food) {
          $scope.foodsMap[food.id] = food.name;
        });
      });
    }]);
