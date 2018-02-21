import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import {dateYYYYMMDDHHMMSS} from '../utils/DateUtil';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <div className="flexbox">
                    <div id="email" className="email">{this.props.email}</div>
                    <div id="date" className="date">{dateYYYYMMDDHHMMSS(this.props.date)}</div>
                </div>
                <div id="comment">{this.props.comment}</div>
            </div>
        )
    } 
}

Comment.propTypes = {
    email: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
};

export default Comment;