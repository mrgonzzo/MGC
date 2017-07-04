(function (angular) {
    angular.module('app').factory('scoreFactory', [scoreFactory]);
    function scoreFactory() {
        var module = {};
        var self = module;
         var ko = 0;
        var ok = 0;
      score = [ok, ko];
        module.getScore = function () {
           return score;
        };
        return module;
    };
})(angular);
