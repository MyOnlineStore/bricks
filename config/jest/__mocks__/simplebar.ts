const mock = jest.fn(() => ({
    getScrollElement: jest.fn().mockReturnValueOnce({
        scrollTop: 0,
        offsetHeight: 200,
        addEventListener: jest.fn((event, callback) => {
            callback();
        }),
        removeEventListener: jest.fn((event, callback) => {
            callback();
        }),
    }).mockReturnValueOnce({
        scrollTop: 100,
        offsetHeight: 200,
        addEventListener: jest.fn((event, callback) => {
            callback();
        }),
    }).mockReturnValueOnce({
        scrollTop: 100,
        offsetHeight: 200,
        addEventListener: jest.fn((event, callback) => {
            callback();
        }),
    }),
    getContentElement: jest.fn().mockReturnValue({
        offsetHeight: 400,
    }),
}));

export default mock;
