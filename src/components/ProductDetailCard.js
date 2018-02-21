import React from 'react';
import PropTypes from 'prop-types';

const ProductDetailCard = (props) => {
    return (
        <div className="card-item row">
            <div className={`img col-md-auto ${!props.imageUrl && 'inactive'}`}>
                <img id='productDescriptionImage' alt='제품의 설명을 위한 이미지' src={props.imageUrl}/>
            </div>
            <div className="col text">
                <div id='productDescriptionTitle' className="title">{props.title}</div>
                <div id='productDescriptionDetail'>{props.description}</div>
            </div>
        </div>
    );
}   

ProductDetailCard.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ProductDetailCard;