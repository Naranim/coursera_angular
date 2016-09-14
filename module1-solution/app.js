(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.isTooMuchMessage = "";

  $scope.checkIfTooMuch = function () {
    var menu = $scope.lunchMenu;
    if(menu === "" || menu === undefined) {
      $scope.isTooMuchMessage = "Please enter data first";
    }
    else {
      var splited = menu.split(",");
      splited = splited.filter(function(e) {
        return e.trim().length > 0;
      });
      if(splited.length > 3) {
        $scope.isTooMuchMessage = "Too much!";
      } else if(splited.length === 0) {
        $scope.isTooMuchMessage = "Please enter data first!";
      } else {
        $scope.isTooMuchMessage = "Enjoy!";
      }
    }
  }
}

})();
