const mock = jest.fn(callback => ({
    observe: jest.fn().mockImplementation(element => {
        callback([element]);
    }),
    unobserve: jest.fn(),
}));

export default mock;
