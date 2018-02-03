import React from 'react';
import './FormItem.css'
import FormFile from './FormFile';

const FormItem = () => {

    return (
        <div className="formItem">
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

export default FormItem;