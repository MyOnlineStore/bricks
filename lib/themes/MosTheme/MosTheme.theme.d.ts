import ThemeType from '../../types/ThemeType';
declare const bodyFont = "Source Sans Pro,sans-serif";
declare const headingFont = "Melbourne,sans-serif";
declare const fontSize: {
    smaller1: string;
    base: string;
    larger1: string;
    larger2: string;
    larger3: string;
};
declare const green: {
    lighter1: string;
    base: string;
    darker1: string;
    darker2: string;
};
declare const silver: {
    lighter1: string;
    base: string;
    darker1: string;
    darker2: string;
    darker3: string;
    darker4: string;
};
declare const grey: {
    lighter3: string;
    lighter1: string;
    lighter2: string;
    base: string;
    darker1: string;
};
declare const red: {
    lighter1: string;
    base: string;
    darker1: string;
    darker2: string;
};
declare const yellow: {
    lighter1: string;
    base: string;
    darker1: string;
    darker2: string;
};
declare const roundness: {
    base: string;
};
declare const theme: ThemeType;
export default theme;
export { bodyFont, headingFont, fontSize, green, silver, grey, red, yellow, roundness };
