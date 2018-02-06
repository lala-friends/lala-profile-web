import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './Products.css';
import ProductItem from './ProductItem';

class Products extends Component{
    handleClick = () => {
        this.props.history.push("/products/new");
    };

    render() {
        const projects = [{
            id: 1,
            thumbnail: "https://t1.daumcdn.net/friends/www/talk/kakaofriends_talk.png",
            name: "lala-clipping",
            description: "url이 포함된 텍스트를 복사하면 앱에 임시저장.",
            developers: [{
                id: 1,
                name: "Tiffany",
                thumbnail: "http://img.insight.co.kr/static/2017/10/22/700/6qag9yfg08uhhd5kk68m.jpg"
            }, {
                id: 2,
                name: "Ryon",
                thumbnail: "http://cfile2.uf.tistory.com/image/2449374B5607FC8D06579D"
            }]
        },{
            id: 2,
            thumbnail: "https://t1.daumcdn.net/friends/www/talk/kakaofriends_talk.png",
            name: "lala-clipping",
            description: "url이 포함된 텍스트를 복사하면 앱에 임시저장.",
            developers: [{
                id: 1,
                name: "Tiffany",
                thumbnail: "http://img.insight.co.kr/static/2017/10/22/700/6qag9yfg08uhhd5kk68m.jpg"
            }, {
                id: 2,
                name: "Ryon",
                thumbnail: "http://cfile2.uf.tistory.com/image/2449374B5607FC8D06579D"
            }]
        }];
        return (
            <div className="product">
                <div className="container">
                    <button className="btn btn-light add-button" onClick={this.handleClick.bind(this)}>Add Product</button>
                </div>

                <div className="flexbox container">
                {
                    projects.map((project, i) => 
                        <ProductItem key={i}
                                     id={project.id}
                                     thumbnail={project.thumbnail}
                                     name={project.name}
                                     description={project.description}
                                     developers={project.developers}/>
                    )
                }
                </div>
            </div>
        );
    }
}

export default withRouter(Products);