(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .factory('ShoppingService', ShoppingService);

function ShoppingService($rootScope) {
  var service = {};
  service.toBuy = [
    { name: "cookies", quantity: 3 },
    { name: "chips", quantity: 15 },
    { name: "apples", quantity: 5 },
    { name: "pears", quantity: 6 },
    { name: "carrots", quantity: 2 },
  ];

  service.bought = [];

  service.buy = function(id) {
    var item = this.toBuy.splice(id, 1);
    this.bought.push(item[0]);
    console.log(this.bought);
  }

  return service;
}

ToBuyShoppingController.$inject = ['$scope', 'ShoppingService'];
AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingService'];

function ToBuyShoppingController($scope, shoppingService) {
  $scope.products = shoppingService.toBuy;

  $scope.remove = function(index) {
    console.log(index);
    shoppingService.buy(index);
  }
}

function AlreadyBoughtShoppingController($scope, shoppingService) {
  $scope.products = shoppingService.bought;
}

})();
