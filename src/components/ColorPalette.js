import React from 'react';
import PropTypes from 'prop-types';
import {colorPalette} from '../utils/StyleUtil';
import './ColorPalette.css'
const ColorPalette = (props) => {
    return (
        <div className='colorPalette'>
            {colorPalette.map((color, key) => {
                return (
                    <div key={key} className='color' style={{backgroundColor: `${color}`}} onClick={props.changeColor}>
                        {
                            (props.color===color) && (<i className='mdi mdi-check' />)
                        }
                    </div>)
            })}
        </div>
    )
}

ColorPalette.propTypes = {
    color: PropTypes.string.isRequired,
    changeColor: PropTypes.func.isRequired
}

export default ColorPalette;