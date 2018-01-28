import React from 'react';
import Person from '../components/Person';

const About = () => {
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
    return (
        <div className="about container flexbox">
            {members.map((profile, i) => {
                return (<Person key={i}
                                thumbnail={profile.thumbnail}
                                name={profile.name}
                                comment={profile.comment}
                                blog={profile.blog}
                                github={profile.github}
                                facebook={profile.facebook}
                                color={profile.color}
                                projects={profile.projects}
                        />);
            })}
        </div>
    )
}

export default About;