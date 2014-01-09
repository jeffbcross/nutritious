angular.module('nutritiousApp').
  controller('UserLoginController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
    this.login = function () {
      dpd.users.login({
        username: this.user.username,
        password: this.user.password
      }, function (user, err) {
        if (!err && user) {
          $scope.$apply(function () {
            $rootScope.userId = user.uid;
            $location.path($location.search().path);
          });
        }
        else {
          this.valid = false;
        }
      });
    };
  }]);
