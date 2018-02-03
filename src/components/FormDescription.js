import React from 'react';
import './FormDescription.css'
import FormFile from './FormFile';

const FormDescription = () => {

    return (
        <div className="formDescription">
            <div className="title">Description Card</div>
            <div className='group'>
                <div className="fieldName">Description Image</div>
                <FormFile />
            </div>
            <div className="group">
                <div className="fieldName">Description Title</div>
                <input type="text" />
            </div>
            <div className="group">
                <div className="fieldName">Description Detail</div>
                <input type="text" />
            </div>
        </div>
    )
}

export default FormDescription;