import React, {Component} from 'react';
import HTTP from '../utils/http-common';
import ProductDetailCard from '../components/ProductDetailCard';
import Comment from '../components/Comment';
import FormComment from '../components/FormComment';
import './ProductDetail.css';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            introduce: '',
            imageUrl: '',
            repColor: '',
            techs: [],
            details: [],
            comments: []
        };
    }

    componentDidMount() {
        HTTP.get(`/product/${this.props.match.params.name}`).then(response => {
            const product = response.data
            this.setState({
                id: product.productId,
                name: product.name,
                introduce: product.introduce,
                imageUrl: product.imageUrl,
                color: product.repColor,
                techs: product.techs,
                details: product.productDetails,
                comments: product.comments
            });
        });
    }
    render() {
        return (
            <div className="detail container">
                <div className="summary">
                    <div id='productName' className="title">
                        {this.state.name}
                    </div>
                    <div id='productDescription' className="description">
                        {this.state.introduce}
                    </div>
                    <div id='tags' className="tags">
                        {
                            this.state.techs.map((tech, key) => {
                                return (<span key={key}>#{tech}</span>);
                            })
                        }
                    </div>
                </div>

                {
                    this.state.details && this.state.details.map((detail, key) => 
                            <ProductDetailCard key={key} 
                                title={detail.title} 
                                description={detail.description} 
                                imageUrl={detail.imageUrl} />
                    )
                }
                
                <FormComment/>
                {
                    this.state.comments && this.state.comments.map((comment, key) => <Comment key={key}
                                        email={comment.email}
                                        comment={comment.message}
                                        date={comment.regDt}/>
                    )
                }
            </div>
        );
    }
    
}

export default ProductDetail;