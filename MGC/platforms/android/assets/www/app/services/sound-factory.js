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
            return self.ismute
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
        module.resetClocksound = function () {
            if (!clocksound.paused) {
                clocksound.pause();
            };
            clocksound.currentTime = 0;
        };
        module.playFireworks = function (isMuted) {
            if (!fireworks.mute) {
                if (!fireworks.paused) {
                    fireworks.pause();
                    fireworks.currentTime = 0;
                }
                fireworks.play();
            }
        };
        module.resetFireworks = function () {
            if (!fireworks.paused) {
                fireworks.pause();
            }
            fireworks.currentTime = 0;
        };
        module.playApplause = function () {
            if (!applause.mute) {
                if (!applause.paused) {
                    applause.pause();
                    applause.currentTime = 0;
                }
                applause.play();
            }
        };
        module.resetApplause = function () {
            if (!applause.paused) {
                applause.pause();
            };
            applause.currentTime = 0;
        };

        module.resetSound = function () {
            self.resetApplause();
            self.resetClocksound();
            self.resetFireworks();
        };
        module.soundMute = function () {
            self.resetSound();
            clocksound.mute = true;
            applause.mute = true;
            fireworks.mute = true;
            self.ismute = true;
        };
        module.resetSoundmute = function () {
            self.resetSound();
            clocksound.mute = false;
            applause.mute = false;
            fireworks.mute = false;
            self.ismute = false;
        };

        return module;
    };
})(angular);