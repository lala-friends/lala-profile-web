import React, {Component} from 'react';
import Comment from './Comment';
import FormComment from './FormComment';
import Service from '../utils/Service';
import './ProductDetail.css';

const comments = [
    {
        id: 1,
        email: "tiffany@naver.com",
        comment: "으허허",
        date: new Date()
    },
    {
        id: 2,
        email: "tiffany@naver.com",
        comment: "으허허",
        date: new Date()
    }
];

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.state = {
            product: {
                productId: '',
                name: '',
                introduce: '',
                imageUrl: '',
                repColor: '',
                techs: [],
                productDetails: [],
                comments: []
            }
        };

        console.log(this.props);
        this.service.get(`/product/${this.props.match.params.name}`, (status, response) => {
            this.setState({
                product: response
            });
        });
    }
    render() {
        return (
            <div className="detail container">
                <div className="summary">
                    <div className="title">
                        {this.state.product.name}
                    </div>
                    <div className="description">
                        {this.state.product.introduce}
                    </div>
                    <div className="tags">
                        {
                            this.state.product.techs.map((t, key) => {
                                return (<span key={key}>#{t}</span>);
                            })
                        }
                    </div>
                </div>

                {
                    this.state.product.productDetails.map((detail, key) => {
                        return (
                            <div key={key} className="card-item row">
                                <div className="img col-md-auto">
                                    <img
                                        src={detail.imageUrl}/>
                                </div>
                                <div className="col text">
                                    <div className="title">{detail.title}</div>
                                    <div>{detail.description}</div>
                                </div>
                            </div>
                        );
                    })
                }
                
                <FormComment/>
                <div>
                    {
                        this.state.product.comments.map((comment, key) => {
                            return <Comment key={key}
                                            email={comment.email}
                                            comment={comment.message}
                                            date={comment.regDt}/>
                        })
                    }
                </div>
            </div>
        );
    }
    
}

export default ProductDetail;