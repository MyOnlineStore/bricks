import rgba, { hexToRGB } from '.';

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

describe('rgba', () => {
    it('should convert a hex string to rgba with alpha = 1', () => {
        const rgbaColor = rgba('#6bde78');

        expect(rgbaColor).toBe('rgba(107,222,120,1)');
    });

    it('should convert a hex string and number x to rgba with alpha = x', () => {
        const rgbaColor = rgba('#6bde78', 0.4);

        expect(rgbaColor).toBe('rgba(107,222,120,0.4)');
    });

    it('should convert r, g and b to rgba with alpha = 1', () => {
        const rgbaColor = rgba(107, 222, 120);

        expect(rgbaColor).toBe('rgba(107,222,120,1)');
    });

    it('should convert r, g, b and alpha to rgba', () => {
        const rgbaColor = rgba(107, 222, 120, 0.4);

        expect(rgbaColor).toBe('rgba(107,222,120,0.4)');
    });
});
