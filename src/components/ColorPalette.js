import React from 'react';
import PropTypes from 'prop-types';

const ColorPalette = (props) => {
    const colorPalette = ['#ffa8a8', '#faa2c1', '#eebefa', '#d0bfff', '#bac8ff', '#a5d8ff', '#c5f6fa', '#99e9f2', '#96f2d7', '#b2f2bb', '#ffe066', '#ff922b'];
    return (
        colorPalette.map((color, key) => {
            return (
                <div key={key} className='color' style={{backgroundColor: `${color}`}} onClick={props.changeColor}>
                    {
                        (props.color===color) && (<i className='mdi mdi-check' />)
                    }
                </div>)
        })
    )
}

ColorPalette.propTypes = {
    color: PropTypes.string.isRequired,
    changeColor: PropTypes.func.isRequired
}

export default ColorPalette;