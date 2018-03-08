import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './FormItem.css'
import FormFile from './FormFile';

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: ''
        }
    }
    change = (propertyName, e) => {
        const item = {};
        item[propertyName] = e.target.value;
        this.props.changeItem(item, this.props.id);
    }
    updateImage(url) {
        this.props.changeItem({ imageUrl: url }, this.props.id);
    }
    render() {
        return (
            <div className="formItem">
                <div className="title">Description Card</div>
                <div className='group'>
                    <div className="fieldName">Description Image</div>
                    <div className="flexbox">
                    {
                        !!this.state.imageUrl && <img id='imageUrl' alt='제품의 상세 설명을 위한 이미지' src={this.state.imageUrl}/>
                    }
                    </div>
                    <FormFile id={`product_item_${this.props.id}`} updateImage={this.updateImage.bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Description Title</div>
                    <input id='title' type="text" onChange={this.change.bind(this, 'title')}/>
                </div>
                <div className="group">
                    <div className="fieldName">Description Detail</div>
                    <input id='description' type="text" onChange={this.change.bind(this, 'description')}/>
                </div>
            </div>
        )
    }
}

FormItem.propTypes = {
    changeItem: PropTypes.func.isRequired
}

export default FormItem;