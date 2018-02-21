import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Products from '../components/Products';
import HTTP from '../utils/http-common';
import sinon from 'sinon';

describe('Products 컴포넌트', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    test('Products 컴포넌트가 렌더링 된다.', () => {
        const stub = sandbox.stub(HTTP, 'get');
        stub.withArgs('/products').returns(Promise.resolve({
            data: [{
                productId: 1,
                imageUrl: 'www.imageUrl.com',
                name: 'product name',
                introduce: 'product introduce',
                persons: ['tiffany', 'ryan']
            }]
        }));
        const wrapper = shallow(<Products.WrappedComponent />);
        
        expect(stub.called).toEqual(true);
    });

    test('products의 리스트를, 화면에 렌더링 한다.', () => {
        const stub = sandbox.stub(HTTP, 'get');
        const data = [{
                productId: 1,
                imageUrl: 'www.imageUrl1.com',
                name: 'product name1',
                introduce: 'product introduce1',
                persons: ['tiffany']
            },{
                productId: 2,
                imageUrl: 'www.imageUrl2.com',
                name: 'product name2',
                introduce: 'product introduce2',
                persons: ['ryan']
            },{
                productId: 3,
                imageUrl: 'www.imageUrl3.com',
                name: 'product name3',
                introduce: 'product introduce3',
                persons: ['tiffany', 'ryan']
            }];
        stub.withArgs('/products').returns(Promise.resolve({
            data: data
        }));

        const wrapper = shallow(<Products.WrappedComponent />);
        wrapper.setState({
            products: data
        });
        
        expect(wrapper.find('withRouter(ProductItem)').length).toEqual(3); 
    });

    test('add button 을 클릭하면, /product/new 화면으로 이동한다.', () => {
        const stub = sandbox.stub(HTTP, 'get');
        stub.withArgs('/products').returns(Promise.resolve({
            data: [{
                productId: 1,
                imageUrl: 'www.imageUrl.com',
                name: 'product name',
                introduce: 'product introduce',
                persons: ['tiffany', 'ryan']
            }]
        }));
        const push = jest.fn();
        const wrapper = shallow(<Products.WrappedComponent history={{push: push}}/>);

        wrapper.find('.add-button').simulate('click');
        expect(push).toHaveBeenCalledWith('/product/new');
    });
    afterEach(() => {
        sandbox.restore();
    });
});