import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

class Comment extends Component {
    pad = (number, width) => {
        let numberStr = number.toString();
        if (numberStr.length >= width) {
            return numberStr;
        } else {
            for(let i=width-numberStr.length; i>0; i--)
                numberStr = '0' + numberStr;
            return numberStr;
        }
    };

    render() {
        return (
            <div className="comment">
                <div className="flexbox">
                    <div id="email" className="email">{this.props.email}</div>
                    <div id="date" className="date">{this.props.date}</div>
                </div>
                <div id="comment">{this.props.comment}</div>
            </div>
        )
    } 
}

Comment.propTypes = {
    email: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.any.isRequired
};

export default Comment;