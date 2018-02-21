import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import DeveloperItem from '../components/DeveloperItem';

describe('DeveloperItem 컴포넌트', () => {
    test('DeveloperItem의 prop의 정보가 화면에 보여진다.', () => {
        const wrapper = shallow(<DeveloperItem
                id={1}
                thumbnail='www.thumbnail.com'
                name='tiffany'
                email='tiffany@gmail.com'
                introduce='tiffany를 소개합니다.'
                blog='www.blog.com'
                github='www.github.com'
                facebook='www.facebook.com'
                color='#ffffff'
                products={[{
                    productId: 1,
                    imageUrl: 'www.imageUrl1.com',
                    name: 'product1'
                }, {
                    productId: 2,
                    imageUrl: 'www.imageUrl2.com',
                    name: 'product2'
                }]}
            />);

        expect(wrapper.find('#color').prop('style').backgroundColor).toEqual('#ffffff');
        expect(wrapper.find('#thumbnail').prop('src')).toEqual('www.thumbnail.com');
        expect(wrapper.find('#name').text()).toEqual('tiffany');
        expect(wrapper.find('#email').text()).toEqual('tiffany@gmail.com');
        expect(wrapper.find('#introduce').text()).toEqual('tiffany를 소개합니다.');
        expect(wrapper.find('#blog').prop('href')).toEqual('www.blog.com');
        expect(wrapper.find('#github').prop('href')).toEqual('www.github.com');
        expect(wrapper.find('#facebook').prop('href')).toEqual('www.facebook.com');
        expect(wrapper.find('#products a').length).toEqual(2);
        expect(wrapper.find('#products a').at(0).prop('href')).toEqual('/product/1');
        expect(wrapper.find('#products a').at(0).find('img').prop('src')).toEqual('www.imageUrl1.com');
        expect(wrapper.find('#products a').at(0).find('div').text()).toEqual('product1');
        expect(wrapper.find('#products a').at(1).prop('href')).toEqual('/product/2');
        expect(wrapper.find('#products a').at(1).find('img').prop('src')).toEqual('www.imageUrl2.com');
        expect(wrapper.find('#products a').at(1).find('div').text()).toEqual('product2');
    });

    test('state.isShow가 true이면, products리스트가 보여진다.', () => {
        const wrapper = shallow(<DeveloperItem
                id={1}
                thumbnail='www.thumbnail.com'
                name='tiffany'
                email='tiffany@gmail.com'
                introduce='tiffany를 소개합니다.'
                blog='www.blog.com'
                github='www.github.com'
                facebook='www.facebook.com'
                color='#ffffff'
                products={[{
                    productId: 1,
                    imageUrl: 'www.imageUrl1.com',
                    name: 'product1'
                }, {
                    productId: 2,
                    imageUrl: 'www.imageUrl2.com',
                    name: 'product2'
                }]}
        />);
        wrapper.setState({
            isShow: true
        });
        expect(wrapper.find('#products').prop('className')).not.toContain('inactive');
    });

    test('state.isShow가 false이면, products리스트가 보여진다.', () => {
        const wrapper = shallow(<DeveloperItem
                id={1}
                thumbnail='www.thumbnail.com'
                name='tiffany'
                email='tiffany@gmail.com'
                introduce='tiffany를 소개합니다.'
                blog='www.blog.com'
                github='www.github.com'
                facebook='www.facebook.com'
                color='#ffffff'
                products={[{
                    productId: 1,
                    imageUrl: 'www.imageUrl1.com',
                    name: 'product1'
                }, {
                    productId: 2,
                    imageUrl: 'www.imageUrl2.com',
                    name: 'product2'
                }]}
        />);
        wrapper.setState({
            isShow: false
        });

        expect(wrapper.find('#products').prop('className')).toContain('inactive');
    });

    test('products 버튼이 클릭되면, state.isShow의 상태가 변경된다.', () => {
        const wrapper = shallow(<DeveloperItem
                id={1}
                thumbnail='www.thumbnail.com'
                name='tiffany'
                email='tiffany@gmail.com'
                introduce='tiffany를 소개합니다.'
                blog='www.blog.com'
                github='www.github.com'
                facebook='www.facebook.com'
                color='#ffffff'
                products={[{
                    productId: 1,
                    imageUrl: 'www.imageUrl1.com',
                    name: 'product1'
                }, {
                    productId: 2,
                    imageUrl: 'www.imageUrl2.com',
                    name: 'product2'
                }]}
        />);
        wrapper.setState({
            isShow: false
        });

        wrapper.find('#product-button').simulate('click', { stopPropagation() {} });

        expect(wrapper.state('isShow')).toEqual(true);
    });

    test('DeveloperItem 카드를 클릭할 경우, 해당 DeveloperDetail 페이지로 이동한다.', () => {
        const push = jest.fn();
        const wrapper = shallow(<DeveloperItem
                history={{push: push}}
                id={1}
                thumbnail='www.thumbnail.com'
                name='tiffany'
                email='tiffany@gmail.com'
                introduce='tiffany를 소개합니다.'
                blog='www.blog.com'
                github='www.github.com'
                facebook='www.facebook.com'
                color='#ffffff'
                products={[{
                    productId: 1,
                    imageUrl: 'www.imageUrl1.com',
                    name: 'product1'
                }, {
                    productId: 2,
                    imageUrl: 'www.imageUrl2.com',
                    name: 'product2'
                }]}
            />);

        wrapper.find('#developerCard').simulate('click');

        expect(push).toHaveBeenCalledWith('/developer/tiffany');
    });
});