import React from 'react';
import './FormItem.css'
import FormFile from './FormFile';

class FormItem extends React.Component {
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
        console.log('item');
        console.log(url);
    }
    render() {
        return (
            <div className="formItem">
                <div className="title">Description Card</div>
                <div className='group'>
                    <div className="fieldName">Description Image</div>
                    {
                        this.state.image? <img src={this.state.image}/>: null
                    }
                    <FormFile key={this.props.changeItem.id} updateImage={this.updateImage.bind(this)}/>
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