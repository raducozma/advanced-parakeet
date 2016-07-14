angular.module('myNewApp').directive('myUselessDirective', function () {
    return {
        controllerAs: 'ctrl',
        templateUrl: 'app/directives/my-useless-directive.html',
        controller: function (MyServiceSrv, $http) {
            var ctrl = this;
			
			$http({
				method: 'GET',
				url: 'https://cors-test.appspot.com/test'
			}).then(function (response) {
				ctrl.status = response.status;
			});
            // ctrl.getName = function () {
            //     return 'baubau';
            // }
            ctrl.getName = MyServiceSrv.getName;
        }
    };
});