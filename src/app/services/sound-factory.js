(function (angular) {
    angular.module('app').factory('soundFactory', [soundFactory]);
    function soundFactory() {
        var module = {};
        var self = module;
        self.ismute = false;
        var clocksound = new Audio('app/resources/reloj.mp3');
        var applause = new Audio('app/resources/applause.mp3');
        var fireworks = new Audio('app/resources/fw.mp3');

        module.getIsmute=function(){
            return self.ismute;
        };
        module.playClocksound = function () {
            if (!clocksound.mute) {
                if (!clocksound.paused) {
                    clocksound.pause();
                    clocksound.currentTime = 0;
                }
                clocksound.play();
                clocksound.loop = true;
            }
        };
        module.pauseClocksound = function () {
            clocksound.pause();
            clocksound.currentTime = 0;
        };
        module.resetClocksound = function () {
            if (!clocksound.paused) {
                clocksound.pause();
            };
            clocksound.currentTime = 0;
            clocksound.mute = false;
        }


        module.playFireworks = function (isMuted) {
            if (!fireworks.mute) {
                if (!fireworks.paused) {
                    fireworks.pause();
                    fireworks.currentTime = 0;
                }
                fireworks.play();
            }
        };
        module.pauseFireworks = function () {
            fireworks.pause();
            fireworks.currentTime = 0;
        };
        module.resetFireworks = function () {
            if (!fireworks.paused) {
                fireworks.pause();
            }
            fireworks.currentTime = 0;
            fireworks.mute = false;
        }

        module.playApplause = function () {
            if (!applause.mute) {
                if (!applause.paused) {
                    applause.pause();
                    applause.currentTime = 0;
                }
                applause.play();
            }
        };
        module.pauseApplause = function () {
            applause.pause();
            applause.currentTime = 0;
        };
        module.resetApplause = function () {
            if (!applause.paused) {
                applause.pause();
            };
            applause.currentTime = 0;
            applause.mute = false;
        };
        module.soundMute = function () {
            clocksound.mute = true;
            applause.mute = true;
            fireworks.mute = true;
        };
        module.resetSound = function () {
            self.resetApplause();
            self.resetClocksound();
            self.resetFireworks();
            self.ismute = true;
        };
    
        return module;
    };
})(angular);