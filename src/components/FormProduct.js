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
            techs: [],
            imageUrl: '',
            color: '#ffa8a8',
            developers: []
        }
    }

    changeItem = (propertyName, property) => {
        const state = {};
        state[propertyName] = property;
        this.setState(state, this.props.changeProduct(state));
    }
    change = (propertyName, e) => {
        this.changeItem(propertyName, e.target.value);
    }
    changeTags(e) {
        const techs = new Set(e.target.value.split(' '));
        this.changeItem('techs', [...techs]);
    }
    updateImage = (url) => {
        this.changeItem('imageUrl', url);
    }

    changeColor = (e) => {
        const hexa = rgbToHexa(e.target.style.backgroundColor);
        this.setState({
            color: hexa
        }, this.props.changeProduct(this.state));
    }
    
    render() {
        return (
            <div className="formProduct">
                <div className="group">
                    <div className="fieldName">Product Name</div>
                    <input id='productName' type="text" value={this.state.name} onChange={this.change.bind(this, 'name')}/>
                </div>
                <div className="group">
                    <div className="fieldName">Product Description</div>
                    <input  id='productDescription' type="text" value={this.state.description} onChange={this.change.bind(this, 'description')}/>
                </div>

                <div className="group">
                    <div className="fieldName">Techs</div>
                    <input id='productTechs' type="text" onChange={this.changeTags.bind(this)}/>
                    <div id='techBadges'>
                        {
                            this.state.techs.map((text, i) => (
                                <div className="badge badge-pill badge-info" key={i}>{text}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="group">
                    <div className="fieldName">Product Image</div>
                    {
                        this.state.imageUrl && 
                        (<div className='flexbox img-wrapper'>
                            <img id='productImg' alt='제품 컨셉 이미지' src={this.state.imageUrl}/>
                        </div>)
                    }
                    
                    <FormFile id="project" updateImage={this.updateImage}/>
                </div>
                <div className="group">
                    <div className="fieldName">Product Color</div>
                    <div className="colors">
                        <ColorPalette color={this.state.color} changeColor={this.changeColor}/>
                    </div>
                </div>
                <div className="group">
                    <div className="fieldName">Developers</div>
                    <input id='developer' type="text"/>
                </div>
            </div>
        )
    }
}

FormProduct.propTypes = {
    changeProduct: PropTypes.func.isRequired
}

export default FormProduct;