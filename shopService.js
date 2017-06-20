angular.module('assessment')
       .service('shopService', function($http) {

  this.getProduct = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/products/'
    });
  };

  this.getProductById = function(id) {
      return $http({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/products/'+ id
      })
    };



});