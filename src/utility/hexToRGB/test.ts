import hexToRGB from '.';

describe('hexToRGB', () => {
    it('should convert a hex color string to a RGB color string', () => {
        const rgbColor = hexToRGB('#6bde78');

        expect(rgbColor).toBe('107,222,120');
    });

    it('should accept hex shorthand strings', () => {
        const rgbShorthandColor = hexToRGB('#6ef');
        const rgbColor = hexToRGB('#66eeff');

        expect(rgbShorthandColor).toBe('102,238,255');
        expect(rgbColor).toBe('102,238,255');
    });

    it('should accept hex strings without leading #', () => {
        const rgbNoNumberSign = hexToRGB('6bde78');

        expect(rgbNoNumberSign).toBe('107,222,120');
    });
});
