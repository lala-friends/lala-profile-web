import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
    render() {
        return (
            <div className="person card">
                <img className="thumbnail" src="https://0.soompi.io/wp-content/uploads/2017/10/22073014/IU-1.jpg" />
                <div className="card-body">
                    <div className="text-align-center">
                        <div>Tiffany</div>
                        <div>yoonyoungkim89@gmail.com</div>
                    </div>
                    <hr/>
                    <div>
                        하고 싶은 말 우헤헤 길어지면 어떻게 되는지 보기 위해서 길게 쓴다구
                    </div>
                    <hr/>
                    <div className="flexbox">
                        <div>#다육이</div>
                        <div>#펌프</div>
                        <div>#개발</div>
                        <div>#요리하하</div>
                        <div>#사업</div>
                        <div>#다육식물</div>
                        <div>#펌프</div>
                        <div>#개발</div>
                        <div>#요리</div>
                        <div>#사업</div>
                    </div>
                    <button className="btn btn-light project-button" type="button">Projects</button>
                </div>
            </div>
        )
    }
}

export default Person;