import React, {Component} from 'react';
import './AddDeveloper.css';
import FormFile from './FormFile';

class AddDeveloer extends Component {
    constructor(props) {
        super(props);
        this.colorPalette = ['#ffa8a8', '#faa2c1', '#eebefa', '#d0bfff', '#bac8ff', '#a5d8ff', '#c5f6fa', '#99e9f2', '#96f2d7', '#b2f2bb', '#ffe066', '#ff922b'];
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

    changeName = (e) => this.setState({ name: e.target.value });
    changeEmail = (e) => this.setState({ email: e.target.value });
    changeIntroduce = (e) => this.setState({ introduce: e.target.value });
    changeImageUrl = (e) => this.setState({ imageUrl: e.target.value });
    changeColor = (e) => this.setState({ color: e.target.value });
    changeBlog = (e) => this.setState({ blog: e.target.value });
    changeGithub = (e) => this.setState({ github: e.target.value });
    changeFacebook = (e) => this.setState({ facebook: e.target.value });
    changeTags = (e) => {
        const arrays = e.target.value.split(' ');
        this.setState({
            tags: arrays
        });
    }
    updateImage = (url) => {
        this.setState({
            imageUrl: url
        });
    }
    rgbToHexa = (red, green, blue) => {
        const rgb = blue | (green << 8) | (red << 16);
        return '#' + (0x1000000 + rgb).toString(16).slice(1)
    }
    changeColor = (e) => {
        const rgb = e.target.style.backgroundColor;
        const hexa = this.rgbToHexa(...rgb.substring(4, rgb.length-1).split(', '));
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
                    <input type='text' onChange={this.changeName}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>이메일</div>
                    <input type='text' onChange={this.changeEmail}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>한줄소개</div>
                    <input type='text' onChange={this.changeIntroduce}/>
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
                        this.state.imageUrl ? <div className='flexbox img-wrapper'><img alt='개발자 프로필 이미지' src={this.state.imageUrl}/></div> : null
                    }
                    <FormFile id="developer" updateImage={this.updateImage}/>
                </div>
                <div className="group">
                    <div className="fieldName">Project Color</div>
                    <div className="colors">
                        {
                            this.colorPalette.map((color, key) => {
                                return (
                                    <div key={key} className='color' style={{backgroundColor: `${color}`}} onClick={this.changeColor}>
                                        {
                                            (this.state.color===color)? (<i className='mdi mdi-check' />): null
                                        }
                                        
                                    </div>)
                            })
                        }
                    </div>
                </div>

                <div className='group'>
                    <div className='fieldName'>Blog</div>
                    <input type='text' onChange={this.changeBlog}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>Github</div>
                    <input type='text' onChange={this.changeGithub}/>
                </div>
                <div className='group'>
                    <div className='fieldName'>Facebook</div>
                    <input type='text' onChange={this.changeFacebook}/>
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