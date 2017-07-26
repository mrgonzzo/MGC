(function(angular) {

  angular.module('app').component('compCounter', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/play/counter/counter.html',
    // en controller definimos la función que escribimos abajo
   controller: [ 'scoreFactory', controllerCompCounter],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compCounter'
});

function controllerCompCounter (scoreFactory){
  var vm = this;
  vm.score = scoreFactory.getScore();
}

})(angular)
