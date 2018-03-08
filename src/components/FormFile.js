import React, {Component} from 'react';
import './FormFile.css';
import {uploadImage} from '../utils/Storage';
import PropTypes from 'prop-types';

class FormFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    handleChange = (e) => {
        if(!e.target.files || e.target.files.length===0) {
            return;
        }
        
        const file = e.target.files[0];
    
        this.setState({
            name: file.name
        });

        uploadImage(file).then(snapshot => {
            this.props.updateImage(snapshot.downloadURL);
        });
    }
    render() {
        return (
            <div className="formFile">
                <input id={`upload_file_${this.props.id}`} type="file" onChange={this.handleChange} />
                <input type="text" placeholder="file name" value={this.state.name} readOnly/>
                <label className="btn btn-light upload-button" htmlFor={`upload_file_${this.props.id}`} >upload</label>
            </div>
        )
    }
}

FormFile.propTypes = {
    id: PropTypes.string,
    updateImage: PropTypes.func.isRequired
}

export default FormFile;