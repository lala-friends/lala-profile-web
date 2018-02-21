import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import AddDeveloper from '../components/AddDeveloper';
import * as StyleUtil from '../utils/StyleUtil';
import sinon from 'sinon';
import HTTP from '../utils/http-common';

describe('<AddDeveloper />', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
   
    test('텍스트 필드를 입력하면, 해딩 필드의 state 값이 입력한 텍스트로 변경된다.', () => {
        const wrapper = shallow(<AddDeveloper />);
        
        wrapper.find('#name').simulate('change', { target: {value: 'tiffany'}});
        wrapper.find('#email').simulate('change', { target: {value: 'tiffany@email.com'}});
        wrapper.find('#introduce').simulate('change', { target: {value: 'tiffany입니다.'}});
        wrapper.find('#blog').simulate('change', { target: {value: 'www.blog.com'}});
        wrapper.find('#github').simulate('change', { target: {value: 'www.github.com'}});
        wrapper.find('#facebook').simulate('change', { target: {value: 'www.facebook.com'}});

        expect(wrapper.state('name')).toEqual('tiffany');
        expect(wrapper.state('email')).toEqual('tiffany@email.com');
        expect(wrapper.state('introduce')).toEqual('tiffany입니다.');
        expect(wrapper.state('blog')).toEqual('www.blog.com');
        expect(wrapper.state('github')).toEqual('www.github.com');
        expect(wrapper.state('facebook')).toEqual('www.facebook.com');
    });

    test('Tags를 입력하면, 띄어쓰기 단위로 array화되어 state의 tags 값이 변경된다.', () => {
        const wrapper = shallow(<AddDeveloper />);
        wrapper.find('#tags').simulate('change', { target: {value: 'tag1 tag2 tag3'}});
        expect(wrapper.state('tags')).toEqual(['tag1', 'tag2', 'tag3']);
    });

    test('updateImage가 실행되면, state의 imageUrl값이 변경된다.', () => {
        const wrapper = shallow(<AddDeveloper />);

        wrapper.instance().updateImage("www.imageUrl.com");

        expect(wrapper.state('imageUrl')).toEqual('www.imageUrl.com');
    });

    test('changeColor가 호출되면, state의 color값이 변경된다.', () => {
        const stub = sandbox.stub(StyleUtil, 'rgbToHexa');
        stub.withArgs('rgb(0, 0, 0)').returns('#000000');
        
        const wrapper = shallow(<AddDeveloper />);
        wrapper.instance().changeColor({
            target: {
                style: {
                    backgroundColor: 'rgb(0, 0, 0)'
                }
            }
        });
        
        expect(wrapper.state('color')).toEqual('#000000');
    });

    test('취소버튼이 클릭되면, 이전화면으로 돌아간다.', () => {
        const goBack = jest.fn();
        const wrapper = shallow(<AddDeveloper history={{goBack: goBack}}/>);

        wrapper.find('#cancel').simulate('click');

        expect(goBack).toHaveBeenCalled();
    });

    test('저장버튼이 클릭되면, POST /developer를 호출하여 저장한다.', () => {
        const stub = sandbox.stub(HTTP, 'post');
        stub.withArgs('/developer').returns(Promise.resolve({}));
        
        const wrapper = shallow(<AddDeveloper/>);
        wrapper.find('#save').simulate('click');

        expect(stub.called).toEqual(true);
    });

    afterEach(() => {
        sandbox.restore();
    })
});