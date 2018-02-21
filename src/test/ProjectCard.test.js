import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import ProjectCard from '../components/ProjectCard';
import {colorPalette} from '../utils/StyleUtil';

describe('ProjectCard', () => {
    test('ProjectCard컴포넌트로 넘겨진 props가 화면에 렌더링된다.', () => {
        const wrapper = shallow(<ProjectCard color={colorPalette[0]}
                                             name='알리안츠 프로젝트'
                                             from={new Date('2017-01-01')}
                                             to={new Date('2018-01-01')}
                                             introduce='간단소개'
                                             roles='지급'
                                             description='자세한 소개'
                                             techs={['java', 'oracle']}
                                             link='www.al.com' />   );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#projectName').text()).toEqual('알리안츠 프로젝트');
        expect(wrapper.find('#projectPeriod').text()).toEqual('2017-01-01 - 2018-01-01');
        expect(wrapper.find('#role').text()).toEqual('');
        expect(wrapper.find('#projectSummary').text()).toEqual('간단소개');
        expect(wrapper.find('#projectDescription').text()).toEqual('자세한 소개');
        expect(wrapper.find('#techs .badge').length).toEqual(2);
        expect(wrapper.find('#techs .badge').at(0).text()).toEqual('java');
        expect(wrapper.find('#techs .badge').at(1).text()).toEqual('oracle');
    });
    test('props로 전달되지 않은 요소는 화면에 보여지지 않는다.', () => {
        const wrapper = shallow(<ProjectCard color={colorPalette[0]}
                                             name='알리안츠 프로젝트'
                                             from={new Date('2017-01-01')}
                                             to={new Date('2018-01-01')}
                                             roles='지급' />   );
        expect(wrapper.find('#projectSummary').parent().props().className).toContain('inactive');
        expect(wrapper.find('#projectDescription').parent().props().className).toContain('inactive');
        expect(wrapper.find('#link').parent().props().className).toContain('inactive');
        expect(wrapper.find('#techs').parent().props().className).toContain('inactive');
    });
});