angular.module('nutritiousApp').
  controller('UserDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.userId = $routeParams.id;
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
  }]);