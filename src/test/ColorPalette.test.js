import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import ColorPalette from '../components/ColorPalette';
import {colorPalette} from '../utils/StyleUtil';

describe('ColorPalette', () => {
    test('ColorPalette이 렌더링 된다.', () => {
        const changeColor = jest.fn();
        const colorIndex = 0;
        const selectedColor = colorPalette[colorIndex];

        const wrapper = shallow(<ColorPalette color={selectedColor} changeColor={changeColor}/>);
         
        expect(wrapper).toMatchSnapshot();
        // 선택된 color에 check표시 되어 렌더링된다.
        expect(wrapper.find('.color').get(colorIndex).props.children.props.className).toContain('mdi-check');
    });

    test('다른 color를 click하면, props.changeColor가 호출된다.', () => {
        const changeColor = jest.fn();
        const colorIndex = 0;
        const selectedColor = colorPalette[colorIndex];

        const wrapper = shallow(<ColorPalette color={selectedColor} changeColor={changeColor}/>);

        const selectedIndex = 1;
        wrapper.find('.color').at(selectedIndex).simulate('click');
        expect(changeColor).toHaveBeenCalled();
    });
});