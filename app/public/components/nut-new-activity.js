angular.module('nutritiousApp').
  directive('nutNewActivity', [function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment

      templateUrl: 'components/nut-new-activity.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      controllerAs: 'newCtrl',
      controller: ['$scope', '$http', 'dpdUserStore', 'dpdCollectionStore',
        function ($scope, $http, dpdUserStore, dpdCollectionStore) {
          this.save = function () {
            $http({
              url: '/activities',
              method: 'POST',
              data: {
                user: dpdUserStore.username,
                quantity: $scope.activityForm.quantity,
                food: $scope.activityForm.food
              }
            }).success(function (activity) {
              activity.food = $scope.foodsMap[$scope.activityForm.food];
              $scope.activityForm.$setPristine();

              dpdCollectionStore.collectionCache['activities'].splice(0,0,activity);


            });
          };
        }],
      link: function () {
        console.log('linked');
      }
    };
  }]);
