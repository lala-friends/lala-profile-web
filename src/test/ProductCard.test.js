import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import ProductCard from '../components/ProductCard';
import {colorPalette} from '../utils/StyleUtil';

describe('ProductCard', () => {
    test('ProductCard 컴포넌트를 렌더링 한다.', () => {
        const wrapper = shallow(<ProductCard name='lala-clipping' 
                                    imageUrl='www.imageUrl.com' 
                                    introduce='간단 소개' 
                                    techs={['android']}
                                    role='개발'/>);

        expect(wrapper.find('#imageUrl').props().src).toEqual('www.imageUrl.com');
        expect(wrapper.find('#productName').text()).toEqual('lala-clipping');
        expect(wrapper.find('#productSummary').text()).toEqual('간단 소개');
        expect(wrapper.find('#techs .badge').length).toEqual(1);
        expect(wrapper.find('#techs .badge').at(0).text()).toEqual('android');
        expect(wrapper.find('#role').text()).toEqual('개발');
    });

    test('props로 넘겨지지 않은 요소는, 화면에 보여지지 않는다. ', () => {
        const wrapper = shallow(<ProductCard name='lala-clipping' 
                                            imageUrl='www.imageUrl.com' 
                        />);

        expect(wrapper.find('#techs').parent().props().className).toContain('inactive');
        expect(wrapper.find('#productSummary').parent().props().className).toContain('inactive');
        expect(wrapper.find('#role').parent().props().className).toContain('inactive');
    });

    test('프로덕트카드를 클릭하면 프로덕트 상세페이지로 이동한다.', () => {
        const push = jest.fn();
        const wrapper = shallow(<ProductCard name='lala-clipping' 
                                            imageUrl='www.imageUrl.com' 
                                            history={{push: push}}
        />);

        wrapper.find('#productCard').simulate('click');

        expect(push).toHaveBeenCalledWith('/product/lala-clipping');
    });
});