import React, {Component} from 'react';
import './Project.css'

class Project extends Component {
    render() {
        return (
            <div className="project card">
                <img className="thumbnail" src="https://t1.daumcdn.net/friends/www/talk/kakaofriends_talk.png"/>
                <div className="card-body">
                    <div className="text-align-center">lala-clipping</div>
                    <div> url이 포함된 텍스트를 복사하면 앱에 임시저장.</div>
                    <hr/>
                    <div>dev.</div>
                    <div className="flexbox developer">
                        <img src="http://img.insight.co.kr/static/2017/10/22/700/6qag9yfg08uhhd5kk68m.jpg" title="tiffany"/>
                        <img src="http://cfile2.uf.tistory.com/image/2449374B5607FC8D06579D" title="ryon"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;