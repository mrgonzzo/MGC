(function (angular) {

  angular.module('app').component('compPlay', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/play/play.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', '$timeout', 'scoreFactory','cardFactory','soundFactory', controllerCompPlay],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compPlay'
  });

  function controllerCompPlay($state, $timeout, scoreFactory,cardFactory, soundFactory) {
    var vm = this;
    var score = scoreFactory.getScore();
    var turn = cardFactory.getTurn();
      
    vm.goToPlay = function () {
      soundFactory.resetClocksound();
      soundFactory.resetApplause();
      cardFactory.resetTurn();
      scoreFactory.resetScore();
      $state.go('play', {}, { reload: true });
    }
    
  };

})(angular)