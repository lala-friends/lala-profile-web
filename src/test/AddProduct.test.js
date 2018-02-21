import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import AddProduct from '../components/AddProduct';
import sinon from 'sinon';
import HTTP from '../utils/http-common';

describe('AddProduct 컴포넌트', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    test('changeProduct가 호출되면, params로 받아온 product정보를 갱신한다.', () => {
        const wrapper = shallow(<AddProduct/>);

        wrapper.instance().changeProduct({
            id: 1,
            title: 'product title',
            description: 'product description',
            imageUrl: 'www.imageUrl.com'
        });

        expect(wrapper.state('id')).toEqual(1);
        expect(wrapper.state('title')).toEqual('product title');
        expect(wrapper.state('description')).toEqual('product description');
        expect(wrapper.state('imageUrl')).toEqual('www.imageUrl.com');
    });

    test('add버튼이 클릭되면, 설명 추가를 위한 FormItem컴포넌트가 추가된다.', () => {
        const wrapper = shallow(<AddProduct/>);
        wrapper.setState({
            items: []
        });
        wrapper.find('#add-button').simulate('click');

        expect(wrapper.state('items').length).toEqual(1);
    });

    test('취소버튼이 클릭되면, 이전페이지로 돌아가는 goBack함수가 호출된다.', () => {
        const goBack = jest.fn();
        const wrapper = shallow(<AddProduct history={{goBack: goBack}}/>);

        wrapper.find('#cancel').simulate('click');

        expect(goBack).toHaveBeenCalled();
    });

    test('저장버튼이 클릭되면, 이전페이지로 돌아가는 goBack함수가 호출된다.', () => {
        const stub = sandbox.stub(HTTP, 'post');
        stub.withArgs('/product').returns(Promise.resolve({}));
        const wrapper = shallow(<AddProduct />);

        wrapper.find('#save').simulate('click');

        expect(stub.called).toEqual(true);
    });

    afterEach(() => {
        sandbox.restore();
    })
});