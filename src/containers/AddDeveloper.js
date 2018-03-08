import React, {Component} from 'react';
import './AddDeveloper.css';
import { rgbToHexa } from '../utils/StyleUtil';
import HTTP from '../utils/http-common';
import FormFile from '../components/FormFile';
import ColorPalette from '../components/ColorPalette';

class AddDeveloper extends Component {
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
    };
    handleSave = () => {
        HTTP.post('/developer', this.state).then(response => {

        });
    };

    updateState = (propertyName, property) => {
        const state = {};
        state[propertyName] = property;
        this.setState(state);
    }
    change = (propertyName, e) => {
        this.updateState(propertyName, e.target.value);
    };
    changeTags = (e) => {
        const tags = new Set(e.target.value.split(' '));
        this.updateState('tags', [...tags]);
    };
    updateImage = (url) => {
        this.updateState('imageUrl', url);
    };
    changeColor = (e) => {
        const hexa = rgbToHexa(e.target.style.backgroundColor);
        this.updateState('color', hexa);
    };

    render() {
        return (
            <div className="addDeveloper container">
                <div className="title">Add Developer</div>
                <div className='group'>
                    <div className='fieldName'>이름</div>
                    <input id='name' type='text' onChange={this.change.bind(this, 'name')}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>이메일</div>
                    <input id='email' type='text' onChange={this.change.bind(this, 'email')}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>한줄소개</div>
                    <input id='introduce' type='text' onChange={this.change.bind(this, 'introduce')}/>
                </div>

                <div className="group">
                    <div className="fieldName">Tags</div>
                    <input id='tags' type="text" onChange={this.changeTags}/>
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
                    <input id='blog' type='text' onChange={this.change.bind(this, 'blog')}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>Github</div>
                    <input id='github' type='text' onChange={this.change.bind(this, 'github')}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>Facebook</div>
                    <input id='facebook' type='text' onChange={this.change.bind(this, 'facebook')}/>
                </div>
                <div className='flexbox btnGroup'>
                    <button id='cancel' className='btn btn-light' onClick={this.handleCancle}>취소하기</button>
                    <button id='save' className='btn btn-light' onClick={this.handleSave}>저장하기</button>
                </div>
            </div>
        );
    }
}

export default AddDeveloper;