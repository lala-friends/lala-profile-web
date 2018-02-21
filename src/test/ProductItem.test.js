import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import ProductItem from '../components/ProductItem';

describe('ProductItem 컴포넌트', () => {
    test('ProductItem 컴포넌트가 렌더링 된다.', () => {
        const wrapper = shallow(<ProductItem.WrappedComponent id={1} 
                                        name='product name' 
                                        imageUrl='www.imageUrl.com' 
                                        description='product description' 
                                        developers={[{
                                            imageUrl: 'www.tiffany.com',
                                            name: 'tiffany'
                                        },{
                                            imageUrl: 'www.ryan.com',
                                            name: 'ryan'
                                        }]}/>);
    
        expect(wrapper.find('#productImage').prop('src')).toEqual('www.imageUrl.com');
        expect(wrapper.find('#productName').text()).toEqual('product name');
        expect(wrapper.find('#productDescription').text()).toEqual('product description');
        expect(wrapper.find('#developers img').length).toEqual(2);
        expect(wrapper.find('#developers img').at(0).prop('src')).toEqual('www.tiffany.com');
        expect(wrapper.find('#developers img').at(0).prop('title')).toEqual('tiffany')
        expect(wrapper.find('#developers img').at(1).prop('src')).toEqual('www.ryan.com');
        expect(wrapper.find('#developers img').at(1).prop('title')).toEqual('ryan');
    });

    test('product카드를 클릭하면, 선택한 product 페이지로 이동한다.', () => {
        const push = jest.fn();
        const wrapper = shallow(<ProductItem.WrappedComponent 
                                        history={{push: push}}
                                        id={1} 
                                        name='product-name' 
                                        imageUrl='www.imageUrl.com' 
                                        description='product description' 
                                        developers={[{
                                            imageUrl: 'www.tiffany.com',
                                            name: 'tiffany'
                                        },{
                                            imageUrl: 'www.ryan.com',
                                            name: 'ryan'
                                }]}/>);

        wrapper.find('#productCard').simulate('click');
        expect(push).toHaveBeenCalledWith('/product/product-name');
    });
});