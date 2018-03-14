import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './FormItem.css'
import FormFile from './FormFile';

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.item.id,
            title: props.item.title,
            description: props.item.description,
            imageUrl: props.item.imageUrl
        }
    }
    change = (propertyName, e) => {
        const item = {};
        item[propertyName] = e.target.value;
        this.setState(item);
    }
    updateImage(url) {
        this.setState({imageUrl: url});
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.title !== prevState.title || this.state.description !== prevState.description || this.state.imageUrl !== prevState.imageUrl) {
            this
                .props
                .changeItem(this.state, this.props.index);
        } else if (this.props.item.id !== this.state.id) {
            this.setState({id: this.props.item.id, title: this.props.item.title, description: this.props.item.description, imageUrl: this.props.item.imageUrl});
        }
    }
    deleteCard = (e) => {
        this
            .props
            .deleteItem(this.props.index);
        e.stopPropagation();
    }
    render() {
        return (
            <div className="formItem" style={[this.props.style]}>
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5em'
                }}>
                    <div>Description Card #{`${this.props.index + 1}`}
                    </div>
                    <img
                        className='delete-button'
                        onClick={(e) => this.deleteCard(e)}
                        src={require('../images/ic_delete_black.png')}
                        alt='delete button' />
                </div>
                <div className='group'>
                    <div className="fieldName">Description Image</div>
                    <div className="flexbox">
                        {!!this.state.imageUrl && <img id='imageUrl' alt='제품의 상세 설명을 위한 이미지' src={this.state.imageUrl}/>
}
                    </div>
                    <FormFile
                        id={`product_item_${this.state.id}`}
                        name={this.state.imageUrl}
                        updateImage={this
                        .updateImage
                        .bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Description Title</div>
                    <input
                        id='title'
                        value={this.state.title}
                        type="text"
                        onChange={this
                        .change
                        .bind(this, 'title')}/>
                </div>
                <div className="group">
                    <div className="fieldName">Description Detail</div>
                    <input
                        id='description'
                        value={this.state.description}
                        type="text"
                        onChange={this
                        .change
                        .bind(this, 'description')}/>
                </div>
            </div>
        )
    }
}

FormItem.propTypes = {
    changeItem: PropTypes.func.isRequired
}

export default FormItem;