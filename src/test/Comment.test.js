import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Comment from '../components/Comment';

Enzyme.configure({adapter: new Adapter()});

describe('Comment 컴포넌트 테스트', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = Enzyme.shallow(<Comment email="test@test.com" comment="댓글을 답시다." date={new Date('2018-01-01 09:00:00')}/>);
    });

    test('Comment가 렌더링되면, props의 데이터가 화면에 보여진다.', () => {
        expect(wrapper.find('#email').text()).toEqual('test@test.com');
        expect(wrapper.find('#comment').text()).toEqual('댓글을 답시다.');
        expect(wrapper.find('#date').text()).toEqual('2018-01-01 09:00:00');
    });
});