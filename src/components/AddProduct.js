import React, {Component} from 'react';
import './AddProduct.css';
import FormProduct from './FormProduct';
import FormItem from './FormItem';
import HTTP from '../utils/http-common';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            techs: [],
            imageUrl: '',
            items: []
        };
    }
    handleCancle = () => {
        this.props.history.goBack();
    };
    handleSave = () => {
        HTTP.post('/product', this.state).then(response => {

        });
    };
    handleAdd = () => {
        const items = this.state.items;
        items.push({
            id: '',
            title: '',
            description: '',
            imageUrl: ''
        });
        this.setState({items: items});
    };
    changeProduct = (product) => {
        this.setState(product);
    };
    render() {
        return (
            <div className="add-product container">
                <div className="title">Add Product</div>
                <div className="margin-bottom-3">
                    <FormProduct changeProduct={this.changeProduct}/>
                </div>
                <div className="margin-bottom-1">
                {
                    this.state.items.map((x, i) => {
                        x.id = i.toString();
                        return (<FormItem key={i} changeItem={x}/>)
                    })
                }
                </div>
                <div id="formCard" />
                <div className="flexbox margin-bottom-3">
                    <button id='add-button' className="btn btn-light add-button" onClick={this.handleAdd}>add card</button>
                </div>
                <div className="flexbox btnGroup">
                    <button id='cancel' className="btn btn-light" onClick={this.handleCancle}>취소하기</button>
                    <button id='save' className="btn btn-light" onClick={this.handleSave}>저장하기</button>
                </div>
            </div>
        );
    }
}

export default AddProduct;