import sinon from 'sinon';
import HTTP from '../utils/http-common';
import Service from '../utils/Service';

describe('<Products>', () => {
    let service;
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    test('get이 정상호출되는 경우 callback을 리턴한다', async() => {
        const result = {
            status: 200,
            data: {}
        };
        const stub = sandbox.stub(HTTP, 'get').returns(Promise.resolve(result));
        const path = '/path';
        const callback = sandbox.spy();
        await service.get(path, callback);

        expect(stub.calledOnce).toEqual(true);
        expect(callback.calledWith(result.status, result.data)).toEqual(true);

    });

    test('post이 정상호출되는 경우 callback을 리턴한다', async() => {
        const result = {
            status: 200,
            data: {}
        };
        const stub = sandbox.stub(HTTP, 'post').returns(Promise.resolve(result));
        const path = '/path';
        const payload = {};
        const callback = sandbox.spy();
        await service.post(path, payload, callback);

        expect(stub.calledOnce).toEqual(true);
        expect(callback.calledWith(result.status, result.data)).toEqual(true);
    });

    test('put이 정상호출되는 경우 callback을 리턴한다', async() => {
        const result = {
            status: 200,
            data: {}
        };
        const stub = sandbox.stub(HTTP, 'put').returns(Promise.resolve(result));
        const path = '/path';
        const payload = {};
        const callback = sandbox.spy();
        await service.put(path, payload, callback);

        expect(stub.calledOnce).toEqual(true);
        expect(callback.calledWith(result.status, result.data)).toEqual(true);
    });

    test('delete가 정상호출되는 경우 callback을 리턴한다', async() => {
        const result = {
            status: 200,
            data: {}
        };
        const stub = sandbox.stub(HTTP, 'delete').returns(Promise.resolve(result));
        const path = '/path';
        const callback = sandbox.spy();
        await service.delete(path, callback);

        expect(stub.calledOnce).toEqual(true);
        expect(callback.calledWith(result.status, result.data)).toEqual(true);
    });

    afterEach(() => {
        sandbox.restore();
    })
});
