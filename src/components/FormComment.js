import React from 'react';
import './FormComment.css';

const FormComment = () => (
    <div className="formComment">
        <div contentEditable="true" className="comment" />
        <div className="flexbox">
            <input type="text" placeholder="email"/>
            <button className="btn btn-light">save</button>
        </div>
    </div>
);

export default FormComment;