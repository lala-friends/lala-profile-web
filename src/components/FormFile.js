import React, {Component} from 'react';
import './FormFile.css';
import Storage from '../utils/Storage';

class FormFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }
    handleChange = (e) => {
        const storage = new Storage();
        storage.uploadImage(e.target.files);
    }
    render() {
        return (
            <div className="formFile">
                <input id="upload_file" type="file" onChange={this.handleChange.bind(this)}/>
                <input type="text" placeholder="file name" readOnly/>
                <label className="btn btn-light upload-button" htmlFor="upload_file">upload</label>
            </div>
        )
    }
}

export default FormFile;