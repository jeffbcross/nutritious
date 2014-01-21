angular.module('nutritiousApp').
  controller('HomeController', ['$scope', function($scope) {
    $scope.collProps = [
    {
      key: 'user',
      readable: 'who'
    },{
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
  }]);
