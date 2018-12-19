declare type ArgumentsType = [string] | [string, number] | [number, number, number] | [number, number, number, number];
export declare const hexToRGB: (hex: string) => string;
declare const rgba: (...args: ArgumentsType) => string;
export default rgba;
