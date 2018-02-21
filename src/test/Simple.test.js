import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Comment from '../components/Comment';
import Home from '../components/Home';
import NoMatch from '../components/NoMatch';

describe('단순한 컴포넌트의 테스트', () => {
    test('Comment가 렌더링 된다.', () => {
        const wrapper = shallow(<Comment email='tiffany@gmail.com' comment='comment 테스트' date={new Date('2017-01-01 00:00:00')}/>);
        expect(wrapper.find('#email').text()).toEqual('tiffany@gmail.com');
        expect(wrapper.find('#comment').text()).toEqual('comment 테스트');
        expect(wrapper.find('#date').text()).toEqual('2017-01-01 00:00:00');
    });

    test('Home이 렌더링 된다.', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('NoMatch가 렌더링 된다.', () => {
       const wrapper = shallow(<NoMatch/>);
       expect(wrapper).toMatchSnapshot();
    });
});