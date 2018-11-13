import calculateRandomPercentage from '.';

describe('calculateRandomPercentage', () => {
    it('should return a number between the offset', () => {
        const randomNumber = calculateRandomPercentage(4, 20);

        expect(randomNumber).toBeGreaterThanOrEqual(4);
        expect(randomNumber).toBeLessThanOrEqual(20);
    });

    it('should never be higher than 100 or below 0', () => {
        const randomNumber = calculateRandomPercentage(-10, 200);

        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThanOrEqual(100);
    });
});
