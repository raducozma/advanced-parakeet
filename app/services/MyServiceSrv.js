angular.module('myNewApp').service('MyServiceSrv', function (MyDataSrv, Restangular) {
    var service = this;

    service.doStuff = function (x) {
        return x + MyDataSrv.getData();
    };

    service.getName = function () {
        return MyDataSrv.getMyName();
    };

	service.getStatus = function () {
		return Restangular.one('test').get();
	}
});