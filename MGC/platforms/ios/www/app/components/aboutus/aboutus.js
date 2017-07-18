(function (angular) {

  angular.module('app').component('compAboutus', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/aboutus/aboutus.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state','scoreFactory','cardFactory','soundFactory', controllerCompAboutus],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compAboutus'
  });

  function controllerCompAboutus($state,scoreFactory,cardFactory, soundFactory) {
    var vm = this;
    soundFactory.pauseClocksound();
    vm.goToPlay = function () { 
      cardFactory.resetTurn();
      scoreFactory.resetScore();
      $state.go('play', {}, { reload: true });
    };
  }

})(angular)