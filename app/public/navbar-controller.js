angular.module('nutritiousApp').
  controller('NavbarCtrl', ['dpdUserStore', function (dpdUserStore) {
    this.user = dpdUserStore;
  }]);