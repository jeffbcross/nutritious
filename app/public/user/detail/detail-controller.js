angular.module('nutritiousApp').
  controller('UserDetailController', ['$scope', '$routeParams', '$http', '$filter', 'dpdUserStore', function($scope, $routeParams, $http, $filter, dpdUserStore) {

    // $scope.nutritionalInfo = [{
    //   name: 'Test',
    //   total: '5g',
    //   children: [{
    //     name: 'sub test',
    //     total: '1g'
    //   }]
    // },{
    //   name: 'Carbohydrates',
    //   total: '50mg',
    //   children: [{
    //     name: 'Dietary Fiber',
    //     total: '20g'
    //   },{
    //     name: 'Sugars',
    //     total: '30mg'
    //   }]
    // }];



    $scope.username = $routeParams.id;
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
      readable: 'food'
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
