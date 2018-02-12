export const rgbToHexa = (rgb) => {
    return getHexa(...rgb.substring(4, rgb.length-1).split(', '));
}
const getHexa = (red, green, blue) => {
    const rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1)
};