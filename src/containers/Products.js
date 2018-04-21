import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
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
        console.log(HTTP);
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