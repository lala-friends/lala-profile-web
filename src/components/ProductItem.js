import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import './Products.css'

const ProductItem = (props) => {
    const handleClick = () => {
        props.history.push(`/product/${props.name}`);
    };
    return (
        <div className="project card" onClick={handleClick}>
            <img alt='제품 컨셉 이미지' className="thumbnail" src={props.imageUrl}/>
            <div className="card-body">
                <div className="text-align-center name">{props.name}</div>
                <div className="description">{props.description}</div>
                <hr/>
                <div>Developers</div>
                <div className="flexbox developer">
                    {
                        props.developers.map((developer, i) =>
                            <img alt='개발자 이미지' src={developer.imageUrl} title={developer.name} key={i}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string,
    developers: PropTypes.array
}

export default withRouter(ProductItem);