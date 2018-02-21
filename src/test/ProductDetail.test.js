import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import ProductDetail from '../components/ProductDetail';
import HTTP from '../utils/http-common';
import sinon from 'sinon';

describe('ProductDetail 컴포넌트', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    test('url param으로 전달받은 name으로 조회된 데이터로 GET /product', () => {
        const stub = sandbox.stub(HTTP, 'get');
        const productData = {
            productId: 1,
            name: 'product-name',
            introduce: 'product introduce',
            imageUrl: 'www.imageUrl.com',
            color: '#color',
            techs: ['reactjs', 'enzyme'],
            details: 'product details',
            comments: [
                {
                    email: '',
                    message: '',
                    regDt: new Date('2018-01-01')
                },
                {
                    email: '',
                    message: '',
                    regDt: new Date('2018-01-02')
                }
            ]
        }
        stub.withArgs('/product/product-name').returns(Promise.resolve({
            data: productData
        }));
        const wrapper = shallow(<ProductDetail match={{params: {name: 'product-name'}}}/>);
        
        expect(stub.called).toEqual(true);

    });

    test('state가 변경되면, 화면에 반영되어 보여진다.', () => {
        const stub = sandbox.stub(HTTP, 'get');
        const productData = {
            productId: 1,
            name: 'product-name',
            introduce: 'product introduce',
            imageUrl: 'www.imageUrl.com',
            repColor: '#color',
            techs: ['reactjs', 'enzyme'],
            productDetails: [{
                title: '화면1',
                description: '설명한다.',
                imageUrl: 'www.imageUrl1.com'
            },{
                title: '화면2',
                description: '또 설명한다.',
                imageUrl: 'www.imageUrl2.com'
            }],
            comments: [
                {
                    email: 'tiffany@gmail.com',
                    message: '티파니의 댓글',
                    regDt: new Date('2018-01-01 00:00:00')
                },
                {
                    email: 'ryan@gmail.com',
                    message: '라이언의 댓글',
                    regDt: new Date('2018-01-02 00:00:00')
                }
            ]
        }
        stub.withArgs('/product/product-name').returns(Promise.resolve({
            data: productData
        }));
        const wrapper = shallow(<ProductDetail match={{params: {name: 'product-name'}}}/>);
        wrapper.setState({
            id: productData.productId,
            name: productData.name,
            introduce: productData.introduce,
            imageUrl: productData.imageUrl,
            color: productData.repColor,
            techs: productData.techs,
            details: productData.productDetails,
            comments: productData.comments
        });
        
        expect(wrapper.find('#productName').text()).toEqual('product-name');
        expect(wrapper.find('#productDescription').text()).toEqual('product introduce');
        expect(wrapper.find('#tags span').length).toEqual(2);
        expect(wrapper.find('#tags span').at(0).text()).toEqual('#reactjs');
        expect(wrapper.find('#tags span').at(1).text()).toEqual('#enzyme');
        expect(wrapper.find('ProductDetailCard').length).toEqual(2);
        expect(wrapper.find('ProductDetailCard').at(0).prop('title')).toEqual('화면1');
        expect(wrapper.find('ProductDetailCard').at(0).prop('description')).toEqual('설명한다.');
        expect(wrapper.find('ProductDetailCard').at(0).prop('imageUrl')).toEqual('www.imageUrl1.com');
        expect(wrapper.find('ProductDetailCard').at(1).prop('title')).toEqual('화면2');
        expect(wrapper.find('ProductDetailCard').at(1).prop('description')).toEqual('또 설명한다.');
        expect(wrapper.find('ProductDetailCard').at(1).prop('imageUrl')).toEqual('www.imageUrl2.com');
        expect(wrapper.find('Comment').length).toEqual(2);
        expect(wrapper.find('Comment').at(0).prop('email')).toEqual('tiffany@gmail.com');
        expect(wrapper.find('Comment').at(0).prop('comment')).toEqual('티파니의 댓글');
        expect(wrapper.find('Comment').at(0).prop('date')).toEqual(new Date('2018-01-01 00:00:00'));
        expect(wrapper.find('Comment').at(1).prop('email')).toEqual('ryan@gmail.com');
        expect(wrapper.find('Comment').at(1).prop('comment')).toEqual('라이언의 댓글');
        expect(wrapper.find('Comment').at(1).prop('date')).toEqual(new Date('2018-01-02 00:00:00'));
    });
    afterEach(() => {
        sandbox.restore();
    });
});