import React, {Component} from 'react';

class ProductCard extends Component {
    render() {
        return (
            <div className='card'> 
                <div className='item-title'>{this.props.name}</div>
                <div className='flexbox'>
                    <div className='image-wrapper'>
                        <img alt='제품 컨셉 이미지' className='square-image' src={this.props.imageUrl} />
                    </div>
                    <div>
                        <div className='group'>
                            <div className='fieldName'>한줄소개</div>
                            <div>{this.props.introduce}</div>
                        </div>
                        <div className='group'>
                            <div className='fieldName'>기술 스택</div>
                            {
                                this.props.techs.map((tech, key) => (
                                    <div className="badge badge-pill badge-info" key={key}>{tech}</div>
                                ))
                            }
                        </div>
                        <div className='group'>
                            <div className='fieldName'>역할</div>
                            <div>{this.props.role}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;