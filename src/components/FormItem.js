import React, {Component} from 'react';
import './FormItem.css'
import FormFile from './FormFile';

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }
    changeTitle(e) {
        this.props.changeItem.title = e.target.value;
    }
    changeDescription(e) {
        this.props.changeItem.description = e.target.value;
    }

    updateImage(url) {
        this.setState({
            image: url
        });
        this.props.changeItem.image = url;
    }
    render() {
        return (
            <div className="formItem">
                <div className="title">Description Card</div>
                <div className='group'>
                    <div className="fieldName">Description Image</div>
                    <div className="flexbox">
                    {
                        this.state.image? <img alt='제품의 상세 설명을 위한 이미지' src={this.state.image}/>: null
                    }
                    </div>
                    <FormFile id={this.props.changeItem.id} updateImage={this.updateImage.bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Description Title</div>
                    <input type="text" onChange={this.changeTitle.bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Description Detail</div>
                    <input type="text" onChange={this.changeDescription.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default FormItem;