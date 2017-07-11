(function (angular) {

    angular.module('app').component('compDeck', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/play/deck/deck.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', '$timeout', 'scoreFactory', 'cardFactory', 'soundFactory', controllerCompDeck],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compDeck'
    });
    function controllerCompDeck($state, $timeout, scoreFactory, cardFactory, soundFactory) {
        var vm = this;
        var dckturn = cardFactory.getTurn();

        vm.flop = function (deck) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 4; j++) {
                    deck[i][j].picture = "back.png";
                    deck[i][j].stat = 'backed';
                }
            }
            return deck;
        };

        vm.$onInit = function () {
            vm.deck = angular.copy(cardFactory.getDeck());
            $timeout(function () {
                vm.deck = vm.flop(vm.deck);
                dckturn.length = 0;
                soundFactory.playClocksound();
            }, 8000);
        };
    }
})(angular)