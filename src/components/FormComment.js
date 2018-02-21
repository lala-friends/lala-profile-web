import React, {Component} from 'react';
import './FormComment.css';

import HTTP from '../utils/http-common';

class FormComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            comment: '',
            date: ''
        }
    }

    change = (propertyName, e) => {
        const state = {};
        state[propertyName] = e.target.value;
        this.setState(state);
    }
    
    handleClick = () => {
        HTTP.post('/comment', this.state).then(response => {

        });
    };
    render() {
        return (
            <div className="formComment">
                <textarea id='comment' className="comment" onChange={this.change.bind(this, 'comment')}/>
                <div className="flexbox">
                    <input id='email' type="text" placeholder="email" onChange={this.change.bind(this, 'email')}/>
                    <button id='save' onClick={this.handleClick} className="btn btn-light">save</button>
                </div>
            </div>
        );
    }
}

export default FormComment;