import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Developers from '../components/Developers';
import HTTP from '../utils/http-common';
import sinon from 'sinon';

describe('Developers 컴포넌트', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    test('GET /developers에서 조회한 데이터를 화면에 렌더링힌다.', () => {
        const developers = [
            {
                personId: 1,
                imageUrl: 'www.imageUrl1.com',
                name: 'tiffany',
                email: 'tiffany@gmail.com',
                introduce: 'tiffany를 소개합니다.',
                blog: 'www.blog.com',
                github: 'www.github.com',
                facebook: 'www.facebook.com',
                repColor: '#ffffff',
                products: [{
                    productId: 1,
                    name: 'product1',
                    imageUrl: 'www.productImageUrl1.com'
                }]
            },
            {
                personId: 2,
                imageUrl: 'www.imageUrl2.com',
                name: 'ryan',
                email: 'ryan@gmail.com',
                introduce: 'ryan을 소개합니다.',
                blog: 'www.blog2.com',
                github: 'www.github2.com',
                facebook: 'www.facebook2.com',
                repColor: '#000000',
                products: [{
                    productId: 2,
                    name: 'product2',
                    imageUrl: 'www.productImageUrl2.com'
                }]
            }
        ];
        const stub = sandbox.stub(HTTP, 'get');
        stub.withArgs('/developers').returns(Promise.resolve({
            data: developers
        }));

        const wrapper = shallow(<Developers/>);

        expect(stub.called).toEqual(true);
    });

    test('state.developers의 데이터가 화면에 보여진다.', () => {
        const developers = [
            {
                personId: 1,
                imageUrl: 'www.imageUrl1.com',
                name: 'tiffany',
                email: 'tiffany@gmail.com',
                introduce: 'tiffany를 소개합니다.',
                blog: 'www.blog1.com',
                github: 'www.github1.com',
                facebook: 'www.facebook1.com',
                repColor: '#ffffff',
                products: [{
                    productId: 1,
                    name: 'product1',
                    imageUrl: 'www.productImageUrl1.com'
                }]
            },
            {
                personId: 2,
                imageUrl: 'www.imageUrl2.com',
                name: 'ryan',
                email: 'ryan@gmail.com',
                introduce: 'ryan을 소개합니다.',
                blog: 'www.blog2.com',
                github: 'www.github2.com',
                facebook: 'www.facebook2.com',
                repColor: '#000000',
                products: [{
                    productId: 2,
                    name: 'product2',
                    imageUrl: 'www.productImageUrl2.com'
                }]
            }
        ];
        const stub = sandbox.stub(HTTP, 'get');
        stub.withArgs('/developers').returns(Promise.resolve({
            data: developers
        }));

        const wrapper = shallow(<Developers/>);
        wrapper.setState({
            developers: developers
        });

        expect(wrapper.find('DeveloperItem').length).toEqual(2);
        expect(wrapper.find('DeveloperItem').at(0).prop('thumbnail')).toEqual('www.imageUrl1.com');
        expect(wrapper.find('DeveloperItem').at(0).prop('name')).toEqual('tiffany');
        expect(wrapper.find('DeveloperItem').at(0).prop('email')).toEqual('tiffany@gmail.com');
        expect(wrapper.find('DeveloperItem').at(0).prop('introduce')).toEqual('tiffany를 소개합니다.');
        expect(wrapper.find('DeveloperItem').at(0).prop('blog')).toEqual('www.blog1.com');
        expect(wrapper.find('DeveloperItem').at(0).prop('github')).toEqual('www.github1.com');
        expect(wrapper.find('DeveloperItem').at(0).prop('facebook')).toEqual('www.facebook1.com');
        expect(wrapper.find('DeveloperItem').at(0).prop('color')).toEqual('#ffffff');
        expect(wrapper.find('DeveloperItem').at(0).prop('products')).toEqual([{
            productId: 1,
            name: 'product1',
            imageUrl: 'www.productImageUrl1.com'
        }]);

        expect(wrapper.find('DeveloperItem').at(1).prop('thumbnail')).toEqual('www.imageUrl2.com');
        expect(wrapper.find('DeveloperItem').at(1).prop('name')).toEqual('ryan');
        expect(wrapper.find('DeveloperItem').at(1).prop('email')).toEqual('ryan@gmail.com');
        expect(wrapper.find('DeveloperItem').at(1).prop('introduce')).toEqual('ryan을 소개합니다.');
        expect(wrapper.find('DeveloperItem').at(1).prop('blog')).toEqual('www.blog2.com');
        expect(wrapper.find('DeveloperItem').at(1).prop('github')).toEqual('www.github2.com');
        expect(wrapper.find('DeveloperItem').at(1).prop('facebook')).toEqual('www.facebook2.com');
        expect(wrapper.find('DeveloperItem').at(1).prop('color')).toEqual('#000000');
        expect(wrapper.find('DeveloperItem').at(1).prop('products')).toEqual([{
            productId: 2,
            name: 'product2',
            imageUrl: 'www.productImageUrl2.com'
        }]);
    });

    test('add버튼을 클릭한 경우, 개발자 추가 페이지로 이동한다.', () => {
        const stub = sandbox.stub(HTTP, 'get');
        stub.withArgs('/developers').returns(Promise.resolve({
            data: []
        }));
        const push = jest.fn();
        const wrapper = shallow(<Developers history={{push: push}}/>);

        wrapper.find('.add-button').simulate('click');

        expect(push).toHaveBeenCalledWith('/developer/new');
    });
    afterEach(() => {
        sandbox.restore();
    });
});