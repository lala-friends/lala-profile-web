export const rgbToHexa = (rgb) => {
    return getHexa(...rgb.substring(4, rgb.length-1).split(', '));
}
const getHexa = (red, green, blue) => {
    const rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1)
};

export const colorPalette = ['#ffa8a8', '#faa2c1', '#eebefa', '#d0bfff', '#bac8ff', '#a5d8ff', '#c5f6fa', '#99e9f2', '#96f2d7', '#b2f2bb', '#ffe066', '#ff922b'];