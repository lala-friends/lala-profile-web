import React, {Component} from 'react';
import Comment from './Comment';
import FormComment from './FormComment';
import Service from '../utils/Service';
import './ProductDetail.css';
import ProductDetailCard from './ProductDetailCard';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
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

        this.service.get(`/product/${this.props.match.params.name}`, (status, response) => {
            this.setState({
                id: response.productId,
                name: response.name,
                introduce: response.introduce,
                imageUrl: response.imageUrl,
                color: response.repColor,
                techs: response.techs,
                details: response.productDetails,
                comments: response.comments
            });
        });
    }
    render() {
        return (
            <div className="detail container">
                <div className="summary">
                    <div className="title">
                        {this.state.name}
                    </div>
                    <div className="description">
                        {this.state.introduce}
                    </div>
                    <div className="tags">
                        {
                            this.state.techs.map((t, key) => {
                                return (<span key={key}>#{t}</span>);
                            })
                        }
                    </div>
                </div>

                {
                    this.state.details.map((detail, key) => 
                            <ProductDetailCard key={key} title={detail.title} description={detail.description} imageUrl={detail.imageUrl} />
                    )
                }
                
                <FormComment/>
                {
                    this.state.comments.map((comment, key) => <Comment key={key}
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