import React from 'react';

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

export default ColorPalette;