const mock = jest.fn(() => ({
    getContentElement: jest.fn(() => ({
        offsetHeight: 400,
    })),
    getScrollElement: jest.fn().mockReturnValue({
        scrollTop: 0,
        offsetHeight: 200,
        addEventListener: jest.fn((event, callback) => {
            callback();
        }),
        removeEventListener: jest.fn((event, callback) => {
            callback();
        }),
    }),
}));

export default mock;
