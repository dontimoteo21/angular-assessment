angular.module('assessment')
.directive('productDirective', function(){
  return {
    restrict: 'E',
    templateUrl: '../views/product-tmpl.html',
    scope: {
      data: '='
    },
    controller: 'shopCtrl',
    link: function(scope, elem, attrs) {
      var imagE = elem.find('img')
      var showbutton = elem.find('.sneaky')
      imagE.hide()
      showbutton.on('click', function(){
        imagE.toggle()
        showbutton.toggle()
      })
      imagE.on('click', function(){
        imagE.toggle()
        showbutton.toggle()
      })
    }
  }
})