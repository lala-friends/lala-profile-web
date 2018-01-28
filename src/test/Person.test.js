import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Person from '../components/Person';

Enzyme.configure({adapter: new Adapter()});

describe('<Person />', () => {
    const person = {
        color: "#ffa8a8",
        thumbnail: "https://0.soompi.io/wp-content/uploads/2017/10/22073014/IU-1.jpg",
        name: "Tiffany",
        email: "yoonyoungkim89@gmail.com",
        comment: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세",
        blog: "www.blog.com",
        github: "www.github.com",
        facebook: "www.facebook.com",
        projects: [
            {
                id: 1, 
                name: "lala-clipping", 
                thumbnail: "https://img11.androidappsapk.co/300/f/4/0/com.lalafriends.tiffany.lalaclipping.png"
            }]
    };

    test('props로 받은 person정보가 화면에 보여진다.', () => {
        const wrapper = Enzyme.shallow(
            <Person key={1}
                    thumbnail={person.thumbnail}
                    name={person.name}
                    email={person.email}
                    comment={person.comment}
                    blog={person.blog}
                    github={person.github}
                    facebook={person.facebook}
                    color={person.color}
                    projects={person.projects}/>);

        expect(wrapper.find('.person')).toHaveLength(1);
        expect(wrapper.find('.background').prop('style').backgroundColor).toBe('#ffa8a8');
        expect(wrapper.find('.name').props().children).toBe('Tiffany');
        expect(wrapper.find('.email').props().children).toBe('yoonyoungkim89@gmail.com');
        expect(wrapper.find('.comment').props().children).toBe('동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세');
        expect(wrapper.find('.social-button').get(0).props.href).toBe('www.blog.com');
        expect(wrapper.find('.social-button').get(1).props.href).toBe('www.github.com');
        expect(wrapper.find('.social-button').get(2).props.href).toBe('www.facebook.com');
        expect(wrapper.state().isShow).toBe(false);
        expect(wrapper.find('.inactive')).toHaveLength(1);
    });

    test('project 버튼을 클릭했을 때, 프로젝트 리스트가 보여진다', () => {
        const wrapper = Enzyme.shallow(
            <Person key={1}
                    thumbnail={person.thumbnail}
                    name={person.name}
                    email={person.email}
                    comment={person.comment}
                    blog={person.blog}
                    github={person.github}
                    facebook={person.facebook}
                    color={person.color}
                    projects={person.projects}/>);
        
        wrapper.find('.project-button').simulate('click');
        expect(wrapper.state().isShow).toBe(true);
        expect(wrapper.find('.inactive')).toHaveLength(0);
        expect(wrapper.find('.project-item')).toHaveLength(1);
        expect(wrapper.find('.project-item a').get(0).props.href).toBe('/project/1');
        expect(wrapper.find('.project-item img').get(0).props.src).toBe('https://img11.androidappsapk.co/300/f/4/0/com.lalafriends.tiffany.lalaclipping.png');
        expect(wrapper.find('.project-item div').get(0).props.children).toBe('lala-clipping');
    });

    test('project 아이템을 클릭했을 때, Detail컴포넌트로 이동한다', () => {

    });
});