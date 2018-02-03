import React, {Component} from 'react';
import './FormAdd.css';
import FormFile from './FormFile';

class FormAdd extends Component {
    render() {
        return (
            <div className="form card">
                <div className="form-header"></div>
                <div className="card-body">
                    <div>Add Project</div>
                    <FormFile/>
                    <input className="input-text" type="text" placeholder="title"/>
                    <textarea placeholder="description"/>
                    <input className="input-text" type="text" placeholder="dev"/>
                    <button type="button" className="btn btn-light submit">등록하기</button>
                </div>
            </div>
        )
    }
}

export default FormAdd;