import React, {Component} from 'react';
import './FormComment.css';

class FormComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            comment: '',
            date: ''
        }
    }

    handleChangeComment = (e) => {
        this.setState({
            comment: e.target.value
        });
    };

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };
    handleClick = () => {
        console.log('NOT YET');
        // this.setState({
        //     date: new Date()
        // }, () => {
        //     HTTP.post('/products/1/comments', this.state, (status, response) => {
        //
        //     });
        // })
    };
    render() {
        return (
            <div className="formComment">
                <textarea className="comment" onChange={this.handleChangeComment}/>
                <div className="flexbox">
                    <input type="text" placeholder="email" onChange={this.handleChangeEmail}/>
                    <button onClick={this.handleClick} className="btn btn-light">save</button>
                </div>
            </div>
        );
    }
}

export default FormComment;