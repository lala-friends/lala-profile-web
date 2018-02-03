import React from 'react';
import './Comment.css';

class Comment extends React.Component {
    pad = (number, width) => {
        if (number.toString().length >= width) {
            return number.toString();
        } else {
            return number.toString().padStart(2, "0");
        }
    }

    formatDate = () => {
        const date = this.props.date;
        return date.getFullYear() + "-" + this.pad(date.getMonth() + 1, 2) + "-" + this.pad(date.getDate(), 2) 
        + " " + this.pad(date.getHours(), 2) + ":" + this.pad(date.getMinutes(), "0") + ":" + this.pad(date.getSeconds(), "0");
    }

    render() {
        return (
            <div className="comment">
                <div className="flexbox">
                    <div className="email">{this.props.email}</div>
                    <div className="date">{this.formatDate()}</div>
                </div>
                <div>{this.props.comment}</div>
            </div>
        )
    } 
}

export default Comment;