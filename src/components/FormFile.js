import React, {Component} from 'react';
import './FormFile.css';

class FormFile extends Component {
    render() {
        return (
            <div className="formFile">
                <input type="file" />
                <input type="text" placeholder="file name" readOnly/>
                <button className="btn btn-light upload-button" type="file"> upload </button>
            </div>
        )
    }
}

export default FormFile;