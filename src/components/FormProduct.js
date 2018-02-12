import React, {Component} from 'react';
import FormFile from './FormFile';
import './FormProduct.css';
import {rgbToHexa} from '../utils/StyleUtil';
import ColorPalette from './ColorPalette';

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

    changeColor = (e) => {
        const rgb = e.target.style.backgroundColor;
        const hexa = rgbToHexa(rgb);
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
                    <div className="fieldName">Product Description</div>
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
                    {
                        this.state.image ? <div className='flexbox img-wrapper'><img alt='제품 컨셉 이미지' src={this.state.image}/></div> : null
                    }
                    <FormFile id="project" updateImage={this.updateImage.bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Project Color</div>
                    <div className="colors">
                        <ColorPalette color={this.state.color} changeColor={this.changeColor}/>
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