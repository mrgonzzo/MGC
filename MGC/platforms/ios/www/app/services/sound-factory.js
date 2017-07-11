(function (angular) {
    angular.module('app').factory('soundFactory', [soundFactory]);
    function soundFactory() {
        var module = {};
        var self = module;
        var clocksound = new Audio('app/resources/reloj.mp3');
        var applause = new Audio('app/resources/applause.mp3');
        var fireworks = new Audio('app/resources/fw.mp3');
        module.playApplause = function () {
			if (!applause.paused) {
               applause.pause();
                applause.currentTime=0;
            }
            applause.play();
        };
        module.playClocksound = function () {
            clocksound.play();
            clocksound.loop = true;
        };
        module.pauseClocksound = function () {
            clocksound.pause();
        };
         module.playFireworks = function () {
            fireworks.play();
        };
        module.pauseFireworks = function () {
            fireworks.pause();
        };
        return module;
    };
})(angular);