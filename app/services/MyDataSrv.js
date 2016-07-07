angular.module('myNewApp').service('MyDataSrv', function () {
    var service = this,
        data = {
            theName: 'super awesome name',
            someField: 14
        };

    service.getData = function () {
        return data;
    };

    service.getMyName = function () {
        return data.theName;
    };
});