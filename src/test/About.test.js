import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import About from '../routes/About';

Enzyme.configure({adapter: new Adapter()});

describe('<About/>', () => {
    //TODO: axios mock
    const members = [{
        color: "#ffa8a8",
        thumbnail: "https://0.soompi.io/wp-content/uploads/2017/10/22073014/IU-1.jpg",
        name: "Tiffany",
        comment: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세",
        blog: "",
        github: "",
        facebook: "",
        projects: [
            {
                id: 1, 
                name: "lala-clipping", 
                thumbnail: "https://img11.androidappsapk.co/300/f/4/0/com.lalafriends.tiffany.lalaclipping.png"
            }]
    },
    {
        color: "#c3fae8",
        thumbnail: "https://0.soompi.io/wp-content/uploads/2017/10/22073014/IU-1.jpg",
        name: "Tiffany",
        comment: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세",
        blog: "",
        github: "",
        facebook: "",
        projects: []
    }];
    test('member의 수만큼 <Person/>이 그려진다', () => {
        const wrapper = Enzyme.mount(<About/>);
        expect(wrapper.find('Person')).toHaveLength(2);
        expect(wrapper.find('Person').get(0).key).toBe("0");
        expect(wrapper.find('Person').get(0).props).toEqual(members[0]);
        expect(wrapper.find('Person').get(1).key).toBe("1");
        expect(wrapper.find('Person').get(1).props).toEqual(members[1]);
    });
});