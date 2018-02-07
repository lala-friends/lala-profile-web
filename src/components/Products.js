import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './Products.css';
import ProductItem from './ProductItem';
import Service from '../utils/Service';
class Products extends Component{
    constructor(props) {
        super(props);
        this.service = new Service();
        this.state ={
            products: []
        };
        this.service.get('/products', (status, response) => {
            console.log(response)
            this.setState({products: response});
        });
    }
    handleClick = () => {
        this.props.history.push("/products/new");
    };

    render() {
        return (
            <div className="product">
                <div className="container">
                    <button className="btn btn-light add-button" onClick={this.handleClick.bind(this)}>Add Product</button>
                </div>

                <div className="flexbox container">
                {
                    this.state.products.map((product, key) =>
                        <ProductItem key={key}
                                     id={product.productId}
                                     thumbnail={product.imageUrl}
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