import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import FormProduct from '../components/FormProduct';
import sinon from 'sinon';
import * as StyleUtil from '../utils/StyleUtil';

describe('FormProduct', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    
    test('input박스의 name이 입력되면, state.name의 값이 입력된 값으로 갱신된다. ', () => {
        const changeProduct = jest.fn();
        const wrapper = shallow(<FormProduct changeProduct={changeProduct}/>);
        wrapper.find('#productName').simulate('change', {target: {value: 'product name'}});

        expect(wrapper.state('name')).toEqual('product name');
        expect(changeProduct).toHaveBeenCalled();
    });

    test('input박스의 name이 입력되면, state.name의 값이 입력된 값으로 갱신된다. ', () => {
        const changeProduct = jest.fn();
        const wrapper = shallow(<FormProduct changeProduct={changeProduct}/>);
        wrapper.find('#productName').simulate('change', {target: {value: 'product name'}});

        expect(wrapper.state('name')).toEqual('product name');
        expect(changeProduct).toHaveBeenCalledWith({ name: 'product name' });
    });

    test('input박스의 description이 입력되면, state.name의 값이 입력된 값으로 갱신된다. ', () => {
        const changeProduct = jest.fn();
        const wrapper = shallow(<FormProduct changeProduct={changeProduct}/>);
        wrapper.find('#productDescription').simulate('change', {target: {value: 'product description'}});

        expect(wrapper.state('description')).toEqual('product description');
        expect(changeProduct).toHaveBeenCalledWith({ description: 'product description' });
    });

    test('input박스의 techs가 입력되면, state.techs의 값이 공백기준으로 배열로 변환되어 갱신되고 화면에 뱃지형태로 보여진다.. ', () => {
        const changeProduct = jest.fn();
        const wrapper = shallow(<FormProduct changeProduct={changeProduct}/>);
        wrapper.find('#productTechs').simulate('change', {target: {value: 'android javascript android'}});

        expect(wrapper.state('techs')).toEqual(['android', 'javascript']);
        expect(changeProduct).toHaveBeenCalledWith({ techs: ['android', 'javascript']});
        expect(wrapper.find('#techBadges .badge').length).toEqual(2);
        expect(wrapper.find('#techBadges .badge').at(0).text()).toEqual('android');
        expect(wrapper.find('#techBadges .badge').at(1).text()).toEqual('javascript');
    });

    test('updateImage가 호출되면 state.imageUrl이 갱신된다.', () => {
        const changeProduct = jest.fn();
        const wrapper = shallow(<FormProduct changeProduct={changeProduct}/>);
        wrapper.instance().updateImage('www.imageUrl.com');

        expect(wrapper.state('imageUrl')).toEqual('www.imageUrl.com');
        expect(changeProduct).toHaveBeenCalledWith({imageUrl: 'www.imageUrl.com'});
    });

    test('state.imageUrl이 변경되면, 화면에 productImage가 갱신된다.', () => {
        const changeProduct = jest.fn();
        const wrapper = shallow(<FormProduct changeProduct={changeProduct}/>);
        wrapper.setState({
            imageUrl: 'www.imageUrl.com'
        });

        expect(wrapper.find('#productImg').prop('src')).toEqual('www.imageUrl.com');
    });

    test('changeColor가 호출되면 state.color가 갱신된다.', () => {
        const stub = sandbox.stub(StyleUtil, 'rgbToHexa');
        stub.withArgs('rgb(0, 0, 0)').returns('#000000');
        const changeProduct = jest.fn();
        const wrapper = shallow(<FormProduct changeProduct={changeProduct}/>);

        wrapper.instance().changeColor({
            target: {
                style: {
                    backgroundColor: 'rgb(0, 0, 0)'
                }
            }
        });

        expect(wrapper.state('color')).toEqual('#000000');
    });

    afterEach(() => {
        sandbox.restore();
    });
});