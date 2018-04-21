import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DeveloperItem.css';

class DeveloperItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    handleClickProducts = (e) => {
        e.stopPropagation();
        this.setState({
            isShow: !this.state.isShow
        });
    };

    moveToDeveloperDetail = () => {
        this
            .props
            .history
            .push(`/developer/${this.props.name}`);
    }
    editDeveloper = (e) => {
        console.log('edit');
        e.stopPropagation();
    }
    deleteDeveloper = (e) => {
        console.log('delete');
        e.stopPropagation();
    }
    render() {
        return (
            <div className="person">
            <div
                id='developerCard'
                className="card"
                onClick={this.moveToDeveloperDetail}>
                <div
                    id='color'
                    className="background"
                    style={{
                    backgroundColor: `${this.props.color}`
                }}>
                    <div className="thumbnail-background">
                        <img
                            alt='개발자 프로필 이미지'
                            id='thumbnail'
                            className="thumbnail"
                            src={this.props.thumbnail}/>
                    </div>
                </div>

                <div className="card-body">
                    <div className="text-align-center">
                        <div id='name' className="name">{this.props.name}</div>
                        <div id='email' className="email">{this.props.email}</div>
                        <div id='introduce' className="introduce">{this.props.introduce}</div>
                    </div>
                    <hr/>
                    <div className='flexbox'>
                        <a id='blog' className="social-button border-right" href={this.props.blog}>
                            <i className="mdi mdi-blogger"/>
                            <div>blog</div>
                        </a>
                        <a id='github' className="social-button border-right" href={this.props.github}>
                            <i className="mdi mdi-github-face"/>
                            <div>github</div>
                        </a>
                        <a id='facebook' className="social-button" href={this.props.facebook}>
                            <i className="mdi mdi-facebook"/>
                            <div>facebook</div>
                        </a>
                    </div>
                </div>
                <div
                    id="product-button"
                    className="project-button flexbox"
                    onClick={this.handleClickProducts}>
                    <span>Products</span>
                </div>
            </div>
            <div id="products" className={`${ !this.state.isShow? 'slide-out':'slide-in'}`}>
                    {this.props.products && this
                        .props
                        .products
                        .map((product, key) => (
                            <a href={`/product/${product.productId}`} className="project-item" key={key}>
                                <img alt='제품 컨셉 이미지' src={product.imageUrl}/>
                                <div>
                                    {product.name}
                                </div>
                            </a>
                        ))
}
                </div>
            </div>
        )
    }
}

DeveloperItem.propTypes = {
    thumbnail: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    introduce: PropTypes.string,
    blog: PropTypes.string,
    github: PropTypes.string,
    facebook: PropTypes.string,
    color: PropTypes.string,
    products: PropTypes.array
};

export default DeveloperItem;