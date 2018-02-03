import React from 'react';
import './FormComment.css';

const FormComment = (props) => {
    const handleClick = (e) => {
        console.log('click');
    }
    return (
        <div className="formComment">
            <div contentEditable="true" className="comment"></div>
            <div className="flexbox">
                <input type="text" placeholder="email"/>
                <button className="btn btn-light" onClick={this.handleClick}>save</button>
            </div>
        </div>
    )
}

export default FormComment;