(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.checkNumberOfItems = function () {

      var arrayOfItems = $scope.menu.split(',');
      if (arrayOfItems.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!"
      }
  };

};


})();
