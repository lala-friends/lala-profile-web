import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import FormComment from '../components/FormComment';
import HTTP from '../utils/http-common';
import sinon from 'sinon';

describe('FormComment 컴포넌트', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    })
    test('comment가 변경되면, state.comment가 변경된다.', () => {
        const wrapper = shallow(<FormComment/>);

        wrapper.find('#comment').simulate('change', { target: {value: 'comment 를 입력합니다.'}});

        expect(wrapper.state('comment')).toEqual('comment 를 입력합니다.');
    });

    test('email이 변경되면, state.email 변경된다.', () => {
        const wrapper = shallow(<FormComment/>);

        wrapper.find('#email').simulate('change', { target: {value: 'tiffany@gmail.com'}});

        expect(wrapper.state('email')).toEqual('tiffany@gmail.com');
    });

    test('등록하기 버튼을 클릭하면, POST /comment를 호출하여 댓글을 저장요청한다.', () => {
        const wrapper = shallow(<FormComment/>);
        wrapper.setState({
            email: 'tiffay@gmail.com',
            comment: 'comment를 입력합니다.',
            date: new Date('2018-01-01 00:00:00')
        })
        
        const stub = sandbox.stub(HTTP, 'post');
        stub.withArgs('/comment', wrapper.state()).returns(Promise.resolve({}));

        wrapper.find('#save').simulate('click');
        
        expect(stub.called).toEqual(true);
    });

    afterEach(() => {
        sandbox.restore();
    })
});

