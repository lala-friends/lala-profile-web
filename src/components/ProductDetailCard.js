import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductDetailCard extends Component {
    
    render() {
        return (
            <div className="card-item row">
                <div className={`img col-md-auto ${!this.props.imageUrl && 'inactive'}`}>
                    <img alt='제품의 설명을 위한 이미지' src={this.props.imageUrl}/>
                </div>
                <div className="col text">
                    <div className="title">{this.props.title}</div>
                    <div>{this.props.description}</div>
                </div>
            </div>
        );
    }   
}

ProductDetailCard.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ProductDetailCard;