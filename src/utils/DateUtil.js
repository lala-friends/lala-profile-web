export const dateYYYYMMDD = (stringDate) => {
    const date = new Date(stringDate.toString());
    return date.getFullYear() + '-' + pad(date.getMonth()+1, 2) + '-' + pad(date.getDate(), 2);
};

export const dateYYYYMMDDHHMMSS = (stringDate) => {
    const date = new Date(stringDate.toString());
    return date.getFullYear() + '-' + pad(date.getMonth()+1, 2) + '-' + pad(date.getDate(), 2) + ' ' +
        pad(date.getHours(), 2) + ':' + pad(date.getMinutes(), 2) + ':' + pad(date.getSeconds(), 2);
}

const pad = (number, width) => {
    let numberStr = number.toString();
    if (numberStr.length >= width) {
        return numberStr;
    } else {
        for(let i=width-numberStr.length; i>0; i--)
            numberStr = '0' + numberStr;
        return numberStr;
    }
};