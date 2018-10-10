declare namespace NodeJS {
    interface Global {
        addEventListener: jest.Mock<Function>;
        removeEventListener: jest.Mock<Function>;
        getSelection(): {
            removeAllRanges: jest.Mock<Function>;
        };
    }
}
