import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './Products.css';
import HTTP from '../utils/http-common';
import ProductItem from '../components/ProductItem';

class Products extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        HTTP.get('/products').then(response => {
            this.setState({products: response.data});
        });
    }
    handleClick = () => {
        this.props.history.push("/product/new");
    };
    render() {
        return (
            <div className="product">
                <div className="container">
                    <button className="btn btn-light add-button" onClick={this.handleClick}>Add Product</button>
                </div>

                <div className="flexbox container">
                {
                    this.state.products.map((product, key) =>
                        <ProductItem key={key}
                                     id={product.productId}
                                     imageUrl={product.imageUrl}
                                     name={product.name}
                                     description={product.introduce}
                                     developers={product.persons}/>
                    )
                }
                </div>
            </div>
        );
    }
}

export default withRouter(Products);