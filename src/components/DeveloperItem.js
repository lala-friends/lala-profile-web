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
        console.log(this.props)
        this.props.history.push(`/developer/${this.props.name}`);
    }

    render() { 
        return (
            <div className="person card" onClick={this.moveToDeveloperDetail}>
                <div id='color' className="background" style={{backgroundColor: `${this.props.color}`}} />
                <div className="thumbnail-background" />
                <img id='thumbnail' className="thumbnail" src={this.props.thumbnail} />
                <div className="card-body">
                    <div className="text-align-center">
                        <div id='name' className="name">{this.props.name}</div>
                        <div id='email' className="email">{this.props.email}</div>
                        <div id='introduce' className="introduce">{this.props.introduce}</div>
                    </div>
                    <hr/>
                    <div className="flexbox">
                        <a id='blog' className="social-button border-right" href={this.props.blog}>
                            <i className="mdi mdi-blogger" />
                            <div>blog</div>
                        </a>
                        <a id='github' className="social-button border-right" href={this.props.github}>
                            <i className="mdi mdi-github-face" />
                            <div>github</div>
                        </a>
                        <a id='facebook' className="social-button"  href={this.props.facebook}>
                            <i className="mdi mdi-facebook" />
                            <div>facebook</div>
                        </a>
                    </div>
                </div>
                <div id="product-button" className="project-button flexbox" onClick={this.handleClickProducts}>
                    <span>Products</span>
                </div>
                <div id="products" className={`${!this.state.isShow && 'inactive'}`}>
                    {
                        (!this.props.products)? null:
                            (this.props.products.map((product, i)=>{
                                return (
                                    <a href={`/products/${product.productId}`} className="project-item" key={i}>
                                        <img src={product.imageUrl} />
                                        <div>
                                            {product.name}
                                        </div>
                                    </a>
                                )
                            }))
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
    face: PropTypes.string,
    color: PropTypes.string,
    project: PropTypes.array
};

export default DeveloperItem;