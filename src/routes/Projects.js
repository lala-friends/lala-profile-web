import React from 'react';
import Project from '../components/Project';

const Projects = () => {
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
    return (
        <div>
            {
                projects.map((project, i) => 
                    <Project key={i}
                            thumbnail={project.thumbnail}
                            name={project.name}
                            description={project.description}
                            developers={project.developers}/>
                )
            }
            
        </div>
    )
}

export default Projects;