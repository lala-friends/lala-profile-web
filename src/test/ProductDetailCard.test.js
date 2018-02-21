import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import ProductDetailCard from '../components/ProductDetailCard';
describe('ProductDetailCard 컴포넌트', () => {
    test('ProductDetailCard 컴포넌트가 렌더링 된다.', () => {
        const wrapper = shallow(<ProductDetailCard imageUrl='www.imageUrl.com' title='product title' description='product description' />);
        expect(wrapper.find('#productDescriptionImage').prop('src')).toEqual('www.imageUrl.com');
        expect(wrapper.find('#productDescriptionTitle').text()).toEqual('product title');
        expect(wrapper.find('#productDescriptionDetail').text()).toEqual('product description');
    });

    test('제품 설명 이미지가 없는 경우, 해당 영역이 보이지 않는다.', () => {
        const wrapper = shallow(<ProductDetailCard title='product title' description='product description' />);
        expect(wrapper.find('#productDescriptionImage').parent().prop('className')).toContain('inactive');
    });
});