import React, {Component} from 'react';
import FormFile from './FormFile';
import './FormProduct.css';
import {rgbToHexa} from '../utils/StyleUtil';
import ColorPalette from './ColorPalette';
import PropTypes from 'prop-types';

class FormProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            tags: [],
            imageUrl: '',
            color: '#ffa8a8'
        }
    }

    change = (propertyName, e) => {
        const state = {};
        state[propertyName] = e.target.value;
        this.setState(state, this.props.changeProject(this.state));
    }

    changeTags(e) {
        const tags = new Set(e.target.value.split(' '));
        this.setState({
            tags: [...tags]
        }, this.props.changeProject(this.state));
    }

    updateImage(url) {
        this.setState({
            imageUrl: url
        }, this.props.changeProject(this.state));
    }

    changeColor = (e) => {
        const hexa = rgbToHexa(e.target.style.backgroundColor);
        this.setState({
            color: hexa
        }, this.props.changeProject(this.state));
    }
    
    render() {
        return (
            <div className="formProduct">
                <div className="group">
                    <div className="fieldName">Product Name</div>
                    <input type="text" value={this.state.name} onChange={this.change.bind(this, 'name')}/>
                </div>
                <div className="group">
                    <div className="fieldName">Product Description</div>
                    <input type="text" value={this.state.description} onChange={this.change.bind(this, 'description')}/>
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
                        this.state.imageUrl && <div className='flexbox img-wrapper'><img alt='제품 컨셉 이미지' src={this.state.imageUrl}/></div>
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

FormProduct.propTypes = {
    changeProject: PropTypes.func.isRequired
}

export default FormProduct;