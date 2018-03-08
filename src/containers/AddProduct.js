import React, {Component} from 'react';
import './AddProduct.css';
import HTTP from '../utils/http-common';
import FormProduct from '../components/FormProduct';
import FormItem from '../components/FormItem';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            introduce: '',
            techs: [],
            repColor: '',
            imageUrl: '',
            developers: [],
            details: []
        };
    }
    handleCancle = () => {
        this.props.history.goBack();
    };
    handleSave = () => {
        console.log(this.state);
        // HTTP.post('/product', this.state).then(response => {

        // });
    };
    handleAdd = () => {
        const details = this.state.details;
        details.push({
            title: '',
            description: '',
            imageUrl: ''
        });
        this.setState({details});
    };
    changeProduct = (product) => {
        this.setState(product);
    };
    changeItem = (item, index) => {
        const details = this.state.details;
        const result = details.slice(0, index);
        result.push(item);
        result.
        this.setState({
            details: details
        })
    }
    render() {
        return (
            <div className="add-product container">
                <div className="title">Add Product</div>
                <div className="margin-bottom-3">
                    <FormProduct changeProduct={this.changeProduct}/>
                </div>
                <div className="margin-bottom-1">
                {
                    this.state.details.map((x, i) => {
                        return (<FormItem key={i} id={i} changeItem={this.changeItem}/>)
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