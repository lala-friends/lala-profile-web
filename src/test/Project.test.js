import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Project from '../components/Project';

Enzyme.configure({adapter: new Adapter()});

describe('<Project />', () => {
    const project = {
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
    };
    test('props로 받은 프로젝트 정보가 화면에 렌더링 된다.', () => {
        const wrapper = Enzyme.shallow(
            <Project key={1}  
                    thumbnail={project.thumbnail}
                    name={project.name}
                    description={project.description}
                    developers={project.developers}/>
        );

        expect(wrapper.find('.project')).toHaveLength(1);
        expect(wrapper.find('.project .thumbnail').props().src).toBe('https://t1.daumcdn.net/friends/www/talk/kakaofriends_talk.png');
        expect(wrapper.find('.project .name').props().children).toBe('lala-clipping');
        expect(wrapper.find('.project .description').props().children).toBe('url이 포함된 텍스트를 복사하면 앱에 임시저장.');
        expect(wrapper.find('.project .developer img')).toHaveLength(2);
        expect(wrapper.find('.project .developer img').get(0).props.src).toBe('http://img.insight.co.kr/static/2017/10/22/700/6qag9yfg08uhhd5kk68m.jpg');
        expect(wrapper.find('.project .developer img').get(0).props.title).toBe('Tiffany');
        expect(wrapper.find('.project .developer img').get(1).props.src).toBe('http://cfile2.uf.tistory.com/image/2449374B5607FC8D06579D');
        expect(wrapper.find('.project .developer img').get(1).props.title).toBe('Ryon');

    });
});