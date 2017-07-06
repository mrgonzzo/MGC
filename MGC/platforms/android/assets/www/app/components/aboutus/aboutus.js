(function(angular) {

  angular.module('app').component('compAboutus', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/aboutus/aboutus.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompAboutus],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compAboutus'
});

function controllerCompAboutus ($state){
  var vm = this;
 
}

})(angular)