import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DeveloperItem from '../components/DeveloperItem';

Enzyme.configure({ adapter: new Adapter() });

describe('DeveloperItem 컴포넌트 테스트', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = Enzyme.shallow(<DeveloperItem thumbnail='www.thumbnail.com'
                                                name='tiffany'
                                                email='tiffany@gmail.com'
                                                introduce='tiffany입니다.'
                                                blog='www.blog.com'
                                                github='www.github.com'
                                                facebook='www.facebook.com'
                                                color='#000000'
                                                products={[
                                                    {
                                                        id: 1,
                                                        thumbnail: 'www.projectImage.com',
                                                        name: 'lala-product'
                                                    }
                                                ]}/>);
    });

    test('DeveloperItem 이 생성되면, state가 초기화 된다.', () => {
        expect(wrapper.state('isShow')).toEqual(false);
    });

    test('DeveloperItem 이 렌더링되면, 화면에 보여진다.', () => {
        expect(wrapper.find('#color').prop('style').backgroundColor).toEqual('#000000');
        expect(wrapper.find('#thumbnail').prop('src')).toEqual('www.thumbnail.com');
        expect(wrapper.find('#name').text()).toEqual('tiffany');
        expect(wrapper.find('#email').text()).toEqual('tiffany@gmail.com');
        expect(wrapper.find('#introduce').text()).toEqual('tiffany입니다.');
        expect(wrapper.find('#blog').prop('href')).toEqual('www.blog.com');
        expect(wrapper.find('#github').prop('href')).toEqual('www.github.com');
        expect(wrapper.find('#facebook').prop('href')).toEqual('www.facebook.com');
        expect(wrapper.find('#products.inactive')).toHaveLength(1);
    });

    test('Products 버튼을 클릭하면, 프로젝트 리스트가 보여진다.', () => {
        wrapper.find('#product-button').simulate('click');
        expect(wrapper.find('#products.inactive')).toHaveLength(0);
        expect(wrapper.find('#products a').prop('href')).toEqual('/products/1');
        expect(wrapper.find('#products a img').prop('src')).toEqual('www.projectImage.com');
        expect(wrapper.find('#products a div').text()).toEqual('lala-product');
    });

    test('Products 리스트가 보일 때, Products 버튼을 클릭하면 리스타가 사라진다', () => {
        wrapper.setState({
            isShow: true
        });

        wrapper.find('#product-button').simulate('click');
        expect(wrapper.find('#products.inactive')).toHaveLength(1);
    })

});