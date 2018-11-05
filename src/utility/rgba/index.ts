type ArgumentsType = [string] | [string, number] | [number, number, number] | [number, number, number, number];

export const hexToRGB = (hex: string): string => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex
        .replace(/[^0-9A-F]/gi, '')
        .replace(shorthandRegex, (m: string, r: string, g: string, b: string): string => {
            return r + r + g + g + b + b;
        });
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r},${g},${b}`;
};

const rgba = (...args: ArgumentsType): string => {
    switch (args.length) {
        case 1: // hex to rgba with opacity = 1
            return `rgba(${hexToRGB(args[0])},1)`;
        case 2: // hex to rgba with opacity = args[1]
            return `rgba(${hexToRGB(args[0])},${args[1]})`;
        case 3: // rgb to rgba with opacity 1
            return `rgba(${args[0]},${args[1]},${args[2]},1)`;
        default:
            // rgb to rgba with opacity = args[3]
            return `rgba(${args[0]},${args[1]},${args[2]},${args[3]})`;
    }
};

export default rgba;
