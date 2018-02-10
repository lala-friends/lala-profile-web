import React from 'react';
import {MemoryRouter} from 'react-router';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import AddProduct from '../components/AddProduct';
import FormProject from '../components/FormProduct';
import FormItem from '../components/FormItem';
import HTTP from '../utils/http-common';

Enzyme.configure({adapter: new Adapter()});

describe('<AddProduct />', () => {
    let sandbox;
    let wrapper;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        wrapper = Enzyme.shallow(<AddProduct/>);
        wrapper.setState({
            name: '',
            description: '',
            tags: [],
            image: '',
            items: [{
                id: '',
                title: '',
                description: '',
                image: ''
            }]
        });
    });

    test('AddProduct 렌더링시, state정보가 화면에 보여진다.', () => {
        expect(wrapper.find(FormProject)).toHaveLength(1);
        expect(wrapper.find(FormItem)).toHaveLength(1);
    });

    test('add card 버튼 클릭시, FormItem이 하나 추가된다.', () => {
        wrapper.find('#add-button').simulate('click');
        expect(wrapper.find(FormItem)).toHaveLength(2);
    });

    test('저장하기 버튼 클릭시, 저장 요청한다.', () => {
        const stub = sandbox.stub(HTTP, 'post');
        wrapper.find('#save-button').simulate('click');

        expect(stub.withArgs('/product/new', wrapper.state()).calledOnce).toEqual(true);
    });

    //TODO: 취소버튼 클릭시 테스트

    afterEach(() => {
        sandbox.restore();
    })
});