angular.module('assessment')
       .controller('shopCtrl', function($scope, shopService) {


$scope.getClothes = function () {
  shopService.getProduct()
  .then(function(response) {
    $scope.clothes = response.data
  });
};

$scope.getClothes()

});