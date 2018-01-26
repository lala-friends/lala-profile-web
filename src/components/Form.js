import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return (
            <div className="form card">
                <div className="form-header"></div>
                <div className="card-body">
                    <div>Add Project</div>
                    <div className="thumbnail-box">
                        <input className="input-text" type="text" placeholder="file name" readOnly/>
                        <label htmlFor="thumbnail">업로드</label>
                        <input id="thumbnail" className="input-file" type="file" placeholder="image"/>
                        
                    </div>
                    <input className="input-text" type="text" placeholder="title"/>
                    <textarea placeholder="description"/>
                    <input className="input-text" type="text" placeholder="dev"/>
                    <button type="button" className="btn btn-light submit">등록하기</button>
                </div>
            </div>
        )
    }
}

export default Form;