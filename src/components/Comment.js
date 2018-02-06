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

    formatDate = () => {
        const date = this.props.date;
        return date.getFullYear() + "-" + this.pad(date.getMonth() + 1, 2) + "-" + this.pad(date.getDate(), 2) 
        + " " + this.pad(date.getHours(), 2) + ":" + this.pad(date.getMinutes(), 2) + ":" + this.pad(date.getSeconds(), 2);
    };

    render() {
        return (
            <div className="comment">
                <div className="flexbox">
                    <div id="email" className="email">{this.props.email}</div>
                    <div id="date" className="date">{this.formatDate()}</div>
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