describe('MyServiceSrv functionality', function () {
    var expectedName;

    beforeEach(function () {
        module('myNewApp');
        expectedName = 'another name';
    });

    describe('mocked dependency', function () {
        it('should return the service name', inject(function (MyServiceSrv, MyDataSrv) {
            spyOn(MyDataSrv, 'getMyName').and.returnValue(expectedName);
            // extra logic...
            expect(MyServiceSrv.getName()).toBe(expectedName);
        }));
    });

    it('checks if its the wrong name', inject(function (MyServiceSrv) {
        expectedName = 'wrongName';
        expect(MyServiceSrv.getName()).not.toBe(expectedName);
    }));

    afterEach(function () {
        expectedName = 'another one bites the dust';
    });
});