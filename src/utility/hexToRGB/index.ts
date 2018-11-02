const hexToRGB = (hex: string): string => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(/[^0-9A-F]/gi, '').replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r},${g},${b}`;
};

export default hexToRGB;
