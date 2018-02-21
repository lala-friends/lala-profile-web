import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import FormItem from '../components/FormItem';

describe('FormItem 컴포넌트', () => {
    test('title이 변경되면 state.title이 갱신된다.', () => {
        const wrapper = shallow(<FormItem changeItem={{id: '1'}}/>);
        wrapper.find('#title').simulate('change', {
            target: {value: 'title'}
        });

        expect(wrapper.state('title')).toEqual('title');
    });

    test('description이 변경되면 state.description이 갱신된다.', () => {
        const wrapper = shallow(<FormItem changeItem={{id: '1'}}/>);

        wrapper.find('#description').simulate('change', {
            target: {value: 'description'}
        });

        expect(wrapper.state('description')).toEqual('description');
    });

    test('updateImage이 호출되면, state.imageUrl이 갱신된다.', () => {
        const wrapper = shallow(<FormItem changeItem={{id: '1'}}/>);

        wrapper.instance().updateImage('www.imageUrl.com');

        expect(wrapper.state('imageUrl')).toEqual('www.imageUrl.com');
    });

    test('state.imageUrl가 변경될 경우, 화면에 갱신되어 보여진다.', () => {
        const wrapper = shallow(<FormItem changeItem={{id: '1'}}/>);
        wrapper.setState({
            imageUrl: 'www.image.com'
        });

        expect(wrapper.find('#imageUrl').prop('src')).toEqual('www.image.com')
    });

    test('state.imageUrl가 없을 경우, 해당 division영역이 보이지 않는다.', () => {
        const wrapper = shallow(<FormItem changeItem={{id: '1'}}/>);

        expect(wrapper.find('#imageUrl').length).toEqual(0);
    });
});