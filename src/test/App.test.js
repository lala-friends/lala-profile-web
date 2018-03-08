import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import App from '../App';

describe('App 컴포넌트', () => {
    test('', () => {
        const wrapper = shallow(<App/>);
    });
});