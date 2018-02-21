import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
    moveToProductDetail = () => {
        this.props.history.push(`/product/${this.props.name}`);
    }
    render() {
        return (
            <div className='card' onClick={this.moveToProductDetail}> 
                <div className='image-wrapper'>
                    <img id='imageUrl' alt='제품 컨셉 이미지' className='square-image' src={this.props.imageUrl} />
                </div>

                <div id='productName' className='item-title'>{this.props.name}</div>
                <div className={`group ${!this.props.introduce&&'inactive'}`}>
                    <div className='fieldName'>한줄소개</div>
                    <div id='productSummary'>{this.props.introduce}</div>
                </div>
                <div className={`group ${!this.props.techs&&'inactive'}`}>
                    <div className='fieldName'>기술 스택</div>
                    <div id='techs'>
                    {
                        this.props.techs && this.props.techs.map((tech, key) => (
                            <div className="badge badge-pill badge-info" key={key}>{tech}</div>
                        ))
                    }
                    </div>
                </div>
                <div className={`group ${!this.props.role && 'inactive'}`}>
                    <div className='fieldName'>역할</div>
                    <div id='role'>{this.props.role}</div>
                </div>

            </div>
        )
    }
}

ProductCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    introduce: PropTypes.string,
    techs: PropTypes.array,
    role: PropTypes.string
}

export default ProductCard;