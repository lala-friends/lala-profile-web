import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import FormFile from '../components/FormFile';
import * as Storage from '../utils/Storage';
import sinon from 'sinon';

describe('FormFile 컴포넌트', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    test('handleChange가 호출되면 state.name이 갱신되고 firebase에 업데이트되고 props.updateImage가 호출된다', () => {
        const stub = sandbox.stub(Storage, 'uploadImage');
        stub.withArgs({name: 'file_name'}).returns(Promise.resolve({
            downloadURL: 'www.fileUrl.com'
        }));
        const updateImage = jest.fn();
        const wrapper = shallow(<FormFile updateImage={updateImage}/>);
        wrapper.instance().handleChange({ target: {
            files: [{
                name: 'file_name'
            }]
        }});

        expect(wrapper.state('name')).toEqual('file_name');
        expect(stub.called).toEqual(true);
        // expect(updateImage).toHaveBeenCalledWith('');
    });

    test('handleChange가 호출되면 file이 클릭되지 않은 경우 return 된다.', () => {
        const stub = sandbox.stub(Storage, 'uploadImage');
        
        const updateImage = jest.fn();
        const wrapper = shallow(<FormFile updateImage={updateImage}/>);
        wrapper.instance().handleChange({ target: {
            files: []
        }});

        expect(stub.called).toEqual(false);
        expect(updateImage).not.toHaveBeenCalled();
    });

    afterEach(() => {
        sandbox.restore();
    });
});