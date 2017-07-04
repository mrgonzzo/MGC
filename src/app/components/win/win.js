(function (angular) {

  angular.module('app').component('compWin', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/win/win.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', '$timeout', 'scoreFactory', 'cardFactory','soundFactory',  controllerCompWin],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compWin'
  });

  function controllerCompWin($state, $timeout, scoreFactory, cardFactory, soundFactory) {
    var vm = this;
    var score = scoreFactory.getScore();
    var turn = cardFactory.getTurn();
    soundFactory.playFireworks()
    vm.goToPlay = function () {
      score[0] = 0;
      score[1] = 0;
      turn.push('w');
      turn.push('w');
      soundFactory.pauseFireworks();
      $state.go('main');
    }

  };

})(angular)