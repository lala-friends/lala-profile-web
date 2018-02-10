import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './Products.css'

class ProductItem extends Component {
    handleClick = () => {
        this.props.history.push(`/product/${this.props.name}`);
    };

    render() {
        return (
            <div className="project card" onClick={this.handleClick.bind(this)}>
                <img alt='제품 컨셉 이미지' className="thumbnail" src={this.props.thumbnail}/>
                <div className="card-body">
                    <div className="text-align-center name">{this.props.name}</div>
                    <div className="description">{this.props.description}</div>
                    <hr/>
                    <div>Developers</div>
                    <div className="flexbox developer">
                        {
                            this.props.developers.map((developer, i) =>
                                <img alt='개발자 이미지' src={developer.imageUrl} title={developer.name} key={i}/>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductItem);