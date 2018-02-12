import React, {Component} from 'react';
import './FormItem.css'
import FormFile from './FormFile';

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            imageUrl: ''
        }
    }
    change = (propertyName, e) => {
        const state = {};
        state[propertyName] = e.target.value;
        this.setState(state);
    }

    updateImage(url) {
        this.setState({
            imageUrl: url
        });
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
                    <input type="text" onChange={this.change.bind(this, 'title')}/>
                </div>
                <div className="group">
                    <div className="fieldName">Description Detail</div>
                    <input type="text" onChange={this.change.bind(this, 'description')}/>
                </div>
            </div>
        )
    }
}

export default FormItem;