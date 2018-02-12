import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import './Products.css'

class ProductItem extends Component {
    handleClick = () => {
        this.props.history.push(`/product/${this.props.name}`);
    };

    render() {
        return (
            <div className="project card" onClick={this.handleClick.bind(this)}>
                <img alt='제품 컨셉 이미지' className="thumbnail" src={this.props.imageUrl}/>
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

ProductItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string,
    developers: PropTypes.array
}

export default withRouter(ProductItem);