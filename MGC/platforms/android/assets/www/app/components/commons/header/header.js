(function(angular) {

  angular.module('app').component('compHeader', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/commons/header/header.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompHeader],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compHeader'
});

function controllerCompHeader ($state){
  var vm = this;
  vm.goToMain=function(){
    $state.go('main');
  }
}

})(angular)