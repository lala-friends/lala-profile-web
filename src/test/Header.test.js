import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Header from '../components/Header';

// TODO: test code 작성
describe('Header 컴포넌트', () => {
    test('', () => {
        const wrapper = shallow(<Header/>);
    });
});