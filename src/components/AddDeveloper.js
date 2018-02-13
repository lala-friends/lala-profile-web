import React, {Component} from 'react';
import './AddDeveloper.css';
import FormFile from './FormFile';
import ColorPalette from './ColorPalette';
import {rgbToHexa} from '../utils/StyleUtil';

class AddDeveloer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            introduce: '',
            tags: [],
            imageUrl: '',
            color: '#ffa8a8',
            blog: '',
            github: '',
            facebook: ''
        };
    }

    handleCancle = () => {
        this.props.history.goBack();
    }
    handleSave = () => {
        console.log(this.state);
    }
    change = (propertyName, e) => {
        const state = {};
        state[propertyName] = e.target.value;
        this.setState(state);
    }
    changeTags = (e) => {
        const tags = new Set(e.target.value.split(' '));
        this.setState({
            tags: [...tags]
        });
    }
    updateImage = (url) => {
        this.setState({
            imageUrl: url
        });
    }
    changeColor = (e) => {
        const hexa = rgbToHexa(e.target.style.backgroundColor);
        this.setState({
            color: hexa
        });
    } 

    render() {
        return (
            <div className="addDeveloper container">
                <div className="title">Add Developer</div>
                <div className='group'>
                    <div className='fieldName'>이름</div>
                    <input type='text' onChange={this.change.bind(this, 'name')}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>이메일</div>
                    <input type='text' onChange={this.change.bind(this, 'email')}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>한줄소개</div>
                    <input type='text' onChange={this.change.bind(this, 'introduce')}/>
                </div>

                <div className="group">
                    <div className="fieldName">Tags</div>
                    <input type="text" onChange={this.changeTags}/>
                    <div>
                        {
                            this.state.tags.map((text, i) => (
                                <div className="badge badge-pill badge-info" key={i}>{text}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="group">
                    <div className="fieldName">Developer Image</div>
                    {
                        this.state.imageUrl && <div className='flexbox img-wrapper'><img alt='개발자 프로필 이미지' src={this.state.imageUrl}/></div>
                    }
                    <FormFile id="developer" updateImage={this.updateImage}/>
                </div>
                <div className="group">
                    <div className="fieldName">Project Color</div>
                    <div className="colors">
                        <ColorPalette color={this.state.color} changeColor={this.changeColor}/>
                    </div>
                </div>

                <div className='group'>
                    <div className='fieldName'>Blog</div>
                    <input type='text' onChange={this.change.bind(this, 'blog')}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>Github</div>
                    <input type='text' onChange={this.change.bind(this, 'github')}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>Facebook</div>
                    <input type='text' onChange={this.change.bind(this, 'facebook')}/>
                </div>
                <div className='flexbox btnGroup'>
                    <button className='btn btn-light' onClick={this.handleCancle}>취소하기</button>
                    <button className='btn btn-light' onClick={this.handleSave}>저장하기</button>
                </div>
            </div>
        );
    }
}

export default AddDeveloer;