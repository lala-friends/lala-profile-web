import React, {Component} from 'react';
import './AddProduct.css';
import HTTP from '../utils/http-common';
import FormProduct from '../components/FormProduct';
import DraggableImpl from '../components/DraggableImpl';

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
            details: [],
            count: 1
        };
    }
    handleCancle = () => {
        this
            .props
            .history
            .goBack();
    };
    handleSave = () => {
        HTTP.post('/products', JSON.stringify(this.state))
            .then(response => {
                console.log('success');
            });
    };
    handleAdd = () => {
        this.setState({
            details: this
                .state
                .details
                .concat({id: this.state.count, title: '', description: '', imageUrl: ''}),
            count: this.state.count + 1
        });
    };
    changeProduct = (product) => {
        console.log(product);
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
                    <DraggableImpl
                        items={this.state.details}
                        changeItems={(items) => this.changeProduct(items)}/>
                </div>
                <div id="formCard"/>
                <div className="flexbox margin-bottom-3">
                    <button
                        id='add-button'
                        className="btn btn-light add-button"
                        onClick={this.handleAdd}>add card</button>
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