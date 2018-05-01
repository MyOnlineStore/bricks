import trbl from '.';

describe('trbl', () => {
    it('should handle the auto value', () => {
        expect(trbl(12, 'auto')).toEqual({ top: '12px', right: 'auto', bottom: '12px', left: 'auto' });
    });

    it('should generate px values from a shorthand with 1 coordinate', () => {
        expect(trbl(12)).toEqual({ top: '12px', right: '12px', bottom: '12px', left: '12px' });
    });

    it('should generate px values from a shorthand with 2 coordinates', () => {
        expect(trbl(12, 24)).toEqual({ top: '12px', right: '24px', bottom: '12px', left: '24px' });
    });

    it('should generate px values from a shorthand with 3 coordinates', () => {
        expect(trbl(12, 24, 48)).toEqual({ top: '12px', right: '24px', bottom: '48px', left: '24px' });
    });

    it('should generate px values from a shorthand with 4 coordinates', () => {
        expect(trbl(12, 24, 36, 48)).toEqual({ top: '12px', right: '24px', bottom: '36px', left: '48px' });
    });

    it('should throw an exeception when an incorrect amount of coordinates is provided', () => {
        const fn = ():void => {
            trbl(0, 0, 0, 0, 0, 0, 0, 0);
        };

        expect(fn).toThrowError();
    });
});
