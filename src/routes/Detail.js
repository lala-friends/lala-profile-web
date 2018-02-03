import React from 'react';
import Comment from '../components/Comment';
import FormComment from '../components/FormComment';
import './Detail.css';

const Detail = () => {
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
    return (
        <div className="detail container">
            <div className="summary">
                <div className="title">
                    lala-clipping
                </div>
                <div className="description">
                    Use, by you or one client, in a single end product which end users are not charged for.
                </div>
                <div className="tags">
                    <span>#android</span>
                    <span>#nodejs</span>
                </div>
            </div>

            <div className="card-item row">
                <div className="col-md-auto img" >
                    <img src="https://lh3.googleusercontent.com/raiF0nhQR3ODIFgby-vPcW6XpIaFZhtbFOnsTqFOwpN3CHfYtsd5QXUWDEpDL0puf94=h900-rw"/>
                </div>
                <div className="col-sm-8 text">
                    <div className="title">advertisement</div>
                    <div>advertisement, best presentation, biz, business, corporate, creative, devices, ecommerce, elegant, enterprise, entrepreneur, excel, keynote, marketing, minimal, mockup, modern, multipurpose, Pitch Deck Slides, seo, simple, smart, social media, start up, statistics, stats, swot analysis, tech</div>
                </div>
            </div>
            <FormComment />
            <div>
                {
                    comments.map((comment, key) => {
                        return <Comment key={key}
                                 email={comment.email}
                                 comment={comment.comment}
                                 date={comment.date}/>
                    })
                }
            </div>
        </div>
    )
}

export default Detail;