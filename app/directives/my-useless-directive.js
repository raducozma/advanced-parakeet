angular.module('myNewApp').directive('myUselessDirective', function () {
    return {
        controllerAs: 'ctrl',
        templateUrl: 'app/directives/my-useless-directive.html',
        controller: function (MyServiceSrv) {
            var ctrl = this;

            // ctrl.getName = function () {
            //     return 'baubau';
            // }
            ctrl.getName = MyServiceSrv.getName;
        }
    };
});