import React, {Component} from 'react';
import './FormFile.css';
import Storage from '../utils/Storage';
import PropTypes from 'prop-types';

class FormFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    handleChange = (e) => {
        if(!e.target.files[0]) {
            return;
        }

        this.setState({
            name: e.target.files[0].name
        });

        const storage = new Storage();
        storage.uploadImage(e.target.files).then(snapshot => {
            this.props.updateImage(snapshot.downloadURL);
        });
    }
    render() {
        return (
            <div className="formFile">
                <input id={`upload_file_${this.props.id}`} type="file" onChange={this.handleChange} />
                <input type="text" placeholder="file name" value={this.state.name} readOnly/>
                <label className="btn btn-light upload-button" htmlFor={`upload_file + ${this.props.id}`} >upload</label>
            </div>
        )
    }
}

FormFile.propTypes = {
    id: PropTypes.string,
    updateImage: PropTypes.func.isRequired
}

export default FormFile;