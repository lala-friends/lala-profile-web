import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
    return (
        <div className='card'> 
            <div className='image-wrapper'>
                <img alt='제품 컨셉 이미지' className='square-image' src={props.imageUrl} />
            </div>

            <div className='item-title'>{props.name}</div>
            <div className='group'>
                <div className='fieldName'>한줄소개</div>
                <div>{props.introduce}</div>
            </div>
            <div className={`group ${props.techs.length===0&&'inactive'}`}>
                <div className='fieldName'>기술 스택</div>
                {
                    props.techs.map((tech, key) => (
                        <div className="badge badge-pill badge-info" key={key}>{tech}</div>
                    ))
                }
            </div>
            <div className={`group ${props.role && 'inactive'}`}>
                <div className='fieldName'>역할</div>
                <div>{props.role}</div>
            </div>

        </div>
    )
}

ProductCard.PropTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    introduce: PropTypes.string,
    techs: PropTypes.array,
    role: PropTypes.string
}

export default ProductCard;