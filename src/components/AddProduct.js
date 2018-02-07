import React, {Component} from 'react';
import './AddProduct.css';
import FormProject from './FormProduct';
import FormItem from './FormItem';
import HTTP from '../utils/http-common';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            tags: [],
            image: '',
            items: [
            ]
        };
    }
    handleCancle = () => {
        this.props.history.goBack();
    };
    handleSave = () => {
        HTTP.post('/products/new', this.state, (status, response) => {
            console.log(status);
            console.log(response);
        });
    };
    handleAdd = () => {
        const items = this.state.items;
        items.push({
            id: '',
            title: '',
            description: '',
            image: ''
        });
        this.setState({items: items});
    };

    render() {
        return (
            <div className="add-product container">
                <div className="title">Add Product</div>
                <div className="margin-bottom-3">
                    <FormProject project={this.state}/>
                </div>
                <div className="margin-bottom-1">
                {
                    this.state.items.map((x, i) => {
                        x.id = i;
                        return (<FormItem key={i} changeItem={x}/>)
                    })
                }
                </div>
                <div id="formCard" />
                <div className="flexbox margin-bottom-3">
                    <button id='add-button' className="btn btn-light add-button" onClick={this.handleAdd}>add card</button>
                </div>
                <div className="flexbox btnGroup">
                    <button id='cancel-button' className="btn btn-light" onClick={this.handleCancle}>취소하기</button>
                    <button id='save-button' className="btn btn-light" onClick={this.handleSave}>저장하기</button>
                </div>
            </div>
        );
    }
}

export default AddProduct;