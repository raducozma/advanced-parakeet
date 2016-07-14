angular.module('myNewApp').component('myUselessDirective', {
	templateUrl: 'app/directives/my-useless-directive.html',
	controller: function (MyServiceSrv) {
		var $ctrl = this;

		$ctrl.getName = MyServiceSrv.getName;
		
		MyServiceSrv.getStatus().then(function (response) {
			$ctrl.status = response.status;
		});
	}
});