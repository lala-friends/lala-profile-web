import React, {Component} from 'react';
import FormFile from './FormFile';
import './FormProduct.css';

class FormProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            tags: [],
            image: '',
            color: '#ffa8a8'
        }
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        });
        this.props.project.name = e.target.value;
    }

    changeDescription(e) {
        this.setState({
            description: e.target.value
        });
        this.props.project.description = e.target.value;
    }

    changeTags(e) {
        const arrays = e.target.value.split(' ');
        this.setState({
            tags: arrays
        });
        this.props.project.tags = arrays;
    }

    updateImage(url) {
        this.setState({
            image: url
        });
        this.props.project.image = url;
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
            <div className="formProduct">
                <div className="group">
                    <div className="fieldName">Product Name</div>
                    <input type="text" value={this.state.name} onChange={this.changeName.bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Project Description</div>
                    <input type="text" value={this.state.description} onChange={this.changeDescription.bind(this)}/>
                </div>

                <div className="group">
                    <div className="fieldName">Tags</div>
                    <input type="text" onChange={this.changeTags.bind(this)}/>
                    <div>
                        {
                            this.state.tags.map((text, i) => (
                                <div className="badge badge-pill badge-info" key={i}>{text}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="group">
                    <div className="fieldName">Project Image</div>
                    <div className="flexbox img-wrapper">
                        {
                            this.state.image ? <img src={this.state.image}/> : null
                        }
                    </div>
                    <FormFile id="project" updateImage={this.updateImage.bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Project Color</div>
                    <div className="colors">
                        {
                            ['#ffa8a8', '#faa2c1', '#eebefa', '#d0bfff', '#bac8ff', '#a5d8ff', '#c5f6fa', '#99e9f2', '#96f2d7', '#b2f2bb', '#ffe066', '#ff922b'].map((color, key) => {
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
                <div className="group">
                    <div className="fieldName">Developers</div>
                    <input type="text"/>
                </div>
            </div>
        )
    }
}

export default FormProduct;