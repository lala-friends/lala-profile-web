import React, {Component} from 'react';
import FormFile from './FormFile';
import './FormProduct.css';
import {rgbToHexa} from '../utils/StyleUtil';
import ColorPalette from './ColorPalette';
import PropTypes from 'prop-types';
import HTTP from '../utils/http-common';

class FormProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            introduce: '',
            techs: [],
            color: '#ffa8a8',
            imageUrl: '',
            developers: [],
            foundDevelopers: [],
            keyword: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            const product = {
                name: this.state.name,
                introduce: this.state.introduce,
                techs: this.state.techs,
                color: this.state.color,
                imageUrl: this.state.imageUrl,
                developers: this.state.developers.map(developer => developer.id),
            };
            this.props.changeProduct(product);
        }
    }

    change = (propertyName, e) => {
        const state = {};
        if (propertyName === 'techs') {
            const techs = new Set(e.target.value.split(' ')) || [];
            state[propertyName] = [...techs];
        } else if (propertyName === 'color') {
            const hexa = rgbToHexa(e.target.style.backgroundColor);
            state[propertyName] = hexa;
        } else {
            state[propertyName] = e.target.value;
        }

        console.log(state);
        this.setState(state);
    };

    updateImage = (imageUrl) => {
        const event = {
            target: {
                value: imageUrl
            }
        }
        this.change('imageUrl', event);
    }

    searchDevelopers = (e) => {
        const keyword = e.target.value;
        this.setState({ keyword: keyword });
        if(!keyword){
            this.setState({
                foundDevelopers: [],
            });
        } else {
            HTTP.get(`/developers/search/${keyword}`).then(response => {
                const items = response.data.map(data => {
                    return {
                        id: data.id,
                        name: data.name,
                        imageUrl: data.imageUrl,
                        email: data.email
                    }
                });

                this.setState({
                    foundDevelopers: items,
                });
            });
        }
    };
    addDevelopers = (newDeveloper) => {
        const developers = this.state.developers;
        if(developers.filter((developer) => developer.id === newDeveloper.id).length>0)
            return;

        developers.push(newDeveloper);
        this.setState({
            developers: developers,
            foundDevelopers: [],
            keyword: ''
        })
    }
    render() {
        return (
            <div className="formProduct">
                <div className="group">
                    <div className="fieldName">Product Name</div>
                    <input id='productName' type="text" value={this.state.name} onChange={this.change.bind(this, 'name')}/>
                </div>
                <div className="group">
                    <div className="fieldName">Product Introduction</div>
                    <input  id='productDescription' type="text" value={this.state.introduce} onChange={this.change.bind(this, 'introduce')}/>
                </div>

                <div className="group">
                    <div className="fieldName">Techs</div>
                    <input id='productTechs' type="text" onChange={this.change.bind(this, 'techs')}/>
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
                    
                    <FormFile id="product" updateImage={(imageUrl) => this.updateImage(imageUrl)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Product Color</div>
                    <div className="colors">
                        <ColorPalette color={this.state.color} changeColor={this.change.bind(this, 'color')}/>
                    </div>
                </div>
                <div className="group">
                    <div className="fieldName">Developers</div>
                    <div className='flexbox name-card-wrapper'>
                        {
                            this.state.developers.map((developer, key) => {
                                return (
                                    <div key={key} className='flexbox name-card'>
                                        <div className='thumbnail'><img alt='개발자 썸네일' src={developer.imageUrl}/></div>
                                        <div>
                                            <div>{developer.name}</div>
                                            <div>{developer.email}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <input id='developer' type="text" value={this.state.keyword} onChange={(keyword) => this.searchDevelopers(keyword)}/>
                    <div>
                        {
                            this.state.foundDevelopers.map((developer, key) => {
                                return (
                                    <div key={key} value={developer} className='flexbox search-box-wrapper' onClick={this.addDevelopers.bind(this, developer)}>
                                        <div className='thumbnail'><img alt='개발자 썸네일' src={developer.imageUrl}/></div>
                                        <div>
                                            <div>{developer.name}</div>
                                            <div>{developer.email}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

FormProduct.propTypes = {
    changeProduct: PropTypes.func.isRequired
}

export default FormProduct;