angular.module('myNewApp').service('MyServiceSrv', function (MyDataSrv) {
    var service = this;

    service.doStuff = function (x) {
        return x + MyDataSrv.getData();
    };

    service.getName = function () {
        return MyDataSrv.getMyName();
    };
});