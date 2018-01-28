import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Projects from '../routes/Projects';

Enzyme.configure({adapter: new Adapter()});

describe('<Projects />', () => {
    // TODO: mock
    const projects = [{
        thumbnail: "https://t1.daumcdn.net/friends/www/talk/kakaofriends_talk.png",
        name: "lala-clipping",
        description: "url이 포함된 텍스트를 복사하면 앱에 임시저장.",
        developers: [{
            id: 1,
            name: "Tiffany",
            thumbnail: "http://img.insight.co.kr/static/2017/10/22/700/6qag9yfg08uhhd5kk68m.jpg"
        }, {
            id: 2,
            name: "Ryon",
            thumbnail: "http://cfile2.uf.tistory.com/image/2449374B5607FC8D06579D"
        }]
    }];
    test('project의 수만큼 project 컴포넌트가 그려진다', () => {
        const wrapper = Enzyme.shallow(<Projects/>);
        expect(wrapper.find('Project')).toHaveLength(1);
        expect(wrapper.find('Project').get(0).key).toBe("0");
        expect(wrapper.find('Project').get(0).props).toEqual(projects[0]);
    });
});