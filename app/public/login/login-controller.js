angular.module('nutritiousApp').
  controller('LoginController', ['$scope', '$location', function($scope, $location) {
    console.log('next path', $location.search().path);
    this.login = function () {
      dpd.users.login({
        username: this.user.username,
        password: this.user.password
      }, function (user, err) {
        if (!err && user) {
          $scope.$apply(function () {
            $location.path($location.search().path);
          });
        }
        else {
          this.valid = false;
        }
      });
    };
  }]);
