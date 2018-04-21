import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './ProductItem.css'

class ProductItem extends Component {
    moveToProduct = () => {
        this.props
            .history
            .push(`/product/${this.props.name}`);
    };
    editProduct = (e) => {
        console.log('edit');
        e.stopPropagation();
    }
    deleteProduct = (e) => {
        console.log('delete');
        e.stopPropagation();
    }
    moveToDeveloper = (name) => {
        this.props
            .history
            .push(`/developer/${name}`);
    }
    render() {
        return (
            <div id='productCard' className="project card" onClick={() => this.moveToProduct()}>
                <div className='thumbnail-wrapper'>
                    <img
                        id='productImage'
                        alt='제품 컨셉 이미지'
                        className="thumbnail"
                        src={this.props.imageUrl}/>
                </div>
                <div className="card-body">
                    <div id='productName' className="text-align-center name">{this.props.name}</div>
                    <div id='productDescription' className="description">{this.props.description}</div>                    
                    {
                        this.props.developers.length > 0 && (
                            <div>
                                <hr/>
                                <div>Developers</div>
                                <div className='flexbox developer'>
                                    <div id='developers' className='developers'>
                                        {this.props
                                            .developers
                                            .map((developer, i) => <img alt='개발자 이미지' onClick={() => this.moveToDeveloper(developer.name)} src={developer.imageUrl} title={developer.name} key={i}/>)}
                                    </div>
                                </div>
                            </div>
                        )
                    }                    
                </div>
            </div>
        );
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