import React from 'react';
import {withRouter} from "react-router-dom";
import './Projects.css';
import Project from '../components/Project';

class Projects extends React.Component{
    handleClick = (e) => {
        this.props.history.push("/add");
    }

    render() {
        const projects = [{
            id: 1,
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
            <div className="projects">
                <div className="container">
                    <button className="btn btn-outline-dark add-button" onClick={this.handleClick.bind(this)}>Add</button>
                </div>
                
                {
                    projects.map((project, i) => 
                        <Project key={i}
                                id={project.id}
                                thumbnail={project.thumbnail}
                                name={project.name}
                                description={project.description}
                                developers={project.developers}/>
                    )
                }
                
            </div>
        );
    }
}

export default withRouter(Projects);