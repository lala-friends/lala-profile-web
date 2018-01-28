import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

Enzyme.configure({adapter: new Adapter()});

describe('<Hedaer />', () => {
    test('로고를 클릭하면, root로 이동한다', () => {
        const wrapper = Enzyme.shallow(<Header />);

        expect(wrapper.find('.logo').prop('to')).toBe('/');
    });

    test('about us 버튼을 클릭하면, root로 이동한다', () => {
        const wrapper = Enzyme.shallow(<Header />);

        expect(wrapper.find('.menu').first().prop('to')).toBe('/about');
    });

    test('project 버튼을 클릭하면, root로 이동한다', () => {
        const wrapper = Enzyme.shallow(<Header />);

        expect(wrapper.find('.menu').last().prop('to')).toBe('/project');
    });
});